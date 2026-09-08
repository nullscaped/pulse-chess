// Modules

import { Server } from "socket.io";
import { createServer } from "http";
import { randomUUID } from "crypto";
import express from "express";
import "dotenv/config";
import pg from "pg";
import argon2 from "argon2";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { OAuth2Client } from "google-auth-library";
import { Chess } from "chess.js";

const { Pool } = pg;

// Variables

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const STARTING_TIME = 10 * 60 * 1000;
const ELO_K = 32;

const GOOGLE_CLIENT_ID =
    process.env.GOOGLE_CLIENT_ID ||
    "544555583922-6ga00tnd4m312vt3qfb8ts5htuhvklum.apps.googleusercontent.com";

const googleClient =
    new OAuth2Client(GOOGLE_CLIENT_ID);

let waitingPlayer = null;

const games = new Map();
const privateWaiting = new Map();

app.set("trust proxy", 1);

app.use(express.json());

// Database

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "test"
        ? false
        : { rejectUnauthorized: false }
});

const PostgreSQLStore =
    connectPgSimple(session);

const sessionMiddleware = session({
    store: new PostgreSQLStore({
        pool,
        createTableIfMissing: true
    }),

    secret:
        process.env.SESSION_SECRET ||
        "pulse-chess-development-secret-change-me",

    resave: false,
    saveUninitialized: false,

    cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure:
            process.env.NODE_ENV ===
            "production",
        maxAge:
            7 * 24 * 60 * 60 * 1000
    }
});

app.use(sessionMiddleware);
io.engine.use(sessionMiddleware);

// Database Setup

async function initializeDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id BIGSERIAL PRIMARY KEY,
                username VARCHAR(20) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash TEXT,
                google_id TEXT,
                rating INTEGER NOT NULL DEFAULT 1200,
                wins INTEGER NOT NULL DEFAULT 0,
                losses INTEGER NOT NULL DEFAULT 0,
                draws INTEGER NOT NULL DEFAULT 0,
                country_code CHAR(2),
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `);

        await pool.query(`
            ALTER TABLE users
            ALTER COLUMN password_hash DROP NOT NULL
        `);

        await pool.query(`
            ALTER TABLE users
            ADD COLUMN IF NOT EXISTS google_id TEXT
        `);

        await pool.query(`
            ALTER TABLE users
            ADD COLUMN IF NOT EXISTS country_code CHAR(2)
        `);

        await pool.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS
            users_google_id_unique
            ON users (google_id)
            WHERE google_id IS NOT NULL
        `);

        await pool.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS
            users_username_lower_unique
            ON users (LOWER(username))
        `);

        await pool.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS
            users_email_lower_unique
            ON users (LOWER(email))
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS matches (
                id BIGSERIAL PRIMARY KEY,
                white_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                black_user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                winner_color VARCHAR(5),
                reason VARCHAR(40) NOT NULL,
                rated BOOLEAN NOT NULL DEFAULT TRUE,
                white_rating_before INTEGER NOT NULL,
                white_rating_after INTEGER NOT NULL,
                black_rating_before INTEGER NOT NULL,
                black_rating_after INTEGER NOT NULL,
                pgn TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                ended_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `);

        console.log("Database initialized");
    } catch (error) {
        console.error(
            "Database initialization failed:",
            error
        );
    }
}

// General Helpers

function getCountryCode(req) {
    if (process.env.NODE_ENV !== "production") {
        return "CA";
    }

    const candidates = [
        req.headers["cf-ipcountry"],
        req.headers["x-vercel-ip-country"],
        req.headers["x-country-code"],
        req.headers["fly-client-country"]
    ];

    for (const candidate of candidates) {
        if (
            typeof candidate === "string" &&
            /^[A-Z]{2}$/.test(candidate)
        ) {
            return candidate;
        }
    }

    return null;
}

function publicUser(user) {
    if (!user) {
        return null;
    }

    return {
        id: String(user.id),
        username: user.username,
        rating: Number(user.rating),
        wins: Number(user.wins || 0),
        losses: Number(user.losses || 0),
        draws: Number(user.draws || 0),
        country_code:
            user.country_code || null
    };
}

function normalizeUsernameForFilter(username) {
    return username
        .toLowerCase()
        .replace(/0/g, "o")
        .replace(/[1!|]/g, "i")
        .replace(/3/g, "e")
        .replace(/4|@/g, "a")
        .replace(/5|\$/g, "s")
        .replace(/7/g, "t")
        .replace(/8/g, "b")
        .replace(/_/g, "")
        .replace(/(.)\1{2,}/g, "$1$1");
}

function usernameContainsBlockedWord(username) {
    const normalized =
        normalizeUsernameForFilter(username);

    const blockedFragments = [
        "fuck",
        "shit",
        "bitch",
        "cunt",
        "dick",
        "pussy",
        "whore",
        "slut",
        "nigger",
        "nigga",
        "faggot",
        "fag",
        "retard",
        "kike",
        "chink"
    ];

    return blockedFragments.some(
        function(fragment) {
            return normalized.includes(fragment);
        }
    );
}

function validateUsername(username) {
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 20
    ) {
        return "Username must be between 3 and 20 characters.";
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return "Username can only contain letters, numbers, and underscores.";
    }

    if (usernameContainsBlockedWord(username)) {
        return "That username is not allowed.";
    }

    return null;
}

