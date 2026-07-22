# BIGSIIX Reloads

Static site for the BIGSIIX rewards hub — bonus code and a monthly wager leaderboard.

No build step, no dependencies. Plain HTML, CSS and JavaScript.

## Pages

| File | What's on it |
| --- | --- |
| `index.html` | Hero, Stake bonus code card, socials |
| `leaderboard.html` | Monthly wager leaderboard — top 3 podium plus the table |

## Editing content

**Everything on both pages is generated from `js/data.js`.** That's the only
file you need to touch for normal updates:

- `SITE` — site name
- `SOCIALS` — Kick, Discord, X, YouTube, Instagram, Twitch. Set a `url` to `""`
  to hide that platform.
- `PARTNERS` — casino name, referral code, affiliate link, offer text, logo
- `LEADERBOARD` — prize pool, reset date, and the player rows

Prizes are matched **by position**, so keep `players` sorted highest wager
first and the payouts line up.

The countdown reads `LEADERBOARD.endsAt`, an ISO date in UTC —
`"2026-08-01T00:00:00Z"`.

## Running locally

```
node serve.mjs
```

Then open <http://localhost:3000>. It serves with `cache-control: no-store`,
so a normal refresh always picks up your latest edits. `PORT=8080 node serve.mjs`
if 3000 is taken.

You can also just open `index.html` directly, but over `file://` the
copy-code button falls back to a legacy clipboard path.

## Deploying

It's a static site — drop the folder on any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages). Nothing to build. `serve.mjs` is dev-only and
is ignored by static hosts.

## Assets

`assets/pattern.jpg` is ~2.7MB and is the biggest thing on the page. It renders
dark and soft at low opacity, so re-exporting it around 2000px wide would cut
most of the page weight with no visible difference.
