# Pulse Chess v1.1.0 — Final Release Notes

This release turns Pulse Chess into a complete real-time chess platform.

## Gameplay

- Added rated matchmaking with six time controls.
- Added private rooms, draw offers, resignation, chat, rematches, and spectating.
- Added six Stockfish-backed practice levels from 500 to 3000.
- Bot rematches preserve the selected bot and clock settings.
- Added server-authoritative move validation, clocks, FEN synchronization, and game-ending logic.
- Added 30-second reconnect grace; a second disconnect forfeits the game.
- Added PGN export, FEN copy, stored match history, final-board viewing, and Stockfish review.

## Accounts and community

- Added email verification with a six-digit Brevo code.
- Added Google authentication, Argon2 password hashing, secure sessions, and account controls.
- Added player profiles, search, country flags, presence, friends, direct messages, notifications, blocking, and reporting.
- Added username cooldowns and stronger moderation for profanity, leetspeak, repeated letters, and disguised spellings.
- Added completed leaderboard views, filters, and leaderboard GIF media.

## Security and reliability

- Added Helmet security headers and a restrictive Content Security Policy.
- Added HTTP-only session cookies and production session validation.
- Added global API and per-feature request limits.
- Added Socket.IO limits for matchmaking, bots, private rooms, moves, chat, draws, and social actions.
- Added request-size limits, input validation, parameterized SQL, and authenticated route protection.
- Added explicit Stockfish startup and failure handling.

## Design and assets

- Added a dark responsive interface, SVG pieces, seven board themes, animated result states, and refreshed result screens.
- Added the four supplied GIF assets, including leaderboard and victory animations.
- Added Terms, Privacy, Cookies, and Fair Play pages.