function sanitizeGeneratedUsername(value) {
    let username = String(value || "Player")
        .replace(/[^a-zA-Z0-9_]/g, "")
        .slice(0, 16);

    if (username.length < 3) {
        username = "Player";
    }

    if (usernameContainsBlockedWord(username)) {
        username = "Player";
    }

    return username;
}

async function getUniqueGeneratedUsername(baseValue) {
    const base =
        sanitizeGeneratedUsername(baseValue);

    for (let attempt = 0; attempt < 50; attempt++) {
        const suffix =
            attempt === 0
                ? ""
                : String(
                    Math.floor(
                        1000 + Math.random() * 9000
                    )
                );

        const candidate =
            (base.slice(0, 20 - suffix.length) + suffix)
                .slice(0, 20);

        const existing = await pool.query(
            `
                SELECT id
                FROM users
                WHERE LOWER(username) = LOWER($1)
                LIMIT 1
            `,
            [candidate]
        );

        if (existing.rows.length === 0) {
            return candidate;
        }
    }

    return `Player${Date.now()}`.slice(0, 20);
}

async function saveSession(req) {
    await new Promise(function(resolve, reject) {
        req.session.save(function(error) {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}

async function getUserById(userId, client = pool) {
    const result = await client.query(
        `
            SELECT
                id,
                username,
                email,
                rating,
                wins,
                losses,
                draws,
                country_code,
                google_id,
                created_at
            FROM users
            WHERE id = $1
        `,
        [userId]
    );

    return result.rows[0] || null;
}

function requireAuth(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({
            error: "You must be logged in."
        });
    }

    next();
}

// Authentication

app.post("/api/auth/signup", async function(req, res) {
    try {
        const username =
            req.body.username?.trim();

        const email =
            req.body.email
                ?.trim()
                .toLowerCase();

        const password = req.body.password;
        const countryCode = getCountryCode(req);

        if (!username || !email || !password) {
            return res.status(400).json({
                error: "Missing required fields."
            });
        }

        const usernameError =
            validateUsername(username);

        if (usernameError) {
            return res.status(400).json({
                error: usernameError
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                error: "Password must be at least 8 characters."
            });
        }

        const existingUser = await pool.query(
            `
                SELECT id
                FROM users
                WHERE LOWER(username) = LOWER($1)
                   OR LOWER(email) = LOWER($2)
                LIMIT 1
            `,
            [username, email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                error: "Username or email is already in use."
            });
        }

        const passwordHash =
            await argon2.hash(password);

        const result = await pool.query(
            `
                INSERT INTO users (
                    username,
                    email,
                    password_hash,
                    country_code
                )
                VALUES ($1, $2, $3, $4)
                RETURNING
                    id,
                    username,
                    email,
                    rating,
                    wins,
                    losses,
                    draws,
                    country_code,
                    created_at
            `,
            [
                username,
                email,
                passwordHash,
                countryCode
            ]
        );

        const user = result.rows[0];

        req.session.userId = user.id;
        await saveSession(req);

        console.log(
            `Account created: ${user.username} (#${user.id})`
        );

        return res.status(201).json({
            user: publicUser(user)
        });
    } catch (error) {
        console.error("Signup failed:", error);

        if (error?.code === "23505") {
            return res.status(409).json({
                error: "Username or email is already in use."
            });
        }

        return res.status(500).json({
            error: "Failed to create account."
        });
    }
});

app.post("/api/auth/login", async function(req, res) {
    try {
        const email =
            req.body.email
                ?.trim()
                .toLowerCase();

        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                error: "Email and password are required."
            });
        }

        const result = await pool.query(
            `
                SELECT
                    id,
                    username,
                    email,
                    password_hash,
                    rating,
                    wins,
                    losses,
                    draws,
                    country_code,
                    created_at
                FROM users
                WHERE LOWER(email) = LOWER($1)
                LIMIT 1
            `,
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }

        const user = result.rows[0];

        if (!user.password_hash) {
            return res.status(401).json({
                error: "This account uses Google sign-in."
            });
        }

        const passwordMatches =
            await argon2.verify(
                user.password_hash,
                password
            );

        if (!passwordMatches) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }

        req.session.userId = user.id;
        await saveSession(req);

        return res.json({
            user: publicUser(user)
        });
    } catch (error) {
        console.error("Login failed:", error);

        return res.status(500).json({
            error: "Failed to log in."
        });
    }
});

app.post("/api/auth/google", async function(req, res) {
    try {
        const credential = req.body.credential;

        if (
            typeof credential !== "string" ||
            credential.length < 20
        ) {
            return res.status(400).json({
                error: "Missing Google credential."
            });
        }

        const ticket =
            await googleClient.verifyIdToken({
                idToken: credential,
                audience: GOOGLE_CLIENT_ID
            });

        const payload = ticket.getPayload();

        if (
            !payload ||
            !payload.sub ||
            !payload.email ||
            payload.email_verified !== true
        ) {
            return res.status(401).json({
                error: "Google account could not be verified."
            });
        }

        const googleId = payload.sub;
        const email = payload.email.toLowerCase();
        const countryCode = getCountryCode(req);

        let result = await pool.query(
            `
                SELECT *
                FROM users
                WHERE google_id = $1
                LIMIT 1
            `,
            [googleId]
        );

        let user = result.rows[0] || null;

        if (!user) {
            result = await pool.query(
                `
                    SELECT *
                    FROM users
                    WHERE LOWER(email) = LOWER($1)
                    LIMIT 1
                `,
                [email]
            );

            user = result.rows[0] || null;

            if (user) {
                if (
                    user.google_id &&
                    user.google_id !== googleId
                ) {
                    return res.status(409).json({
                        error: "That email is already linked to another Google account."
                    });
                }

                const linked = await pool.query(
                    `
                        UPDATE users
                        SET
                            google_id = $1,
                            country_code = COALESCE(country_code, $2)
                        WHERE id = $3
                        RETURNING *
                    `,
                    [googleId, countryCode, user.id]
                );

                user = linked.rows[0];
            } else {
                const baseUsername =
                    payload.given_name ||
                    email.split("@")[0] ||
                    "Player";

                const username =
                    await getUniqueGeneratedUsername(
                        baseUsername
                    );

                const created = await pool.query(
                    `
                        INSERT INTO users (
                            username,
                            email,
                            password_hash,
                            google_id,
                            country_code
                        )
                        VALUES ($1, $2, NULL, $3, $4)
                        RETURNING *
                    `,
                    [
                        username,
                        email,
                        googleId,
                        countryCode
                    ]
                );

                user = created.rows[0];
            }
        }

        req.session.userId = user.id;
        await saveSession(req);

        return res.json({
            user: publicUser(user)
        });
    } catch (error) {
        console.error("Google login failed:", error);

        return res.status(401).json({
            error: "Google sign-in failed. Please try again."
        });
    }
});

