// Modules

import { board } from "./pieces.js";
import { io } from "/socket.io/socket.io.esm.min.js";


// Configuration

const GOOGLE_CLIENT_ID =
    "544555583922-6ga00tnd4m312vt3qfb8ts5htuhvklum.apps.googleusercontent.com";

const COUNTRY_CODES = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT",
    "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI",
    "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY",
    "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN",
    "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM",
    "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK",
    "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL",
    "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM",
    "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR",
    "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN",
    "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS",
    "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK",
    "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW",
    "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP",
    "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM",
    "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW",
    "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM",
    "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF",
    "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW",
    "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI",
    "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];

// DOM

const navbar =
    document.querySelector(".navbar");

const menu =
    document.getElementById("menu");

const leaderboardPage =
    document.getElementById("leaderboard-page");

const settingsPage =
    document.getElementById("settings-page");

const privacyPage =
    document.getElementById("privacy-page");

const loginPage =
    document.getElementById("login-page");

const signupPage =
    document.getElementById("signup-page");

const verifyEmailPage = document.getElementById("verify-email-page");
const verifyEmailForm = document.getElementById("verify-email-form");
const verifyEmailAddress = document.getElementById("verify-email-address");
const verificationCode = document.getElementById("verification-code");
const verifyEmailError = document.getElementById("verify-email-error");
let pendingVerificationEmail = "";

const matchmaking =
    document.getElementById("matchmaking");

const game =
    document.getElementById("game");

const playButton =
    document.getElementById("play-button");

const botButton = document.getElementById("bot-button");

const friendButton =
    document.getElementById("friend-button");

const heroPlayButton =
    document.getElementById("hero-play-button");

const heroLeaderboardButton =
    document.getElementById(
        "hero-leaderboard-button"
    );

const previewLeaderboardButton =
    document.getElementById(
        "preview-leaderboard-button"
    );

const homeButton =
    document.getElementById("home-button");

const navPlayButton =
    document.getElementById(
        "nav-play-button"
    );

const leaderboardButton =
    document.getElementById(
        "leaderboard-button"
    );

const settingsButton =
    document.getElementById(
        "settings-button"
    );

const logoButton =
    document.getElementById(
        "logo-button"
    );

const loginButton =
    document.getElementById(
        "login-button"
    );

const signupButton =
    document.getElementById(
        "signup-button"
    );

const logoutButton =
    document.getElementById(
        "logout-button"
    );

const userNav =
    document.getElementById(
        "user-nav"
    );

const notificationWrap =
    document.getElementById(
        "notification-wrap"
    );

const notificationButton =
    document.getElementById(
        "notification-button"
    );

const notificationBadge =
    document.getElementById(
        "notification-badge"
    );

const notificationPanel =
    document.getElementById(
        "notification-panel"
    );

const notificationList =
    document.getElementById(
        "notification-list"
    );

const notificationPlayersButton =
    document.getElementById(
        "notification-players-button"
    );

const navUsername =
    document.getElementById(
        "nav-username"
    );

const navRating =
    document.getElementById(
        "nav-rating"
    );

const userDashboard =
    document.getElementById(
        "user-dashboard"
    );

const dashboardFlag =
    document.getElementById(
        "dashboard-flag"
    );

const dashboardAvatar =
    document.getElementById(
        "dashboard-avatar"
    );

const dashboardName =
    document.getElementById(
        "dashboard-name"
    );

const dashboardRating =
    document.getElementById(
        "dashboard-rating"
    );

const dashboardWins =
    document.getElementById(
        "dashboard-wins"
    );

const dashboardLosses =
    document.getElementById(
        "dashboard-losses"
    );

const dashboardDraws =
    document.getElementById(
        "dashboard-draws"
    );

const heroPlayerCount =
    document.getElementById(
        "hero-player-count"
    );

const homePreviewBoard =
    document.getElementById(
        "home-preview-board"
    );

const homeLeaderboard =
    document.getElementById(
        "home-leaderboard"
    );

const recentMatches =
    document.getElementById(
        "recent-matches"
    );

const leaderboardScope =
    document.getElementById(
        "leaderboard-scope"
    );

const leaderboardLimit =
    document.getElementById(
        "leaderboard-limit"
    );

const leaderboardScopeNote =
    document.getElementById(
        "leaderboard-scope-note"
    );

const leaderboardList =
    document.getElementById(
        "leaderboard-list"
    );

const settingMusic =
    document.getElementById(
        "setting-music"
    );

const settingSfx =
    document.getElementById(
        "setting-sfx"
    );

const settingMotion =
    document.getElementById(
        "setting-motion"
    );

const settingBoardTheme =
    document.getElementById(
        "setting-board-theme"
    );

const settingVolume =
    document.getElementById(
        "setting-volume"
    );

const accountSettingsCard =
    document.getElementById(
        "account-settings-card"
    );

const settingsUsername =
    document.getElementById(
        "settings-username"
    );

const saveUsernameButton =
    document.getElementById(
        "save-username-button"
    );

const settingsUsernameMessage =
    document.getElementById(
        "settings-username-message"
    );

const usernameCooldown =
    document.getElementById(
        "username-cooldown"
    );

const settingsAvatarGrid =
    document.getElementById(
        "settings-avatar-grid"
    );

const settingsBio =
    document.getElementById(
        "settings-bio"
    );

const saveProfileButton =
    document.getElementById(
        "save-profile-button"
    );

const settingsProfileMessage =
    document.getElementById(
        "settings-profile-message"
    );

const signoutAllButton =
    document.getElementById("signout-all-button");

const deleteAccountButton =
    document.getElementById("delete-account-button");

const accountControlMessage =
    document.getElementById("account-control-message");

const privacyButton =
    document.getElementById(
        "privacy-button"
    );

const privacyBackButton =
    document.getElementById(
        "privacy-back-button"
    );

const termsPage =
    document.getElementById("terms-page");

const cookiesPage =
    document.getElementById("cookies-page");

const fairPlayPage =
    document.getElementById("fair-play-page");

const termsButton =
    document.getElementById("terms-button");

const cookiesButton =
    document.getElementById("cookies-button");

const fairPlayButton =
    document.getElementById("fair-play-button");

const legalHomeButtons =
    document.querySelectorAll(".legal-home-button");

const globalFooter =
    document.getElementById("global-footer");

const playersButton =
    document.getElementById(
        "players-button"
    );

const socialPage =
    document.getElementById(
        "social-page"
    );

const playerSearchInput =
    document.getElementById(
        "player-search-input"
    );

const playerSearchButton =
    document.getElementById(
        "player-search-button"
    );

const playerSearchResults =
    document.getElementById(
        "player-search-results"
    );

const friendRequestList =
    document.getElementById(
        "friend-request-list"
    );

const friendRequestCount =
    document.getElementById(
        "friend-request-count"
    );

const friendList =
    document.getElementById(
        "friend-list"
    );

const friendCount =
    document.getElementById(
        "friend-count"
    );

const socialWelcome =
    document.getElementById(
        "social-welcome"
    );

const playerProfilePanel =
    document.getElementById(
        "player-profile-panel"
    );

const profileViewAvatar =
    document.getElementById(
        "profile-view-avatar"
    );

const profileViewName =
    document.getElementById(
        "profile-view-name"
    );

const profileViewFlag =
    document.getElementById(
        "profile-view-flag"
    );

const profileViewBio =
    document.getElementById(
        "profile-view-bio"
    );

const profileViewRating =
    document.getElementById(
        "profile-view-rating"
    );

const profileViewJoined =
    document.getElementById(
        "profile-view-joined"
    );

const profileFriendButton =
    document.getElementById(
        "profile-friend-button"
    );

const profileMessageButton =
    document.getElementById(
        "profile-message-button"
    );

const profileWatchButton =
    document.getElementById("profile-watch-button");

const profileBlockButton =
    document.getElementById("profile-block-button");

const profileReportButton =
    document.getElementById("profile-report-button");

const profileViewPresence =
    document.getElementById("profile-view-presence");

const profileStatRating =
    document.getElementById(
        "profile-stat-rating"
    );

const profileStatWins =
    document.getElementById(
        "profile-stat-wins"
    );

const profileStatLosses =
    document.getElementById(
        "profile-stat-losses"
    );

const profileStatDraws =
    document.getElementById(
        "profile-stat-draws"
    );

const profileRecentGames =
    document.getElementById(
        "profile-recent-games"
    );

const directMessagePanel =
    document.getElementById(
        "direct-message-panel"
    );

const dmBackButton =
    document.getElementById(
        "dm-back-button"
    );

const dmAvatar =
    document.getElementById(
        "dm-avatar"
    );

const dmName =
    document.getElementById(
        "dm-name"
    );

const dmRating =
    document.getElementById(
        "dm-rating"
    );

const dmMessages =
    document.getElementById(
        "dm-messages"
    );

const dmForm =
    document.getElementById(
        "dm-form"
    );

const dmInput =
    document.getElementById(
        "dm-input"
    );

const loginForm =
    document.getElementById(
        "login-form"
    );

const signupForm =
    document.getElementById(
        "signup-form"
    );

const signupToLogin =
    document.getElementById(
        "signup-to-login"
    );

const loginToSignup =
    document.getElementById(
        "login-to-signup"
    );

const signupError =
    document.getElementById(
        "signup-error"
    );

const loginError =
    document.getElementById(
        "login-error"
    );

const googleLoginButton =
    document.getElementById(
        "google-login-button"
    );

const googleSignupButton =
    document.getElementById(
        "google-signup-button"
    );

const matchmakingTitle =
    document.getElementById(
        "matchmaking-title"
    );

const matchmakingStatus =
    document.getElementById(
        "matchmaking-status"
    );

const cancelButton =
    document.getElementById(
        "cancel-button"
    );

const returnButton =
    document.getElementById(
        "back-button"
    );

const resignButton =
    document.getElementById(
        "resign-button"
    );

const drawButton =
    document.getElementById("draw-button");

const openingName =
    document.getElementById("opening-name");

const gameSettingsButton =
    document.getElementById(
        "game-settings-button"
    );

const gameModePill =
    document.getElementById(
        "game-mode-pill"
    );

const chessBoard =
    document.getElementById(
        "chess-board"
    );

const playerColorDisplay =
    document.getElementById(
        "player-color"
    );

const turnDisplay =
    document.getElementById(
        "turn-display"
    );

const gameStatus =
    document.getElementById(
        "game-status"
    );

const whiteClockDisplay =
    document.getElementById(
        "white-clock"
    );

const blackClockDisplay =
    document.getElementById(
        "black-clock"
    );

const whitePlayerCard =
    document.getElementById(
        "white-player-card"
    );

const blackPlayerCard =
    document.getElementById(
        "black-player-card"
    );

const whiteAvatar =
    document.getElementById(
        "white-avatar"
    );

const blackAvatar =
    document.getElementById(
        "black-avatar"
    );

const whitePlayerName =
    document.getElementById(
        "white-player-name"
    );

const blackPlayerName =
    document.getElementById(
        "black-player-name"
    );

const whitePlayerRating =
    document.getElementById(
        "white-player-rating"
    );

const blackPlayerRating =
    document.getElementById(
        "black-player-rating"
    );

const moveList =
    document.getElementById(
        "move-list"
    );

const moveCountDisplay =
    document.getElementById(
        "move-count"
    );

const chatMessages =
    document.getElementById(
        "chat-messages"
    );

const chatInput =
    document.getElementById(
        "chat-input"
    );

const chatSend =
    document.getElementById(
        "chat-send"
    );

const emojiButton =
    document.getElementById(
        "emoji-button"
    );

const emojiPicker =
    document.getElementById(
        "emoji-picker"
    );

const emojiSearch =
    document.getElementById(
        "emoji-search"
    );

const emojiList =
    document.getElementById(
        "emoji-list"
    );

const whiteCapturedPieces =
    document.getElementById(
        "white-captured-pieces"
    );

const blackCapturedPieces =
    document.getElementById(
        "black-captured-pieces"
    );

const quickMatchModal =
    document.getElementById("quick-match-modal");

const quickMatchModalClose =
    document.getElementById("quick-match-modal-close");

const timeControlButtons =
    document.querySelectorAll("[data-time-control]");

const privateTimeControl =
    document.getElementById("private-time-control");

const botTimeControl =
    document.getElementById("bot-time-control");

const friendModal =
    document.getElementById(
        "friend-modal"
    );

const friendModalClose =
    document.getElementById(
        "friend-modal-close"
    );

const createPrivateButton =
    document.getElementById(
        "create-private-button"
    );

const privateCodeInput =
    document.getElementById(
        "private-code-input"
    );

const joinPrivateButton =
    document.getElementById(
        "join-private-button"
    );

const privateCodePanel =
    document.getElementById(
        "private-code-panel"
    );

const privateCodeDisplay =
    document.getElementById(
        "private-code-display"
    );

const copyPrivateCode =
    document.getElementById(
        "copy-private-code"
    );

const privateError =
    document.getElementById(
        "private-error"
    );

const botModal = document.getElementById("bot-modal");

const botModalClose = document.getElementById("bot-modal-close");

const botDifficultyButtons = document.querySelectorAll("[data-bot-difficulty]");

const resultModal =
    document.getElementById(
        "result-modal"
    );

const resultIcon =
    document.getElementById(
        "result-icon"
    );

const resultKicker =
    document.getElementById(
        "result-kicker"
    );

const resultTitle =
    document.getElementById(
        "result-title"
    );

const resultReason =
    document.getElementById(
        "result-reason"
    );

const ratingResult =
    document.getElementById(
        "rating-result"
    );

const ratingOld =
    document.getElementById(
        "rating-old"
    );

const ratingNew =
    document.getElementById(
        "rating-new"
    );

const ratingDelta =
    document.getElementById(
        "rating-delta"
    );

const resultRematch =
    document.getElementById(
        "result-rematch"
    );

const resultHome =
    document.getElementById(
        "result-home"
    );

const resultReview =
    document.getElementById("result-review");

const resultCopyFen =
    document.getElementById("result-copy-fen");

const resultExportPgn =
    document.getElementById("result-export-pgn");

const drawOfferModal =
    document.getElementById("draw-offer-modal");

const drawAcceptButton =
    document.getElementById("draw-accept-button");

const drawDeclineButton =
    document.getElementById("draw-decline-button");

const reviewModal =
    document.getElementById("review-modal");

const reviewClose =
    document.getElementById("review-close");

const reviewStatus =
    document.getElementById("review-status");

const reviewSummary =
    document.getElementById("review-summary");

const reviewMoves =
    document.getElementById("review-moves");

const toastContainer =
    document.getElementById(
        "toast-container"
    );

const cookieBanner =
    document.getElementById(
        "cookie-banner"
    );

const cookieAccept =
    document.getElementById(
        "cookie-accept"
    );

const cookieReject =
    document.getElementById(
        "cookie-reject"
    );


// Network

const socket = io();


// Chess State

const files = [
    "a", "b", "c", "d",
    "e", "f", "g", "h"
];

const squareElements = [];

let selectedSquare = null;
let legalMoves = [];
let moveHistory = [];
let capturedByWhite = [];
let capturedByBlack = [];

let lastMoveFrom = null;
let lastMoveTo = null;

let currentTurn = "white";
let playerColor = null;

let gameOver = false;
let inMatch = false;

let enPassantTarget = null;

let draggedPiece = null;

let dragFromY = null;
let dragFromX = null;

let dragStarted = false;

let dragHoverSquare = null;

let promotionPending = false;

let whiteTime = 10 * 60 * 1000;
let blackTime = 10 * 60 * 1000;

let clockTurn = "white";

let clockLastUpdate =
    Date.now();

const castlingRights = {
    white: {
        kingSide: true,
        queenSide: true
    },

    black: {
        kingSide: true,
        queenSide: true
    }
};


// App State

let currentUser = null;
let currentMatch = null;
let selectedAvatarKey = "knight";
let googleInitialized = false;

let activeSocialProfile = null;
let activeDmUsername = null;
let selectedTimeControl = "rapid10";
let lastGamePgn = "";
let lastGameFen = "";
let lastGameData = null;
let isSpectating = false;

let settings = {
    music: true,
    sfx: true,
    motion: true,
    boardTheme: "midnight",
    volume: 32
};


// Settings

function optionalStorageAllowed() {
    return localStorage.getItem(
        "pulseChessCookieChoice"
    ) === "accepted";
}

function loadSettings() {
    if (optionalStorageAllowed()) {
        try {
            const saved =
                JSON.parse(
                    localStorage.getItem(
                        "pulseChessSettings"
                    ) || "{}"
                );

            settings = {
                ...settings,
                ...saved
            };
        } catch (error) {
            console.warn(
                "Could not load settings:",
                error
            );
        }
    }

    settings.volume =
        Math.max(
            0,
            Math.min(
                100,
                Number(settings.volume) || 0
            )
        );

    applySettings();
}

function saveSettings() {
    if (optionalStorageAllowed()) {
        localStorage.setItem(
            "pulseChessSettings",
            JSON.stringify(settings)
        );
    }

    applySettings();
}

function applySettings() {
    document.body.dataset.boardTheme =
        settings.boardTheme;

    document.body.classList.toggle(
        "reduce-motion",
        !settings.motion
    );

    updateAudioVolume();
}

function syncSettingsControls() {
    settingMusic.checked =
        Boolean(settings.music);

    settingSfx.checked =
        Boolean(settings.sfx);

    settingMotion.checked =
        Boolean(settings.motion);

    settingBoardTheme.value =
        settings.boardTheme;

    settingVolume.value =
        String(settings.volume);
}


// Utility

const AVATAR_SYMBOLS = {
    knight: "♞",
    rook: "♜",
    bishop: "♝",
    queen: "♛",
    king: "♚",
    pawn: "♟",
    bolt: "⚡",
    crown: "♕"
};

const BOT_LABELS = {
    rookie500: { name: "Beginner", rating: 500 },
    club1000: { name: "Casual", rating: 1000 },
    tactician1500: { name: "Challenger", rating: 1500 },
    master2000: { name: "Expert", rating: 2000 },
    grandmaster2500: { name: "Grandmaster", rating: 2500 },
    elite3000: { name: "Elite", rating: 3000 }
};

const TIME_CONTROL_LABELS = {
    bullet1: "1+0 Bullet",
    blitz3: "3+0 Blitz",
    blitz32: "3+2 Blitz",
    blitz5: "5+0 Blitz",
    rapid10: "10+0 Rapid",
    rapid1510: "15+10 Rapid"
};

function avatarSymbol(
    avatarKey,
    fallback = "P"
) {
    return AVATAR_SYMBOLS[avatarKey] ||
        String(fallback || "P")
            .slice(0, 1)
            .toUpperCase();
}

function syncAvatarChoices() {
    if (!settingsAvatarGrid) {
        return;
    }

    for (
        const button of
        settingsAvatarGrid.querySelectorAll(
            "[data-avatar]"
        )
    ) {
        button.classList.toggle(
            "selected",
            button.dataset.avatar ===
                selectedAvatarKey
        );
    }
}

function updateUsernameCooldown() {
    if (!usernameCooldown) {
        return;
    }

    if (
        !currentUser ||
        !currentUser.username_changed_at
    ) {
        usernameCooldown.textContent =
            "You can change your username now.";

        saveUsernameButton.disabled = false;
        return;
    }

    const changedAt =
        new Date(
            currentUser.username_changed_at
        ).getTime();

    const availableAt =
        changedAt +
        7 * 24 * 60 * 60 * 1000;

    if (Date.now() >= availableAt) {
        usernameCooldown.textContent =
            "You can change your username now.";

        saveUsernameButton.disabled = false;
        return;
    }

    saveUsernameButton.disabled = true;

    usernameCooldown.textContent =
        `Next username change: ${new Date(
            availableAt
        ).toLocaleString()}`;
}

