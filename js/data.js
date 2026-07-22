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
   endsAt   : ISO date the current board resets — the countdown reads this.
              Format: "YYYY-MM-DDTHH:mm:ssZ"  (Z = UTC)
   players  : ordered highest wager first. Add or remove rows freely,
              the prize column is matched by position.
   -------------------------------------------------------------------------- */
const LEADERBOARD = {
  casino: "Stake",
  casinoUrl: "https://stake.com/?c=SIIX",
  code: "SIIX",
  prizePool: "$2,000",
  period: "Monthly",
  endsAt: "2026-08-01T00:00:00Z",
  note:
    "Wagers only count while you're signed up under code SIIX. " +
    "Board updates every 24 hours. Prizes are paid within 48 hours of reset.",

  // $2,000 split across the top 5: 900 / 500 / 300 / 200 / 100
  players: [
    { user: "Player_One",    wagered: 184320, prize: "$900" },
    { user: "SlotGoblin",    wagered: 142870, prize: "$500" },
    { user: "xRainmaker",    wagered: 121450, prize: "$300" },
    { user: "DegenDaily",    wagered: 98120,  prize: "$200" },
    { user: "BonusHunterHQ", wagered: 76540,  prize: "$100" },
    { user: "MaxWinMike",    wagered: 61200,  prize: "$0" },
    { user: "TiltProof",     wagered: 44890,  prize: "$0" },
    { user: "CashoutKing",   wagered: 32770,  prize: "$0" },
    { user: "LuckyLoop",     wagered: 21340,  prize: "$0" },
    { user: "SpinSensei",    wagered: 15880,  prize: "$0" },
  ],
};