app.get("/api/auth/me", async function(req, res) {
    try {
        if (!req.session.userId) {
            return res.json({ user: null });
        }

        const user =
            await getUserById(
                req.session.userId
            );

        if (!user) {
            req.session.destroy(function() {});
            return res.json({ user: null });
        }

        return res.json({
            user: publicUser(user)
        });
    } catch (error) {
        console.error(
            "Session check failed:",
            error
        );

        return res.status(500).json({
            error: "Failed to check session."
        });
    }
});

app.post("/api/auth/logout", function(req, res) {
    req.session.destroy(function(error) {
        if (error) {
            return res.status(500).json({
                error: "Failed to log out."
            });
        }

        res.clearCookie("connect.sid");

        return res.json({
            success: true
        });
    });
});

// Account

app.put(
    "/api/account/username",
    requireAuth,
    async function(req, res) {
        try {
            const username =
                req.body.username?.trim();

            const usernameError =
                validateUsername(username);

            if (usernameError) {
                return res.status(400).json({
                    error: usernameError
                });
            }

            const existing = await pool.query(
                `
                    SELECT id
                    FROM users
                    WHERE LOWER(username) = LOWER($1)
                      AND id <> $2
                    LIMIT 1
                `,
                [username, req.session.userId]
            );

            if (existing.rows.length > 0) {
                return res.status(409).json({
                    error: "That username is already taken."
                });
            }

            const result = await pool.query(
                `
                    UPDATE users
                    SET username = $1
                    WHERE id = $2
                    RETURNING *
                `,
                [username, req.session.userId]
            );

            return res.json({
                user: publicUser(result.rows[0])
            });
        } catch (error) {
            console.error(
                "Username update failed:",
                error
            );

            if (error?.code === "23505") {
                return res.status(409).json({
                    error: "That username is already taken."
                });
            }

            return res.status(500).json({
                error: "Could not update username."
            });
        }
    }
);

// Leaderboards

app.get("/api/leaderboard", async function(req, res) {
    try {
        const requestedLimit =
            Number(req.query.limit || 25);

        const limit =
            [10, 25, 50].includes(requestedLimit)
                ? requestedLimit
                : 25;

        const scope =
            req.query.scope === "country"
                ? "country"
                : "global";

        let country =
            typeof req.query.country === "string"
                ? req.query.country.toUpperCase()
                : null;

        if (
            scope === "country" &&
            (!country || !/^[A-Z]{2}$/.test(country))
        ) {
            if (req.session.userId) {
                const current =
                    await getUserById(
                        req.session.userId
                    );

                country =
                    current?.country_code || null;
            }
        }

        let result;

        if (scope === "country" && country) {
            result = await pool.query(
                `
                    SELECT
                        id,
                        username,
                        rating,
                        wins,
                        losses,
                        draws,
                        country_code,
                        RANK() OVER (
                            ORDER BY rating DESC, wins DESC, id ASC
                        ) AS rank
                    FROM users
                    WHERE country_code = $1
                    ORDER BY rating DESC, wins DESC, id ASC
                    LIMIT $2
                `,
                [country, limit]
            );
        } else {
            result = await pool.query(
                `
                    SELECT
                        id,
                        username,
                        rating,
                        wins,
                        losses,
                        draws,
                        country_code,
                        RANK() OVER (
                            ORDER BY rating DESC, wins DESC, id ASC
                        ) AS rank
                    FROM users
                    ORDER BY rating DESC, wins DESC, id ASC
                    LIMIT $1
                `,
                [limit]
            );
        }

        const countResult =
            await pool.query(
                "SELECT COUNT(*)::int AS count FROM users"
            );

        return res.json({
            scope,
            country,
            totalPlayers:
                countResult.rows[0].count,
            players: result.rows.map(function(row) {
                return {
                    ...publicUser(row),
                    rank: Number(row.rank)
                };
            })
        });
    } catch (error) {
        console.error(
            "Leaderboard failed:",
            error
        );

        return res.status(500).json({
            error: "Could not load leaderboard."
        });
    }
});

