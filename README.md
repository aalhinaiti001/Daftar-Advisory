# Daftar Advisory — Design System

> Rigorous finance, without the overhead.

This is the working design system for **Daftar Advisory**, an independent finance advisory practice based in Amman and serving KSA, UAE, and Jordan. It captures the brand's foundations (colour, type, voice), real visual assets, and high-fidelity recreations of the practice's website so that a design agent can produce new, on-brand artifacts — web pages, research briefs, branded PDFs, and slides — without re-deriving the rules each time.

The system is editorial and print-restrained by design. It should never read like a consulting slide deck.

---

## 1 · The practice

Daftar Advisory is a **practice of one** — one experienced practitioner (Ahmad Al Hinaiti, Big-Four-trained at PwC and EY) who does the work himself and stands behind every number. Fixed scope, fixed fee. The positioning is precise: *senior finance judgement, without Big-Four overhead.*

**What they sell** — fixed-scope, fixed-fee technical engagements, each ending in a written deliverable plus the editable working file:

- **Independent Technical Review** — a second opinion before an auditor, board, or counterparty relies on the numbers
- **IFRS Financial Statements** — full statements built from a trial balance, formula-driven and traceable
- **Audit Readiness & Remediation** — fix and organise the files before the auditor arrives
- **Quality of Earnings** — separate recurring earnings from one-offs for a transaction
- Also on the same basis: **ZATCA Phase 2** integration, **UAE Corporate Tax**, **KSA Transfer Pricing** documentation, **Nomu** pre-IPO readiness, investment cases, fractional finance support.

**The audience** — founders and CFOs of mid-size MENA businesses who can't justify Big-Four fees (and wouldn't get senior attention even if they paid them), plus finance directors who need a defensible technical position. Markets: KSA · UAE · Jordan, with work that travels to the US. Standards: IFRS · SOCPA · US GAAP · Yellow Book.

**Outputs in scope for this system** — the marketing/practice website (EN + AR), *The Daftar* research-brief series (long-form editorial articles), capability statements, and branded PDFs/slides.

---

## 2 · Sources

Everything here was derived from materials the user provided. The reader of this system may or may not have access — links are recorded so the work can be re-grounded if needed.

- **GitHub — `aalhinaiti001/Daftar-Advisory`** (branch `main`)
  → https://github.com/aalhinaiti001/Daftar-Advisory
  The repo contains `01_Deployed website/`, the production static site for daftaradvisory.com. **Explore it further to build higher-fidelity work** — every page is hand-written HTML+CSS with the brand tokens inline, so it is the single best source of truth for layout, spacing, and component structure. Key files:
  - `index.html` — the homepage (hero, trust strip, services, case studies, dark process section, contact). The richest single reference.
  - `articles.html` — *The Daftar* research-brief index (editorial list rows).
  - `daftar-001-zatca-wave-24.html` … `004` — long-form research briefs (article body, drop-caps, callouts, data tables, price boxes).
  - `start.html`, `scoping.html`, `areas.html`, `capability-statement.html` — secondary pages (contact-link lists, forms, service detail).
  - `ar/index.html` — the full Arabic (RTL) homepage.
  - `HANDBOOK.md.txt` — **the Brand Handbook v1.2**, the authoritative voice/colour/type bible. Read it for any copywriting decision.
  - `favicon.svg`, `og-image.png` — the only two raster/vector brand assets in the repo (copied into `assets/`).

The website README also references a **Profile Playbook v1.3** (not in the repo) for voice decisions; if copy questions arise that the Handbook doesn't answer, ask the user for it.

---

## 3 · Content fundamentals

How Daftar writes. The single test, from the Handbook: *if a sentence wouldn't sound natural coming from a senior auditor explaining something over coffee, it doesn't belong.*

**Voice** — direct, confident, quietly funny, always rooted in real work. Not a consulting deck, not a LinkedIn influencer, not corporate-cheerful.

| We are | We are not |
|---|---|
| Direct | Hedging |
| Technical when it matters | Jargon for its own sake |
| Confident | Arrogant |
| Dry, occasionally funny | Corporate cheerful |
| Specific (*"SAR 3B portfolio"*) | Vague (*"extensive experience"*) |
| Honest about trade-offs | Selling the dream |
| Editorial, considered | Rushed, emoji-heavy |

**Person & address** — Speaks as **"I"** (a single practitioner) and addresses the reader as **"you"**. *"I open the Excel file, read the contracts, write the memo, and stand behind every number."* Never the corporate "we" pretending to be a team.

**Casing** — Sentence case for headlines and body. Mono labels are **UPPERCASE**, always tracked (`letter-spacing`). Title Case appears only inside service tags and nav.

**Words we use** — Practice · Practitioner · Rigorous · Tie-out · Working paper · Technical · Craft · Judgement · Position · Memo · Scope.