function renderHomePreviewBoard() {
    if (
        !homePreviewBoard ||
        homePreviewBoard.childElementCount > 0
    ) {
        return;
    }

    const preview = [
        [
            ["rook", "b"],
            ["knight", "b"],
            ["bishop", "b"],
            ["queen", "b"],
            ["king", "b"],
            ["bishop", "b"],
            ["knight", "b"],
            ["rook", "b"]
        ],
        [
            ["pawn", "b"],
            ["pawn", "b"],
            ["pawn", "b"],
            ["pawn", "b"],
            null,
            ["pawn", "b"],
            ["pawn", "b"],
            ["pawn", "b"]
        ],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [
            null,
            null,
            null,
            ["pawn", "w"],
            ["pawn", "b"],
            null,
            null,
            null
        ],
        [
            null,
            null,
            ["knight", "w"],
            null,
            null,
            ["knight", "w"],
            null,
            null
        ],
        [
            ["pawn", "w"],
            ["pawn", "w"],
            ["pawn", "w"],
            null,
            ["pawn", "w"],
            ["pawn", "w"],
            ["pawn", "w"],
            ["pawn", "w"]
        ],
        [
            ["rook", "w"],
            null,
            ["bishop", "w"],
            ["queen", "w"],
            ["king", "w"],
            ["bishop", "w"],
            null,
            ["rook", "w"]
        ]
    ];

    const fallbackSymbols = {
        "pawn-w": "♙",
        "knight-w": "♘",
        "bishop-w": "♗",
        "rook-w": "♖",
        "queen-w": "♕",
        "king-w": "♔",
        "pawn-b": "♟",
        "knight-b": "♞",
        "bishop-b": "♝",
        "rook-b": "♜",
        "queen-b": "♛",
        "king-b": "♚"
    };

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const square =
                document.createElement("span");

            square.className =
                (x + y) % 2 === 0
                    ? "home-preview-square light"
                    : "home-preview-square dark";

            if (
                (y === 4 && x === 3) ||
                (y === 4 && x === 4)
            ) {
                square.classList.add("last");
            }

            const previewPiece =
                preview[y][x];

            if (previewPiece) {
                const [type, color] =
                    previewPiece;

                const image =
                    document.createElement("img");

                image.className =
                    "home-preview-piece";

                image.src =
                    `assets/pieces/${type}-${color}.svg`;

                image.alt =
                    `${color === "w" ? "White" : "Black"} ${type}`;

                image.draggable = false;

                image.addEventListener(
                    "error",
                    function() {
                        square.textContent =
                            fallbackSymbols[
                                `${type}-${color}`
                            ] || "";
                    },
                    { once: true }
                );

                square.appendChild(
                    image
                );
            }

            homePreviewBoard.appendChild(
                square
            );
        }
    }
}

function initializeCookieBanner() {
    if (!cookieBanner) {
        return;
    }

    const choice =
        localStorage.getItem(
            "pulseChessCookieChoice"
        );

    cookieBanner.classList.toggle(
        "hidden",
        Boolean(choice)
    );
}

function saveCookieChoice(choice) {
    localStorage.setItem(
        "pulseChessCookieChoice",
        choice
    );

    if (choice !== "accepted") {
        localStorage.removeItem(
            "pulseChessSettings"
        );
    }

    cookieBanner?.classList.add(
        "hidden"
    );
}

function countryCodeToFlag(countryCode) {
    if (
        typeof countryCode !== "string" ||
        !/^[A-Z]{2}$/i.test(countryCode)
    ) {
        return "Global";
    }

    return countryCode.toUpperCase();
}

function createCountryFlag(countryCode) {
    const wrapper =
        document.createElement("span");

    wrapper.className =
        "country-flag";

    if (
        typeof countryCode !== "string" ||
        !/^[A-Z]{2}$/i.test(countryCode)
    ) {
        wrapper.textContent = "🌐";
        wrapper.classList.add(
            "country-flag-fallback"
        );
        return wrapper;
    }

    const code =
        countryCode.toLowerCase();

    const image =
        document.createElement("img");

    image.src =
        `https://flagcdn.com/${code}.svg`;

    image.alt =
        `${countryCode.toUpperCase()} flag`;

    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    image.decoding = "async";

    image.addEventListener(
        "error",
        function() {
            wrapper.textContent =
                countryCode.toUpperCase();

            wrapper.classList.add(
                "country-flag-fallback"
            );
        },
        { once: true }
    );

    wrapper.appendChild(image);
    return wrapper;
}

function setCountryFlag(
    element,
    countryCode
) {
    if (!element) {
        return;
    }

    element.replaceChildren(
        createCountryFlag(countryCode)
    );
}

function setFlaggedName(
    element,
    countryCode,
    username
) {
    if (!element) {
        return;
    }

    const name =
        document.createElement("span");

    name.textContent =
        String(username || "Player");

    element.replaceChildren(
        createCountryFlag(countryCode),
        name
    );

    element.classList.add(
        "flagged-name"
    );
}

function syncBoardFromFen(fen) {
    if (
        typeof fen !== "string" ||
        !fen.includes(" ")
    ) {
        return false;
    }

    const rows =
        fen.split(" ")[0].split("/");

    if (rows.length !== 8) {
        return false;
    }

    const typeMap = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    };

    const symbolMap = {
        white: {
            pawn: "♙",
            knight: "♘",
            bishop: "♗",
            rook: "♖",
            queen: "♕",
            king: "♔"
        },
        black: {
            pawn: "♟",
            knight: "♞",
            bishop: "♝",
            rook: "♜",
            queen: "♛",
            king: "♚"
        }
    };

    const nextBoard = [];

    for (let y = 0; y < 8; y++) {
        const row = [];
        let x = 0;

        for (const token of rows[y]) {
            if (/^[1-8]$/.test(token)) {
                const count = Number(token);

                for (
                    let i = 0;
                    i < count;
                    i++
                ) {
                    row.push(null);
                    x++;
                }

                continue;
            }

            const lower =
                token.toLowerCase();

            const type =
                typeMap[lower];

            if (!type || x >= 8) {
                return false;
            }

            const color =
                token === token.toUpperCase()
                    ? "white"
                    : "black";

            row.push({
                type,
                color,
                symbol:
                    symbolMap[color][type]
            });

            x++;
        }

        if (row.length !== 8) {
            return false;
        }

        nextBoard.push(row);
    }

    board.splice(
        0,
        board.length,
        ...nextBoard
    );

    return true;
}


function escapeText(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatReason(reason) {
    const labels = {
        checkmate: "Checkmate",
        timeout: "Time ran out",
        resignation: "Resignation",
        stalemate: "Stalemate",
        threefold: "Threefold repetition",
        "threefold-repetition": "Threefold repetition",
        insufficient: "Insufficient material",
        "insufficient-material": "Insufficient material",
        "50-move": "50-move rule",
        "fifty-move": "50-move rule",
        draw: "Draw",
        disconnect: "Opponent disconnected"
    };

    return labels[reason] ||
        String(reason || "Game complete")
            .replaceAll("-", " ")
            .replace(/\b\w/g, function(letter) {
                return letter.toUpperCase();
            });
}

function showToast(
    message,
    type = "info"
) {
    const toast =
        document.createElement("div");

    toast.className =
        `toast ${type}`;

    toast.textContent = message;

    toastContainer.appendChild(toast);

    requestAnimationFrame(function() {
        toast.classList.add("show");
    });

    setTimeout(function() {
        toast.classList.remove("show");

        setTimeout(function() {
            toast.remove();
        }, 250);
    }, 3200);
}

function closeFriendModal() {
    friendModal.classList.add("hidden");
    privateError.textContent = "";
}

function closeResultModal() {
    resultModal.classList.add("hidden");

    document
        .querySelectorAll(".confetti-piece")
        .forEach(function(piece) {
            piece.remove();
        });
}

function setButtonLoading(
    button,
    loading,
    text = null
) {
    if (!button) {
        return;
    }

    if (loading) {
        button.dataset.originalText =
            button.textContent;

        button.disabled = true;
        button.textContent =
            text || "Please wait…";
    } else {
        button.disabled = false;

        if (button.dataset.originalText) {
            button.textContent =
                button.dataset.originalText;

            delete button.dataset.originalText;
        }
    }
}


// Audio

let audioContext = null;
let masterGain = null;
let musicGain = null;
let sfxGain = null;
let musicInterval = null;
let musicStep = 0;
let musicVariation = 0;

const lofiProgressions = [
    [
        [130.81, 164.81, 196.00, 246.94],
        [110.00, 130.81, 164.81, 196.00],
        [87.31, 110.00, 130.81, 164.81],
        [98.00, 123.47, 146.83, 196.00],
        [130.81, 164.81, 196.00, 246.94],
        [123.47, 146.83, 185.00, 220.00],
        [110.00, 138.59, 164.81, 207.65],
        [98.00, 123.47, 155.56, 196.00]
    ],
    [
        [146.83, 174.61, 220.00, 261.63],
        [123.47, 155.56, 185.00, 233.08],
        [110.00, 138.59, 174.61, 220.00],
        [130.81, 164.81, 196.00, 246.94],
        [146.83, 185.00, 220.00, 277.18],
        [123.47, 155.56, 196.00, 233.08],
        [98.00, 123.47, 146.83, 196.00],
        [110.00, 138.59, 164.81, 220.00]
    ],
    [
        [110.00, 130.81, 164.81, 207.65],
        [123.47, 146.83, 185.00, 220.00],
        [130.81, 164.81, 196.00, 246.94],
        [98.00, 123.47, 155.56, 196.00],
        [87.31, 110.00, 138.59, 174.61],
        [98.00, 123.47, 146.83, 185.00],
        [110.00, 138.59, 164.81, 207.65],
        [123.47, 155.56, 185.00, 233.08]
    ],
    [
        [130.81, 155.56, 196.00, 233.08],
        [146.83, 174.61, 220.00, 261.63],
        [123.47, 146.83, 185.00, 220.00],
        [110.00, 130.81, 164.81, 207.65],
        [98.00, 123.47, 155.56, 196.00],
        [110.00, 138.59, 174.61, 220.00],
        [123.47, 155.56, 196.00, 246.94],
        [98.00, 123.47, 146.83, 196.00]
    ],
    [
        [164.81, 196.00, 246.94, 293.66],
        [146.83, 185.00, 220.00, 277.18],
        [130.81, 164.81, 207.65, 246.94],
        [123.47, 155.56, 196.00, 233.08],
        [110.00, 138.59, 174.61, 220.00],
        [123.47, 164.81, 196.00, 246.94],
        [146.83, 174.61, 220.00, 261.63],
        [130.81, 155.56, 196.00, 246.94]
    ],
    [
        [98.00, 130.81, 164.81, 196.00],
        [92.50, 123.47, 146.83, 185.00],
        [110.00, 146.83, 174.61, 220.00],
        [82.41, 110.00, 130.81, 164.81],
        [98.00, 123.47, 155.56, 196.00],
        [87.31, 116.54, 146.83, 174.61],
        [92.50, 123.47, 155.56, 185.00],
        [110.00, 138.59, 174.61, 207.65]
    ],
    [
        [174.61, 220.00, 261.63, 329.63],
        [155.56, 196.00, 233.08, 293.66],
        [146.83, 185.00, 220.00, 277.18],
        [130.81, 164.81, 207.65, 246.94],
        [146.83, 196.00, 233.08, 293.66],
        [123.47, 155.56, 196.00, 246.94],
        [110.00, 146.83, 174.61, 220.00],
        [130.81, 174.61, 207.65, 261.63]
    ],
    [
        [116.54, 146.83, 174.61, 220.00],
        [130.81, 164.81, 196.00, 246.94],
        [103.83, 130.81, 155.56, 196.00],
        [92.50, 123.47, 146.83, 185.00],
        [110.00, 138.59, 164.81, 220.00],
        [123.47, 155.56, 185.00, 233.08],
        [98.00, 130.81, 155.56, 196.00],
        [103.83, 138.59, 164.81, 207.65]
    ]
];

const lofiMelodies = [
    [392.00, 440.00, 523.25, 493.88, 440.00, 392.00, 329.63, 349.23],
    [440.00, 523.25, 587.33, 523.25, 466.16, 392.00, 440.00, 349.23],
    [329.63, 392.00, 440.00, 523.25, 493.88, 440.00, 392.00, 349.23],
    [523.25, 493.88, 440.00, 392.00, 349.23, 392.00, 440.00, 493.88],
    [659.25, 587.33, 523.25, 440.00, 493.88, 392.00, 440.00, 523.25],
    [293.66, 349.23, 392.00, 440.00, 392.00, 329.63, 293.66, 261.63],
    [587.33, 659.25, 698.46, 659.25, 587.33, 523.25, 466.16, 523.25],
    [349.23, 415.30, 466.16, 523.25, 466.16, 415.30, 349.23, 311.13]
];

function ensureAudio() {
    if (!audioContext) {
        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return null;
        }

        audioContext =
            new AudioContext();

        masterGain =
            audioContext.createGain();

        musicGain =
            audioContext.createGain();

        sfxGain =
            audioContext.createGain();

        musicGain.connect(masterGain);
        sfxGain.connect(masterGain);
        masterGain.connect(
            audioContext.destination
        );

        musicGain.gain.value = 0;
        sfxGain.gain.value = 0.2;

        updateAudioVolume();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    return audioContext;
}

function updateAudioVolume() {
    if (!audioContext) {
        return;
    }

    const normalized =
        settings.volume / 100;

    masterGain.gain.setTargetAtTime(
        normalized,
        audioContext.currentTime,
        0.02
    );

    sfxGain.gain.setTargetAtTime(
        0.34,
        audioContext.currentTime,
        0.02
    );
}

function createTone(
    frequency,
    duration,
    options = {}
) {
    const context = ensureAudio();

    if (!context) {
        return;
    }

    const oscillator =
        context.createOscillator();

    const gain =
        context.createGain();

    const filter =
        context.createBiquadFilter();

    oscillator.type =
        options.type || "sine";

    oscillator.frequency.value =
        frequency;

    filter.type = "lowpass";
    filter.frequency.value =
        options.cutoff || 1800;

    const now =
        context.currentTime +
        (options.delay || 0);

    const level =
        options.level ?? 0.12;

    gain.gain.setValueAtTime(
        0.0001,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        Math.max(0.0002, level),
        now + 0.018
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + duration
    );

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(
        options.output ||
        sfxGain
    );

    oscillator.start(now);
    oscillator.stop(
        now + duration + 0.05
    );
}

function createNoiseBurst(
    duration,
    options = {}
) {
    const context = ensureAudio();

    if (!context) {
        return;
    }

    const length = Math.max(
        1,
        Math.floor(
            context.sampleRate * duration
        )
    );

    const buffer =
        context.createBuffer(
            1,
            length,
            context.sampleRate
        );

    const channel =
        buffer.getChannelData(0);

    for (let index = 0; index < length; index++) {
        channel[index] =
            Math.random() * 2 - 1;
    }

    const source =
        context.createBufferSource();

    const filter =
        context.createBiquadFilter();

    const gain =
        context.createGain();

    source.buffer = buffer;

    filter.type =
        options.filterType || "lowpass";

    filter.frequency.value =
        options.cutoff || 1200;

    const now =
        context.currentTime +
        (options.delay || 0);

    gain.gain.setValueAtTime(
        options.level ?? 0.02,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + duration
    );

    source.connect(filter);
    filter.connect(gain);
    gain.connect(
        options.output ||
        sfxGain
    );

    source.start(now);
    source.stop(now + duration);
}

function playSfx(name) {
    if (!settings.sfx) {
        return;
    }

    const context = ensureAudio();

    if (!context) {
        return;
    }

    if (name === "select") {
        createTone(
            720,
            0.045,
            {
                type: "sine",
                level: 0.045,
                cutoff: 1500
            }
        );

        createTone(
            480,
            0.05,
            {
                delay: 0.014,
                type: "triangle",
                level: 0.025,
                cutoff: 1100
            }
        );
        return;
    }

    if (
        name === "place" ||
        name === "move"
    ) {
        createNoiseBurst(
            0.045,
            {
                level: 0.035,
                cutoff: 650
            }
        );

        createTone(
            235,
            0.075,
            {
                type: "triangle",
                level: 0.065,
                cutoff: 850
            }
        );

        createTone(
            155,
            0.055,
            {
                delay: 0.015,
                type: "sine",
                level: 0.035,
                cutoff: 500
            }
        );
        return;
    }

    if (name === "capture") {
        createNoiseBurst(
            0.08,
            {
                level: 0.055,
                cutoff: 850
            }
        );

        createTone(
            190,
            0.11,
            {
                type: "square",
                level: 0.06,
                cutoff: 700
            }
        );

        createTone(
            145,
            0.13,
            {
                delay: 0.035,
                type: "triangle",
                level: 0.07,
                cutoff: 650
            }
        );
        return;
    }

    if (name === "match") {
        [392, 523.25, 659.25]
            .forEach(function(note, index) {
                createTone(
                    note,
                    0.28,
                    {
                        delay:
                            index * 0.08,
                        type: "sine",
                        level: 0.08
                    }
                );
            });
        return;
    }

    if (name === "checkmate") {
        createNoiseBurst(
            0.18,
            {
                level: 0.035,
                cutoff: 1200
            }
        );

        [261.63, 329.63, 392.00, 523.25]
            .forEach(function(note, index) {
                createTone(
                    note,
                    0.58,
                    {
                        delay:
                            index * 0.085,
                        type:
                            index === 0
                                ? "triangle"
                                : "sine",
                        level:
                            index === 3
                                ? 0.095
                                : 0.065,
                        cutoff: 1500
                    }
                );
            });

        createTone(
            130.81,
            0.65,
            {
                delay: 0.02,
                type: "triangle",
                level: 0.055,
                cutoff: 480
            }
        );
        return;
    }

    if (name === "win") {
        [523.25, 659.25, 783.99, 1046.5]
            .forEach(function(note, index) {
                createTone(
                    note,
                    0.38,
                    {
                        delay:
                            index * 0.09,
                        type: "triangle",
                        level: 0.08
                    }
                );
            });
        return;
    }

    if (name === "loss") {
        [329.63, 277.18, 220]
            .forEach(function(note, index) {
                createTone(
                    note,
                    0.42,
                    {
                        delay:
                            index * 0.11,
                        type: "sine",
                        level: 0.075,
                        cutoff: 1000
                    }
                );
            });
        return;
    }

    if (name === "draw") {
        [392, 440, 392]
            .forEach(function(note, index) {
                createTone(
                    note,
                    0.3,
                    {
                        delay:
                            index * 0.1,
                        type: "sine",
                        level: 0.06
                    }
                );
            });
    }
}

function playLofiChord() {
    if (
        !settings.music ||
        !inMatch
    ) {
        return;
    }

    const context = ensureAudio();

    if (!context) {
        return;
    }

    if (
        musicStep > 0 &&
        musicStep % 16 === 0
    ) {
        let nextVariation = musicVariation;

        while (
            nextVariation === musicVariation &&
            lofiProgressions.length > 1
        ) {
            nextVariation =
                Math.floor(
                    Math.random() *
                    lofiProgressions.length
                );
        }

        musicVariation = nextVariation;
    }

    const progression =
        lofiProgressions[musicVariation];

    const chordIndex =
        musicStep % progression.length;

    const chord =
        progression[chordIndex];

    const octaveShift =
        musicStep % 12 === 7
            ? 2
            : 1;

    chord.forEach(function(
        frequency,
        index
    ) {
        createTone(
            frequency * octaveShift,
            2.05,
            {
                type:
                    index === 0
                        ? "triangle"
                        : "sine",
                level:
                    index === 0
                        ? 0.026
                        : 0.016,
                cutoff:
                    index === 0
                        ? 620
                        : 880,
                output: musicGain,
                delay:
                    index * 0.014
            }
        );
    });

    // Bass pulse
    createTone(
        chord[0] / 2,
        0.7,
        {
            type: "triangle",
            level: 0.032,
            cutoff: 360,
            output: musicGain,
            delay: 0.02
        }
    );

    // Soft kick
    createTone(
        72,
        0.16,
        {
            type: "sine",
            level: 0.025,
            cutoff: 180,
            output: musicGain,
            delay: 0.03
        }
    );

    // Brushed snare / hi-hat texture
    createNoiseBurst(
        0.055,
        {
            filterType: "highpass",
            cutoff: 2500,
            level: 0.006,
            output: musicGain,
            delay: 0.96
        }
    );

    createNoiseBurst(
        0.035,
        {
            filterType: "highpass",
            cutoff: 3400,
            level: 0.004,
            output: musicGain,
            delay: 1.45
        }
    );

    // Sparse lead notes so every chord does not sound identical.
    if (
        musicStep % 2 === 0 ||
        musicStep % 5 === 0
    ) {
        const melody =
            lofiMelodies[musicVariation];

        const note =
            melody[
                musicStep % melody.length
            ];

        createTone(
            note,
            0.48,
            {
                type: "sine",
                level: 0.012,
                cutoff: 1300,
                output: musicGain,
                delay: 0.55
            }
        );

        if (musicStep % 4 === 0) {
            createTone(
                note * 1.5,
                0.34,
                {
                    type: "triangle",
                    level: 0.006,
                    cutoff: 1600,
                    output: musicGain,
                    delay: 1.32
                }
            );
        }
    }

    // Occasional bell-like counter melody.
    if (musicStep % 7 === 3) {
        const melody =
            lofiMelodies[musicVariation];

        createTone(
            melody[(musicStep + 3) % melody.length] * 2,
            0.7,
            {
                type: "sine",
                level: 0.0045,
                cutoff: 2200,
                output: musicGain,
                delay: 1.08
            }
        );
    }

    // Tiny vinyl texture at changing positions.
    createNoiseBurst(
        0.018,
        {
            filterType: "bandpass",
            cutoff: 1900,
            level: 0.0026,
            output: musicGain,
            delay:
                0.25 +
                ((musicStep * 0.31) % 1.25)
        }
    );

    musicStep++;
}

function startMatchMusic() {
    if (
        !settings.music ||
        !inMatch
    ) {
        return;
    }

    const context = ensureAudio();

    if (!context) {
        return;
    }

    if (musicInterval !== null) {
        return;
    }

    musicGain.gain.setTargetAtTime(
        0.72,
        context.currentTime,
        0.4
    );

    musicStep = 0;
    musicVariation =
        Math.floor(
            Math.random() *
            lofiProgressions.length
        );

    playLofiChord();

    musicInterval =
        setInterval(
            playLofiChord,
            2050
        );
}

function stopMatchMusic() {
    if (musicInterval !== null) {
        clearInterval(musicInterval);
        musicInterval = null;
    }

    if (
        audioContext &&
        musicGain
    ) {
        musicGain.gain.setTargetAtTime(
            0.0001,
            audioContext.currentTime,
            0.25
        );
    }
}


// Auth

function updateAuthUI() {
    const loggedIn =
        currentUser !== null;

    loginButton.classList.toggle(
        "hidden",
        loggedIn
    );

    signupButton.classList.toggle(
        "hidden",
        loggedIn
    );

    userNav.classList.toggle(
        "hidden",
        !loggedIn
    );

    notificationWrap?.classList.toggle(
        "hidden",
        !loggedIn
    );

    userDashboard.classList.toggle(
        "hidden",
        !loggedIn
    );

    accountSettingsCard.classList.toggle(
        "hidden",
        !loggedIn
    );

    if (!loggedIn) {
        navUsername.textContent = "";
        navRating.textContent = "";

        notificationPanel?.classList.add(
            "hidden"
        );

        notificationButton?.setAttribute(
            "aria-expanded",
            "false"
        );

        if (notificationBadge) {
            notificationBadge.textContent = "0";
            notificationBadge.classList.add(
                "hidden"
            );
        }

        if (dashboardAvatar) {
            dashboardAvatar.textContent =
                "♞";
        }

        if (recentMatches) {
            recentMatches.innerHTML =
                '<div class="empty-copy">Log in to see your recent games.</div>';
        }

        return;
    }

    setFlaggedName(
        navUsername,
        currentUser.country_code,
        currentUser.username
    );

    navRating.textContent =
        `${currentUser.rating} Elo`;

    setCountryFlag(
        dashboardFlag,
        currentUser.country_code
    );

    if (dashboardAvatar) {
        dashboardAvatar.textContent =
            avatarSymbol(
                currentUser.avatar_key,
                currentUser.username
            );
    }

    dashboardName.textContent =
        currentUser.username;

    dashboardRating.textContent =
        currentUser.rating;

    dashboardWins.textContent =
        currentUser.wins;

    dashboardLosses.textContent =
        currentUser.losses;

    dashboardDraws.textContent =
        currentUser.draws;

    settingsUsername.value =
        currentUser.username;

    selectedAvatarKey =
        currentUser.avatar_key ||
        "knight";

    if (settingsBio) {
        settingsBio.value =
            currentUser.profile_bio || "";
    }

    syncAvatarChoices();
    updateUsernameCooldown();
    refreshNotifications();
}

function syncAccountSettings() {
    if (!currentUser) {
        accountSettingsCard.classList.add(
            "hidden"
        );
        return;
    }

    accountSettingsCard.classList.remove(
        "hidden"
    );

    settingsUsername.value =
        currentUser.username;

    selectedAvatarKey =
        currentUser.avatar_key ||
        "knight";

    settingsBio.value =
        currentUser.profile_bio || "";

    syncAvatarChoices();
    updateUsernameCooldown();

    settingsUsernameMessage.textContent = "";
    settingsProfileMessage.textContent = "";
}

async function loadCurrentUser() {
    try {
        const response =
            await fetch(
                "/api/auth/me"
            );

        const data =
            await response.json();

        currentUser =
            data.user || null;

        updateAuthUI();
    } catch (error) {
        console.error(
            "Failed to load user:",
            error
        );

        currentUser = null;
        updateAuthUI();
    }

    loadRecentMatches();
}

function reconnectSocketForSession() {
    if (socket.connected) {
        socket.disconnect();
    }

    socket.connect();
}

async function handleGoogleCredential(
    response
) {
    if (!response?.credential) {
        showToast(
            "Google sign-in was cancelled.",
            "error"
        );
        return;
    }

    try {
        const authResponse =
            await fetch(
                "/api/auth/google",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        credential:
                            response.credential
                    })
                }
            );

        const data =
            await authResponse.json();

        if (!authResponse.ok) {
            throw new Error(
                data.error ||
                "Google sign-in failed."
            );
        }

        currentUser = data.user;
        updateAuthUI();
        reconnectSocketForSession();

        showToast(
            `Welcome, ${currentUser.username}.`,
            "success"
        );

        showHomePage();
        loadHomeLeaderboard();
        loadRecentMatches();
    } catch (error) {
        loginError.textContent =
            error.message;

        signupError.textContent =
            error.message;

        showToast(
            error.message,
            "error"
        );
    }
}