app.get(
    "/api/matches/me",
    requireAuth,
    async function(req, res) {
        try {
            const result = await pool.query(
                `
                    SELECT
                        m.id,
                        m.reason,
                        m.winner_color,
                        m.created_at,
                        CASE
                            WHEN m.white_user_id = $1 THEN bu.username
                            ELSE wu.username
                        END AS opponent_username,
                        CASE
                            WHEN m.white_user_id = $1 THEN bu.country_code
                            ELSE wu.country_code
                        END AS opponent_country_code,
                        CASE
                            WHEN m.white_user_id = $1 THEN m.white_rating_after - m.white_rating_before
                            ELSE m.black_rating_after - m.black_rating_before
                        END AS rating_delta,
                        CASE
                            WHEN m.winner_color IS NULL THEN 'draw'
                            WHEN m.white_user_id = $1 AND m.winner_color = 'white' THEN 'win'
                            WHEN m.black_user_id = $1 AND m.winner_color = 'black' THEN 'win'
                            ELSE 'loss'
                        END AS outcome
                    FROM matches m
                    JOIN users wu ON wu.id = m.white_user_id
                    JOIN users bu ON bu.id = m.black_user_id
                    WHERE
                        (m.white_user_id = $1 OR m.black_user_id = $1)
                        AND m.rated = TRUE
                    ORDER BY m.ended_at DESC
                    LIMIT 10
                `,
                [req.session.userId]
            );

            return res.json({
                matches: result.rows.map(function(row) {
                    return {
                        ...row,
                        id: String(row.id),
                        rating_delta:
                            Number(row.rating_delta)
                    };
                })
            });
        } catch (error) {
            console.error(
                "Recent matches failed:",
                error
            );

            return res.status(500).json({
                error: "Could not load matches."
            });
        }
    }
);

// Express

app.use(express.static("."));

// Chess Helpers

function coordinatesToSquare(y, x) {
    const files = "abcdefgh";
    return `${files[x]}${8 - y}`;
}

function squareToCoordinates(square) {
    const files = "abcdefgh";

    return {
        x: files.indexOf(square[0]),
        y: 8 - Number(square[1])
    };
}

function promotionWord(letter) {
    const names = {
        q: "queen",
        r: "rook",
        b: "bishop",
        n: "knight"
    };

    return names[letter] || null;
}

function normalizeNetworkMove(moveResult) {
    const to =
        squareToCoordinates(moveResult.to);

    const move = {
        x: to.x,
        y: to.y
    };

    if (moveResult.flags?.includes("e")) {
        move.enPassant = true;
    }

    if (moveResult.flags?.includes("k")) {
        move.castle = "kingSide";
    }

    if (moveResult.flags?.includes("q")) {
        move.castle = "queenSide";
    }

    if (moveResult.promotion) {
        move.promotion =
            promotionWord(
                moveResult.promotion
            );
    }

    return move;
}

function oppositeColor(color) {
    return color === "white"
        ? "black"
        : "white";
}

function colorToChess(color) {
    return color === "white" ? "w" : "b";
}

function chessToColor(color) {
    return color === "w" ? "white" : "black";
}

function expectedScore(ratingA, ratingB) {
    return 1 /
        (
            1 +
            Math.pow(
                10,
                (ratingB - ratingA) / 400
            )
        );
}

function calculateNewRating(
    rating,
    opponentRating,
    score
) {
    return Math.round(
        rating +
        ELO_K *
        (
            score -
            expectedScore(
                rating,
                opponentRating
            )
        )
    );
}

function getDrawReason(chess) {
    if (
        typeof chess.isInsufficientMaterial === "function" &&
        chess.isInsufficientMaterial()
    ) {
        return "insufficient-material";
    }

    if (
        typeof chess.isThreefoldRepetition === "function" &&
        chess.isThreefoldRepetition()
    ) {
        return "threefold-repetition";
    }

    if (
        typeof chess.isDrawByFiftyMoves === "function" &&
        chess.isDrawByFiftyMoves()
    ) {
        return "fifty-move";
    }

    return "draw";
}

async function socketUser(socket) {
    const userId =
        socket.request.session?.userId;

    if (!userId) {
        return null;
    }

    return getUserById(userId);
}

function clearPlayerRoom(socket) {
    if (!socket) {
        return;
    }

    const roomId = socket.data.roomId;

    socket.data.roomId = null;
    socket.data.color = null;
    socket.data.privateCode = null;

    if (roomId) {
        socket.leave(roomId);
    }
}

function getSocket(socketId) {
    if (!socketId) {
        return null;
    }

    return io.sockets.sockets.get(socketId) || null;
}

async function createHumanGame(
    whiteSocket,
    blackSocket,
    mode = "quick"
) {
    const whiteUser =
        await socketUser(whiteSocket);

    const blackUser =
        await socketUser(blackSocket);

    if (!whiteUser || !blackUser) {
        return null;
    }

    const roomId = randomUUID();

    const game = {
        roomId,
        mode,
        chess: new Chess(),

        whiteSocketId: whiteSocket.id,
        blackSocketId: blackSocket.id,

        whiteUser: publicUser(whiteUser),
        blackUser: publicUser(blackUser),

        currentTurn: "white",
        whiteTime: STARTING_TIME,
        blackTime: STARTING_TIME,
        lastMoveTime: Date.now(),

        timeoutId: null,
        botTimeoutId: null,
        gameOver: false,

        rated:
            mode === "quick" &&
            String(whiteUser.id) !==
                String(blackUser.id),

        startedAt: new Date()
    };

    games.set(roomId, game);

    whiteSocket.join(roomId);
    blackSocket.join(roomId);

    whiteSocket.data.roomId = roomId;
    whiteSocket.data.color = "white";

    blackSocket.data.roomId = roomId;
    blackSocket.data.color = "black";

    return game;
}