**Words we never use** (the avoidance list) — Leverage · Synergy · Cutting-edge · World-class · Innovative · Unlock · Empower · Disrupt · Game-changer · Passionate · Dynamic · Best-in-class · Journey. The avoidance list applies in Arabic too — don't translate a banned word, just don't use the concept.

**Numbers are specific and real** — `SAR 3B+`, `47 contracts`, `~40% faster`, `30-minute call`, `48 hours`. Sanitised but never rounded into vagueness. Figures often carry the one rust accent.

**Emoji** — Effectively none. The Handbook permits at most one or two *geometric* marks per Instagram caption (`▪ ◆ ▣`) and bans festive emoji entirely. On the website and in briefs, the only "icons" are typographic: the `◆` separator dot, the `—` em-dash list bullet, the `→` arrow. **Do not introduce emoji.**

**The vibe** — A working paper that learned typography. Quietly authoritative. Says one thing per surface and trusts whitespace to carry the rest. Honest to the point of telling you when the work *isn't* a fit.

**Sample copy that is unmistakably Daftar:**
- *"Senior finance judgement, without the overhead."* (hero)
- *"One senior practitioner does the work and stands behind the number."*
- *"A clean tie-out is a love letter to the auditor who comes next."* (Handbook)
- *"If the work is a fit, I'll say so. If it isn't, I'll tell you directly and point you somewhere better."*
- *"No proprietary models. No lock-in. You can extend the work yourself."*

**Delete-it test** — *"We leverage best-in-class IFRS expertise to unlock transformative value for our clients."* If it reads like this, rewrite it.

---

## 4 · Visual foundations

The restraint *is* the brand. The look is built from the **70 / 25 / 5** ratio — Paper dominates, Ink carries the content, Rust is the 5% that makes the eye land — and almost nothing else.

**Colour** — Five colours, no more (see `colors_and_type.css` for the full token set).
- `--paper #F4F1EA` — warm off-white background, ~70%. **Never pure white.**
- `--paper-dark #EBE6DA` — secondary surface for cards and contrast zones.
- `--ink #1A1814` — warm near-black, all body text, ~25%. **Never pure black.** Also used full-bleed for the "process" and footer sections (light text on ink).
- `--muted #78726A` — labels, captions, metadata. Grey with warmth.
- `--rust #A8341F` — the single hero colour, ~5%. Italic accent words, hairline rules, the `◆` dot, hover states. **Precious — one or two words per surface, never a fill, never a background, never a large block.** On ink surfaces it lightens to `--rust-on-ink #E07458` for legibility.
- No blue for "professional," no green for "finance," no gold for "premium." No new colours, ever. The design must survive in pure black-and-white because contrast does the work.

**Type** — Two Latin fonts, one Arabic, forever. A third Latin font means the design is wrong.
- **Fraunces** (variable serif) — all display and body. Headlines at weight **300**, body at **400**, emphasis at **500**. The **italic** is the signature — used *only* for the one rust accent word per headline. Optical size tracks the point size (`font-variation-settings: "opsz"` from 14 at body up to 144 at display). Tight negative letter-spacing on large sizes (`-0.02em` to `-0.025em`), tight leading (0.95–1.0).
- **JetBrains Mono** — labels, tags, post/section numbers (`01 / 09`), service codes, timestamps, meta. **400 only — never bold mono.** Always UPPERCASE, small (10–14px), tracked `0.14–0.18em`, in muted or rust. The typographic equivalent of a pencil mark on a working paper.
- **IBM Plex Sans Arabic** — Arabic display + body (300 / 400 / 500). Right-aligned, RTL. No italic in Arabic — emphasis is colour-only (rust) or weight 500.

**Layout & grid** — Generous whitespace is a feature; *if it feels crowded, delete something.* Text is **left-aligned** (right-aligned in Arabic); centring is reserved for credo/CTA moments. Content max-widths are disciplined: ~1440px for marketing sections, ~720–980px for reading. Section openings are marked by a **2px solid ink rule** above a grid; sub-rows by 1px ink-at-10% hairlines. A mono **eyebrow** (rust kicker + 28–40px leading rule) opens most sections.

**Backgrounds** — Flat Paper or flat Ink. **No gradients. No background images. No textures or patterns. No hand-drawn illustration.** Full-bleed colour blocks (ink process section, paper-dark service/case zones) provide rhythm instead of imagery. The only imagery in the entire brand is the typographic OG card.

**Cards** — Flat. **No shadows, no rounded corners, no coloured left-border accents.** "Cards" are cells in a 1–2px ruled grid: a `--rule-mid` 1px border with 2px gaps that read as a fine ledger grid. The hero service flag is the rare exception — a small rust tab in a card corner. Buttons and the skip-link use a barely-there `border-radius: 2px` (the only rounding in the system); cards use `0`.

**Borders & rules** — The defining device. Ink hairlines at three weights: `--rule-light` (10% — row dividers), `--rule-mid` (22% — table/card borders, byline tops), `--rule-strong` (100%, 2px — the section-opening rule). Rust appears as a 1–2px rule under eyebrows and as the left-border of callouts in briefs.