function initializeGoogleAuth() {
    if (
        !window.google?.accounts?.id
    ) {
        setTimeout(
            initializeGoogleAuth,
            250
        );
        return;
    }

    if (!googleInitialized) {
        window.google.accounts.id.initialize({
            client_id:
                GOOGLE_CLIENT_ID,

            callback:
                handleGoogleCredential,

            auto_select: false,
            cancel_on_tap_outside: true
        });

        googleInitialized = true;
    }

    const options = {
        theme: "filled_black",
        size: "large",
        shape: "pill",
        text: "continue_with",
        width: 336
    };

    if (
        googleLoginButton &&
        googleLoginButton.childElementCount === 0
    ) {
        window.google.accounts.id.renderButton(
            googleLoginButton,
            options
        );
    }

    if (
        googleSignupButton &&
        googleSignupButton.childElementCount === 0
    ) {
        window.google.accounts.id.renderButton(
            googleSignupButton,
            options
        );
    }
}


// Data Views

async function loadHomeLeaderboard() {
    try {
        const response =
            await fetch(
                "/api/leaderboard?scope=global&limit=10"
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.error ||
                "Could not load rankings."
            );
        }

        heroPlayerCount.textContent =
            Number(data.totalPlayers || 0)
                .toLocaleString();

        homeLeaderboard.innerHTML = "";

        const players =
            data.players.slice(0, 5);

        if (players.length === 0) {
            homeLeaderboard.innerHTML =
                '<div class="empty-copy">No ranked players yet.</div>';
            return;
        }

        players.forEach(function(player) {
            const row =
                document.createElement("div");

            row.className =
                "mini-row";

            const rank =
                document.createElement("span");

            rank.className =
                "rank-badge";

            rank.textContent =
                `#${player.rank}`;

            const name =
                document.createElement("strong");

            name.className =
                "player-cell";

            setFlaggedName(
                name,
                player.country_code,
                player.username
            );

            const rating =
                document.createElement("b");

            rating.className =
                "rating-cell";

            rating.textContent =
                `${player.rating}`;

            row.append(
                rank,
                name,
                rating
            );

            homeLeaderboard.appendChild(
                row
            );
        });
    } catch (error) {
        homeLeaderboard.innerHTML =
            '<div class="empty-copy">Leaderboard unavailable.</div>';
    }
}

function initializeCountryLeaderboardOptions() {
    if (!leaderboardScope) {
        return;
    }

    const existingCountryOptions =
        leaderboardScope.querySelector(
            'optgroup[data-country-options="true"]'
        );

    if (existingCountryOptions) {
        return;
    }

    const regionNames =
        typeof Intl.DisplayNames === "function"
            ? new Intl.DisplayNames(
                [navigator.language || "en"],
                { type: "region" }
            )
            : null;

    const countries =
        COUNTRY_CODES
            .map(function(code) {
                return {
                    code,
                    name:
                        regionNames?.of(code) || code
                };
            })
            .sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });

    const group =
        document.createElement("optgroup");

    group.label = "Countries";
    group.dataset.countryOptions = "true";

    countries.forEach(function(country) {
        const option =
            document.createElement("option");

        option.value =
            `country:${country.code}`;

        option.textContent =
            country.name;

        group.appendChild(option);
    });

    leaderboardScope.appendChild(group);
}


async function loadLeaderboard() {
    leaderboardList.innerHTML =
        '<div class="leaderboard-loading">Loading rankings…</div>';

    const selectedScope =
        leaderboardScope.value;

    const limit =
        leaderboardLimit.value;

    const isGlobal =
        selectedScope === "global";

    const isMyCountry =
        selectedScope === "my-country";

    const selectedCountry =
        selectedScope.startsWith("country:")
            ? selectedScope.slice(8)
            : null;

    const scope =
        isGlobal ? "global" : "country";

    const params =
        new URLSearchParams({
            scope,
            limit
        });

    if (selectedCountry) {
        params.set("country", selectedCountry);
    }

    try {
        const response =
            await fetch(
                `/api/leaderboard?${params.toString()}`
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.error ||
                "Could not load leaderboard."
            );
        }

        heroPlayerCount.textContent =
            Number(data.totalPlayers || 0)
                .toLocaleString();

        if (
            scope === "country" &&
            data.country
        ) {
            const regionNames =
                typeof Intl.DisplayNames === "function"
                    ? new Intl.DisplayNames(
                        [navigator.language || "en"],
                        { type: "region" }
                    )
                    : null;

            const countryName =
                regionNames?.of(data.country) ||
                data.country;

            leaderboardScopeNote.textContent =
                `${data.country} · ${countryName} rankings`;
        } else if (
            isMyCountry &&
            !data.country
        ) {
            leaderboardScopeNote.textContent =
                "Your country is not available yet";
        } else {
            leaderboardScopeNote.textContent =
                "Worldwide rankings";
        }

        leaderboardList.innerHTML = "";

        if (data.players.length === 0) {
            leaderboardList.innerHTML =
                '<div class="empty-copy leaderboard-empty">No players found.</div>';
            return;
        }

        data.players.forEach(function(player) {
            const row =
                document.createElement("div");

            row.className =
                "leaderboard-row";

            if (
                currentUser &&
                player.username.toLowerCase() ===
                    currentUser.username.toLowerCase()
            ) {
                row.classList.add("me");
            }

            const rank =
                document.createElement("span");

            rank.className =
                "leaderboard-rank";

            rank.textContent =
                `#${player.rank}`;

            if (player.rank <= 3) {
                rank.classList.add(
                    `top-${player.rank}`
                );
            }

            const playerCell =
                document.createElement("div");

            playerCell.className =
                "player-cell";

            const avatar =
                document.createElement("span");

            avatar.className =
                "leaderboard-avatar";

            avatar.textContent =
                avatarSymbol(
                    player.avatar_key,
                    player.username
                );

            const playerCopy =
                document.createElement("div");

            const playerName =
                document.createElement("strong");

            setFlaggedName(
                playerName,
                player.country_code,
                player.username
            );

            const country =
                document.createElement("small");

            country.textContent =
                player.country_code ||
                "Global";

            playerCopy.append(
                playerName,
                country
            );

            playerCell.append(
                avatar,
                playerCopy
            );

            const record =
                document.createElement("span");

            record.className =
                "record";

            record.textContent =
                `${player.wins}W · ${player.losses}L · ${player.draws}D`;

            const rating =
                document.createElement("strong");

            rating.className =
                "rating-cell";

            rating.textContent =
                `${player.rating}`;

            row.append(
                rank,
                playerCell,
                record,
                rating
            );

            leaderboardList.appendChild(row);
        });
    } catch (error) {
        leaderboardList.innerHTML =
            `<div class="empty-copy leaderboard-empty">${escapeText(
                error.message
            )}</div>`;
    }
}

async function loadRecentMatches() {
    if (!recentMatches) {
        return;
    }

    if (!currentUser) {
        recentMatches.innerHTML =
            '<div class="empty-copy">Log in to see your recent games.</div>';
        return;
    }

    try {
        const response =
            await fetch(
                "/api/matches/me"
            );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.error ||
                "Could not load matches."
            );
        }

        recentMatches.innerHTML = "";

        if (data.matches.length === 0) {
            recentMatches.innerHTML =
                '<div class="empty-copy">Your ranked games will appear here.</div>';
            return;
        }

        data.matches
            .slice(0, 5)
            .forEach(function(match) {
                const row =
                    document.createElement("div");

                row.className =
                    `recent-row recent-${match.outcome}`;

                const result =
                    document.createElement("span");

                result.className =
                    "recent-result";

                result.textContent =
                    match.outcome === "win"
                        ? "W"
                        : match.outcome === "loss"
                            ? "L"
                            : "D";

                const opponent =
                    document.createElement("div");

                opponent.className =
                    "recent-opponent";

                const name =
                    document.createElement("strong");

                setFlaggedName(
                    name,
                    match.opponent_country_code,
                    match.opponent_username
                );

                const reason =
                    document.createElement("small");

                reason.textContent =
                    formatReason(
                        match.reason
                    );

                opponent.append(
                    name,
                    reason
                );

                const delta =
                    document.createElement("b");

                delta.className =
                    match.rating_delta > 0
                        ? "rating-gain"
                        : match.rating_delta < 0
                            ? "rating-loss"
                            : "rating-neutral";

                delta.textContent =
                    match.rating_delta > 0
                        ? `+${match.rating_delta} Elo`
                        : `${match.rating_delta} Elo`;

                row.append(
                    result,
                    opponent,
                    delta
                );

                if (match.id) {
                    row.classList.add("clickable-match");
                    row.tabIndex = 0;
                    row.addEventListener("click", function() {
                        openStoredMatch(match.id);
                    });
                    row.addEventListener("keydown", function(event) {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openStoredMatch(match.id);
                        }
                    });
                }

                recentMatches.appendChild(
                    row
                );
            });
    } catch (error) {
        recentMatches.innerHTML =
            '<div class="empty-copy">Could not load recent matches.</div>';
    }
}


// Match UI

function setPlayerCard(
    color,
    user
) {
    const nameElement =
        color === "white"
            ? whitePlayerName
            : blackPlayerName;

    const ratingElement =
        color === "white"
            ? whitePlayerRating
            : blackPlayerRating;

    const avatarElement =
        color === "white"
            ? whiteAvatar
            : blackAvatar;

    setFlaggedName(
        nameElement,
        user?.country_code,
        user?.username || color
    );

    ratingElement.textContent =
        user?.rating ??
        "—";

    avatarElement.textContent =
        avatarSymbol(
            user?.avatar_key,
            user?.username || color
        );
}

function updateClockClasses() {
    whitePlayerCard.classList.toggle(
        "active-player",
        inMatch &&
        !gameOver &&
        clockTurn === "white"
    );

    blackPlayerCard.classList.toggle(
        "active-player",
        inMatch &&
        !gameOver &&
        clockTurn === "black"
    );

    whiteClockDisplay.classList.toggle(
        "active-clock",
        inMatch &&
        !gameOver &&
        clockTurn === "white"
    );

    blackClockDisplay.classList.toggle(
        "active-clock",
        inMatch &&
        !gameOver &&
        clockTurn === "black"
    );
}

function showMatch(
    data
) {
    resetGame();

    if (data?.fen) {
        syncBoardFromFen(
            data.fen
        );
    }

    currentMatch = data;
    lastGamePgn = data?.pgn || "";
    lastGameFen = data?.fen || "";
    isSpectating = data?.color === "spectator" || data?.mode === "spectate";

    navbar.classList.add("hidden");
    setFooterVisible(false);

    playerColor = isSpectating ? "spectator" : data.color;

    updateBoardOrientation();
    updateCoordinates();

    currentTurn = data?.currentTurn || "white";
    gameOver = false;
    inMatch = true;

    playerColorDisplay.textContent =
        isSpectating
            ? "Spectator"
            : playerColor === "white"
                ? "White"
                : "Black";

    turnDisplay.textContent =
        currentTurn === "white" ? "White" : "Black";

    gameStatus.textContent =
        isSpectating
            ? "Watching live"
            : currentTurn === playerColor
                ? "Your turn"
                : "Opponent's turn";

    setPlayerCard(
        "white",
        data.white
    );

    setPlayerCard(
        "black",
        data.black
    );

    const timeLabel =
        data.timeControlLabel ||
        TIME_CONTROL_LABELS[data.timeControlKey] ||
        "10+0 Rapid";

    gameModePill.textContent =
        isSpectating
            ? `${timeLabel} · Spectating`
            : data.mode === "bot"
                ? `${timeLabel} · ${data.opponent?.username || "Bot"} · ${data.opponent?.rating || "—"} Elo`
                : data.mode === "private"
                    ? `${timeLabel} · Private`
                    : data.rated
                        ? `${timeLabel} · Rated`
                        : `${timeLabel} · Test game`;

    hideAllPages();
    game.classList.remove("hidden");

    closeFriendModal();
    closeResultModal();

    clearMoves();
    restoreSelectedSquare();

    if (data?.pgn && (data.resume || isSpectating)) {
        restoreMoveHistoryFromPgn(data.pgn);
    }

    if (data?.clocks) {
        whiteTime = Number(data.clocks.whiteTime || whiteTime);
        blackTime = Number(data.clocks.blackTime || blackTime);
        clockTurn = currentTurn;
        clockLastUpdate = Date.now();
        renderClocks();
    }

    drawButton?.classList.toggle("hidden", isSpectating || data.mode === "bot");
    resignButton?.classList.toggle("hidden", isSpectating);
    chatInput.disabled = isSpectating;
    chatSend.disabled = isSpectating;

    renderPieces();
    updateCheckHighlight();
    updateOpeningName();

    playSfx("match");
    startMatchMusic();

    updateClockClasses();
}

function startQuickMatch(
    timeControl = selectedTimeControl
) {
    if (!currentUser) {
        showLoginPage();
        loginError.textContent =
            "Log in to play online.";
        return;
    }

    selectedTimeControl =
        TIME_CONTROL_LABELS[timeControl]
            ? timeControl
            : "rapid10";

    quickMatchModal?.classList.add("hidden");
    ensureAudio();
    hideAllPages();
    showNavbar();
    setFooterVisible(false);

    matchmaking.classList.remove("hidden");
    setActiveNav("nav-play-button");

    matchmakingTitle.textContent =
        `Finding ${TIME_CONTROL_LABELS[selectedTimeControl]}`;
    matchmakingStatus.textContent =
        "Searching for another player on the same clock…";

    socket.emit("find-match", {
        timeControl: selectedTimeControl
    });
}

function startBotMatch(
    difficulty = "club1000"
) {
    if (!currentUser) {
        showLoginPage();

        loginError.textContent =
            "Log in to play the bot.";

        return;
    }

    ensureAudio();

    botModal?.classList.add(
        "hidden"
    );

    hideAllPages();
    showNavbar();
    setFooterVisible(false);

    matchmaking.classList.remove(
        "hidden"
    );

    const botLabel =
        BOT_LABELS[difficulty] ||
        BOT_LABELS.club1000;

    matchmakingTitle.textContent =
        `Preparing ${botLabel.name}`;

    matchmakingStatus.textContent =
        `${botLabel.rating} Elo target · ${TIME_CONTROL_LABELS[botTimeControl?.value] || "10+0 Rapid"} · unrated`;

    const timeControl =
        botTimeControl?.value ||
        selectedTimeControl;

    socket.emit(
        "play-bot",
        {
            difficulty,
            timeControl
        }
    );
}