async function createBotGame(socket) {
    const user = await socketUser(socket);

    if (!user) {
        return null;
    }

    const roomId = randomUUID();

    const game = {
        roomId,
        mode: "bot",
        chess: new Chess(),

        whiteSocketId: socket.id,
        blackSocketId: null,

        whiteUser: publicUser(user),
        blackUser: {
            id: "bot",
            username: "Pulse Bot",
            rating: 1200,
            wins: 0,
            losses: 0,
            draws: 0,
            country_code: null
        },

        currentTurn: "white",
        whiteTime: STARTING_TIME,
        blackTime: STARTING_TIME,
        lastMoveTime: Date.now(),

        timeoutId: null,
        botTimeoutId: null,
        gameOver: false,
        rated: false,
        startedAt: new Date()
    };

    games.set(roomId, game);
    socket.join(roomId);

    socket.data.roomId = roomId;
    socket.data.color = "white";

    return game;
}

function matchPayload(game, color) {
    const you =
        color === "white"
            ? game.whiteUser
            : game.blackUser;

    const opponent =
        color === "white"
            ? game.blackUser
            : game.whiteUser;

    return {
        roomId: game.roomId,
        color,
        mode: game.mode,
        rated: game.rated,
        you,
        opponent,
        white: game.whiteUser,
        black: game.blackUser
    };
}

function getRemainingTimes(game) {
    let whiteTime = game.whiteTime;
    let blackTime = game.blackTime;

    if (!game.gameOver) {
        const elapsed =
            Date.now() -
            game.lastMoveTime;

        if (game.currentTurn === "white") {
            whiteTime -= elapsed;
        } else {
            blackTime -= elapsed;
        }
    }

    return {
        whiteTime: Math.max(0, whiteTime),
        blackTime: Math.max(0, blackTime)
    };
}

function updateActiveClock(game) {
    const elapsed =
        Date.now() -
        game.lastMoveTime;

    if (game.currentTurn === "white") {
        game.whiteTime =
            Math.max(
                0,
                game.whiteTime - elapsed
            );
    } else {
        game.blackTime =
            Math.max(
                0,
                game.blackTime - elapsed
            );
    }

    game.lastMoveTime = Date.now();
}

function sendClock(game) {
    const times = getRemainingTimes(game);

    io.to(game.roomId).emit(
        "clock-update",
        {
            whiteTime: times.whiteTime,
            blackTime: times.blackTime,
            currentTurn: game.currentTurn,
            serverTime: Date.now()
        }
    );
}

function stopGameTimers(game) {
    if (game.timeoutId !== null) {
        clearTimeout(game.timeoutId);
        game.timeoutId = null;
    }

    if (game.botTimeoutId !== null) {
        clearTimeout(game.botTimeoutId);
        game.botTimeoutId = null;
    }
}

function removeGame(roomId) {
    const game = games.get(roomId);

    if (!game) {
        return;
    }

    stopGameTimers(game);

    clearPlayerRoom(
        getSocket(game.whiteSocketId)
    );

    clearPlayerRoom(
        getSocket(game.blackSocketId)
    );

    games.delete(roomId);
}

async function persistRatedResult(
    game,
    winner,
    reason
) {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const ids = [
            String(game.whiteUser.id),
            String(game.blackUser.id)
        ].sort(function(a, b) {
            return Number(a) - Number(b);
        });

        const locked = await client.query(
            `
                SELECT *
                FROM users
                WHERE id IN ($1, $2)
                ORDER BY id
                FOR UPDATE
            `,
            ids
        );

        const white = locked.rows.find(
            function(row) {
                return String(row.id) ===
                    String(game.whiteUser.id);
            }
        );

        const black = locked.rows.find(
            function(row) {
                return String(row.id) ===
                    String(game.blackUser.id);
            }
        );

        if (!white || !black) {
            throw new Error(
                "Could not load both players for rating update."
            );
        }

        let whiteScore = 0.5;
        let blackScore = 0.5;

        if (winner === "white") {
            whiteScore = 1;
            blackScore = 0;
        } else if (winner === "black") {
            whiteScore = 0;
            blackScore = 1;
        }

        const whiteBefore = Number(white.rating);
        const blackBefore = Number(black.rating);

        const whiteAfter =
            calculateNewRating(
                whiteBefore,
                blackBefore,
                whiteScore
            );

        const blackAfter =
            calculateNewRating(
                blackBefore,
                whiteBefore,
                blackScore
            );

        const whiteWin = winner === "white" ? 1 : 0;
        const whiteLoss = winner === "black" ? 1 : 0;
        const blackWin = winner === "black" ? 1 : 0;
        const blackLoss = winner === "white" ? 1 : 0;
        const draw = winner === null ? 1 : 0;

        await client.query(
            `
                UPDATE users
                SET
                    rating = $1,
                    wins = wins + $2,
                    losses = losses + $3,
                    draws = draws + $4
                WHERE id = $5
            `,
            [
                whiteAfter,
                whiteWin,
                whiteLoss,
                draw,
                white.id
            ]
        );

        await client.query(
            `
                UPDATE users
                SET
                    rating = $1,
                    wins = wins + $2,
                    losses = losses + $3,
                    draws = draws + $4
                WHERE id = $5
            `,
            [
                blackAfter,
                blackWin,
                blackLoss,
                draw,
                black.id
            ]
        );

        await client.query(
            `
                INSERT INTO matches (
                    white_user_id,
                    black_user_id,
                    winner_color,
                    reason,
                    rated,
                    white_rating_before,
                    white_rating_after,
                    black_rating_before,
                    black_rating_after,
                    pgn,
                    created_at,
                    ended_at
                )
                VALUES (
                    $1, $2, $3, $4, TRUE,
                    $5, $6, $7, $8, $9, $10, NOW()
                )
            `,
            [
                white.id,
                black.id,
                winner,
                reason,
                whiteBefore,
                whiteAfter,
                blackBefore,
                blackAfter,
                game.chess.pgn(),
                game.startedAt
            ]
        );

        await client.query("COMMIT");

        return {
            white: {
                oldRating: whiteBefore,
                newRating: whiteAfter,
                ratingDelta:
                    whiteAfter - whiteBefore
            },
            black: {
                oldRating: blackBefore,
                newRating: blackAfter,
                ratingDelta:
                    blackAfter - blackBefore
            }
        };
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    } finally {
        client.release();
    }
}