**Shadows & elevation** — **None.** There is no elevation system. Depth comes only from the Paper / Paper-dark / Ink surface stack and from rules. No `box-shadow` anywhere except the topbar's subtle backdrop-blur.

**Transparency & blur** — Used in exactly one place: the sticky topbar (`rgba(244,241,234,0.92–0.95)` + `backdrop-filter: blur(6–12px)`), so content scrolls softly beneath it. Otherwise surfaces are opaque.

**Corner radii** — `2px` on buttons and the skip-link only. Everything else is `0`. Never round a card.

**Animation** — Restrained and editorial. Scroll-reveal: elements fade up 18px over `0.75s ease` via IntersectionObserver. Hovers transition `0.15–0.25s ease`. No bounces, no springs, no parallax, no motion for its own sake. Everything is wrapped in `prefers-reduced-motion: reduce` guards that kill transitions and smooth-scroll.

**Hover states** —
- Links / nav: colour shifts to rust.
- Primary button (ink): background → rust; the `→` arrow nudges `translateX(5px)` and lightens.
- List rows (briefs, contact methods, areas): a faint rust wash (`rgba(168,52,31,0.04)`) and the row insets its padding 8–12px, while the title turns rust and the arrow slides 4px.
- Service/case cells: background → paper-dark.
- No press/active state beyond the hover (no shrink, no colour-darken) — the practice is calm, not bouncy.

**Imagery & photography** — There is none, and that is a brand rule: no stock photos, no handshakes, no fake team photos, no AI-generated imagery. If a surface needs an "image," it is type, a number, a table, or a real (sanitised) working-paper artefact. Treat any photo request as off-brand unless the user supplies a real, hand-made artefact.

---

## 5 · Iconography

Daftar has **no icon set and wants none.** This is deliberate — the Handbook bans decorative iconography along with stock imagery. The brand's entire "icon language" is typographic and lives in the fonts already loaded:

- **The wordmark is the logo.** There is no symbol mark. `Daftar` (ink, upright) + `Advisory.` (rust, italic, *with the period*). A micro form — `DAFTAR · ADVISORY` letter-spaced in mono — is used in tight header strips. See the Brand card in `preview/` and the live recreations.
- **`favicon.svg`** (in `assets/`) — the one exception: a rounded-square "D" lettermark in Ink on Paper with a single rust dot bottom-right. Use it only as a favicon / tiny avatar, never as an inline content icon.
- **Typographic marks used as icons** (all from Fraunces / JetBrains Mono, never an icon font):
  - `→` — the arrow on every link and button (mono).
  - `◆` — the rust separator dot in case-study meta and the brief count.
  - `—` — the em-dash, used as the bullet for every unordered list (rust).
  - `·` — the middot separator in meta strings and the hybrid wordmark.
  - `№` / `01`–`09` / `S / 01` — mono numerals as section and item markers.
  - `—————` — five centred rust em-dashes, the bilingual EN↔AR handoff rule.
- **Emoji** — banned outside Instagram captions (where at most one or two geometric marks `▪ ◆ ▣` are allowed). Never in web/PDF/slides.
- **Unicode** — only the marks above. Do not reach for arbitrary glyphs.

**If a future surface genuinely needs UI icons** (e.g. an app), there is no source set to copy. Do **not** invent SVGs or import a heavy icon library. Stay typographic where possible; if a real icon is unavoidable, ask the user first, then choose a thin-stroke, no-fill set (Lucide is the closest in spirit — fine hairline, geometric) and **flag the substitution** as a deviation from brand. Nothing in the codebase establishes one, so it must be treated as net-new.

---

## 6 · Index — what's in this system

Root files:
- **`README.md`** — this document. Start here.
- **`colors_and_type.css`** — all colour + type tokens (base vars and semantic classes). Import this into any new artifact.
- **`SKILL.md`** — Agent-Skill front-matter so this folder can be used directly inside Claude Code.
- **`assets/`** — `favicon.svg` (D-mark) and `og-image.png` (typographic brand card). The only brand raster/vector assets that exist.
- **`preview/`** — the Design System tab cards (colour, type, spacing, components, brand). Small static HTML specimens.
- **`01_Deployed website/`** — the imported production site (read-only reference; the source of truth for layout).

UI kits:
- **`ui_kits/website/`** — high-fidelity, interactive recreation of the daftaradvisory.com marketing site and *The Daftar* research-brief reader. `index.html` is the runnable demo; the `.jsx` files are reusable components (topbar, hero, trust strip, services grid, case studies, process section, contact, article reader, brief-list rows, footer). See its own `README.md`.

There is **no slide template** in the source material, so `slides/` is intentionally omitted (see Caveats in the build notes). If the user wants branded slides, they can be derived from the visual foundations on request.

---

*Brand Handbook v1.2 · Ahmad Al Hinaiti · Amman, Jordan · 2026 · ahmad@daftaradvisory.com*