function showResult(data) {
    stopMatchMusic();

    lastGameData = data || {};
    lastGamePgn = data?.pgn || lastGamePgn || "";
    lastGameFen = data?.fen || lastGameFen || "";

    inMatch = false;
    gameOver = true;

    updateClockClasses();

    const outcome =
        data.outcome || "draw";

    const won =
        outcome === "win";

    const lost =
        outcome === "loss";

    resultKicker.textContent =
        data.rated
            ? "RATED MATCH COMPLETE"
            : "MATCH COMPLETE";

    resultIcon.textContent =
        won
            ? "♛"
            : lost
                ? "♟"
                : "½";

    resultTitle.textContent =
        won
            ? "You Win!"
            : lost
                ? "You Lose"
                : "Draw";

    resultReason.textContent =
        data.reason === "stalemate"
            ? "Stalemate · no legal moves while the king is not in check"
            : formatReason(
                data.reason
            );

    if (data.rated) {
        ratingResult.classList.remove(
            "hidden"
        );

        ratingOld.textContent =
            data.oldRating;

        ratingNew.textContent =
            data.newRating;

        const delta =
            Number(data.ratingDelta || 0);

        ratingDelta.textContent =
            delta > 0
                ? `+${delta} Elo`
                : `${delta} Elo`;

        ratingDelta.className =
            delta > 0
                ? "rating-gain"
                : delta < 0
                    ? "rating-loss"
                    : "rating-neutral";
    } else {
        ratingResult.classList.add(
            "hidden"
        );

        if (
            data.mode === "quick" &&
            currentMatch?.you?.id &&
            currentMatch?.opponent?.id &&
            String(currentMatch.you.id) ===
                String(currentMatch.opponent.id)
        ) {
            resultReason.textContent +=
                " · Same-account test games are unrated";
        }
    }

    resultModal.classList.remove(
        "hidden"
    );

    const isCheckmate =
        String(data.reason || "")
            .toLowerCase() ===
        "checkmate";

    if (isCheckmate) {
        playSfx("checkmate");

        if (won) {
            createConfetti();
        }
    } else if (won) {
        playSfx("win");
        createConfetti();
    } else if (lost) {
        playSfx("loss");
    } else {
        playSfx("draw");
    }

    loadCurrentUser();
    loadHomeLeaderboard();
}

function createConfetti() {
    if (!settings.motion) {
        return;
    }

    const colors = [
        "#8b5cf6",
        "#22d3ee",
        "#f8fafc",
        "#fbbf24",
        "#34d399"
    ];

    for (let i = 0; i < 42; i++) {
        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.style.left =
            `${10 + Math.random() * 80}%`;

        piece.style.top =
            `${25 + Math.random() * 25}%`;

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.setProperty(
            "--drift",
            `${(Math.random() - 0.5) * 420}px`
        );

        resultModal.appendChild(piece);

        setTimeout(
            function() {
                piece.remove();
            },
            1900
        );
    }
}


// Socket

socket.on(
    "waiting-for-player",
    function(data) {
        matchmakingTitle.textContent =
            "Searching…";

        matchmakingStatus.textContent =
            `Waiting for another ${data?.label || TIME_CONTROL_LABELS[selectedTimeControl] || "player"} player.`;
    }
);

socket.on(
    "match-found",
    function(data) {
        matchmakingTitle.textContent =
            "Opponent found";

        matchmakingStatus.textContent =
            data.opponent
                ? `${data.opponent.username} · ${data.opponent.rating} Elo`
                : "Starting game…";

        playSfx("match");

        setTimeout(
            function() {
                showMatch(data);
            },
            data?.resume
                ? 0
                : settings.motion
                    ? 420
                    : 0
        );
    }
);

socket.on(
    "clock-update",
    function(data) {
        whiteTime =
            data.whiteTime;

        blackTime =
            data.blackTime;

        clockTurn =
            data.currentTurn;

        clockLastUpdate =
            Date.now();

        renderClocks();
        updateClockClasses();
    }
);

socket.on(
    "opponent-move",
    function(data) {
        const receivedMove = {
            ...data.move
        };

        const sourcePiece =
            board[
                data.fromY
            ][
                data.fromX
            ];

        if (!sourcePiece) {
            return;
        }

        const movingPiece = {
            ...sourcePiece
        };

        const capturedPiece =
            getCapturedPieceForMove(
                data.fromY,
                data.fromX,
                receivedMove
            );

        const notation =
            getMoveNotation(
                data.fromY,
                data.fromX,
                receivedMove,
                movingPiece,
                capturedPiece
            );

        makeMove(
            data.fromY,
            data.fromX,
            receivedMove,
            false
        );

        recordCapturedPiece(
            movingPiece.color,
            capturedPiece
        );

        addMoveToHistory(
            notation
        );

        showLastMove(
            data.fromY,
            data.fromX,
            receivedMove.y,
            receivedMove.x
        );

        renderPieces();
        updateCheckHighlight();

        playSfx(
            capturedPiece !== null
                ? "capture"
                : "move"
        );
    }
);

socket.on(
    "position-sync",
    function(data) {
        if (
            syncBoardFromFen(
                data?.fen
            )
        ) {
            renderPieces();
            updateCheckHighlight();
        }
    }
);

socket.on(
    "turn-changed",
    function(turn) {
        currentTurn = turn;

        turnDisplay.textContent =
            turn === "white"
                ? "White"
                : "Black";

        if (!gameOver) {
            gameStatus.textContent =
                isSpectating
                    ? "Watching live"
                    : turn === playerColor
                        ? "Your turn"
                        : "Opponent's turn";
        }

        checkGameState();
    }
);

socket.on(
    "chat-message",
    function(data) {
        if (
            typeof data === "string"
        ) {
            addChatMessage(
                "Opponent",
                data
            );
            return;
        }

        const sender =
            data?.sender ||
            "Opponent";

        addChatMessage(
            currentUser &&
            sender === currentUser.username
                ? "You"
                : sender,
            data?.message || ""
        );
    }
);

socket.on(
    "chat-error",
    function(data) {
        showToast(
            data?.error ||
                "Message could not be sent.",
            "error"
        );
    }
);

socket.on(
    "emoji-reaction",
    function(data) {
        const color =
            data?.color;

        const emoji =
            data?.emoji;

        if (
            (color === "white" || color === "black") &&
            typeof emoji === "string"
        ) {
            showEmojiReaction(
                color,
                emoji
            );

            playSfx("select");
        }
    }
);

socket.on(
    "game-ended",
    function(data) {
        if (
            syncBoardFromFen(
                data?.fen
            )
        ) {
            renderPieces();
            updateCheckHighlight();
        }

        showResult(data);
    }
);

socket.on(
    "spectator-game-ended",
    function(data) {
        if (!isSpectating) {
            return;
        }

        if (syncBoardFromFen(data?.fen)) {
            renderPieces();
            updateCheckHighlight();
        }

        lastGamePgn = data?.pgn || lastGamePgn || "";
        lastGameFen = data?.fen || lastGameFen || "";
        gameOver = true;
        inMatch = false;
        updateClockClasses();
        gameStatus.textContent =
            `Game over · ${formatReason(data?.reason)}`;
        showToast(
            `Game over · ${formatReason(data?.reason)}`,
            "info"
        );
    }
);

socket.on(
    "opponent-disconnected",
    function(data) {
        if (isSpectating) {
            return;
        }

        const seconds = Math.round(
            Number(data?.graceMs || 45000) / 1000
        );

        gameStatus.textContent =
            `Opponent disconnected · waiting up to ${seconds}s for reconnect`;

        showToast(
            "Opponent disconnected. Their reconnect timer started.",
            "info"
        );
    }
);

socket.on(
    "opponent-reconnected",
    function() {
        showToast("Opponent reconnected.", "success");
        checkGameState();
    }
);

socket.on(
    "draw-offered",
    function() {
        drawOfferModal?.classList.remove("hidden");
    }
);

socket.on(
    "draw-offer-sent",
    function() {
        showToast("Draw offer sent.", "info");
    }
);

socket.on(
    "draw-declined",
    function() {
        drawOfferModal?.classList.add("hidden");
        showToast("Draw offer declined.", "info");
    }
);

socket.on(
    "spectate-started",
    function(data) {
        showMatch(data);
        showToast("Watching live game.", "info");
    }
);

socket.on(
    "spectate-error",
    function(data) {
        showToast(data?.error || "Could not spectate game.", "error");
    }
);

socket.on(
    "social-refresh",
    function() {
        if (currentUser) {
            loadSocialLists();

            if (
                activeSocialProfile &&
                !activeDmUsername
            ) {
                openPlayerProfile(
                    activeSocialProfile.username
                );
            }
        }
    }
);

socket.on(
    "direct-message",
    function(data) {
        const username =
            data?.with;

        const message =
            data?.message;

        if (
            typeof username !== "string" ||
            !message
        ) {
            return;
        }

        if (
            activeDmUsername &&
            activeDmUsername.toLowerCase() ===
                username.toLowerCase() &&
            !directMessagePanel.classList.contains(
                "hidden"
            )
        ) {
            appendDirectMessage(
                {
                    ...message,
                    mine: false
                }
            );
        } else {
            showToast(
                `New message from ${username}.`,
                "info"
            );
        }

        loadSocialLists();
    }
);

socket.on(
    "opponent-disconnected",
    function() {
        if (
            inMatch &&
            !gameOver
        ) {
            showToast(
                "Opponent disconnected.",
                "info"
            );
        }
    }
);

socket.on(
    "move-rejected",
    function(data) {
        showToast(
            data?.reason ||
            "Move rejected by server.",
            "error"
        );
    }
);

socket.on(
    "auth-required",
    function() {
        currentUser = null;
        updateAuthUI();

        showLoginPage();

        loginError.textContent =
            "Log in to play online.";
    }
);

socket.on(
    "matchmaking-error",
    function(data) {
        matchmaking.classList.add(
            "hidden"
        );

        showHomePage();

        showToast(
            data?.error ||
            "Matchmaking failed.",
            "error"
        );
    }
);

socket.on(
    "bot-engine-error",
    function(data) {
        showHomePage();

        showToast(
            data?.error ||
            "The bot engine stopped unexpectedly.",
            "error"
        );
    }
);

socket.on(
    "private-created",
    function(data) {
        privateCodePanel.classList.remove(
            "hidden"
        );

        privateCodeDisplay.textContent =
            data.code;

        privateError.textContent = "";
    }
);

socket.on(
    "private-error",
    function(data) {
        privateError.textContent =
            data?.error ||
            "Could not join private game.";
    }
);


// General Functions

function oppositeColor(color) {
    return color === "white" ? "black" : "white";
}


function isInsideBoard(y, x) {
    return (
        y >= 0 &&
        y <= 7 &&
        x >= 0 &&
        x <= 7
    );
}


function calculateColor(y, x) {
    if ((y + x) % 2 === 0) {
        return "light-square";
    }

    return "dark-square";
}

function updateBoardOrientation() {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const square =
                squareElements[y][x];

            const normalOrder =
                y * 8 + x;

            square.style.order =
                playerColor === "black"
                    ? 63 - normalOrder
                    : normalOrder;
        }
    }
}

function sendChatMessage() {

    if (
        !inMatch ||
        gameOver
    ) {
        return;
    }

    const message =
        chatInput.value
            .trim();

    if (message.length === 0) {
        return;
    }

    const cleanMessage =
        message.slice(0, 150);

    socket.emit(
        "chat-message",
        cleanMessage
    );

    chatInput.value = "";

    chatInput.focus();
}

function updateCoordinates() {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const square =
                squareElements[y][x];

            let coordinate =
                square.querySelector(
                    ".coordinate"
                );

            if (coordinate === null) {
                coordinate =
                    document.createElement(
                        "span"
                    );

                coordinate.classList.add(
                    "coordinate"
                );

                square.appendChild(
                    coordinate
                );
            }

            coordinate.textContent = "";

            const showFile =
                playerColor === "black"
                    ? y === 0
                    : y === 7;

            const showRank =
                playerColor === "black"
                    ? x === 7
                    : x === 0;

            if (showFile) {
                coordinate.dataset.file =
                    files[x];
            } else {
                delete coordinate.dataset.file;
            }

            if (showRank) {
                coordinate.dataset.rank =
                    8 - y;
            } else {
                delete coordinate.dataset.rank;
            }
        }
    }
}

function hideAllPages() {
    const pages = [
        menu,
        leaderboardPage,
        socialPage,
        settingsPage,
        privacyPage,
        termsPage,
        cookiesPage,
        fairPlayPage,
        signupPage,
        loginPage,
        matchmaking,
        game
    ];

    for (const page of pages) {
        if (page) {
            page.classList.add("hidden");
        }
    }
}

function setActiveNav(activeId) {
    const navButtons = [
        homeButton,
        navPlayButton,
        leaderboardButton,
        playersButton,
        settingsButton
    ];

    for (const button of navButtons) {
        if (!button) {
            continue;
        }

        button.classList.toggle(
            "active",
            button.id === activeId
        );
    }
}

function showNavbar() {
    navbar?.classList.remove("hidden");
}

function setFooterVisible(visible) {
    globalFooter?.classList.toggle(
        "hidden",
        !visible
    );
}

function showHomePage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    menu.classList.remove("hidden");
    setActiveNav("home-button");

    closeResultModal();
    stopMatchMusic();

    loadHomeLeaderboard();
    loadRecentMatches();
}

function showLoginPage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    loginPage.classList.remove("hidden");
    setActiveNav(null);

    loginError.textContent = "";
    stopMatchMusic();

    requestAnimationFrame(
        initializeGoogleAuth
    );
}

function showSignupPage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    signupPage.classList.remove("hidden");
    setActiveNav(null);

    signupError.textContent = "";
    stopMatchMusic();

    requestAnimationFrame(
        initializeGoogleAuth
    );
}

function showVerifyEmailPage(email) {
    hideAllPages(); showNavbar(); setFooterVisible(true);
    pendingVerificationEmail = email;
    verifyEmailAddress.textContent = email;
    verifyEmailError.textContent = "";
    verificationCode.value = "";
    verifyEmailPage.classList.remove("hidden");
    setActiveNav(null);
    verificationCode.focus();
}

function showLeaderboardPage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    leaderboardPage.classList.remove("hidden");
    setActiveNav("leaderboard-button");

    stopMatchMusic();
    loadLeaderboard();
}

function showSettingsPage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    settingsPage.classList.remove("hidden");
    setActiveNav("settings-button");

    syncSettingsControls();
    syncAccountSettings();
}

function showPrivacyPage() {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    privacyPage.classList.remove("hidden");
    setActiveNav(null);

    stopMatchMusic();
    window.scrollTo({
        top: 0,
        behavior:
            settings.motion
                ? "smooth"
                : "auto"
    });
}

function showLegalPage(page) {
    hideAllPages();
    showNavbar();
    setFooterVisible(true);
    page?.classList.remove("hidden");
    setActiveNav(null);
    stopMatchMusic();
    window.scrollTo({ top: 0, behavior: settings.motion ? "smooth" : "auto" });
}

function formatTime(milliseconds) {

    const totalSeconds =
        Math.max(
            0,
            Math.ceil(
                milliseconds / 1000
            )
        );

    const minutes =
        Math.floor(
            totalSeconds / 60
        );

    const seconds =
        totalSeconds % 60;

    return (
        `${minutes}:` +
        seconds
            .toString()
            .padStart(2, "0")
    );
}


function renderClocks() {

    let displayedWhiteTime =
        whiteTime;

    let displayedBlackTime =
        blackTime;

    const elapsed =
        Date.now() -
        clockLastUpdate;

    if (
        inMatch &&
        !gameOver
    ) {

        if (clockTurn === "white") {
            displayedWhiteTime -=
                elapsed;
        } else {
            displayedBlackTime -=
                elapsed;
        }
    }

    whiteClockDisplay.textContent =
        formatTime(
            displayedWhiteTime
        );

    blackClockDisplay.textContent =
        formatTime(
            displayedBlackTime
        );
}

function resetGame() {

    // Clear Board

    board.splice(
        0,
        board.length,

        [
            { type: "rook", color: "black", symbol: "♜" },
            { type: "knight", color: "black", symbol: "♞" },
            { type: "bishop", color: "black", symbol: "♝" },
            { type: "queen", color: "black", symbol: "♛" },
            { type: "king", color: "black", symbol: "♚" },
            { type: "bishop", color: "black", symbol: "♝" },
            { type: "knight", color: "black", symbol: "♞" },
            { type: "rook", color: "black", symbol: "♜" }
        ],

        [
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" },
            { type: "pawn", color: "black", symbol: "♟" }
        ],

        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],

        [
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" },
            { type: "pawn", color: "white", symbol: "♙" }
        ],

        [
            { type: "rook", color: "white", symbol: "♖" },
            { type: "knight", color: "white", symbol: "♘" },
            { type: "bishop", color: "white", symbol: "♗" },
            { type: "queen", color: "white", symbol: "♕" },
            { type: "king", color: "white", symbol: "♔" },
            { type: "bishop", color: "white", symbol: "♗" },
            { type: "knight", color: "white", symbol: "♘" },
            { type: "rook", color: "white", symbol: "♖" }
        ]
    );


    // Reset Game State

    selectedSquare = null;
    legalMoves = [];

    moveHistory = [];
    capturedByWhite = [];
    capturedByBlack = [];
    renderMoveHistory();
    renderCapturedPieces();

    clearLastMove();

    currentTurn = "white";
    gameOver = false;

    enPassantTarget = null;

    chatMessages.innerHTML = "";
    chatInput.value = "";

    // Reset Castling

    castlingRights.white.kingSide = true;
    castlingRights.white.queenSide = true;

    castlingRights.black.kingSide = true;
    castlingRights.black.queenSide = true;


    // Reset UI

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            squareElements[y][x]
                .classList.remove(
                    "highlighted-square",
                    "legal-move",
                    "check"
                );
        }
    }

    renderPieces();
    updateCheckHighlight();
}


// UI Functions

const emojiReactions = [
    { emoji: "😂", name: "laugh" },
    { emoji: "😭", name: "cry" },
    { emoji: "🔥", name: "fire" },
    { emoji: "💀", name: "skull" },
    { emoji: "😎", name: "cool" },
    { emoji: "🤝", name: "handshake" },
    { emoji: "👏", name: "clap" },
    { emoji: "❤️", name: "heart" },
    { emoji: "😡", name: "angry" },
    { emoji: "🤔", name: "thinking" },
    { emoji: "👀", name: "eyes" },
    { emoji: "🎯", name: "target" },
    { emoji: "⚡", name: "lightning" },
    { emoji: "👑", name: "crown" },
    { emoji: "🫡", name: "salute" },
    { emoji: "😈", name: "devil" },
    { emoji: "🥶", name: "cold" },
    { emoji: "😱", name: "shocked" },
    { emoji: "🤯", name: "mind blown" },
    { emoji: "GG", name: "good game gg" }
];

function getCapturedPieceForMove(
    fromY,
    fromX,
    move
) {
    const direct =
        board[move.y][move.x];

    if (direct !== null) {
        return { ...direct };
    }

    if (move.enPassant) {
        const movingPiece =
            board[fromY][fromX];

        const capturedY =
            movingPiece?.color === "white"
                ? move.y + 1
                : move.y - 1;

        const enPassantPiece =
            board[capturedY]?.[move.x] || null;

        return enPassantPiece
            ? { ...enPassantPiece }
            : null;
    }

    return null;
}

function recordCapturedPiece(
    capturingColor,
    piece
) {
    if (!piece) {
        return;
    }

    if (capturingColor === "white") {
        capturedByWhite.push(piece);
    } else {
        capturedByBlack.push(piece);
    }

    renderCapturedPieces();
}

function renderCapturedPieces() {
    const render = function(root, pieces) {
        if (!root) {
            return;
        }

        root.innerHTML = "";

        const order = {
            queen: 5,
            rook: 4,
            bishop: 3,
            knight: 2,
            pawn: 1
        };

        [...pieces]
            .sort(function(a, b) {
                return (order[b.type] || 0) -
                    (order[a.type] || 0);
            })
            .forEach(function(piece) {
                const img =
                    document.createElement("img");

                const colorLetter =
                    piece.color === "white"
                        ? "w"
                        : "b";

                img.src =
                    `assets/pieces/${piece.type}-${colorLetter}.svg`;

                img.alt = piece.type;
                img.title = `Captured ${piece.type}`;

                root.appendChild(img);
            });
    };

    render(
        whiteCapturedPieces,
        capturedByWhite
    );

    render(
        blackCapturedPieces,
        capturedByBlack
    );
}

function renderEmojiPicker(query = "") {
    if (!emojiList) {
        return;
    }

    const normalized =
        query.trim().toLowerCase();

    emojiList.innerHTML = "";

    emojiReactions
        .filter(function(item) {
            return (
                normalized.length === 0 ||
                item.name.includes(normalized) ||
                item.emoji.toLowerCase().includes(normalized)
            );
        })
        .forEach(function(item) {
            const button =
                document.createElement("button");

            button.type = "button";
            button.className = "emoji-option";
            button.textContent = item.emoji;
            button.title = item.name;

            button.addEventListener(
                "click",
                function() {
                    sendEmojiReaction(
                        item.emoji
                    );
                }
            );

            emojiList.appendChild(button);
        });
}

function closeEmojiPicker() {
    if (!emojiPicker) {
        return;
    }

    emojiPicker.classList.add("hidden");
    emojiButton?.setAttribute(
        "aria-expanded",
        "false"
    );
}

