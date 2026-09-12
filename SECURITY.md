# Pulse Chess Security Notes

## Application protection

- Helmet security headers and Content Security Policy
- 16 KB Express JSON body limit
- Global API limit of 180 requests per minute
- Login limit of 20 attempts per 15 minutes
- Signup limit of 8 attempts per hour
- Account-change limit of 30 per 10 minutes
- Separate limits for social actions and direct messages
- Socket.IO limits for matchmaking, bot, private-room, move, chat, draw, and social actions

## Authentication

- Passwords are stored as Argon2 hashes.
- Sessions are stored server-side in PostgreSQL.
- Session cookies are HTTP-only and secure in production.
- Login and signup regenerate the session.
- Production requires a `SESSION_SECRET` of at least 32 characters.
- Email signup requires a six-digit Brevo verification code.
- Verification codes are hashed and expire after ten minutes.
- Users can sign out all sessions or delete their account.

## Data and authorization

- PostgreSQL queries are parameterized.
- Authenticated middleware protects account, social, match, and review routes.
- Direct messages require an accepted friendship.
- Blocks remove friendships and stop further direct interaction.
- Spectators cannot move pieces or use player-only actions.
- Match results, clocks, legal moves, and ratings are decided by the server.
- Client-reported game-over events are ignored.

## Moderation

Username, bio, chat, and direct-message content is checked for blocked language, including common evasions such as leetspeak, repeated letters, alternate characters, and spacing tricks. Users can block and report other players.

## Secrets and production

Never commit `.env`, `DATABASE_URL`, `SESSION_SECRET`, `BREVO_API_KEY`, private OAuth credentials, or database credentials. Use HTTPS, a persistent PostgreSQL database, an authorized Brevo sender, updated dependencies, and regular backups.

No web application can guarantee perfect security. This is an implementation summary, not a security certification.
