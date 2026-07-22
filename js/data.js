/* ==========================================================================
   BIGSIIX — SITE CONFIG
   This is the only file you need to edit to update the site.
   Everything on the page is generated from the objects below.
   ========================================================================== */

const SITE = {
  name: "BIGSIIX",
};

/* --------------------------------------------------------------------------
   SOCIALS
   Set a url to "" to hide that button.
   -------------------------------------------------------------------------- */
const SOCIALS = [
  { id: "kick",      label: "Kick",      url: "https://kick.com/bigsiix",              primary: true },
  { id: "discord",   label: "Discord",   url: "https://discord.gg/XJz4USshC",          primary: true },
  { id: "x",         label: "X",         url: "https://x.com/thebigsiix" },
  { id: "youtube",   label: "YouTube",   url: "https://youtube.com/@bigsiix" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/sokasht" },
  { id: "twitch",    label: "Twitch",    url: "" },
];

/* --------------------------------------------------------------------------
   CASINO PARTNERS / BONUS CODES
   ---------------------------------------------------------------------------
   name     : casino name
   code     : the referral code users copy  (use "" if the link auto-applies)
   url      : your affiliate link
   offer    : the headline deal — keep it short, it's the big text on the card
   perks    : 2-4 bullet points
   logo     : path to a logo in /assets  (e.g. "assets/casino-rain.png").
              Leave as "" and the card falls back to a styled monogram.
   featured : true puts the card first with a red "FEATURED" ribbon
   -------------------------------------------------------------------------- */
const PARTNERS = [
  {
    name: "Stake",
    code: "SIIX",
    // TODO: replace with your real Stake affiliate link
    url: "https://stake.com/?c=SIIX",
    // TODO: set this to the exact offer your affiliate deal gives — don't
    // advertise terms Stake isn't actually honouring for your code.
    offer: "Sign up with code SIIX to unlock your welcome bonus",
    perks: [
      "Weekly reloads dropped in Discord",
      "Rakeback on every bet",
      "Entry to the monthly wager leaderboard",
      "Direct line to a VIP host",
    ],
    logo: "assets/stake.png",
    featured: true,
  },
];

/* --------------------------------------------------------------------------
   LEADERBOARD
   ---------------------------------------------------------------------------
   Lives in  data/leaderboard.json  — NOT in this file.

   It's split out so a scheduled job can overwrite that one file from the
   Stake affiliate API without touching any code. Edit the JSON by hand until
   then; the page fetches it on load.
   -------------------------------------------------------------------------- */
