// Modules

import { board } from "./pieces.js";
import { io } from "/socket.io/socket.io.esm.min.js";


// Configuration

const GOOGLE_CLIENT_ID =
    "544555583922-6ga00tnd4m312vt3qfb8ts5htuhvklum.apps.googleusercontent.com";


// DOM

const navbar =
    document.querySelector(".navbar");

const menu =
    document.getElementById("menu");

const leaderboardPage =
    document.getElementById("leaderboard-page");

const settingsPage =
    document.getElementById("settings-page");

const loginPage =
    document.getElementById("login-page");

const signupPage =
    document.getElementById("signup-page");

const matchmaking =
    document.getElementById("matchmaking");

const game =
    document.getElementById("game");

const playButton =
    document.getElementById("play-button");

const botButton =
    document.getElementById("bot-button");

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

const toastContainer =
    document.getElementById(
        "toast-container"
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
let googleInitialized = false;

let settings = {
    music: true,
    sfx: true,
    motion: true,
    boardTheme: "midnight",
    volume: 32
};


// Settings

function loadSettings() {
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
    localStorage.setItem(
        "pulseChessSettings",
        JSON.stringify(settings)
    );

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

function countryCodeToFlag(countryCode) {
    if (
        typeof countryCode !== "string" ||
        countryCode.length !== 2
    ) {
        return "🌐";
    }

    return countryCode
        .toUpperCase()
        .split("")
        .map(function(letter) {
            return String.fromCodePoint(
                127397 +
                letter.charCodeAt(0)
            );
        })
        .join("");
}

function renderFlagEmojis(root = document.body) {
    if (
        typeof window.twemoji === "undefined" ||
        !root
    ) {
        return;
    }

    window.twemoji.parse(root, {
        folder: "svg",
        ext: ".svg",
        className: "emoji country-emoji"
    });
}

let flagRenderQueued = false;

const flagObserver =
    new MutationObserver(function() {
        if (flagRenderQueued) {
            return;
        }

        flagRenderQueued = true;

        requestAnimationFrame(function() {
            flagRenderQueued = false;
            renderFlagEmojis();
        });
    });

flagObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
});

renderFlagEmojis();


function escapeText(value) {
    return String(value ?? "");
}

function formatReason(reason) {
    const labels = {
        checkmate: "Checkmate",
        timeout: "Time ran out",
        resignation: "Resignation",
        stalemate: "Stalemate",
        threefold: "Threefold repetition",
        insufficient: "Insufficient material",
        "50-move": "50-move rule",
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
    ]
];