function showEmojiReaction(
    color,
    emoji
) {
    const card =
        color === "white"
            ? whitePlayerCard
            : blackPlayerCard;

    if (!card) {
        return;
    }

    const reaction =
        document.createElement("div");

    reaction.className =
        "player-reaction";

    const main =
        document.createElement("span");

    main.className = "reaction-emoji";
    main.textContent = emoji;
    reaction.appendChild(main);

    for (let index = 0; index < 6; index++) {
        const sparkle =
            document.createElement("span");

        sparkle.className =
            "reaction-sparkle";

        sparkle.textContent =
            index % 2 === 0
                ? "✦"
                : "·";

        sparkle.style.setProperty(
            "--spark-angle",
            `${index * 60}deg`
        );

        reaction.appendChild(sparkle);
    }

    card.appendChild(reaction);

    setTimeout(
        function() {
            reaction.remove();
        },
        settings.motion ? 1700 : 900
    );
}

function sendEmojiReaction(emoji) {
    if (
        !inMatch ||
        gameOver
    ) {
        return;
    }

    socket.emit(
        "emoji-reaction",
        emoji
    );

    showEmojiReaction(
        playerColor,
        emoji
    );

    playSfx("select");
    closeEmojiPicker();
}

function addChatMessage(
    sender,
    message
) {

    const messageElement =
        document.createElement("div");

    messageElement.classList.add(
        "chat-message"
    );

    const senderElement =
        document.createElement("strong");

    senderElement.textContent =
        `${sender}: `;

    const textElement =
        document.createElement("span");

    textElement.textContent =
        message;

    messageElement.appendChild(
        senderElement
    );

    messageElement.appendChild(
        textElement
    );

    chatMessages.appendChild(
        messageElement
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}

function getMoveNotation(
    fromY,
    fromX,
    move,
    piece,
    capturedPiece
) {

    if (move.castle === "kingSide") {
        return "O-O";
    }

    if (move.castle === "queenSide") {
        return "O-O-O";
    }

    const pieceLetters = {
        king: "K",
        queen: "Q",
        rook: "R",
        bishop: "B",
        knight: "N",
        pawn: ""
    };

    const destination =
        files[move.x] +
        (8 - move.y);

    const isCapture =
        capturedPiece !== null ||
        move.enPassant;

    let notation = "";

    if (piece.type === "pawn") {

        if (isCapture) {
            notation +=
                files[fromX] + "x";
        }

    } else {

        notation +=
            pieceLetters[piece.type];

        if (isCapture) {
            notation += "x";
        }
    }

    notation += destination;

    if (move.promotion) {

        const promotionLetters = {
            queen: "Q",
            rook: "R",
            bishop: "B",
            knight: "N"
        };

        notation +=
            "=" +
            promotionLetters[
                move.promotion
            ];
    }

    return notation;
}


function restoreMoveHistoryFromPgn(pgn) {
    if (!pgn) {
        return;
    }

    const clean = String(pgn)
        .replace(/\[[^\]]*\]/g, " ")
        .replace(/\{[^}]*\}/g, " ")
        .replace(/\([^)]*\)/g, " ")
        .replace(/\d+\.(?:\.\.)?/g, " ")
        .replace(/1-0|0-1|1\/2-1\/2|\*/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    moveHistory = clean
        ? clean.split(" ").filter(Boolean)
        : [];

    renderMoveHistory();
    updateOpeningName();
}

function detectOpeningName() {
    const moves = moveHistory
        .map(function(move) {
            return String(move || "")
                .replace(/[+#?!]/g, "")
                .trim();
        });

    const sequence = moves.join(" ");
    const openings = [
        ["e4 e5 Nf3 Nc6 Bb5", "Ruy Lopez"],
        ["e4 e5 Nf3 Nc6 Bc4", "Italian Game"],
        ["e4 c5", "Sicilian Defense"],
        ["e4 e6", "French Defense"],
        ["e4 c6", "Caro-Kann Defense"],
        ["e4 d5", "Scandinavian Defense"],
        ["e4 Nf6", "Alekhine Defense"],
        ["d4 d5 c4", "Queen's Gambit"],
        ["d4 Nf6 c4 g6", "King's Indian Defense"],
        ["d4 Nf6 c4 e6 Nc3 Bb4", "Nimzo-Indian Defense"],
        ["d4 Nf6 c4 e6 Nf3 d5", "Queen's Indian / QGD Setup"],
        ["d4 f5", "Dutch Defense"],
        ["c4", "English Opening"],
        ["Nf3", "Réti Opening"]
    ];

    for (const [prefix, name] of openings) {
        if (sequence.startsWith(prefix)) {
            return name;
        }
    }

    if (moves.length === 0) {
        return "Starting position";
    }

    return "Opening phase";
}

function updateOpeningName() {
    if (openingName) {
        openingName.textContent =
            detectOpeningName();
    }
}

function addMoveToHistory(notation) {

    moveHistory.push(notation);

    renderMoveHistory();
    updateOpeningName();
}


function renderMoveHistory() {

    moveList.innerHTML = "";

    for (
        let i = 0;
        i < moveHistory.length;
        i += 2
    ) {

        const row =
            document.createElement("div");

        row.classList.add(
            "move-row"
        );

        const number =
            document.createElement("span");

        number.classList.add(
            "move-number"
        );

        number.textContent =
            `${Math.floor(i / 2) + 1}.`;

        const whiteMove =
            document.createElement("span");

        whiteMove.classList.add(
            "move-notation"
        );

        whiteMove.textContent =
            moveHistory[i] || "";

        const blackMove =
            document.createElement("span");

        blackMove.classList.add(
            "move-notation"
        );

        blackMove.textContent =
            moveHistory[i + 1] || "";

        row.appendChild(number);
        row.appendChild(whiteMove);
        row.appendChild(blackMove);

        moveList.appendChild(row);
    }

    moveList.scrollTop =
        moveList.scrollHeight;

    if (moveCountDisplay) {
        moveCountDisplay.textContent =
            String(moveHistory.length);
    }
}

function clearLastMove() {
    if (lastMoveFrom !== null) {
        squareElements[
            lastMoveFrom.y
        ][
            lastMoveFrom.x
        ].classList.remove(
            "last-move"
        );
    }

    if (lastMoveTo !== null) {
        squareElements[
            lastMoveTo.y
        ][
            lastMoveTo.x
        ].classList.remove(
            "last-move"
        );
    }

    lastMoveFrom = null;
    lastMoveTo = null;
}


function showLastMove(
    fromY,
    fromX,
    toY,
    toX
) {
    clearLastMove();

    lastMoveFrom = {
        y: fromY,
        x: fromX
    };

    lastMoveTo = {
        y: toY,
        x: toX
    };

    squareElements[fromY][fromX]
        .classList.add(
            "last-move"
        );

    squareElements[toY][toX]
        .classList.add(
            "last-move"
        );
}

function startPieceDrag(event) {

    if (
        gameOver ||
        !inMatch ||
        currentTurn !== playerColor ||
        promotionPending
    ) {
        return;
    }

    const pieceElement =
        event.currentTarget;

    const fromY =
        Number(pieceElement.dataset.gridY);

    const fromX =
        Number(pieceElement.dataset.gridX);

    const chessPiece =
        board[fromY][fromX];

    if (
        chessPiece === null ||
        chessPiece.color !== playerColor
    ) {
        return;
    }

    event.preventDefault();

    draggedPiece = pieceElement;

    dragFromY = fromY;
    dragFromX = fromX;

    dragStarted = false;


    // Show Legal Moves

    clearMoves();
    restoreSelectedSquare();

    selectedSquare =
        squareElements[fromY][fromX];

    selectedSquare.classList.add(
        "highlighted-square"
    );

    legalMoves =
        getLegalMoves(
            fromY,
            fromX,
            chessPiece
        );

    showMoves(legalMoves);
    playSfx("select");


    // Drag Position

    document.addEventListener(
        "pointermove",
        movePieceDrag
    );

    document.addEventListener(
        "pointerup",
        endPieceDrag
    );
}

function updateDragHover(event) {

    if (dragHoverSquare !== null) {
        dragHoverSquare.classList.remove(
            "drag-hover"
        );
    }

    dragHoverSquare = null;

    const elementUnderMouse =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );

    const square =
        elementUnderMouse?.closest(
            ".square"
        );

    if (square === null) {
        return;
    }

    dragHoverSquare = square;

    dragHoverSquare.classList.add(
        "drag-hover"
    );
}

function movePieceDrag(event) {

    if (draggedPiece === null) {
        return;
    }

    dragStarted = true;

    draggedPiece.style.position =
        "fixed";

    draggedPiece.style.width =
        "52px";

    draggedPiece.style.height =
        "52px";

    draggedPiece.style.left =
        `${event.clientX - 26}px`;

    draggedPiece.style.top =
        `${event.clientY - 26}px`;

    draggedPiece.style.margin =
        "0";

    draggedPiece.style.pointerEvents =
        "none";

    draggedPiece.style.zIndex =
        "1000";

    updateDragHover(event);
}


async function endPieceDrag(event) {

    document.removeEventListener(
        "pointermove",
        movePieceDrag
    );

    document.removeEventListener(
        "pointerup",
        endPieceDrag
    );

    if (draggedPiece === null) {
        return;
    }


    // Normal click, not drag

    if (!dragStarted) {

        const fromY = dragFromY;
        const fromX = dragFromX;

        resetDraggedPiece();

        squareElements[fromY][fromX]
            .click();

        return;
    }


    // Find square underneath mouse

    const elementUnderMouse =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );

    const targetSquare =
        elementUnderMouse?.closest(
            ".square"
        );

    if (targetSquare === null) {
        resetDraggedPiece();
        return;
    }

    const toY =
        Number(targetSquare.dataset.gridY);

    const toX =
        Number(targetSquare.dataset.gridX);


    // Calculate legal moves

    const chessPiece =
        board[dragFromY][dragFromX];

    const moves =
        getLegalMoves(
            dragFromY,
            dragFromX,
            chessPiece
        );

    const legalMove =
        moves.find(function(move) {
            return (
                move.y === toY &&
                move.x === toX
            );
        });


    // Illegal move

    if (legalMove === undefined) {
        resetDraggedPiece();
        return;
    }


    // Legal move

    const fromY = dragFromY;
    const fromX = dragFromX;

    resetDraggedPiece();

    clearMoves();
    restoreSelectedSquare();

    if (
        isPromotionMove(
            fromY,
            fromX,
            legalMove
        )
    ) {
        legalMove.promotion =
            await choosePromotion(
                legalMove.y,
                legalMove.x,
                playerColor
            );
    }

    const movingPiece = {
        ...board[fromY][fromX]
    };

    const capturedPiece =
        getCapturedPieceForMove(
            fromY,
            fromX,
            legalMove
        );

    const notation =
        getMoveNotation(
            fromY,
            fromX,
            legalMove,
            movingPiece,
            capturedPiece
        );

    const promotion =
        makeMove(
            fromY,
            fromX,
            legalMove,
            false
        );

    recordCapturedPiece(
        movingPiece.color,
        capturedPiece
    );

    addMoveToHistory(notation);

    showLastMove(
        fromY,
        fromX,
        legalMove.y,
        legalMove.x
    );

    const networkMove = {
        ...legalMove
    };

    if (promotion !== null) {
        networkMove.promotion =
            promotion;
    }

    renderPieces();
    updateCheckHighlight();

    playSfx(
        capturedPiece !== null
            ? "capture"
            : "place"
    );

    socket.emit(
        "make-move",
        {
            fromY: fromY,
            fromX: fromX,
            move: networkMove
        }
    );

    gameStatus.textContent =
        "Opponent's turn";
}


function resetDraggedPiece() {
    if (dragHoverSquare !== null) {
        dragHoverSquare.classList.remove(
            "drag-hover"
        );

        dragHoverSquare = null;
    }

    if (draggedPiece !== null) {

        draggedPiece.style.position =
            "";

        draggedPiece.style.left =
            "";

        draggedPiece.style.top =
            "";

        draggedPiece.style.width =
            "";

        draggedPiece.style.height =
            "";

        draggedPiece.style.margin =
            "";

        draggedPiece.style.pointerEvents =
            "";

        draggedPiece.style.zIndex =
            "";
    }

    draggedPiece = null;

    dragFromY = null;
    dragFromX = null;

    dragStarted = false;
}

function renderPieces() {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const square =
                squareElements[y][x];

            const oldPiece =
                square.querySelector(
                    ".piece"
                );

            if (oldPiece !== null) {
                oldPiece.remove();
            }

            const chessPiece =
                board[y][x];

            if (chessPiece === null) {
                continue;
            }

            const pieceElement =
                document.createElement("img");

            const colorLetter =
                chessPiece.color === "white"
                    ? "w"
                    : "b";

            pieceElement.src =
                `assets/pieces/${chessPiece.type}-${colorLetter}.svg`;

            pieceElement.addEventListener(
                "error",
                function() {
                    const fallback =
                        document.createElement("span");

                    fallback.className =
                        `piece piece-fallback ${chessPiece.color}-piece`;

                    fallback.textContent =
                        chessPiece.symbol;

                    fallback.dataset.gridY = y;
                    fallback.dataset.gridX = x;

                    fallback.addEventListener(
                        "pointerdown",
                        startPieceDrag
                    );

                    pieceElement.replaceWith(
                        fallback
                    );
                },
                { once: true }
            );

            pieceElement.classList.add(
                "piece"
            );

            pieceElement.dataset.gridY = y;
            pieceElement.dataset.gridX = x;

            pieceElement.addEventListener(
                "pointerdown",
                startPieceDrag
            );

            pieceElement.alt =
                `${chessPiece.color} ${chessPiece.type}`;

            pieceElement.draggable = false;

            square.appendChild(
                pieceElement
            );
        }
    }
}


function clearMoves() {

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            squareElements[y][x]
                .classList.remove(
                    "legal-move"
                );
        }
    }

    legalMoves = [];
}


function showMoves(moves) {
    for (const move of moves) {
        squareElements[move.y][move.x]
            .classList.add("legal-move");
    }
}

function restoreSelectedSquare() {

    if (selectedSquare === null) {
        return;
    }

    selectedSquare.classList.remove(
        "highlighted-square"
    );

    selectedSquare = null;
}


function updateCheckHighlight() {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            squareElements[y][x]
                .classList.remove("check");
        }
    }

    for (const color of ["white", "black"]) {

        const king = findKing(color);

        if (
            king !== null &&
            isKingInCheck(color)
        ) {
            squareElements[king.y][king.x]
                .classList.add("check");
        }
    }
}


// King Functions

function findKing(color) {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const piece = board[y][x];

            if (
                piece !== null &&
                piece.type === "king" &&
                piece.color === color
            ) {
                return {
                    y: y,
                    x: x
                };
            }
        }
    }

    return null;
}


// Pawn Moves

function getPawnMoves(gridY, gridX, piece) {
    const moves = [];

    const direction =
        piece.color === "white" ? -1 : 1;

    const startingRow =
        piece.color === "white" ? 6 : 1;

    const oneForward =
        gridY + direction;

    if (
        isInsideBoard(oneForward, gridX) &&
        board[oneForward][gridX] === null
    ) {
        moves.push({
            y: oneForward,
            x: gridX
        });

        const twoForward =
            gridY + direction * 2;

        if (
            gridY === startingRow &&
            board[twoForward][gridX] === null
        ) {
            moves.push({
                y: twoForward,
                x: gridX,
                doublePawnMove: true
            });
        }
    }

    for (const offsetX of [-1, 1]) {

        const targetY =
            gridY + direction;

        const targetX =
            gridX + offsetX;

        if (!isInsideBoard(targetY, targetX)) {
            continue;
        }

        const targetPiece =
            board[targetY][targetX];

        if (
            targetPiece !== null &&
            targetPiece.color !== piece.color &&
            targetPiece.type !== "king"
        ) {
            moves.push({
                y: targetY,
                x: targetX
            });
        }

        if (
            enPassantTarget !== null &&
            enPassantTarget.y === targetY &&
            enPassantTarget.x === targetX
        ) {
            moves.push({
                y: targetY,
                x: targetX,
                enPassant: true
            });
        }
    }

    return moves;
}


// Sliding Moves

function getSlidingMoves(
    gridY,
    gridX,
    piece,
    directions
) {
    const moves = [];

    for (const direction of directions) {

        let y =
            gridY + direction.y;

        let x =
            gridX + direction.x;

        while (isInsideBoard(y, x)) {

            const targetPiece =
                board[y][x];

            if (targetPiece === null) {

                moves.push({
                    y: y,
                    x: x
                });

            } else {

                if (
                    targetPiece.color !== piece.color &&
                    targetPiece.type !== "king"
                ) {
                    moves.push({
                        y: y,
                        x: x
                    });
                }

                break;
            }

            y += direction.y;
            x += direction.x;
        }
    }

    return moves;
}


// Rook Moves

function getRookMoves(gridY, gridX, piece) {
    return getSlidingMoves(
        gridY,
        gridX,
        piece,
        [
            { y: 1, x: 0 },
            { y: -1, x: 0 },
            { y: 0, x: 1 },
            { y: 0, x: -1 }
        ]
    );
}


// Bishop Moves

function getBishopMoves(gridY, gridX, piece) {
    return getSlidingMoves(
        gridY,
        gridX,
        piece,
        [
            { y: 1, x: 1 },
            { y: 1, x: -1 },
            { y: -1, x: 1 },
            { y: -1, x: -1 }
        ]
    );
}


// Queen Moves

function getQueenMoves(gridY, gridX, piece) {
    return getSlidingMoves(
        gridY,
        gridX,
        piece,
        [
            { y: 1, x: 0 },
            { y: -1, x: 0 },
            { y: 0, x: 1 },
            { y: 0, x: -1 },

            { y: 1, x: 1 },
            { y: 1, x: -1 },
            { y: -1, x: 1 },
            { y: -1, x: -1 }
        ]
    );
}


// Knight Moves

function getKnightMoves(gridY, gridX, piece) {
    const moves = [];

    const possibleMoves = [
        { y: -2, x: -1 },
        { y: -2, x: 1 },

        { y: -1, x: -2 },
        { y: -1, x: 2 },

        { y: 1, x: -2 },
        { y: 1, x: 2 },

        { y: 2, x: -1 },
        { y: 2, x: 1 }
    ];

    for (const move of possibleMoves) {

        const y =
            gridY + move.y;

        const x =
            gridX + move.x;

        if (!isInsideBoard(y, x)) {
            continue;
        }

        const targetPiece =
            board[y][x];

        if (
            targetPiece === null ||
            (
                targetPiece.color !== piece.color &&
                targetPiece.type !== "king"
            )
        ) {
            moves.push({
                y: y,
                x: x
            });
        }
    }

    return moves;
}


// King Moves

function getKingMoves(
    gridY,
    gridX,
    piece,
    includeCastling = true
) {
    const moves = [];

    const possibleMoves = [
        { y: -1, x: -1 },
        { y: -1, x: 0 },
        { y: -1, x: 1 },

        { y: 0, x: -1 },
        { y: 0, x: 1 },

        { y: 1, x: -1 },
        { y: 1, x: 0 },
        { y: 1, x: 1 }
    ];

    for (const move of possibleMoves) {

        const y =
            gridY + move.y;

        const x =
            gridX + move.x;

        if (!isInsideBoard(y, x)) {
            continue;
        }

        const targetPiece =
            board[y][x];

        if (
            targetPiece === null ||
            (
                targetPiece.color !== piece.color &&
                targetPiece.type !== "king"
            )
        ) {
            moves.push({
                y: y,
                x: x
            });
        }
    }

    if (includeCastling) {
        const castleMoves =
            getCastlingMoves(
                gridY,
                gridX,
                piece
            );

        moves.push(...castleMoves);
    }

    return moves;
}


// Legal Moves

function getPseudoLegalMoves(
    gridY,
    gridX,
    piece,
    includeCastling = true
) {
    if (piece.type === "pawn") {
        return getPawnMoves(
            gridY,
            gridX,
            piece
        );
    }

    if (piece.type === "rook") {
        return getRookMoves(
            gridY,
            gridX,
            piece
        );
    }

    if (piece.type === "bishop") {
        return getBishopMoves(
            gridY,
            gridX,
            piece
        );
    }

    if (piece.type === "knight") {
        return getKnightMoves(
            gridY,
            gridX,
            piece
        );
    }

    if (piece.type === "queen") {
        return getQueenMoves(
            gridY,
            gridX,
            piece
        );
    }

    if (piece.type === "king") {
        return getKingMoves(
            gridY,
            gridX,
            piece,
            includeCastling
        );
    }

    return [];
}


function getLegalMoves(gridY, gridX, piece) {
    const pseudoMoves =
        getPseudoLegalMoves(
            gridY,
            gridX,
            piece
        );

    const moves = [];

    for (const move of pseudoMoves) {

        const causesCheck =
            wouldMoveCauseCheck(
                gridY,
                gridX,
                move,
                piece.color
            );

        if (!causesCheck) {
            moves.push(move);
        }
    }

    return moves;
}


// Check Functions

