# Pulse Chess ♞

Pulse Chess is a real-time multiplayer chess platform built for the web.

It combines online matchmaking, player accounts, Elo ratings, leaderboards, private matches, bots, live chat, sound effects, music, and a modern responsive interface.

> **Status:** Pulse Chess is currently in active development.

---

## Preview

### Home

<p align="center">
  <img src="assets/demo/home.gif" alt="Pulse Chess home page" width="850">
</p>

### Matchmaking

<p align="center">
  <img src="assets/demo/matchmaking.gif" alt="Pulse Chess matchmaking animation" width="850">
</p>

### Match Results

<p align="center">
  <img src="assets/demo/win-result.gif" alt="Pulse Chess win result screen" width="850">
</p>

---

## Features

### Chess

- Real-time multiplayer chess
- Legal move validation
- Check and checkmate detection
- Stalemate detection
- Castling
- En passant
- Pawn promotion
- Server-controlled chess clocks
- Move history
- Board orientation based on player color

### Multiplayer

- Quick matchmaking
- Private games with room codes
- Live match chat
- Player information during matches
- Match result screens
- Rematch / play again flow

### Accounts

- Email and password authentication
- Google Sign-In
- Persistent login sessions
- Username validation
- Username profanity filtering
- Country detection
- Country flags
- Player statistics

### Competitive System

- Elo rating system
- Wins, losses, and draws
- Global leaderboards
- Country leaderboards
- Match history
- Rating changes after matches

### UI / Experience

- Responsive dark interface
- Animated gradient background
- Matchmaking animations
- Win / loss / draw result popup
- Rating gain and loss animations
- Multiple chess board themes
- Sound effects
- Lo-fi match music
- Audio and visual settings
- Responsive navigation

---

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express
- Socket.IO

### Database

- PostgreSQL
- Neon

### Authentication

- Express Sessions
- Argon2
- Google Identity Services

### Chess

- chess.js

---

## How It Works

Pulse Chess uses Socket.IO to keep both players synchronized in real time.

The Node.js server manages:

- Matchmaking
- Chess games
- Player sessions
- Chess clocks
- Game results
- Ratings
- Leaderboards
- Match history
- Chat

PostgreSQL is used to store player accounts, ratings, statistics, and completed matches.

---

## Project Structure

```text
pulse-chess/
│
├── assets/
│   ├── demo/
│   │   ├── home.gif
│   │   ├── matchmaking.gif
│   │   └── win-result.gif
│   │
│   └── pieces/
│       ├── bishop-b.svg
│       ├── bishop-w.svg
│       ├── king-b.svg
│       ├── king-w.svg
│       ├── knight-b.svg
│       ├── knight-w.svg
│       ├── pawn-b.svg
│       ├── pawn-w.svg
│       ├── queen-b.svg
│       ├── queen-w.svg
│       ├── rook-b.svg
│       └── rook-w.svg
│
├── index.html
├── style.css
├── script.js
├── server.js
├── pieces.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Running Pulse Chess Locally

### 1. Clone the repository

```bash
git clone https://github.com/nullscaped/pulse-chess.git
cd pulse-chess
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a file named:

```text
.env
```

Add:

```env
DATABASE_URL=your_postgresql_database_url
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

Do **not** upload your `.env` file to GitHub.

### 4. Start the server

```bash
node server.js
```

### 5. Open Pulse Chess

Visit:

```text
http://localhost:3000
```

---

## Google Sign-In Setup

To use Google authentication locally, create a Web OAuth client in Google Cloud.

Add this as an authorized JavaScript origin:

```text
http://localhost:3000
```

Then place your Google Client ID inside your `.env` file.

---

## Database

Pulse Chess uses PostgreSQL for persistent player data.

Player data includes:

- Username
- Email
- Country
- Elo rating
- Wins
- Losses
- Draws
- Authentication information
- Match history

The server automatically creates and updates the database tables required by the application.

---

## Rating System

New players begin at:

```text
1200 Elo
```

Ratings change after rated games depending on the relative rating of each player.

Winning against a stronger player gives a larger rating increase, while defeating a lower-rated player gives a smaller increase.

---

## Development

Pulse Chess is actively being developed.

Planned improvements include:

- Improved player profiles
- More bot difficulties
- Better matchmaking
- Additional game settings
- More animations and sound effects
- Improved match history
- Social features
- Further anti-cheat and server validation
- Production deployment

---

## Author

Built by **Fahad Khan**

GitHub: [@nullscaped](https://github.com/nullscaped)

---

## License

This project is licensed under the terms included in the `LICENSE` file.