async function finalizeGame(
    game,
    { reason, winner }
) {
    if (!game || game.gameOver) {
        return;
    }

    game.gameOver = true;
    stopGameTimers(game);

    let ratings = {
        white: {
            oldRating: game.whiteUser.rating,
            newRating: game.whiteUser.rating,
            ratingDelta: 0
        },
        black: {
            oldRating: game.blackUser.rating,
            newRating: game.blackUser.rating,
            ratingDelta: 0
        }
    };

    if (game.rated) {
        try {
            ratings =
                await persistRatedResult(
                    game,
                    winner,
                    reason
                );
        } catch (error) {
            console.error(
                "Rating update failed:",
                error
            );
        }
    }

    const whiteSocket =
        getSocket(game.whiteSocketId);

    const blackSocket =
        getSocket(game.blackSocketId);

    const shared = {
        reason,
        winner,
        rated: game.rated,
        mode: game.mode
    };

    if (whiteSocket) {
        whiteSocket.emit("game-ended", {
            ...shared,
            ...ratings.white,
            outcome:
                winner === null
                    ? "draw"
                    : winner === "white"
                        ? "win"
                        : "loss"
        });
    }

    if (blackSocket) {
        blackSocket.emit("game-ended", {
            ...shared,
            ...ratings.black,
            outcome:
                winner === null
                    ? "draw"
                    : winner === "black"
                        ? "win"
                        : "loss"
        });
    }

    removeGame(game.roomId);
}

function scheduleTimeout(game) {
    if (!game || game.gameOver) {
        return;
    }

    if (
        game.mode === "bot" &&
        game.currentTurn === "black"
    ) {
        return;
    }

    if (game.timeoutId !== null) {
        clearTimeout(game.timeoutId);
    }

    const remainingTime =
        game.currentTurn === "white"
            ? game.whiteTime
            : game.blackTime;

    const color = game.currentTurn;

    game.timeoutId = setTimeout(
        async function() {
            if (
                game.gameOver ||
                !games.has(game.roomId) ||
                game.currentTurn !== color
            ) {
                return;
            }

            updateActiveClock(game);

            const timeLeft =
                color === "white"
                    ? game.whiteTime
                    : game.blackTime;

            if (timeLeft > 0) {
                scheduleTimeout(game);
                return;
            }

            sendClock(game);

            await finalizeGame(game, {
                reason: "timeout",
                winner: oppositeColor(color)
            });
        },
        Math.max(1, remainingTime)
    );
}

function botMoveScore(move) {
    const pieceValues = {
        p: 1,
        n: 3,
        b: 3,
        r: 5,
        q: 9,
        k: 0
    };

    let score = Math.random() * 1.5;

    if (move.captured) {
        score +=
            (pieceValues[move.captured] || 1) * 2.4;
    }

    if (move.san?.includes("+")) {
        score += 2;
    }

    if (move.san?.includes("#")) {
        score += 100;
    }

    if (move.promotion) {
        score += 8;
    }

    return score;
}

async function executeBotMove(game) {
    if (
        !game ||
        game.gameOver ||
        !games.has(game.roomId) ||
        game.currentTurn !== "black"
    ) {
        return;
    }

    updateActiveClock(game);

    const legalMoves =
        game.chess.moves({
            verbose: true
        });

    if (legalMoves.length === 0) {
        return;
    }

    const ranked = legalMoves
        .map(function(move) {
            return {
                move,
                score: botMoveScore(move)
            };
        })
        .sort(function(a, b) {
            return b.score - a.score;
        });

    const poolSize =
        Math.min(4, ranked.length);

    const choice =
        ranked[
            Math.floor(
                Math.random() * poolSize
            )
        ].move;

    const result = game.chess.move({
        from: choice.from,
        to: choice.to,
        promotion:
            choice.promotion || "q"
    });

    const from =
        squareToCoordinates(result.from);

    io.to(game.roomId).emit(
        "opponent-move",
        {
            fromY: from.y,
            fromX: from.x,
            move: normalizeNetworkMove(result)
        }
    );

    game.currentTurn =
        chessToColor(
            game.chess.turn()
        );

    game.lastMoveTime = Date.now();

    if (game.chess.isCheckmate()) {
        await finalizeGame(game, {
            reason: "checkmate",
            winner: "black"
        });
        return;
    }

    if (game.chess.isStalemate()) {
        await finalizeGame(game, {
            reason: "stalemate",
            winner: null
        });
        return;
    }

    if (game.chess.isDraw()) {
        await finalizeGame(game, {
            reason: getDrawReason(game.chess),
            winner: null
        });
        return;
    }

    io.to(game.roomId).emit(
        "turn-changed",
        game.currentTurn
    );

    sendClock(game);
    scheduleTimeout(game);
}

