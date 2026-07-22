/* ==========================================================================
   BIGSIIX — behaviour
   Renders everything from js/data.js. You shouldn't need to edit this file.
   ========================================================================== */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------------------------------------------------------------- icons */
  const ICONS = {
    kick:      '<svg viewBox="0 0 24 24"><path d="M3 3h5v6h2V6h2V3h6v6h-2v3h-2v3h2v3h2v6h-6v-3h-2v-3H8v6H3V3z"/></svg>',
    discord:   '<svg viewBox="0 0 24 24"><path d="M20.3 4.5A19 19 0 0 0 15.6 3l-.3.5a14 14 0 0 1 4 2 18 18 0 0 0-14.6 0 14 14 0 0 1 4-2L8.4 3a19 19 0 0 0-4.7 1.5C1.1 8.4.4 12.2.7 16a19 19 0 0 0 5.8 3l1.2-1.9a12 12 0 0 1-1.9-1c.2-.1.3-.2.5-.3a13 13 0 0 0 11.4 0l.5.3c-.6.4-1.2.7-1.9 1l1.2 1.9a19 19 0 0 0 5.8-3c.4-4.4-.7-8.2-3-11.5zM8.7 13.7c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3zm6.6 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3z"/></svg>',
    x:         '<svg viewBox="0 0 24 24"><path d="M18.2 2h3.3l-7.2 8.3L23 22h-6.7l-5.2-6.8L5.1 22H1.8l7.7-8.8L1 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.8H5.2L17 20z"/></svg>',
    youtube:   '<svg viewBox="0 0 24 24"><path d="M23 12s0-3.8-.5-5.6a3 3 0 0 0-2.1-2.1C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.4.5a3 3 0 0 0-2.1 2.1C1 8.2 1 12 1 12s0 3.8.5 5.6a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.6.5-5.6zM9.8 15.4V8.6l5.7 3.4-5.7 3.4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.2-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9C2.3 4 3.9 2.4 7.1 2.3c1.3 0 1.7-.1 4.9-.1zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4zm5.3-8.1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',
    twitch:    '<svg viewBox="0 0 24 24"><path d="M4.3 2 2 6.5V20h5v3h3l3-3h4l5-5V2H4.3zM20 13.5 17.5 16H13l-3 3v-3H6V4h14v9.5zM16 7v5h-2V7h2zm-5 0v5H9V7h2z"/></svg>',

    /* UI icons — stroked, so they take currentColor rather than a fill */
    copy:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.9 7.5 10 4.3-1.1 7.5-5.4 7.5-10v-6L12 2.5Z"/><path d="m9.2 12 2 2 3.6-3.6"/></svg>',
  };

  const icon = (id) => ICONS[id] || ICONS.x;

  /* ------------------------------------------------- podium crest artwork */
  /* five-point crown, orbs on the tips, diamond finial on the centre spike */
  const CROWN = `
    <svg class="pod__crown" viewBox="0 0 48 30" aria-hidden="true">
      <path d="M6 26 L6.5 13 L12 19.5 L15.5 9 L19.5 17.5 L24 5 L28.5 17.5 L32.5 9 L36 19.5 L41.5 13 L42 26 Z"/>
      <circle cx="6.5" cy="11" r="1.9"/>
      <circle cx="15.5" cy="7" r="1.7"/>
      <circle cx="32.5" cy="7" r="1.7"/>
      <circle cx="41.5" cy="11" r="1.9"/>
      <path d="M24 0.5 L26.6 3.4 L24 6.3 L21.4 3.4 Z"/>
      <rect x="5" y="25" width="38" height="3.4" rx="1.2"/>
    </svg>`;

  /* three swept bars either side, sitting behind the medallion */
  const WINGS = `
    <svg class="pod__wings" viewBox="0 0 220 44" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g>
        <path d="M118 6 H170 L160 15 H108 Z"/>
        <path d="M120 18 H178 L168 27 H110 Z"/>
        <path d="M122 30 H164 L154 39 H112 Z"/>
        <path d="M102 6 H50 L60 15 H112 Z"/>
        <path d="M100 18 H42 L52 27 H110 Z"/>
        <path d="M98 30 H56 L66 39 H108 Z"/>
      </g>
    </svg>`;

  const activeSocials = () => (typeof SOCIALS !== "undefined" ? SOCIALS : []).filter((s) => s.url);

  /* ---------------------------------------------------------------- toast */
  const toastEl = $("#toast");
  let toastTimer;

  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2200);
  }

  /* Clipboard API needs a secure context — fall back for file:// and http. */
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) { /* fall through */ }
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  /* ---------------------------------------------------------------- intro */
  function renderIntro() {
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------- socials */
  function renderSocials() {
    const list = activeSocials();

    /* point the hero "Watch live" button at the Kick channel from SOCIALS,
       so there's still only one place the stream URL lives */
    const watch = $("#watchLive");
    const kick = list.find((s) => s.id === "kick");
    if (watch && kick) {
      watch.href = kick.url;
      watch.target = "_blank";
      watch.rel = "noopener";
    }

    const grid = $("#socialGrid");
    if (grid) {
      grid.innerHTML = list
        .map((s) => {
          let handle;
          try {
            const u = new URL(s.url);
            handle = (u.hostname + u.pathname).replace(/^www\./, "").replace(/\/$/, "");
          } catch (_) {
            handle = s.url;
          }
          return `<a class="socialCard socialCard--${s.id}" href="${s.url}" target="_blank" rel="noopener">
                    <span class="socialCard__icon">${icon(s.id)}</span>
                    <span>
                      <span class="socialCard__name">${s.label}</span><br>
                      <span class="socialCard__handle">${handle}</span>
                    </span>
                  </a>`;
        })
        .join("");
    }

    const foot = $("#footerSocials");
    if (foot) {
      foot.innerHTML = list
        .map(
          (s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">${icon(s.id)}</a>`
        )
        .join("");
    }
  }

  /* ------------------------------------------------------------- partners */
  function renderPartners() {
    const grid = $("#partnerGrid");
    if (!grid || typeof PARTNERS === "undefined") return;

    const sorted = [...PARTNERS].sort((a, b) => Number(b.featured) - Number(a.featured));

    grid.classList.toggle("cards--solo", sorted.length === 1);

    const RULE = '<div class="rule"><span class="rule__gem"></span></div>';

    grid.innerHTML = sorted
      .map((p, i) => {
        const logo = p.logo
          ? `<img src="${p.logo}" alt="${p.name}">`
          : `<span class="pcard__monogram">${p.name.trim()}</span>`;

        const codeBox = p.code
          ? `<div class="codeBox">
               <span class="codeBox__label">Use code</span>
               <div class="codeBox__row">
                 <span class="codeBox__value">${p.code}</span>
                 <button class="copyBtn" type="button" data-code="${p.code}" aria-label="Copy code ${p.code}">
                   ${ICONS.copy}
                 </button>
               </div>
             </div>`
          : "";

        // "Play on stake.com" — read the domain off the affiliate link
        let host = p.name;
        try { host = new URL(p.url).hostname.replace(/^www\./, ""); } catch (_) {}

        return `<article class="pcard reveal" style="transition-delay:${i * 70}ms">
                  <div class="pcard__inner">
                    <div class="pcard__logo">${logo}</div>
                    ${RULE}
                    <p class="pcard__tagline">${p.offer}</p>
                    ${RULE}
                    ${codeBox}
                    <a class="pcard__cta" href="${p.url}" target="_blank" rel="noopener sponsored">
                      <span>Play on ${host}</span>${ICONS.external}
                    </a>
                    ${RULE}
                    <div class="pcard__legal">
                      ${ICONS.shield}
                      <p>
                        18+ Gamble responsibly. If you need support, visit
                        <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener">gamblingtherapy.org</a>
                      </p>
                    </div>
                  </div>
                </article>`;
      })
      .join("");

    $$(".copyBtn", grid).forEach((btn) => {
      btn.addEventListener("click", async () => {
        const ok = await copyText(btn.dataset.code);
        if (!ok) return toast("Couldn't copy — select it manually");
        btn.innerHTML = ICONS.check;
        btn.classList.add("is-copied");
        toast(`Code ${btn.dataset.code} copied`);
        setTimeout(() => {
          btn.innerHTML = ICONS.copy;
          btn.classList.remove("is-copied");
        }, 1800);
      });
    });
  }

  /* ---------------------------------------------------------- leaderboard */
  const money = (n) => "$" + Number(n).toLocaleString("en-US");

  function timeAgo(date) {
    const mins = Math.round((Date.now() - date.getTime()) / 60000);
    if (mins < 2)    return "just now";
    if (mins < 60)   return `${mins} minutes ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 24)    return hrs === 1 ? "1 hour ago" : `${hrs} hours ago`;
    const days = Math.round(hrs / 24);
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  /* Fetched rather than inlined so a scheduled job can rewrite the JSON from
     the affiliate API without touching code. An API key must never reach the
     browser, so the fetch is always of a static file the job has written. */
  async function loadLeaderboard() {
    if (!$("#lbRows")) return;              // not on the leaderboard page

    try {
      const res = await fetch("data/leaderboard.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      renderLeaderboard(await res.json());
    } catch (err) {
      const rows = $("#lbRows");
      if (rows) {
        rows.innerHTML =
          `<tr><td colspan="4" class="lb__error">
             Couldn't load the leaderboard right now. Try again shortly.
           </td></tr>`;
      }
      console.error("leaderboard load failed:", err);
    }
  }

  function renderLeaderboard(lb) {
    if (!lb) return;

    const sub = $("#lbSub");
    if (sub) {
      sub.innerHTML =
        `Wager on <a href="${lb.casinoUrl}" target="_blank" rel="noopener sponsored" class="red">${lb.casino}</a> ` +
        `under code <strong>${lb.code}</strong> to climb the board. Top spots split ${lb.prizePool} every ${lb.period.toLowerCase().replace(/ly$/, "")}.`;
    }

    const period = $("#lbPeriod");
    const pool   = $("#lbPool");
    const note   = $("#lbNote");
    if (period) period.textContent = lb.period;
    if (pool)   pool.textContent   = lb.prizePool;
    if (note)   note.textContent   = lb.note;

    const updated = $("#lbUpdated");
    if (updated && lb.updatedAt) {
      const t = new Date(lb.updatedAt);
      if (!Number.isNaN(t.getTime())) {
        updated.textContent = "Updated " + timeAgo(t);
        updated.title = t.toLocaleString();
      }
    }

    const players = [...lb.players].sort((a, b) => b.wagered - a.wagered);

    /* top 3 podium — ornate crown-and-medallion frames */
    const podium = $("#podium");
    if (podium) {
      podium.innerHTML = players
        .slice(0, 3)
        .map(
          (p, i) => `<article class="pod pod--${i + 1} reveal" style="transition-delay:${i * 90}ms">
                       <div class="pod__crest">
                         ${WINGS}
                         ${i === 0 ? CROWN : ""}
                         <span class="pod__medal"><span>${i + 1}</span></span>
                       </div>
                       <div class="pod__frame">
                         <div class="pod__body">
                           <div class="pod__panel">
                             <span class="pod__user">${p.user}</span>
                             <span class="pod__wager">${money(p.wagered)}</span>
                           </div>
                           <div class="pod__reward">
                             <span class="pod__prize">${p.prize}</span>
                             <span class="pod__rewardLabel">Reward</span>
                           </div>
                         </div>
                       </div>
                     </article>`
        )
        .join("");
    }

    /* rows 4+ */
    const rows = $("#lbRows");
    if (rows) {
      rows.innerHTML = players
        .slice(3)
        .map((p, i) => {
          const zero = /^\$?0(\.00)?$/.test(String(p.prize).trim());
          return `<tr>
                    <td><span class="rank">${i + 4}</span></td>
                    <td class="cell-user">${p.user}</td>
                    <td class="ta-r cell-wager">${money(p.wagered)}</td>
                    <td class="ta-r cell-prize${zero ? " is-zero" : ""}">${zero ? "—" : p.prize}</td>
                  </tr>`;
        })
        .join("");
    }

    startCountdown(lb.endsAt);
  }

  /* ------------------------------------------------------------ countdown */
  function startCountdown(endsAt) {
    const root = $("#countdown");
    if (!root) return;

    const end = new Date(endsAt).getTime();
    if (Number.isNaN(end)) return;

    const cells = {
      d: $('[data-cd="d"]', root),
      h: $('[data-cd="h"]', root),
      m: $('[data-cd="m"]', root),
      s: $('[data-cd="s"]', root),
    };
    const pad = (n) => String(n).padStart(2, "0");

    function tick() {
      const left = end - Date.now();

      if (left <= 0) {
        Object.values(cells).forEach((c) => c && (c.textContent = "00"));
        clearInterval(timer);
        return;
      }
      const s = Math.floor(left / 1000);
      cells.d && (cells.d.textContent = pad(Math.floor(s / 86400)));
      cells.h && (cells.h.textContent = pad(Math.floor(s / 3600) % 24));
      cells.m && (cells.m.textContent = pad(Math.floor(s / 60) % 60));
      cells.s && (cells.s.textContent = pad(s % 60));
    }

    tick();
    const timer = setInterval(tick, 1000);
  }

  /* ----------------------------------------------------------- stat count */
  function countUp(el) {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();

    function frame(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = prefix + val.toLocaleString("en-US") + (suffix === "days" ? "" : suffix);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* --------------------------------------------------------------- reveal */
  function initReveal() {
    const items = $$(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      $$("[data-count]").forEach(countUp);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => io.observe(el));

    const statIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          countUp(e.target);
          statIo.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    $$("[data-count]").forEach((el) => statIo.observe(el));
  }

  /* ------------------------------------------------------------------ nav */
  function initNav() {
    const nav    = $("#nav");
    const toggle = $("#navToggle");
    const links  = $("#navLinks");

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$("a", links).forEach((a) =>
        a.addEventListener("click", () => {
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }

    const onScroll = () => nav && nav.classList.toggle("is-stuck", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* highlight whichever page we're on ("" and "/" both mean index) */
    const file = location.pathname.split("/").pop() || "index.html";
    $$("#navLinks a:not(.btn), .footer__nav a").forEach((a) => {
      const target = a.getAttribute("href").split("#")[0];
      a.classList.toggle("is-active", target === file);
    });
  }

  /* ----------------------------------------------------------------- boot */
  function init() {
    renderIntro();
    renderSocials();
    renderPartners();
    loadLeaderboard();
    initReveal();
    initNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
