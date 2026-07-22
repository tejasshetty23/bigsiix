# BIGSIIX Reloads

Static site for the BIGSIIX rewards hub — bonus code and a monthly wager leaderboard.

No build step, no dependencies. Plain HTML, CSS and JavaScript.

## Pages

| File | What's on it |
| --- | --- |
| `index.html` | Hero, Stake bonus code card, socials |
| `leaderboard.html` | Monthly wager leaderboard — top 3 podium plus the table |

## Editing content

Two files, split by how often they change.

### `js/data.js` — the stuff that rarely changes

- `SITE` — site name
- `SOCIALS` — Kick, Discord, X, YouTube, Instagram, Twitch. Set a `url` to `""`
  to hide that platform.
- `PARTNERS` — casino name, referral code, affiliate link, offer text, logo

### `data/leaderboard.json` — the stuff that changes constantly

Prize pool, reset date, rules note, and the player rows. The page fetches this
on load.

It's a separate JSON file **so a scheduled job can overwrite it from the Stake
affiliate API** without touching any code. Until that exists, edit it by hand.

Two rules:

- Prizes are matched **by position** — keep `players` sorted highest wager
  first and the payouts line up.
- `endsAt` and `updatedAt` are ISO dates in UTC — `"2026-08-01T00:00:00Z"`.
  The countdown reads `endsAt`; the "Updated N hours ago" line reads
  `updatedAt`.

Usernames are shown exactly as written, so mask them in the JSON
(`Pl***ne`) if they shouldn't be public.

> **If you automate this:** an API key must never appear in the browser —
> anything the page can read, so can a visitor. Have a scheduled job (e.g. a
> GitHub Action with the key in Secrets) call the API and commit the resulting
> JSON. The page only ever fetches the static file.

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