function scheduleBotMove(game) {
    if (game.botTimeoutId !== null) {
        clearTimeout(game.botTimeoutId);
    }

    game.botTimeoutId = setTimeout(
        function() {
            executeBotMove(game).catch(
                function(error) {
                    console.error(
                        "Bot move failed:",
                        error
                    );
                }
            );
        },
        550 + Math.floor(Math.random() * 350)
    );
}

async function processMove(socket, data) {
    const roomId = socket.data.roomId;

    if (!roomId) {
        return;
    }

    const game = games.get(roomId);

    if (!game || game.gameOver) {
        return;
    }

    const playerColor = socket.data.color;

    if (
        playerColor !== game.currentTurn ||
        colorToChess(playerColor) !==
            game.chess.turn()
    ) {
        return;
    }

    if (
        !data ||
        typeof data !== "object" ||
        !data.move ||
        typeof data.move !== "object"
    ) {
        return;
    }

    const coordinates = [
        data.fromY,
        data.fromX,
        data.move.y,
        data.move.x
    ];

    const validCoordinates =
        coordinates.every(function(value) {
            return (
                Number.isInteger(value) &&
                value >= 0 &&
                value <= 7
            );
        });

    if (!validCoordinates) {
        return;
    }

    updateActiveClock(game);

    const playerTime =
        playerColor === "white"
            ? game.whiteTime
            : game.blackTime;

    if (playerTime <= 0) {
        sendClock(game);

        await finalizeGame(game, {
            reason: "timeout",
            winner: oppositeColor(playerColor)
        });

        return;
    }

    const from =
        coordinatesToSquare(
            data.fromY,
            data.fromX
        );

    const to =
        coordinatesToSquare(
            data.move.y,
            data.move.x
        );

    const promotionMap = {
        queen: "q",
        rook: "r",
        bishop: "b",
        knight: "n"
    };

    let moveResult;

    try {
        moveResult = game.chess.move({
            from,
            to,
            promotion:
                promotionMap[
                    data.move.promotion
                ] || "q"
        });
    } catch (error) {
        socket.emit("move-rejected", {
            reason: "Illegal move."
        });
        return;
    }

    if (!moveResult) {
        socket.emit("move-rejected", {
            reason: "Illegal move."
        });
        return;
    }

    const normalizedMove =
        normalizeNetworkMove(moveResult);

    socket.to(roomId).emit(
        "opponent-move",
        {
            fromY: data.fromY,
            fromX: data.fromX,
            move: normalizedMove
        }
    );

    game.currentTurn =
        chessToColor(
            game.chess.turn()
        );

    game.lastMoveTime = Date.now();

    if (game.chess.isCheckmate()) {
        await finalizeGame(game, {
            reason: "checkmate",
            winner: playerColor
        });
        return;
    }

    if (game.chess.isStalemate()) {
        await finalizeGame(game, {
            reason: "stalemate",
            winner: null
        });
        return;
    }

    if (game.chess.isDraw()) {
        await finalizeGame(game, {
            reason: getDrawReason(game.chess),
            winner: null
        });
        return;
    }

    io.to(roomId).emit(
        "turn-changed",
        game.currentTurn
    );

    sendClock(game);

    if (
        game.mode === "bot" &&
        game.currentTurn === "black"
    ) {
        scheduleBotMove(game);
    } else {
        scheduleTimeout(game);
    }
}

function generatePrivateCode() {
    const alphabet =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    do {
        code = "";

        for (let i = 0; i < 6; i++) {
            code += alphabet[
                Math.floor(
                    Math.random() *
                    alphabet.length
                )
            ];
        }
    } while (privateWaiting.has(code));

    return code;
}

function removeSocketFromQueues(socket) {
    if (
        waitingPlayer &&
        waitingPlayer.id === socket.id
    ) {
        waitingPlayer = null;
    }

    const privateCode =
        socket.data.privateCode;

    if (
        privateCode &&
        privateWaiting.get(privateCode)?.id ===
            socket.id
    ) {
        privateWaiting.delete(privateCode);
    }

    socket.data.privateCode = null;
}

// Connections