const lofiMelodies = [
    [392.00, 440.00, 523.25, 493.88, 440.00, 392.00, 329.63, 349.23],
    [440.00, 523.25, 587.33, 523.25, 466.16, 392.00, 440.00, 349.23],
    [329.63, 392.00, 440.00, 523.25, 493.88, 440.00, 392.00, 349.23],
    [523.25, 493.88, 440.00, 392.00, 349.23, 392.00, 440.00, 493.88]
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
        musicVariation =
            (musicVariation + 1) %
            lofiProgressions.length;
    }

    const progression =
        lofiProgressions[musicVariation];

    const chordIndex =
        musicStep % progression.length;

    const chord =
        progression[chordIndex];

    chord.forEach(function(
        frequency,
        index
    ) {
        createTone(
            frequency,
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

        if (recentMatches) {
            recentMatches.innerHTML =
                '<div class="empty-copy">Log in to see your recent games.</div>';
        }

        return;
    }

    const flag =
        countryCodeToFlag(
            currentUser.country_code
        );

    navUsername.textContent =
        `${flag} ${currentUser.username}`;

    navRating.textContent =
        `${currentUser.rating} Elo`;

    dashboardFlag.textContent = flag;
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

    settingsUsernameMessage.textContent = "";
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

            name.textContent =
                `${countryCodeToFlag(
                    player.country_code
                )} ${player.username}`;

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

async function loadLeaderboard() {
    leaderboardList.innerHTML =
        '<div class="leaderboard-loading">Loading rankings…</div>';

    const scope =
        leaderboardScope.value;

    const limit =
        leaderboardLimit.value;

    try {
        const response =
            await fetch(
                `/api/leaderboard?scope=${encodeURIComponent(
                    scope
                )}&limit=${encodeURIComponent(
                    limit
                )}`
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
            leaderboardScopeNote.textContent =
                `${countryCodeToFlag(
                    data.country
                )} ${data.country} rankings`;
        } else if (
            scope === "country" &&
            !data.country
        ) {
            leaderboardScopeNote.textContent =
                "Sign in to use your country";
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
                String(player.id) ===
                    String(currentUser.id)
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
                player.username
                    .slice(0, 1)
                    .toUpperCase();

            const playerCopy =
                document.createElement("div");

            const playerName =
                document.createElement("strong");

            playerName.textContent =
                `${countryCodeToFlag(
                    player.country_code
                )} ${player.username}`;

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

                name.textContent =
                    `${countryCodeToFlag(
                        match.opponent_country_code
                    )} ${match.opponent_username}`;

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

    nameElement.textContent =
        `${countryCodeToFlag(
            user?.country_code
        )} ${user?.username || color}`;

    ratingElement.textContent =
        user?.rating ??
        "—";

    avatarElement.textContent =
        (user?.username || color)
            .slice(0, 1)
            .toUpperCase();
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

    currentMatch = data;

    navbar.classList.add("hidden");

    playerColor = data.color;

    updateBoardOrientation();
    updateCoordinates();

    currentTurn = "white";
    gameOver = false;
    inMatch = true;

    playerColorDisplay.textContent =
        playerColor === "white"
            ? "White"
            : "Black";

    turnDisplay.textContent = "White";

    gameStatus.textContent =
        playerColor === "white"
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

    gameModePill.textContent =
        data.mode === "bot"
            ? "Rapid · Practice"
            : data.mode === "private"
                ? "Rapid · Private"
                : data.rated
                    ? "Rapid · Rated"
                    : "Rapid · Test game";

    hideAllPages();
    game.classList.remove("hidden");

    closeFriendModal();
    closeResultModal();

    clearMoves();
    restoreSelectedSquare();

    renderPieces();
    updateCheckHighlight();

    playSfx("match");
    startMatchMusic();

    updateClockClasses();
}

function startQuickMatch() {
    if (!currentUser) {
        showLoginPage();

        loginError.textContent =
            "Log in to play online.";

        return;
    }

    ensureAudio();

    hideAllPages();
    showNavbar();

    matchmaking.classList.remove(
        "hidden"
    );

    setActiveNav("nav-play-button");

    matchmakingTitle.textContent =
        "Finding opponent";

    matchmakingStatus.textContent =
        "Searching for a player near your rating…";

    socket.emit("find-match");
}

function startBotMatch() {
    if (!currentUser) {
        showLoginPage();

        loginError.textContent =
            "Log in to play the bot.";

        return;
    }

    ensureAudio();

    hideAllPages();
    showNavbar();

    matchmaking.classList.remove(
        "hidden"
    );

    matchmakingTitle.textContent =
        "Preparing Pulse Bot";

    matchmakingStatus.textContent =
        "Setting up an unrated practice game…";

    socket.emit("play-bot");
}

function showResult(data) {
    stopMatchMusic();

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
        formatReason(
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
    function() {
        matchmakingTitle.textContent =
            "Searching…";

        matchmakingStatus.textContent =
            "Waiting for another player to enter the queue.";
    }
);

socket.on(
    "match-found",
    function(data) {
        matchmakingTitle.textContent =
            "Opponent found";

        matchmakingStatus.textContent =
            data.opponent
                ? `${countryCodeToFlag(
                    data.opponent.country_code
                )} ${data.opponent.username} · ${data.opponent.rating} Elo`
                : "Starting game…";

        playSfx("match");

        setTimeout(
            function() {
                showMatch(data);
            },
            settings.motion
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
            board[
                receivedMove.y
            ][
                receivedMove.x
            ];

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
    "turn-changed",
    function(turn) {
        currentTurn = turn;

        turnDisplay.textContent =
            turn === "white"
                ? "White"
                : "Black";

        if (!gameOver) {
            gameStatus.textContent =
                turn === playerColor
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

        addChatMessage(
            data?.sender ||
                "Opponent",
            data?.message || ""
        );
    }
);

socket.on(
    "game-ended",
    function(data) {
        showResult(data);
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

    addChatMessage(
        "You",
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
        settingsPage,
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

function showHomePage() {
    hideAllPages();
    showNavbar();

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

    signupPage.classList.remove("hidden");
    setActiveNav(null);

    signupError.textContent = "";
    stopMatchMusic();

    requestAnimationFrame(
        initializeGoogleAuth
    );
}

function showLeaderboardPage() {
    hideAllPages();
    showNavbar();

    leaderboardPage.classList.remove("hidden");
    setActiveNav("leaderboard-button");

    stopMatchMusic();
    loadLeaderboard();
}

function showSettingsPage() {
    hideAllPages();
    showNavbar();

    settingsPage.classList.remove("hidden");
    setActiveNav("settings-button");

    syncSettingsControls();
    syncAccountSettings();
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
    renderMoveHistory();

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


function addMoveToHistory(notation) {

    moveHistory.push(notation);

    renderMoveHistory();
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
        board[legalMove.y][legalMove.x];

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

    if (gameOver) {
        return;
    }

    const hasMoves =
        hasAnyLegalMove(currentTurn);

    if (hasMoves) {

        if (isKingInCheck(currentTurn)) {
            gameStatus.textContent =
                currentTurn === playerColor
                    ? "Your king is in check!"
                    : "Opponent is in check!";
        }

        return;
    }

    gameOver = true;

    if (isKingInCheck(currentTurn)) {

        const winner =
            oppositeColor(currentTurn);

        gameStatus.textContent =
            winner === playerColor
                ? "Checkmate! You win!"
                : "Checkmate! You lose.";

    } else {

        gameStatus.textContent =
            "Stalemate. Draw.";
    }
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
            board[legalMove.y][legalMove.x];

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




// Start

loadSettings();

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

document.addEventListener(
    "pointermove",
    function(event) {
        if (!settings.motion) {
            return;
        }

        document.documentElement.style.setProperty(
            "--mouse-x",
            `${event.clientX}px`
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            `${event.clientY}px`
        );
    }
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

heroPlayButton.addEventListener(
    "click",
    startQuickMatch
);

playButton.addEventListener(
    "click",
    startQuickMatch
);

botButton.addEventListener(
    "click",
    startBotMatch
);


// Match Controls

cancelButton.addEventListener(
    "click",
    function() {
        socket.emit("cancel-match");
        showHomePage();
    }
);

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
        if (
            inMatch &&
            !gameOver
        ) {
            socket.emit("resign");
        }

        inMatch = false;
        gameOver = true;
        playerColor = null;
        currentMatch = null;

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
        socket.emit("create-private");
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

        if (previousMode === "bot") {
            startBotMatch();
            return;
        }

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
        }
    }
);

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