function isSquareAttacked(
    targetY,
    targetX,
    defendingColor
) {
    const enemyColor =
        oppositeColor(defendingColor);

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const piece =
                board[y][x];

            if (
                piece === null ||
                piece.color !== enemyColor
            ) {
                continue;
            }

            if (piece.type === "pawn") {

                const direction =
                    piece.color === "white" ? -1 : 1;

                if (
                    y + direction === targetY &&
                    (
                        x - 1 === targetX ||
                        x + 1 === targetX
                    )
                ) {
                    return true;
                }

                continue;
            }

            if (piece.type === "knight") {

                const yDistance =
                    Math.abs(y - targetY);

                const xDistance =
                    Math.abs(x - targetX);

                if (
                    (
                        yDistance === 2 &&
                        xDistance === 1
                    ) ||
                    (
                        yDistance === 1 &&
                        xDistance === 2
                    )
                ) {
                    return true;
                }

                continue;
            }

            if (piece.type === "king") {

                const yDistance =
                    Math.abs(y - targetY);

                const xDistance =
                    Math.abs(x - targetX);

                if (
                    yDistance <= 1 &&
                    xDistance <= 1 &&
                    (
                        yDistance !== 0 ||
                        xDistance !== 0
                    )
                ) {
                    return true;
                }

                continue;
            }

            const yDifference =
                targetY - y;

            const xDifference =
                targetX - x;

            let directionY = 0;
            let directionX = 0;

            if (
                piece.type === "rook" ||
                piece.type === "queen"
            ) {
                if (
                    yDifference === 0 &&
                    xDifference !== 0
                ) {
                    directionX =
                        Math.sign(xDifference);
                }

                else if (
                    xDifference === 0 &&
                    yDifference !== 0
                ) {
                    directionY =
                        Math.sign(yDifference);
                }
            }

            if (
                piece.type === "bishop" ||
                piece.type === "queen"
            ) {
                if (
                    Math.abs(yDifference) ===
                    Math.abs(xDifference)
                ) {
                    directionY =
                        Math.sign(yDifference);

                    directionX =
                        Math.sign(xDifference);
                }
            }

            if (
                directionY === 0 &&
                directionX === 0
            ) {
                continue;
            }

            let checkY =
                y + directionY;

            let checkX =
                x + directionX;

            while (
                checkY !== targetY ||
                checkX !== targetX
            ) {
                if (
                    board[checkY][checkX] !== null
                ) {
                    break;
                }

                checkY += directionY;
                checkX += directionX;
            }

            if (
                checkY === targetY &&
                checkX === targetX
            ) {
                return true;
            }
        }
    }

    return false;
}


function isKingInCheck(color) {
    const king =
        findKing(color);

    if (king === null) {
        return false;
    }

    return isSquareAttacked(
        king.y,
        king.x,
        color
    );
}


function wouldMoveCauseCheck(
    fromY,
    fromX,
    move,
    color
) {
    const movingPiece =
        board[fromY][fromX];

    const capturedPiece =
        board[move.y][move.x];

    let enPassantCapturedPiece = null;
    let enPassantCapturedY = null;
    let enPassantCapturedX = null;

    let rookPiece = null;
    let rookFromX = null;
    let rookToX = null;

    board[move.y][move.x] =
        movingPiece;

    board[fromY][fromX] =
        null;

    if (move.enPassant) {

        enPassantCapturedY =
            fromY;

        enPassantCapturedX =
            move.x;

        enPassantCapturedPiece =
            board[
                enPassantCapturedY
            ][
                enPassantCapturedX
            ];

        board[
            enPassantCapturedY
        ][
            enPassantCapturedX
        ] = null;
    }

    if (move.castle) {

        const row =
            fromY;

        if (
            move.castle === "kingSide"
        ) {
            rookFromX = 7;
            rookToX = 5;
        }

        else {
            rookFromX = 0;
            rookToX = 3;
        }

        rookPiece =
            board[row][rookFromX];

        board[row][rookToX] =
            rookPiece;

        board[row][rookFromX] =
            null;
    }

    const inCheck =
        isKingInCheck(color);

    if (move.castle) {

        board[fromY][rookFromX] =
            rookPiece;

        board[fromY][rookToX] =
            null;
    }

    if (move.enPassant) {

        board[
            enPassantCapturedY
        ][
            enPassantCapturedX
        ] = enPassantCapturedPiece;
    }

    board[fromY][fromX] =
        movingPiece;

    board[move.y][move.x] =
        capturedPiece;

    return inCheck;
}


// Castling

function getCastlingMoves(
    gridY,
    gridX,
    piece
) {
    const moves = [];

    if (piece.type !== "king") {
        return moves;
    }

    const color = piece.color;

    const homeRow =
        color === "white" ? 7 : 0;

    if (
        gridY !== homeRow ||
        gridX !== 4
    ) {
        return moves;
    }

    if (isKingInCheck(color)) {
        return moves;
    }

    if (castlingRights[color].kingSide) {

        const rook =
            board[homeRow][7];

        if (
            rook !== null &&
            rook.type === "rook" &&
            rook.color === color &&
            board[homeRow][5] === null &&
            board[homeRow][6] === null &&
            !isSquareAttacked(
                homeRow,
                5,
                color
            ) &&
            !isSquareAttacked(
                homeRow,
                6,
                color
            )
        ) {
            moves.push({
                y: homeRow,
                x: 6,
                castle: "kingSide"
            });
        }
    }

    if (castlingRights[color].queenSide) {

        const rook =
            board[homeRow][0];

        if (
            rook !== null &&
            rook.type === "rook" &&
            rook.color === color &&
            board[homeRow][1] === null &&
            board[homeRow][2] === null &&
            board[homeRow][3] === null &&
            !isSquareAttacked(
                homeRow,
                3,
                color
            ) &&
            !isSquareAttacked(
                homeRow,
                2,
                color
            )
        ) {
            moves.push({
                y: homeRow,
                x: 2,
                castle: "queenSide"
            });
        }
    }

    return moves;
}


function updateCastlingRights(
    movingPiece,
    fromY,
    fromX,
    capturedPiece,
    toY,
    toX
) {
    const color =
        movingPiece.color;

    if (movingPiece.type === "king") {

        castlingRights[color].kingSide =
            false;

        castlingRights[color].queenSide =
            false;
    }

    if (movingPiece.type === "rook") {

        if (
            color === "white" &&
            fromY === 7 &&
            fromX === 0
        ) {
            castlingRights.white.queenSide =
                false;
        }

        if (
            color === "white" &&
            fromY === 7 &&
            fromX === 7
        ) {
            castlingRights.white.kingSide =
                false;
        }

        if (
            color === "black" &&
            fromY === 0 &&
            fromX === 0
        ) {
            castlingRights.black.queenSide =
                false;
        }

        if (
            color === "black" &&
            fromY === 0 &&
            fromX === 7
        ) {
            castlingRights.black.kingSide =
                false;
        }
    }

    if (
        capturedPiece !== null &&
        capturedPiece.type === "rook"
    ) {
        if (
            capturedPiece.color === "white" &&
            toY === 7 &&
            toX === 0
        ) {
            castlingRights.white.queenSide =
                false;
        }

        if (
            capturedPiece.color === "white" &&
            toY === 7 &&
            toX === 7
        ) {
            castlingRights.white.kingSide =
                false;
        }

        if (
            capturedPiece.color === "black" &&
            toY === 0 &&
            toX === 0
        ) {
            castlingRights.black.queenSide =
                false;
        }

        if (
            capturedPiece.color === "black" &&
            toY === 0 &&
            toX === 7
        ) {
            castlingRights.black.kingSide =
                false;
        }
    }
}

function choosePromotion(y, x, color) {

    promotionPending = true;

    return new Promise(function(resolve) {

        const square =
            squareElements[y][x];

        const menu =
            document.createElement("div");

        menu.classList.add(
            "promotion-menu"
        );

        const choices = [
            "queen",
            "rook",
            "bishop",
            "knight"
        ];

        for (const choice of choices) {

            const option =
                document.createElement("button");

            option.classList.add(
                "promotion-option"
            );

            const image =
                document.createElement("img");

            const colorLetter =
                color === "white"
                    ? "w"
                    : "b";

            image.src =
                `assets/pieces/${choice}-${colorLetter}.svg`;

            image.draggable = false;

            option.appendChild(image);

            option.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    menu.remove();

                    promotionPending = false;

                    resolve(choice);
                }
            );

            menu.appendChild(option);
        }

        square.appendChild(menu);
    });
}

function isPromotionMove(fromY, fromX, move) {

    const piece =
        board[fromY][fromX];

    if (
        piece === null ||
        piece.type !== "pawn"
    ) {
        return false;
    }

    return (
        move.y === 0 ||
        move.y === 7
    );
}

// Promotion

function promotePawn(
    y,
    x,
    promotionChoice = null,
    allowPrompt = true
) {
    const pawn =
        board[y][x];

    if (
        pawn === null ||
        pawn.type !== "pawn"
    ) {
        return null;
    }

    if (
        y !== 0 &&
        y !== 7
    ) {
        return null;
    }

    let choice = promotionChoice;

    if (
        choice === null &&
        allowPrompt
    ) {
        choice = prompt(
            "Promote to: queen, rook, bishop, or knight",
            "queen"
        );
    }

    if (choice === null) {
        choice = "queen";
    }

    choice =
        choice
            .toLowerCase()
            .trim();

    const allowed = [
        "queen",
        "rook",
        "bishop",
        "knight"
    ];

    if (!allowed.includes(choice)) {
        choice = "queen";
    }

    const symbols = {
        white: {
            queen: "♕",
            rook: "♖",
            bishop: "♗",
            knight: "♘"
        },

        black: {
            queen: "♛",
            rook: "♜",
            bishop: "♝",
            knight: "♞"
        }
    };

    pawn.type = choice;

    pawn.symbol =
        symbols[pawn.color][choice];

    return choice;
}

// Move Piece

function makeMove(
    fromY,
    fromX,
    move,
    allowPromotionPrompt = true
) {
    const movingPiece =
        board[fromY][fromX];

    if (movingPiece === null) {
        return null;
    }

    const capturedPiece =
        board[move.y][move.x];

    updateCastlingRights(
        movingPiece,
        fromY,
        fromX,
        capturedPiece,
        move.y,
        move.x
    );

    board[move.y][move.x] =
        movingPiece;

    board[fromY][fromX] =
        null;


    // En Passant

    if (move.enPassant) {
        board[fromY][move.x] =
            null;
    }


    // King Side Castle

    if (move.castle === "kingSide") {

        const rook =
            board[fromY][7];

        board[fromY][5] =
            rook;

        board[fromY][7] =
            null;
    }


    // Queen Side Castle

    if (move.castle === "queenSide") {

        const rook =
            board[fromY][0];

        board[fromY][3] =
            rook;

        board[fromY][0] =
            null;
    }


    // En Passant Target

    enPassantTarget = null;

    if (
        movingPiece.type === "pawn" &&
        Math.abs(move.y - fromY) === 2
    ) {
        enPassantTarget = {
            y: (fromY + move.y) / 2,
            x: fromX
        };
    }


    // Promotion

    const promotion =
        promotePawn(
            move.y,
            move.x,
            move.promotion || null,
            allowPromotionPrompt
        );

    return promotion;
}


// Game State

function hasAnyLegalMove(color) {
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            const piece =
                board[y][x];

            if (
                piece === null ||
                piece.color !== color
            ) {
                continue;
            }

            const moves =
                getLegalMoves(
                    y,
                    x,
                    piece
                );

            if (moves.length > 0) {
                return true;
            }
        }
    }

    return false;
}


function checkGameState() {
    updateCheckHighlight();

    if (
        gameOver ||
        !inMatch
    ) {
        return;
    }

    if (isKingInCheck(currentTurn)) {
        gameStatus.textContent =
            isSpectating
                ? `${currentTurn === "white" ? "White" : "Black"} is in check`
                : currentTurn === playerColor
                    ? "Your king is in check!"
                    : "Opponent is in check!";
        return;
    }

    if (isSpectating) {
        gameStatus.textContent = "Watching live";
        return;
    }

    gameStatus.textContent =
        currentTurn === playerColor
            ? "Your turn"
            : "Opponent's turn";
}

// Square Click

async function squareClick(event) {

    if (
        gameOver ||
        !inMatch
    ) {
        return;
    }

    if (promotionPending) {
        return;
    }

    if (currentTurn !== playerColor) {
        gameStatus.textContent =
            "Opponent's turn";

        return;
    }

    const square =
        event.currentTarget;

    const gridY =
        Number(square.dataset.gridY);

    const gridX =
        Number(square.dataset.gridX);

    const clickedPiece =
        board[gridY][gridX];

    const legalMove =
        legalMoves.find(function(move) {
            return (
                move.y === gridY &&
                move.x === gridX
            );
        });


    // Make Move

    if (
        legalMove !== undefined &&
        selectedSquare !== null
    ) {
        const oldGridY =
            Number(
                selectedSquare.dataset.gridY
            );

        const oldGridX =
            Number(
                selectedSquare.dataset.gridX
            );

        clearMoves();
        restoreSelectedSquare();

        if (
            isPromotionMove(
                oldGridY,
                oldGridX,
                legalMove
            )
        ) {
            legalMove.promotion =
                await choosePromotion(
                    legalMove.y,
                    legalMove.x,
                    playerColor
                );
        }

        const movingPiece = {
            ...board[oldGridY][oldGridX]
        };

        const capturedPiece =
            getCapturedPieceForMove(
                oldGridY,
                oldGridX,
                legalMove
            );

        const notation =
            getMoveNotation(
                oldGridY,
                oldGridX,
                legalMove,
                movingPiece,
                capturedPiece
            );

        const promotion =
            makeMove(
                oldGridY,
                oldGridX,
                legalMove,
                false
            );

        recordCapturedPiece(
            movingPiece.color,
            capturedPiece
        );

        addMoveToHistory(notation);
        
        showLastMove(
            oldGridY,
            oldGridX,
            legalMove.y,
            legalMove.x
        );

        const networkMove = {
            ...legalMove
        };

        if (promotion !== null) {
            networkMove.promotion =
                promotion;
        }

        renderPieces();
        updateCheckHighlight();

        playSfx(
            capturedPiece !== null
                ? "capture"
                : "move"
        );

        socket.emit(
            "make-move",
            {
                fromY: oldGridY,
                fromX: oldGridX,
                move: networkMove
            }
        );

        gameStatus.textContent =
            "Opponent's turn";

        return;
    }


    // Clear Selection

    clearMoves();
    restoreSelectedSquare();


    // Empty Square

    if (clickedPiece === null) {
        return;
    }


    // Cannot Select Opponent Piece

    if (
        clickedPiece.color !==
        playerColor
    ) {
        return;
    }


    // Select Piece

    selectedSquare = square;

    selectedSquare.classList.add(
        "highlighted-square"
    );

        legalMoves =
            getLegalMoves(
                gridY,
                gridX,
                clickedPiece
            );

        showMoves(legalMoves);
    }

// Create Board

function populateBoard(
    rows,
    columns
) {
    for (let y = 0; y < rows; y++) {

        squareElements[y] = [];

        for (
            let x = 0;
            x < columns;
            x++
        ) {
            const square =
                document.createElement("div");

            square.classList.add(
                "square"
            );

            squareElements[y][x] =
                square;

            const file =
                files[x];

            const rank =
                8 - y;

            square.dataset.square =
                `${file}${rank}`;

            square.dataset.gridY =
                y;

            square.dataset.gridX =
                x;

            const coordinate =
                document.createElement(
                    "span"
                );

            coordinate.classList.add(
                "coordinate"
            );

            square.appendChild(
                coordinate
            );

            square.classList.add(
                calculateColor(y, x)
            );

            square.addEventListener(
                "click",
                squareClick
            );

            chessBoard.appendChild(
                square
            );
        }
    }

    renderPieces();
}





// Social

async function fetchJson(
    url,
    options = {}
) {
    const response =
        await fetch(url, options);

    let data = {};

    try {
        data =
            await response.json();
    } catch (error) {
        data = {};
    }

    if (!response.ok) {
        throw new Error(
            data.error ||
            "Something went wrong."
        );
    }

    return data;
}

function socialRelationshipLabel(state) {
    const labels = {
        none: "Add friend",
        outgoing: "Request sent",
        incoming: "Accept request",
        friends: "Friends",
        self: "You"
    };

    return labels[state] ||
        "Player";
}

function createSocialPlayerRow(
    player,
    {
        request = false,
        friend = false
    } = {}
) {
    const row =
        document.createElement("div");

    row.className =
        "social-player-row";

    const openButton =
        document.createElement("button");

    openButton.type = "button";
    openButton.className =
        "social-player-open";

    const avatar =
        document.createElement("span");

    avatar.className =
        "social-player-avatar";

    avatar.textContent =
        avatarSymbol(
            player.avatar_key,
            player.username
        );

    const copy =
        document.createElement("span");

    copy.className =
        "social-player-copy";

    const name =
        document.createElement("strong");

    setFlaggedName(
        name,
        player.country_code,
        player.username
    );

    const meta =
        document.createElement("small");

    const presenceLabel =
        player.presence === "in_game"
            ? "In game"
            : player.presence === "online"
                ? "Online"
                : "Offline";

    meta.textContent =
        `${player.rating} Elo · ${presenceLabel}`;

    copy.append(
        name,
        meta
    );

    openButton.append(
        avatar,
        copy
    );

    openButton.addEventListener(
        "click",
        function() {
            openPlayerProfile(
                player.username
            );
        }
    );

    row.appendChild(openButton);

    const actions =
        document.createElement("div");

    actions.className =
        "social-row-actions";

    if (request) {
        const accept =
            document.createElement("button");

        accept.type = "button";
        accept.className =
            "mini-action accept";

        accept.textContent = "Accept";

        accept.addEventListener(
            "click",
            async function() {
                await respondToFriendRequest(
                    player.username,
                    "accept"
                );
            }
        );

        const decline =
            document.createElement("button");

        decline.type = "button";
        decline.className =
            "mini-action";

        decline.textContent = "Decline";

        decline.addEventListener(
            "click",
            async function() {
                await respondToFriendRequest(
                    player.username,
                    "decline"
                );
            }
        );

        actions.append(
            accept,
            decline
        );
    } else if (friend) {
        const message =
            document.createElement("button");

        message.type = "button";
        message.className =
            "mini-action";

        message.textContent =
            player.unread_count > 0
                ? `Chat ${player.unread_count}`
                : "Chat";

        message.addEventListener(
            "click",
            function() {
                activeSocialProfile = {
                    ...player,
                    friendship: "friends"
                };

                openDirectMessages(
                    player.username
                );
            }
        );

        actions.appendChild(message);
    } else {
        const status =
            document.createElement("span");

        status.className =
            "social-status";

        status.textContent =
            socialRelationshipLabel(
                player.friendship
            );

        actions.appendChild(status);
    }

    if (actions.childElementCount > 0) {
        row.appendChild(actions);
    }

    return row;
}

async function searchPlayers() {
    if (!currentUser) {
        showLoginPage();
        return;
    }

    const query =
        playerSearchInput.value
            .trim();

    if (!query) {
        playerSearchResults.innerHTML =
            '<p class="social-empty-copy">Type a username to search.</p>';
        return;
    }

    playerSearchResults.innerHTML =
        '<p class="social-empty-copy">Searching…</p>';

    try {
        const data =
            await fetchJson(
                `/api/players/search?q=${encodeURIComponent(
                    query
                )}`
            );

        playerSearchResults.innerHTML = "";

        if (
            !Array.isArray(data.players) ||
            data.players.length === 0
        ) {
            playerSearchResults.innerHTML =
                '<p class="social-empty-copy">No players found.</p>';
            return;
        }

        for (const player of data.players) {
            playerSearchResults.appendChild(
                createSocialPlayerRow(
                    player
                )
            );
        }
    } catch (error) {
        playerSearchResults.innerHTML =
            `<p class="social-empty-copy">${escapeText(
                error.message
            )}</p>`;
    }
}