io.on("connection", function(socket) {
    console.log(
        "Player connected:",
        socket.id
    );

    socket.on("find-match", async function() {
        try {
            const user = await socketUser(socket);

            if (!user) {
                socket.emit("auth-required");
                return;
            }

            if (socket.data.roomId) {
                return;
            }

            removeSocketFromQueues(socket);

            if (
                waitingPlayer !== null &&
                waitingPlayer.connected &&
                waitingPlayer.id !== socket.id
            ) {
                const opponent = waitingPlayer;
                waitingPlayer = null;

                const game =
                    await createHumanGame(
                        opponent,
                        socket,
                        "quick"
                    );

                if (!game) {
                    socket.emit("auth-required");
                    return;
                }

                opponent.emit(
                    "match-found",
                    matchPayload(
                        game,
                        "white"
                    )
                );

                socket.emit(
                    "match-found",
                    matchPayload(
                        game,
                        "black"
                    )
                );

                sendClock(game);
                scheduleTimeout(game);

                console.log(
                    "Match created:",
                    game.roomId
                );

                return;
            }

            waitingPlayer = socket;
            socket.emit("waiting-for-player");
        } catch (error) {
            console.error(
                "Matchmaking failed:",
                error
            );

            socket.emit("matchmaking-error", {
                error: "Could not start matchmaking."
            });
        }
    });

    socket.on("cancel-match", function() {
        removeSocketFromQueues(socket);
    });

    socket.on("play-bot", async function() {
        try {
            const user = await socketUser(socket);

            if (!user) {
                socket.emit("auth-required");
                return;
            }

            if (socket.data.roomId) {
                return;
            }

            removeSocketFromQueues(socket);

            const game =
                await createBotGame(socket);

            if (!game) {
                socket.emit("auth-required");
                return;
            }

            socket.emit(
                "match-found",
                matchPayload(
                    game,
                    "white"
                )
            );

            sendClock(game);
            scheduleTimeout(game);
        } catch (error) {
            console.error(
                "Bot game failed:",
                error
            );
        }
    });

    socket.on("create-private", async function() {
        try {
            const user = await socketUser(socket);

            if (!user) {
                socket.emit("auth-required");
                return;
            }

            if (socket.data.roomId) {
                return;
            }

            removeSocketFromQueues(socket);

            const code =
                generatePrivateCode();

            privateWaiting.set(
                code,
                socket
            );

            socket.data.privateCode = code;

            socket.emit("private-created", {
                code
            });
        } catch (error) {
            console.error(
                "Private room creation failed:",
                error
            );
        }
    });

    socket.on("join-private", async function(rawCode) {
        try {
            const user = await socketUser(socket);

            if (!user) {
                socket.emit("auth-required");
                return;
            }

            const code =
                String(rawCode || "")
                    .toUpperCase()
                    .trim();

            const host =
                privateWaiting.get(code);

            if (
                !host ||
                !host.connected ||
                host.id === socket.id
            ) {
                socket.emit("private-error", {
                    error: "Room code not found."
                });
                return;
            }

            privateWaiting.delete(code);
            host.data.privateCode = null;

            const game =
                await createHumanGame(
                    host,
                    socket,
                    "private"
                );

            if (!game) {
                socket.emit("auth-required");
                return;
            }

            host.emit(
                "match-found",
                matchPayload(
                    game,
                    "white"
                )
            );

            socket.emit(
                "match-found",
                matchPayload(
                    game,
                    "black"
                )
            );

            sendClock(game);
            scheduleTimeout(game);
        } catch (error) {
            console.error(
                "Private join failed:",
                error
            );

            socket.emit("private-error", {
                error: "Could not join room."
            });
        }
    });

    socket.on("make-move", function(data) {
        processMove(socket, data).catch(
            function(error) {
                console.error(
                    "Move processing failed:",
                    error
                );
            }
        );
    });

    socket.on("resign", function() {
        const roomId = socket.data.roomId;

        if (!roomId) {
            return;
        }

        const game = games.get(roomId);

        if (!game || game.gameOver) {
            return;
        }

        finalizeGame(game, {
            reason: "resignation",
            winner:
                oppositeColor(
                    socket.data.color
                )
        }).catch(function(error) {
            console.error(
                "Resignation failed:",
                error
            );
        });
    });

    socket.on("emoji-reaction", function(rawEmoji) {
        const roomId = socket.data.roomId;

        if (!roomId) {
            return;
        }

        const game = games.get(roomId);

        if (!game || game.gameOver) {
            return;
        }

        const allowedEmojis = new Set([
            "😂", "😭", "🔥", "💀", "😎",
            "🤝", "👏", "❤️", "😡", "🤔",
            "👀", "🎯", "⚡", "👑", "🫡",
            "😈", "🥶", "😱", "🤯", "GG"
        ]);

        const emoji = String(rawEmoji || "").trim();

        if (!allowedEmojis.has(emoji)) {
            return;
        }

        socket.to(roomId).emit("emoji-reaction", {
            emoji,
            color: socket.data.color
        });
    });

    socket.on("chat-message", async function(message) {
        const roomId = socket.data.roomId;

        if (!roomId) {
            return;
        }

        if (typeof message !== "string") {
            return;
        }

        const cleanMessage =
            message
                .replace(/[\u0000-\u001f\u007f]/g, "")
                .trim()
                .slice(0, 150);

        if (cleanMessage.length === 0) {
            return;
        }

        const user = await socketUser(socket);

        socket.to(roomId).emit(
            "chat-message",
            {
                sender:
                    user?.username ||
                    "Opponent",
                message: cleanMessage
            }
        );
    });

    // Client-reported game-over is intentionally ignored.
    // Chess.js on the server decides checkmate and draws.
    socket.on("game-over", function() {});

    socket.on("disconnect", function() {
        console.log(
            "Player disconnected:",
            socket.id
        );

        removeSocketFromQueues(socket);

        const roomId = socket.data.roomId;

        if (!roomId) {
            return;
        }

        const game = games.get(roomId);

        if (!game || game.gameOver) {
            return;
        }

        finalizeGame(game, {
            reason: "disconnect",
            winner:
                oppositeColor(
                    socket.data.color
                )
        }).catch(function(error) {
            console.error(
                "Disconnect result failed:",
                error
            );
        });
    });
});

// Start Server

async function startServer() {
    await initializeDatabase();

    try {
        const result =
            await pool.query("SELECT NOW()");

        console.log(
            "Database connected:",
            result.rows[0].now
        );
    } catch (error) {
        console.error(
            "Database connection failed:",
            error
        );
    }

    server.listen(PORT, function() {
        console.log(
            `Pulse Chess server running on port ${PORT}`
        );
    });
}

startServer();
