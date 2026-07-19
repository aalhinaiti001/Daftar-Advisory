# Handoff: Calibre by Daftar — Marketing Site + Daftar Advisory About Page

## Overview
A three-page marketing site: the Calibre product site (hiring-decision diagnostic), a standalone "About Daftar" page for the parent advisory firm, and a design system reference. Both pages are cross-linked (Calibre nav/footer → About Daftar, About Daftar nav → Calibre).

## About the Design Files
The bundled `.dc.html` files are **design references built in HTML** — high-fidelity prototypes of look, layout, and copy. They are not production code to paste in as-is. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, etc.) using its established components, routing, and styling conventions — or, if no environment exists yet, choose the most appropriate framework and implement there. Preserve the visual system (below) exactly; do not invent new colors, type, or spacing.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly.

## Pages

### 1. Calibre Website (`Calibre Website.dc.html`)
Single-page marketing site, ~1320px max content width, centered, sticky nav.

**Sections (top to bottom):**
1. **Nav** — sticky, paper bg, bottom rule. Left: 32×32 green rounded-square monogram tile ("C" in Newsreader italic serif) + "Calibre" wordmark (italic serif) + "BY DAFTAR" mono kicker below. Right: links Method / Deliverables / Who it's for / Pilot / FAQ / Daftar (→ About Daftar page), plus a filled "Book a call" button (ink bg → accent on hover).
2. **Hero** — 2-col grid (1.15fr / 1fr). Left: mono eyebrow "HIRING DECISION DIAGNOSTIC" with accent rule, 60px serif H1 "Your hiring decisions are more guesswork than you think.", body paragraph, two CTAs (filled button + underlined text link). Right: white scorecard card — header row (mono label + candidate id in accent), three scored rows (label, progress bar, numeric score in mono), a divider, "Weighted total" row with double-ruled score badge.
3. **Problem** — full-bleed void (#111214) band, white text. 2-col: left headline "Same candidate. Four reviewers. Four verdicts." + body; right a translucent card showing 4 reviewer rows (label, progress bar, score) and a "Spread: 5.5 points" footer line.
4. **Method** (`#method`) — mono eyebrow + serif H2 "Four steps from opinion to evidence." 4-column grid of cards (1px rule-colored gaps forming hairlines), each: numbered index in accent, serif H3 (Read/Score/Compare/Calibrate), body copy.
5. **Deliverables** (`#deliver`) — band bg #EFEBE1, top/bottom rule borders. 3×2 grid of 6 white cards, each: numbered index, serif H4 title, body copy. Titles: Role-specific scorecard, Candidate-reading guide, Interview question bank, Calibration session, Hiring-risk notes, Executive findings memo.
6. **Who it's for** (`#who`) — 2-col (1fr/1.4fr): left eyebrow + serif H2; right a 2×2 borderless-grid of 4 items (HR leaders, Talent teams, Hiring managers, Founders) each with italic serif label + one-line body, separated by top rules (first row ink-colored, second row rule-colored).
7. **Pilot** (`#pilot`) — full-bleed deep green (#2C3A31) band, white text — same green as the logo tile. 2-col (1fr/1.3fr): left "Start with one role." + body + inline mono tag row "ONE ROLE · ~2–3 WEEKS · FIXED SCOPE"; right a 4-row numbered list (Scope the role / Structured review / Calibrate / Findings memo), each row divided by a translucent white rule.
8. **Benefits strip** — 4-col grid, no background, bottom rule border. Each: italic serif accent-colored label (Clearer / Faster / More consistent / More defensible) + one-line body.
9. **FAQ** (`#faq`) — band bg #EFEBE1, top/bottom rule borders. 2-col (1fr/1.5fr): left sticky eyebrow + serif H2 "Before you book the call."; right a ruled list of 5 Q&A rows (numbered index in accent, serif H4 question, body answer), each separated by a top rule.
10. **CTA** (`#cta`) — centered, serif H2 "Bring one role to Calibre.", body, filled ink button (→ accent on hover).
11. **Footer** — full-bleed ink band. Left: italic serif "Calibre" + "BY DAFTAR" mono kicker. Right: mono links "ABOUT DAFTAR" (→ About Daftar page), email, domain string.

### 2. About Daftar (`About Daftar.dc.html`)
Standalone page for the parent firm, same visual system (cream paper bg, no dark bands). Structure: nav (Daftar "D" tile mark + wordmark, links to firm story/practice/principles anchors + Calibre link + CTA button) → hero (eyebrow + serif H1 + body) → 4-column stat rule (2024 Established, MENA region, 3 practice lines, "Calibre" as first product) → firm story → three practice lines → four principles → Calibre callout → footer. Cross-links to `Calibre Website.dc.html`.

### 3. Calibre Website — Mobile (`Calibre Website Mobile.dc.html`)
Mobile recreation of the Calibre site, shown inside an iPhone frame for reference only (the frame itself is not part of the design — build a normal responsive/mobile layout). Single column, ~390px content width. Same section order as desktop (nav → hero+scorecard → problem → method → deliverables → who → pilot → benefits → FAQ → CTA → footer), condensed: 34px H1, stacked CTAs (full-width buttons), hamburger icon instead of full nav, 2-col benefits grid, all multi-column desktop grids collapsed to a single column list separated by rules.

### 4. Design System (`Calibre Design System.dc.html`)
Component/token reference sheet — logo lockups, color swatches, type scale, buttons, cards. Use as the canonical source for exact token values if anything above is ambiguous.

## Interactions & Behavior
- All nav links are in-page anchor scrolls (`#method`, `#deliver`, etc.) except "Daftar"/"Calibre" cross-page links.
- Buttons: background transitions from `--ink` (or `--accent` fill on B-style buttons) to `--accent` on hover; underlined text links transition border-color to `--accent` on hover.
- No JS-driven state, modals, or forms in the current prototype — CTA buttons are anchor placeholders (`href="#"`), ready for a real booking-flow link/form.
- No responsive breakpoints defined yet — designed as fixed desktop widths (max-width ~1320px, centered). Mobile layout will need to be created following the same visual system (stack the 2-col grids, reduce H1 to ~36–40px, etc.).

## Design Tokens

**Calibre (`Calibre Website.dc.html` / mobile):**
- `--ink`: #17181B (near-black, primary text, nav/footer text)
- `--void`: #111214 (near-black, Problem-section dark band + footer bg)
- `--green`: #2C3A31 (deep green, Pilot-section band + logo tile)
- `--paper` / page bg: #FFFFFF (white — confirmed final; no cream bg on Calibre)
- `--card`: #FFFFFF, `--card-soft`: #F5F4F1 (Deliverables/FAQ band bg)
- `--muted`: #6E7175 (secondary text / eyebrows), `--text-dim`: #4A4C50
- `--rule`: #E3E0D8 (hairline dividers)
- `--accent`: **#2C3A31 (dark green — confirmed final)**. Other selectable swatches in the tweak panel: #D9612E, #17181B, #9A7B4F.
- On-dark body copy: #C9CBC7 / #CFD6CF, on-dark secondary: #A9ABAE / #B4BEB6

**Daftar Advisory (`About Daftar.dc.html`) — separate palette, unchanged:**
- `--ink`: #17181B, `--green`: #2C3A31, `--paper`: #F4F1EA (cream bg), `--card`: #FFFFFF, `--muted`: #6E7175, `--rule`: #D8D2C4
- `--accent`: **#B3502B (rust — Daftar keeps its own orange/rust theme; do not apply Calibre's green here)**
- Secondary band bg: #EFEBE1

**Typography:**
- Serif (headlines, italic accents): **Newsreader** — weights 400/500/600, italic used for wordmark and small emphasis labels. H1 ~58–60px/1.06, H2 ~36–40px, H3/H4 20–26px.
- Sans (UI/body): **Instrument Sans** — weights 400/500/600. Body 14–18px, line-height 1.5–1.65.
- Mono (data, eyebrows, labels): **IBM Plex Mono** — weights 400/500, used at 9–15px with letter-spacing 1–4px for kickers/eyebrows, and for all numeric scores.

**Spacing/shape:** section padding 64–96px vertical / 44–64px horizontal; card radius 10–14px; button radius 7–8px; hairline rules 1px `--rule`; accent underline rule 1.5px × 36px used as an eyebrow marker throughout.

## Assets
No image/icon assets — logo marks are typographic (single letter in a rounded-square color tile: green "C" for Calibre, ink "D" for Daftar). No external icons used.

## Files
- `Calibre Website.dc.html` — Calibre marketing site (desktop)
- `Calibre Website Mobile.dc.html` — Calibre marketing site (mobile reference, shown in a phone frame)
- `About Daftar.dc.html` — Daftar Advisory about page
- `Calibre Design System.dc.html` — component/token reference
- `ios-frame.jsx` — iPhone frame used only to preview the mobile layout; not part of the shipped design
- `support.js` — internal prototyping runtime only; **not needed** in the target codebase, included for reference only if you want to see how the prototype renders.