function renderNotifications(
    requests = [],
    friends = []
) {
    if (
        !notificationList ||
        !notificationBadge
    ) {
        return;
    }

    const unreadFriends = friends.filter(
        function(friend) {
            return Number(friend.unread_count || 0) > 0;
        }
    );

    const unreadMessages = unreadFriends.reduce(
        function(total, friend) {
            return total + Number(friend.unread_count || 0);
        },
        0
    );

    const total =
        requests.length + unreadMessages;

    notificationBadge.textContent =
        total > 99 ? "99+" : String(total);

    notificationBadge.classList.toggle(
        "hidden",
        total === 0
    );

    notificationList.innerHTML = "";

    if (total === 0) {
        notificationList.innerHTML =
            '<p class="notification-empty">You\'re all caught up.</p>';
        return;
    }

    for (const player of requests) {
        const row = document.createElement("div");
        row.className = "notification-item";

        const avatar = document.createElement("div");
        avatar.className = "notification-avatar";
        avatar.textContent = avatarSymbol(
            player.avatar_key,
            player.username
        );

        const copy = document.createElement("div");
        copy.className = "notification-copy";

        const title = document.createElement("strong");
        title.textContent = player.username;

        const text = document.createElement("span");
        text.textContent = "sent you a friend request";

        copy.append(title, text);

        const actions = document.createElement("div");
        actions.className = "notification-actions";

        const accept = document.createElement("button");
        accept.type = "button";
        accept.className = "notification-accept";
        accept.textContent = "Accept";
        accept.addEventListener(
            "click",
            async function(event) {
                event.stopPropagation();
                await respondToFriendRequest(
                    player.username,
                    "accept"
                );
                refreshNotifications();
            }
        );

        const view = document.createElement("button");
        view.type = "button";
        view.className = "notification-view";
        view.textContent = "View";
        view.addEventListener(
            "click",
            function(event) {
                event.stopPropagation();
                closeNotificationPanel();
                openPlayerProfile(player.username);
            }
        );

        actions.append(accept, view);
        row.append(avatar, copy, actions);
        notificationList.appendChild(row);
    }

    for (const friend of unreadFriends) {
        const count = Number(friend.unread_count || 0);
        const row = document.createElement("button");
        row.type = "button";
        row.className = "notification-item notification-message-item";

        const avatar = document.createElement("div");
        avatar.className = "notification-avatar";
        avatar.textContent = avatarSymbol(
            friend.avatar_key,
            friend.username
        );

        const copy = document.createElement("div");
        copy.className = "notification-copy";

        const title = document.createElement("strong");
        title.textContent = friend.username;

        const text = document.createElement("span");
        text.textContent =
            `${count} unread message${count === 1 ? "" : "s"}`;

        copy.append(title, text);

        const arrow = document.createElement("span");
        arrow.className = "notification-arrow";
        arrow.textContent = "→";

        row.append(avatar, copy, arrow);
        row.addEventListener(
            "click",
            async function() {
                closeNotificationPanel();
                showSocialPage(false);
                await openDirectMessages(friend.username);
                refreshNotifications();
            }
        );

        notificationList.appendChild(row);
    }
}

async function refreshNotifications() {
    if (!currentUser) {
        return;
    }

    try {
        const [friendsData, requestsData] =
            await Promise.all([
                fetchJson("/api/social/friends"),
                fetchJson("/api/social/requests")
            ]);

        renderNotifications(
            Array.isArray(requestsData.requests)
                ? requestsData.requests
                : [],
            Array.isArray(friendsData.friends)
                ? friendsData.friends
                : []
        );
    } catch (error) {
        console.warn(
            "Could not refresh notifications:",
            error.message
        );
    }
}

function closeNotificationPanel() {
    notificationPanel?.classList.add("hidden");
    notificationButton?.setAttribute(
        "aria-expanded",
        "false"
    );
}

async function loadSocialLists() {
    if (!currentUser) {
        return;
    }

    try {
        const [
            friendsData,
            requestsData
        ] = await Promise.all([
            fetchJson(
                "/api/social/friends"
            ),
            fetchJson(
                "/api/social/requests"
            )
        ]);

        const friends =
            Array.isArray(
                friendsData.friends
            )
                ? friendsData.friends
                : [];

        const requests =
            Array.isArray(
                requestsData.requests
            )
                ? requestsData.requests
                : [];

        friendCount.textContent =
            String(friends.length);

        friendRequestCount.textContent =
            String(requests.length);

        friendList.innerHTML = "";
        friendRequestList.innerHTML = "";

        if (friends.length === 0) {
            friendList.innerHTML =
                '<p class="social-empty-copy">Add a player to start chatting.</p>';
        } else {
            for (const player of friends) {
                friendList.appendChild(
                    createSocialPlayerRow(
                        player,
                        {
                            friend: true
                        }
                    )
                );
            }
        }

        if (requests.length === 0) {
            friendRequestList.innerHTML =
                '<p class="social-empty-copy">No pending requests.</p>';
        } else {
            for (const player of requests) {
                friendRequestList.appendChild(
                    createSocialPlayerRow(
                        player,
                        {
                            request: true
                        }
                    )
                );
            }
        }

        renderNotifications(
            requests,
            friends
        );
    } catch (error) {
        showToast(
            error.message,
            "error"
        );
    }
}

function renderProfileRecentGames(matches) {
    profileRecentGames.innerHTML = "";

    if (
        !Array.isArray(matches) ||
        matches.length === 0
    ) {
        profileRecentGames.innerHTML =
            '<p class="social-empty-copy">No rated games yet.</p>';
        return;
    }

    for (const match of matches) {
        const row =
            document.createElement("div");

        row.className =
            `profile-game-row ${match.outcome || ""}`;

        const outcome =
            document.createElement("span");

        outcome.className =
            "profile-game-outcome";

        outcome.textContent =
            match.outcome === "win"
                ? "W"
                : match.outcome === "loss"
                    ? "L"
                    : "D";

        const copy =
            document.createElement("div");

        const opponent =
            document.createElement("strong");

        opponent.textContent =
            `vs ${match.opponent_username}`;

        const detail =
            document.createElement("small");

        const date =
            match.ended_at
                ? new Date(
                    match.ended_at
                ).toLocaleDateString()
                : "";

        detail.textContent =
            `${formatReason(
                match.reason
            )}${date ? ` · ${date}` : ""}`;

        copy.append(
            opponent,
            detail
        );

        row.append(
            outcome,
            copy
        );

        if (match.id) {
            row.tabIndex = 0;
            row.setAttribute("role", "button");
            row.addEventListener("click", function() {
                openStoredMatch(match.id);
            });
            row.addEventListener("keydown", function(event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openStoredMatch(match.id);
                }
            });
        }

        profileRecentGames.appendChild(
            row
        );
    }
}

function renderPlayerProfile(data) {
    const player =
        data.player;

    activeSocialProfile = player;
    activeDmUsername = null;

    socialWelcome.classList.add(
        "hidden"
    );

    directMessagePanel.classList.add(
        "hidden"
    );

    playerProfilePanel.classList.remove(
        "hidden"
    );

    profileViewAvatar.textContent =
        avatarSymbol(
            player.avatar_key,
            player.username
        );

    profileViewName.textContent =
        player.username;

    setCountryFlag(
        profileViewFlag,
        player.country_code
    );

    profileViewBio.textContent =
        player.profile_bio ||
        "No bio yet.";

    profileViewRating.textContent =
        `${player.rating} Elo`;

    if (profileViewPresence) {
        profileViewPresence.textContent =
            player.presence === "in_game"
                ? "In game"
                : player.presence === "online"
                    ? "Online"
                    : "Offline";
        profileViewPresence.dataset.presence =
            player.presence || "offline";
    }

    profileViewJoined.textContent =
        player.created_at
            ? `Joined ${new Date(
                player.created_at
            ).toLocaleDateString(
                undefined,
                {
                    year: "numeric",
                    month: "short"
                }
            )}`
            : "Joined recently";

    profileStatRating.textContent =
        player.rating;

    profileStatWins.textContent =
        player.wins;

    profileStatLosses.textContent =
        player.losses;

    profileStatDraws.textContent =
        player.draws;

    const state =
        player.friendship ||
        "none";

    profileFriendButton.dataset.state =
        state;

    profileFriendButton.disabled =
        state === "outgoing" ||
        state === "self";

    profileFriendButton.classList.toggle(
        "danger-button",
        state === "friends"
    );

    profileFriendButton.classList.toggle(
        "primary-button",
        state !== "friends"
    );

    profileFriendButton.textContent =
        state === "friends"
            ? "Remove friend"
            : socialRelationshipLabel(
                state
            );

    profileMessageButton.classList.toggle(
        "hidden",
        state !== "friends"
    );

    profileWatchButton?.classList.toggle(
        "hidden",
        player.presence !== "in_game" ||
        player.username === currentUser?.username
    );

    const blockState = player.block_state || "none";
    if (profileBlockButton) {
        profileBlockButton.classList.toggle(
            "hidden",
            state === "self"
        );
        profileBlockButton.textContent =
            blockState === "blocked"
                ? "Unblock"
                : blockState === "blocked_by_them"
                    ? "Unavailable"
                    : "Block";
        profileBlockButton.disabled =
            blockState === "blocked_by_them";
        profileBlockButton.dataset.state = blockState;
    }

    profileReportButton?.classList.toggle(
        "hidden",
        state === "self"
    );

    renderProfileRecentGames(
        data.recentMatches
    );
}

async function openPlayerProfile(
    username
) {
    if (!currentUser) {
        showLoginPage();
        return;
    }

    showSocialPage(false);

    socialWelcome.classList.remove(
        "hidden"
    );

    socialWelcome.innerHTML =
        '<div class="social-welcome-piece">♞</div><span class="section-kicker">LOADING</span><h2>Opening profile…</h2>';

    playerProfilePanel.classList.add(
        "hidden"
    );

    directMessagePanel.classList.add(
        "hidden"
    );

    try {
        const data =
            await fetchJson(
                `/api/players/${encodeURIComponent(
                    username
                )}`
            );

        renderPlayerProfile(data);
    } catch (error) {
        socialWelcome.classList.remove(
            "hidden"
        );

        socialWelcome.innerHTML =
            `<div class="social-welcome-piece">♞</div><h2>Could not open profile</h2><p>${escapeText(
                error.message
            )}</p>`;
    }
}

async function respondToFriendRequest(
    username,
    action
) {
    try {
        await fetchJson(
            "/api/social/friends/respond",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    username,
                    action
                })
            }
        );

        showToast(
            action === "accept"
                ? `${username} is now your friend.`
                : "Friend request declined.",
            action === "accept"
                ? "success"
                : "info"
        );

        await loadSocialLists();

        if (
            activeSocialProfile &&
            activeSocialProfile.username
                .toLowerCase() ===
                username.toLowerCase()
        ) {
            await openPlayerProfile(
                username
            );
        }
    } catch (error) {
        showToast(
            error.message,
            "error"
        );
    }
}

async function handleProfileFriendAction() {
    if (!activeSocialProfile) {
        return;
    }

    profileFriendButton.disabled = true;

    const username =
        activeSocialProfile.username;

    const state =
        activeSocialProfile.friendship;

    try {
        if (state === "none") {
            await fetchJson(
                "/api/social/friends/request",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        username
                    })
                }
            );

            showToast(
                "Friend request sent.",
                "success"
            );
        } else if (state === "incoming") {
            await fetchJson(
                "/api/social/friends/respond",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        action: "accept"
                    })
                }
            );

            showToast(
                `${username} is now your friend.`,
                "success"
            );
        } else if (state === "friends") {
            await fetchJson(
                `/api/social/friends/${encodeURIComponent(
                    username
                )}`,
                {
                    method: "DELETE"
                }
            );

            showToast(
                `${username} removed from friends.`,
                "info"
            );
        } else {
            return;
        }

        await Promise.all([
            loadSocialLists(),
            openPlayerProfile(username)
        ]);
    } catch (error) {
        profileFriendButton.disabled = false;

        showToast(
            error.message,
            "error"
        );
    }
}

function renderDirectMessages(
    messages
) {
    dmMessages.innerHTML = "";

    if (
        !Array.isArray(messages) ||
        messages.length === 0
    ) {
        dmMessages.innerHTML =
            '<p class="social-empty-copy">No messages yet. Say hi.</p>';
        return;
    }

    for (const message of messages) {
        appendDirectMessage(
            message,
            false
        );
    }

    dmMessages.scrollTop =
        dmMessages.scrollHeight;
}

function appendDirectMessage(
    message,
    scroll = true
) {
    const empty =
        dmMessages.querySelector(
            ".social-empty-copy"
        );

    empty?.remove();

    const bubble =
        document.createElement("div");

    bubble.className =
        message.mine
            ? "dm-bubble mine"
            : "dm-bubble";

    const body =
        document.createElement("p");

    body.textContent =
        message.body;

    const meta =
        document.createElement("small");

    const time =
        message.created_at
            ? new Date(
                message.created_at
            ).toLocaleTimeString(
                [],
                {
                    hour: "numeric",
                    minute: "2-digit"
                }
            )
            : "";

    meta.textContent =
        message.mine
            ? `You${time ? ` · ${time}` : ""}`
            : `${message.sender || activeDmUsername}${time ? ` · ${time}` : ""}`;

    bubble.append(
        body,
        meta
    );

    dmMessages.appendChild(
        bubble
    );

    if (scroll) {
        dmMessages.scrollTop =
            dmMessages.scrollHeight;
    }
}

async function openDirectMessages(
    username
) {
    try {
        const data =
            await fetchJson(
                `/api/social/messages/${encodeURIComponent(
                    username
                )}`
            );

        activeDmUsername =
            data.friend.username;

        activeSocialProfile = {
            ...activeSocialProfile,
            ...data.friend,
            friendship: "friends"
        };

        socialWelcome.classList.add(
            "hidden"
        );

        playerProfilePanel.classList.add(
            "hidden"
        );

        directMessagePanel.classList.remove(
            "hidden"
        );

        dmAvatar.textContent =
            avatarSymbol(
                data.friend.avatar_key,
                data.friend.username
            );

        dmName.textContent =
            data.friend.username;

        dmRating.textContent =
            `${data.friend.rating} Elo`;

        renderDirectMessages(
            data.messages
        );

        dmInput.focus();

        loadSocialLists();
        refreshNotifications();
    } catch (error) {
        showToast(
            error.message,
            "error"
        );
    }
}

async function sendDirectMessage() {
    if (!activeDmUsername) {
        return;
    }

    const text =
        dmInput.value.trim();

    if (!text) {
        return;
    }

    dmInput.value = "";

    try {
        const data =
            await fetchJson(
                `/api/social/messages/${encodeURIComponent(
                    activeDmUsername
                )}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        message: text
                    })
                }
            );

        appendDirectMessage(
            data.message
        );
    } catch (error) {
        dmInput.value = text;

        showToast(
            error.message,
            "error"
        );
    }
}

function downloadTextFile(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function renderReview(data) {
    reviewSummary.innerHTML = "";
    reviewMoves.innerHTML = "";

    const order = ["Best", "Excellent", "Good", "Inaccuracy", "Mistake", "Blunder"];
    for (const label of order) {
        const count = Number(data?.summary?.[label] || 0);
        if (!count) continue;
        const item = document.createElement("div");
        item.className = `review-summary-item review-${label.toLowerCase()}`;
        item.innerHTML = `<strong>${count}</strong><span>${label}</span>`;
        reviewSummary.appendChild(item);
    }

    for (const move of data.moves || []) {
        const row = document.createElement("div");
        row.className = "review-move-row";
        const number = move.color === "white" ? `${move.moveNumber}.` : `${move.moveNumber}…`;
        row.innerHTML = `
            <span class="review-move-number">${number}</span>
            <strong>${escapeText(move.san)}</strong>
            <span class="review-class review-${String(move.classification).toLowerCase()}">${escapeText(move.classification)}</span>
            <small>${Number(move.centipawnLoss || 0)} cp loss</small>
            <span class="review-eval">${Number(move.evaluation || 0) >= 0 ? "+" : ""}${Number(move.evaluation || 0).toFixed(2)}</span>
        `;
        reviewMoves.appendChild(row);
    }

    reviewStatus.textContent = data.truncated
        ? "Review complete. Only the first 120 plies were analyzed."
        : "Review complete.";
}

async function reviewPgn(pgn) {
    if (!pgn) {
        showToast("No PGN is available for this game.", "error");
        return;
    }

    reviewModal.classList.remove("hidden");
    reviewStatus.textContent = "Stockfish is analyzing the game…";
    reviewSummary.innerHTML = "";
    reviewMoves.innerHTML = '<div class="review-loading">Analyzing moves…</div>';

    try {
        const data = await fetchJson("/api/analysis/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pgn })
        });
        renderReview(data);
    } catch (error) {
        reviewStatus.textContent = error.message;
        reviewMoves.innerHTML = "";
    }
}

function createReviewBoard(fen) {
    const root = document.createElement("div");
    root.className = "review-board";

    const placement = String(fen || "").split(" ")[0];
    const ranks = placement.split("/");

    if (ranks.length !== 8) {
        root.textContent = "Final board unavailable.";
        return root;
    }

    const typeMap = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    };

    for (let y = 0; y < 8; y++) {
        const cells = [];
        for (const char of ranks[y]) {
            if (/\d/.test(char)) {
                for (let i = 0; i < Number(char); i++) cells.push(null);
            } else {
                cells.push(char);
            }
        }

        for (let x = 0; x < 8; x++) {
            const square = document.createElement("span");
            square.className = `review-board-square ${(x + y) % 2 === 0 ? "light" : "dark"}`;
            const pieceCode = cells[x];

            if (pieceCode) {
                const lower = pieceCode.toLowerCase();
                const type = typeMap[lower];
                const color = pieceCode === lower ? "b" : "w";
                if (type) {
                    const image = document.createElement("img");
                    image.src = `assets/pieces/${type}-${color}.svg`;
                    image.alt = "";
                    image.draggable = false;
                    square.appendChild(image);
                }
            }

            root.appendChild(square);
        }
    }

    return root;
}

async function openStoredMatch(matchId) {
    try {
        const data = await fetchJson(`/api/matches/${encodeURIComponent(matchId)}`);
        const match = data.match || {};
        lastGamePgn = match.pgn || "";
        lastGameFen = match.final_fen || "";
        reviewModal.classList.remove("hidden");

        const winnerLabel =
            match.winner_color === "white"
                ? `${match.white?.username || "White"} won`
                : match.winner_color === "black"
                    ? `${match.black?.username || "Black"} won`
                    : "Draw";

        reviewStatus.textContent =
            `${winnerLabel} · ${formatReason(match.reason)} · ${new Date(match.ended_at || match.created_at || Date.now()).toLocaleString()}`;

        reviewSummary.innerHTML = `
            <div class="stored-match-meta">
                <div><span>White</span><strong>${escapeText(match.white?.username || "White")}</strong><small>${Number(match.white?.rating_after ?? match.white?.rating ?? 0)} Elo</small></div>
                <div><span>Black</span><strong>${escapeText(match.black?.username || "Black")}</strong><small>${Number(match.black?.rating_after ?? match.black?.rating ?? 0)} Elo</small></div>
            </div>
            <div class="stored-match-actions">
                <button id="stored-review-run" class="primary-button" type="button">Analyze with Stockfish</button>
                <button id="stored-fen-copy" class="secondary-button" type="button">Copy FEN</button>
                <button id="stored-pgn-export" class="secondary-button" type="button">Export PGN</button>
            </div>
        `;

        reviewMoves.innerHTML = "";
        if (lastGameFen) {
            reviewMoves.appendChild(createReviewBoard(lastGameFen));
        }
        const pgn = document.createElement("pre");
        pgn.className = "pgn-preview";
        pgn.textContent = lastGamePgn || "No PGN stored.";
        reviewMoves.appendChild(pgn);

        document.getElementById("stored-review-run")?.addEventListener("click", function() {
            reviewPgn(lastGamePgn);
        });
        document.getElementById("stored-fen-copy")?.addEventListener("click", async function() {
            if (!lastGameFen) return;
            await navigator.clipboard.writeText(lastGameFen);
            showToast("FEN copied.", "success");
        });
        document.getElementById("stored-pgn-export")?.addEventListener("click", function() {
            downloadTextFile(`pulse-chess-${matchId}.pgn`, lastGamePgn);
        });
    } catch (error) {
        showToast(error.message, "error");
    }
}

function showSocialPage(
    refresh = true
) {
    if (!currentUser) {
        showLoginPage();

        loginError.textContent =
            "Log in to search players and use friends.";

        return;
    }

    hideAllPages();
    showNavbar();
    setFooterVisible(true);

    socialPage.classList.remove(
        "hidden"
    );

    setActiveNav(
        "players-button"
    );

    stopMatchMusic();

    if (refresh) {
        loadSocialLists();
    }
}

// Start

loadSettings();
initializeCountryLeaderboardOptions();
renderHomePreviewBoard();
initializeCookieBanner();

populateBoard(8, 8);
updateCheckHighlight();
updateCoordinates();

setInterval(
    function() {
        renderClocks();
        updateClockClasses();
    },
    100
);

loadCurrentUser();
loadHomeLeaderboard();

window.addEventListener(
    "load",
    initializeGoogleAuth
);

document.addEventListener(
    "pointerdown",
    function() {
        ensureAudio();

        if (
            inMatch &&
            settings.music
        ) {
            startMatchMusic();
        }
    },
    { once: false }
);

// Navigation

logoButton.addEventListener(
    "click",
    showHomePage
);

homeButton.addEventListener(
    "click",
    showHomePage
);

leaderboardButton.addEventListener(
    "click",
    showLeaderboardPage
);

playersButton.addEventListener(
    "click",
    showSocialPage
);

heroLeaderboardButton.addEventListener(
    "click",
    showLeaderboardPage
);

previewLeaderboardButton.addEventListener(
    "click",
    showLeaderboardPage
);

settingsButton.addEventListener(
    "click",
    showSettingsPage
);

gameSettingsButton.addEventListener(
    "click",
    function() {
        showToast(
            "Finish the match before changing settings.",
            "info"
        );
    }
);

navPlayButton.addEventListener(
    "click",
    function() {
        showHomePage();

        document
            .querySelector(".play-section")
            ?.scrollIntoView({
                behavior:
                    settings.motion
                        ? "smooth"
                        : "auto",
                block: "center"
            });
    }
);

function openQuickMatchModal() {
    if (!currentUser) {
        showLoginPage();
        loginError.textContent = "Log in to play online.";
        return;
    }

    quickMatchModal?.classList.remove("hidden");
}

heroPlayButton.addEventListener(
    "click",
    openQuickMatchModal
);

playButton.addEventListener(
    "click",
    openQuickMatchModal
);

quickMatchModalClose?.addEventListener("click", function() {
    quickMatchModal.classList.add("hidden");
});

quickMatchModal?.addEventListener("click", function(event) {
    if (event.target === quickMatchModal) {
        quickMatchModal.classList.add("hidden");
    }
});

for (const button of timeControlButtons) {
    button.addEventListener("click", function() {
        selectedTimeControl = button.dataset.timeControl || "rapid10";
        startQuickMatch(selectedTimeControl);
    });
}

botButton?.addEventListener(
    "click",
    function() {
        if (!currentUser) {
            showLoginPage();
            loginError.textContent =
                "Log in to play the bot.";
            return;
        }

        botModal.classList.remove(
            "hidden"
        );
    }
);

botModalClose?.addEventListener(
    "click",
    function() {
        botModal.classList.add(
            "hidden"
        );
    }
);

for (const button of botDifficultyButtons) {
    button.addEventListener(
        "click",
        function() {
            startBotMatch(
                button.dataset.botDifficulty
            );
        }
    );
}

privacyButton.addEventListener("click", showPrivacyPage);
termsButton?.addEventListener("click", function() { showLegalPage(termsPage); });
cookiesButton?.addEventListener("click", function() { showLegalPage(cookiesPage); });
fairPlayButton?.addEventListener("click", function() { showLegalPage(fairPlayPage); });
privacyBackButton.addEventListener("click", showHomePage);
for (const button of legalHomeButtons) {
    button.addEventListener("click", showHomePage);
}

resultReview?.addEventListener("click", function() {
    reviewPgn(lastGamePgn);
});

resultCopyFen?.addEventListener("click", async function() {
    if (!lastGameFen) {
        showToast("No FEN is available.", "error");
        return;
    }
    try {
        await navigator.clipboard.writeText(lastGameFen);
        showToast("FEN copied.", "success");
    } catch (error) {
        showToast("Could not copy FEN.", "error");
    }
});

resultExportPgn?.addEventListener("click", function() {
    if (!lastGamePgn) {
        showToast("No PGN is available.", "error");
        return;
    }
    downloadTextFile(`pulse-chess-${Date.now()}.pgn`, lastGamePgn);
});

reviewClose?.addEventListener("click", function() {
    reviewModal.classList.add("hidden");
});

reviewModal?.addEventListener("click", function(event) {
    if (event.target === reviewModal) {
        reviewModal.classList.add("hidden");
    }
});

cookieAccept.addEventListener(
    "click",
    function() {
        saveCookieChoice("accepted");
    }
);

cookieReject.addEventListener(
    "click",
    function() {
        saveCookieChoice("rejected");
    }
);


// Match Controls

cancelButton.addEventListener(
    "click",
    function() {
        socket.emit("cancel-match");
        showHomePage();
    }
);

drawButton?.addEventListener("click", function() {
    if (!inMatch || gameOver || isSpectating) return;
    socket.emit("offer-draw");
});

drawAcceptButton?.addEventListener("click", function() {
    drawOfferModal.classList.add("hidden");
    socket.emit("respond-draw", true);
});

drawDeclineButton?.addEventListener("click", function() {
    drawOfferModal.classList.add("hidden");
    socket.emit("respond-draw", false);
});

resignButton.addEventListener(
    "click",
    function() {
        if (
            !inMatch ||
            gameOver
        ) {
            return;
        }

        socket.emit("resign");
    }
);

returnButton.addEventListener(
    "click",
    function() {
        if (isSpectating) {
            socket.emit("leave-spectate");
        } else if (
            inMatch &&
            !gameOver
        ) {
            socket.emit("resign");
        }

        inMatch = false;
        gameOver = true;
        playerColor = null;
        currentMatch = null;
        isSpectating = false;

        clearMoves();
        restoreSelectedSquare();
        stopMatchMusic();

        showHomePage();
    }
);

chatSend.addEventListener(
    "click",
    sendChatMessage
);

chatInput.addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            sendChatMessage();
        }
    }
);

let emojiHoverTimer = null;
let emojiHoverIndex = 0;

function getEmojiButtonFace() {
    if (!emojiButton) {
        return null;
    }

    let face =
        emojiButton.querySelector(
            ".emoji-button-face"
        );

    if (!face) {
        face = document.createElement("span");
        face.className = "emoji-button-face";
        face.textContent = "☺";
        emojiButton.replaceChildren(face);
    }

    return face;
}

function resetEmojiButtonFace() {
    const face = getEmojiButtonFace();

    if (!face) {
        return;
    }

    face.textContent = "☺";
}

function startEmojiButtonHover() {
    const face = getEmojiButtonFace();

    if (!face) {
        return;
    }

    clearInterval(emojiHoverTimer);

    emojiHoverIndex =
        Math.floor(
            Math.random() * emojiReactions.length
        );

    const cycleEmoji = function() {
        const item =
            emojiReactions[
                emojiHoverIndex % emojiReactions.length
            ];

        face.textContent =
            item.emoji === "GG"
                ? "😎"
                : item.emoji;

        emojiHoverIndex += 1;
    };

    cycleEmoji();

    emojiHoverTimer =
        setInterval(cycleEmoji, 190);
}

function stopEmojiButtonHover() {
    clearInterval(emojiHoverTimer);
    emojiHoverTimer = null;
    resetEmojiButtonFace();
}


if (emojiButton) {
    getEmojiButtonFace();

    emojiButton.addEventListener(
        "mouseenter",
        startEmojiButtonHover
    );

    emojiButton.addEventListener(
        "mouseleave",
        stopEmojiButtonHover
    );

    emojiButton.addEventListener(
        "click",
        function(event) {
            event.stopPropagation();

            const opening =
                emojiPicker.classList.contains(
                    "hidden"
                );

            emojiPicker.classList.toggle(
                "hidden",
                !opening
            );

            emojiButton.setAttribute(
                "aria-expanded",
                String(opening)
            );

            if (opening) {
                emojiSearch.value = "";
                renderEmojiPicker();
                emojiSearch.focus();
            }
        }
    );
}

emojiSearch?.addEventListener(
    "input",
    function() {
        renderEmojiPicker(
            emojiSearch.value
        );
    }
);

emojiPicker?.addEventListener(
    "click",
    function(event) {
        event.stopPropagation();
    }
);

document.addEventListener(
    "click",
    closeEmojiPicker
);

renderEmojiPicker();


// Private Games

friendButton.addEventListener(
    "click",
    function() {
        if (!currentUser) {
            showLoginPage();

            loginError.textContent =
                "Log in to create a private game.";

            return;
        }

        privateCodePanel.classList.add(
            "hidden"
        );

        privateCodeInput.value = "";
        privateError.textContent = "";

        friendModal.classList.remove(
            "hidden"
        );
    }
);

friendModalClose.addEventListener(
    "click",
    function() {
        socket.emit("cancel-match");
        closeFriendModal();
    }
);

friendModal.addEventListener(
    "click",
    function(event) {
        if (
            event.target === friendModal
        ) {
            socket.emit("cancel-match");
            closeFriendModal();
        }
    }
);

createPrivateButton.addEventListener(
    "click",
    function() {
        privateError.textContent = "";
        socket.emit("create-private", {
            timeControl:
                privateTimeControl?.value ||
                "rapid10"
        });
    }
);

joinPrivateButton.addEventListener(
    "click",
    function() {
        const code =
            privateCodeInput.value
                .trim()
                .toUpperCase();

        if (code.length !== 6) {
            privateError.textContent =
                "Enter a 6-character room code.";
            return;
        }

        privateError.textContent = "";
        socket.emit(
            "join-private",
            code
        );
    }
);

privateCodeInput.addEventListener(
    "input",
    function() {
        privateCodeInput.value =
            privateCodeInput.value
                .toUpperCase()
                .replace(
                    /[^A-Z0-9]/g,
                    ""
                );
    }
);

privateCodeInput.addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            joinPrivateButton.click();
        }
    }
);

copyPrivateCode.addEventListener(
    "click",
    async function() {
        try {
            await navigator.clipboard.writeText(
                privateCodeDisplay.textContent
            );

            showToast(
                "Room code copied.",
                "success"
            );
        } catch (error) {
            showToast(
                "Copy failed. Select the code manually.",
                "error"
            );
        }
    }
);


// Result

resultHome.addEventListener(
    "click",
    function() {
        closeResultModal();

        currentMatch = null;
        playerColor = null;

        showHomePage();
    }
);

resultRematch.addEventListener(
    "click",
    function() {
        const previousMode =
            currentMatch?.mode;

        closeResultModal();

        currentMatch = null;
        playerColor = null;

        if (previousMode === "private") {
            showHomePage();

            friendModal.classList.remove(
                "hidden"
            );

            return;
        }

        startQuickMatch();
    }
);


// Auth Navigation

loginButton.addEventListener(
    "click",
    showLoginPage
);

signupButton.addEventListener(
    "click",
    showSignupPage
);

signupToLogin.addEventListener(
    "click",
    showLoginPage
);

loginToSignup.addEventListener(
    "click",
    showSignupPage
);


// Email Sign Up

signupForm.addEventListener(
    "submit",
    async function(event) {
        event.preventDefault();

        signupError.textContent = "";

        const username =
            document
                .getElementById(
                    "signup-username"
                )
                .value
                .trim();

        const email =
            document
                .getElementById(
                    "signup-email"
                )
                .value
                .trim();

        const password =
            document
                .getElementById(
                    "signup-password"
                )
                .value;

        const confirmPassword =
            document
                .getElementById(
                    "signup-confirm-password"
                )
                .value;

        if (password !== confirmPassword) {
            signupError.textContent =
                "Passwords do not match.";
            return;
        }

        const submitButton =
            signupForm.querySelector(
                'button[type="submit"]'
            );

        setButtonLoading(
            submitButton,
            true,
            "Creating account…"
        );

        try {
            const response =
                await fetch(
                    "/api/auth/signup",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            username,
                            email,
                            password
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    "Could not create account."
                );
            }

            if (data.verificationRequired) {
                showVerifyEmailPage(data.email);
                showToast("Verification code sent.", "success");
                return;
            }

            currentUser = data.user;
            updateAuthUI();
            reconnectSocketForSession();

            signupForm.reset();

            showToast(
                "Account created.",
                "success"
            );

            showHomePage();
            loadHomeLeaderboard();
            loadRecentMatches();
        } catch (error) {
            signupError.textContent =
                error.message;
        } finally {
            setButtonLoading(
                submitButton,
                false
            );
        }
    }
);

verifyEmailForm?.addEventListener("submit", async function(event) {
    event.preventDefault(); verifyEmailError.textContent = "";
    try {
        const response = await fetch("/api/auth/verify-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: pendingVerificationEmail, code: verificationCode.value }) });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Verification failed.");
        currentUser = data.user; updateAuthUI(); reconnectSocketForSession(); showToast("Email verified. Welcome to Pulse Chess.", "success"); showHomePage(); loadHomeLeaderboard(); loadRecentMatches();
    } catch (error) { verifyEmailError.textContent = error.message; }
});


// Email Login

loginForm.addEventListener(
    "submit",
    async function(event) {
        event.preventDefault();

        loginError.textContent = "";

        const email =
            document
                .getElementById(
                    "login-email"
                )
                .value
                .trim();

        const password =
            document
                .getElementById(
                    "login-password"
                )
                .value;

        const submitButton =
            loginForm.querySelector(
                'button[type="submit"]'
            );

        setButtonLoading(
            submitButton,
            true,
            "Logging in…"
        );

        try {
            const response =
                await fetch(
                    "/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    "Could not log in."
                );
            }

            currentUser = data.user;
            updateAuthUI();
            reconnectSocketForSession();

            loginForm.reset();

            showToast(
                `Welcome back, ${currentUser.username}.`,
                "success"
            );

            showHomePage();
            loadHomeLeaderboard();
            loadRecentMatches();
        } catch (error) {
            loginError.textContent =
                error.message;
        } finally {
            setButtonLoading(
                submitButton,
                false
            );
        }
    }
);


// Logout

logoutButton.addEventListener(
    "click",
    async function() {
        try {
            await fetch(
                "/api/auth/logout",
                {
                    method: "POST"
                }
            );
        } catch (error) {
            console.error(
                "Logout failed:",
                error
            );
        }

        if (
            window.google?.accounts?.id
        ) {
            window.google.accounts.id
                .disableAutoSelect();
        }

        currentUser = null;
        updateAuthUI();
        reconnectSocketForSession();

        showToast(
            "Logged out.",
            "info"
        );

        showHomePage();
    }
);


// Notifications

notificationButton?.addEventListener(
    "click",
    function(event) {
        event.stopPropagation();

        const willOpen =
            notificationPanel.classList.contains(
                "hidden"
            );

        notificationPanel.classList.toggle(
            "hidden",
            !willOpen
        );

        notificationButton.setAttribute(
            "aria-expanded",
            String(willOpen)
        );

        if (willOpen) {
            refreshNotifications();
        }
    }
);

notificationPlayersButton?.addEventListener(
    "click",
    function() {
        closeNotificationPanel();
        showSocialPage();
    }
);

document.addEventListener(
    "click",
    function(event) {
        if (
            notificationWrap &&
            !notificationWrap.contains(event.target)
        ) {
            closeNotificationPanel();
        }
    }
);

// Social

playerSearchButton?.addEventListener(
    "click",
    searchPlayers
);

playerSearchInput?.addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchPlayers();
        }
    }
);

profileFriendButton?.addEventListener(
    "click",
    handleProfileFriendAction
);

profileMessageButton?.addEventListener(
    "click",
    function() {
        if (activeSocialProfile) {
            openDirectMessages(
                activeSocialProfile.username
            );
        }
    }
);

profileWatchButton?.addEventListener("click", function() {
    if (activeSocialProfile) {
        socket.emit("spectate-user", activeSocialProfile.username);
    }
});

profileBlockButton?.addEventListener("click", async function() {
    if (!activeSocialProfile) return;
    const state = profileBlockButton.dataset.state || "none";
    const username = activeSocialProfile.username;

    if (state !== "blocked" && !window.confirm(`Block ${username}? This removes the friendship and stops direct messages.`)) {
        return;
    }

    try {
        await fetchJson(`/api/social/block/${encodeURIComponent(username)}`, {
            method: state === "blocked" ? "DELETE" : "POST"
        });
        showToast(state === "blocked" ? "Player unblocked." : "Player blocked.", "success");
        openPlayerProfile(username);
        loadSocialLists();
    } catch (error) {
        showToast(error.message, "error");
    }
});

profileReportButton?.addEventListener("click", async function() {
    if (!activeSocialProfile) return;
    const category = window.prompt("Report reason: cheating, harassment, spam, username, or other", "cheating");
    if (category === null) return;
    const details = window.prompt("Optional details", "") ?? "";

    try {
        await fetchJson(`/api/social/report/${encodeURIComponent(activeSocialProfile.username)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category, details })
        });
        showToast("Report submitted.", "success");
    } catch (error) {
        showToast(error.message, "error");
    }
});

dmBackButton?.addEventListener(
    "click",
    function() {
        if (activeSocialProfile) {
            openPlayerProfile(
                activeSocialProfile.username
            );
        }
    }
);

dmForm?.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        sendDirectMessage();
    }
);


// Settings

settingMusic.addEventListener(
    "change",
    function() {
        settings.music =
            settingMusic.checked;

        saveSettings();

        if (settings.music) {
            if (inMatch) {
                startMatchMusic();
            }
        } else {
            stopMatchMusic();
        }
    }
);

settingSfx.addEventListener(
    "change",
    function() {
        settings.sfx =
            settingSfx.checked;

        saveSettings();

        if (settings.sfx) {
            playSfx("move");
        }
    }
);

settingMotion.addEventListener(
    "change",
    function() {
        settings.motion =
            settingMotion.checked;

        saveSettings();
    }
);

settingBoardTheme.addEventListener(
    "change",
    function() {
        settings.boardTheme =
            settingBoardTheme.value;

        saveSettings();
    }
);

settingVolume.addEventListener(
    "input",
    function() {
        settings.volume =
            Number(settingVolume.value);

        saveSettings();
    }
);

for (
    const button of
    settingsAvatarGrid.querySelectorAll(
        "[data-avatar]"
    )
) {
    button.addEventListener(
        "click",
        function() {
            selectedAvatarKey =
                button.dataset.avatar;

            syncAvatarChoices();
        }
    );
}

saveProfileButton.addEventListener(
    "click",
    async function() {
        if (!currentUser) {
            return;
        }

        settingsProfileMessage.textContent = "";

        setButtonLoading(
            saveProfileButton,
            true,
            "Saving…"
        );

        try {
            const response =
                await fetch(
                    "/api/account/profile",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            avatarKey:
                                selectedAvatarKey,
                            bio:
                                settingsBio.value
                                    .trim()
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    "Could not update profile."
                );
            }

            currentUser = data.user;
            updateAuthUI();
            syncAccountSettings();

            settingsProfileMessage.textContent =
                "Profile updated.";

            settingsProfileMessage.className =
                "form-message success";

            showToast(
                "Profile updated.",
                "success"
            );
        } catch (error) {
            settingsProfileMessage.textContent =
                error.message;

            settingsProfileMessage.className =
                "form-message error";
        } finally {
            setButtonLoading(
                saveProfileButton,
                false
            );
        }
    }
);

saveUsernameButton.addEventListener(
    "click",
    async function() {
        if (!currentUser) {
            return;
        }

        const username =
            settingsUsername.value
                .trim();

        settingsUsernameMessage.textContent = "";

        setButtonLoading(
            saveUsernameButton,
            true,
            "Saving…"
        );

        try {
            const response =
                await fetch(
                    "/api/account/username",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            username
                        })
                    }
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    "Could not update username."
                );
            }

            currentUser = data.user;
            updateAuthUI();

            settingsUsernameMessage.textContent =
                "Username updated.";

            settingsUsernameMessage.className =
                "form-message success";

            showToast(
                "Username updated.",
                "success"
            );

            loadHomeLeaderboard();
        } catch (error) {
            settingsUsernameMessage.textContent =
                error.message;

            settingsUsernameMessage.className =
                "form-message error";
        } finally {
            setButtonLoading(
                saveUsernameButton,
                false
            );
            updateUsernameCooldown();
        }
    }
);

signoutAllButton?.addEventListener("click", async function() {
    if (!window.confirm("Sign out every Pulse Chess session, including this one?")) return;
    try {
        await fetchJson("/api/account/signout-all", { method: "POST" });
        currentUser = null;
        updateAuthUI();
        reconnectSocketForSession();
        showHomePage();
        showToast("All sessions signed out.", "success");
    } catch (error) {
        accountControlMessage.textContent = error.message;
    }
});

deleteAccountButton?.addEventListener("click", async function() {
    const typed = window.prompt("This permanently deletes your account. Type DELETE to continue.");
    if (typed !== "DELETE") return;
    try {
        await fetchJson("/api/account", { method: "DELETE" });
        currentUser = null;
        updateAuthUI();
        reconnectSocketForSession();
        showHomePage();
        showToast("Account deleted.", "info");
    } catch (error) {
        accountControlMessage.textContent = error.message;
    }
});

leaderboardScope.addEventListener(
    "change",
    loadLeaderboard
);

leaderboardLimit.addEventListener(
    "change",
    loadLeaderboard
);


// Keep Google initialization available whether the GIS
// script loads before or after this module.

window.onGoogleLibraryLoad =
    initializeGoogleAuth;
