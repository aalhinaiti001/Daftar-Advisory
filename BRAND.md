# Daftar Advisory + Calibre — House Brand Guide v1.6 (final)

**Status:** canonical. Issued 6 October 2026. Supersedes every earlier handbook, bundle and
brand line listed in the version history at the end of this file. When a surface
disagrees with this file, the surface is conformed — not the other way around.

- **Calibre visuals** follow §10 below (Calibre Brand Playbook v2, 23 Sep 2026).
- **Calibre claims** follow `product/METHOD.md` and `product/GUARDRAILS.md` in the
  `calibre-saas-claude` repo; where site copy and those files disagree, those files win.
- **Positioning** follows the Canonical House Strategy (21 Jul 2026).
- A designed, printable edition of this guide lives at `design/brand/house-brand-guide.html`.

One house, two marks. A reader must always know which one is speaking.

---

## 01 · The idea

Daftar — *daf·tar*, the ledger or register — is the firm. It exists to deliver rigorous
finance without Big Four overhead: the work done properly, written down in a form that
holds up, and handed over so the client can run it again. Calibre is that discipline
turned into a product, and always carries the *by Daftar* kicker.

## 02 · The mark — the folded file

![Daftar mark](public/brand/daftar-mark.svg)

An ink page with its top-right corner turned down in rust. Daftar means the ledger;
every engagement ends with a file the client keeps. It is the only mark of the four
explored that argues from the name and from what the firm hands over. It replaces the
"D" monogram tile on every Daftar surface. Adopted 6 October 2026 from the mark 1D
adoption sheet, with its three corrections.

**The risk, stated plainly.** A page with a cut corner is the universal file icon. What
makes it Daftar's is the rust corner, so every rule below protects the corner.

**Construction** (100-unit square, one geometry, set in `scripts/build-brand-assets.py`
and `DaftarMark` in `app/_components/SiteChrome.tsx`):

| Cut | Use at | Page path | Corner path |
|---|---|---|---|
| Standard | 24px and up | `M4 4 H64 L96 36 V96 H4 Z` | `M64 4 L96 36 H64 Z` |
| Small | below 24px, favicon | `M4 4 H54 L96 46 V96 H4 Z` | `M54 4 L96 46 H54 Z` |

The small cut moves the fold so the corner is just under half the width; at 16–18px the
standard corner falls under six pixels and stops reading. Two cuts, no other variants.
Minimum size 16px; below that, the wordmark alone.

**Colour** — the corner is rust `#A8341F` on every variant. It sits against the page,
never against the ground, so it never needs the rust-on-ink tint.

| Ground | Page | Corner | File |
|---|---|---|---|
| Paper | ink `#1A1814` | rust `#A8341F` | `public/brand/daftar-mark.svg` |
| Ink | paper `#F4F1EA` | rust `#A8341F` | `public/brand/daftar-mark-knockout.svg` |
| Avatar / app icon | ink, on a paper tile | rust | `public/brand/daftar-mark-tile.svg` |
| Favicon | small cut, on a paper tile | rust | `public/favicon.svg` |

The rust *word* in the wordmark is text, not part of the mark: on ink it switches to
rust-on-ink `#E07458` (`#A8341F` text on ink fails at 2.68:1).

**Lockups** — four, each with an Arabic form; nothing else:
1. **Horizontal (default):** mark · 1px hairline · wordmark **Daftar *Advisory.*** —
   "Daftar" upright ink, "*Advisory.*" italic rust with the full stop. The only lockup
   in the site header.
2. **Stacked:** mark above the wordmark. Cards, avatars, covers.
3. **Mark alone:** favicon, avatar, a stamp on a working file. Small cut below 24px.
4. **Wordmark alone:** where the mark already appears on the same surface; and the micro
   strip `DAFTAR · ADVISORY` in JetBrains Mono for post headers.
**Arabic form:** mark · hairline · **دفتر *للاستشارات.*** — للاستشارات. rust, weight 500, no
   slant. The mark never mirrors; the lockup does.

**Clear space** is the height of the corner fold on all four sides.

**Misuse** — no outline or single-colour version (the rust corner *is* the mark); no
rotation, fold shading or page-curl illustration; never a rust page with a paper corner;
never on a white ground (white is Calibre's). Calibre keeps its letter monogram, the
white **C** in a forest tile: the parent carries an artefact, the product a letterform,
which keeps the two separable at favicon size.

## 03 · Colour

Paper 70 · Ink 25 · Rust 5. Never invert the ratio. One accent, one ground. **No third
accent. No gradients.**

| Role | Token | Hex | Use |
|---|---|---|---|
| Paper | `--paper` | `#F4F1EA` | the ground; warm, never pure white |
| Soft band | `--soft` | `#EFEBE1` | alternate sections, cards |
| Card | `--card` | `#FAF7F1` | raised surfaces |
| Ink | `--ink` | `#1A1814` | text; near-black, never pure black |
| Body | `--body` | `#514C45` | running text |
| Muted | `--muted` | `#6F665D` | labels, captions, metadata |
| Rule | `--rule` | `#D8D2C4` | 1px hairlines |
| Rust | `--rust` | `#A8341F` | the 5%: one word, rules, the total bar |
| Rust deep | `--rust-deep` | `#7D2415` | hover |
| Rust on ink | `--rust-on-ink` | `#E07458` | rust **only** when it sits on ink |

**Contrast (WCAG AA is the floor, not the ceiling)**

| Pairing | Ratio | Verdict |
|---|---|---|
| Rust `#A8341F` on paper | 5.86:1 | passes at every size |
| Rust `#A8341F` on ink | 2.68:1 | **fails — never use**; switch to `#E07458` (5.75:1) |
| Muted `#6F665D` on paper | 4.99:1 | body and captions |

Body 4.5:1 minimum; large headlines and non-text marks 3:1. If a contrast check needs a
second opinion, the design isn't ready. Rust carries large text, rules and emphasis —
never body copy. At most one dark (ink) section per page.

## 04 · Type — two faces, nothing else

| Face | Role | Weights |
|---|---|---|
| **Fraunces** | everything that *reads*: display, headings, body, buttons, navigation, the wordmark | 300–700; italic is the accent voice |
| **JetBrains Mono** | everything that *labels or measures*: eyebrows, § chapter marks, codes (A/01), figures in registers, footers, the micro wordmark | 400 (500 sparingly); uppercase, +0.18–0.28em tracking |

If a third Latin face appears in a Daftar design, the design is wrong. Instrument Sans,
Newsreader and IBM Plex Mono are retired and must not load anywhere.

**Arabic script** is set in **IBM Plex Sans Arabic** (400–600; display in SemiBold).
Neither Latin face carries Arabic glyphs, so this is the Arabic counterpart of the pair,
not a third face for Latin text.

**Hierarchy**

| Level | Setting |
|---|---|
| Display | Fraunces 400, optical size 144, soft 40, −0.03em, 1.02 line height |
| Heading | Fraunces 400–500, −0.01 to −0.02em |
| Accent | Fraunces *italic* in rust — **one word per composition** (Arabic: colour + weight 500) |
| Body | Fraunces 400, 17px web / 10.5–11pt print, 1.6 line height, lining figures |
| Label | JetBrains Mono 400, 10–13px, uppercase, tracked, muted or rust |

Never mix more than two sizes in one paragraph. Never set mono in bold, and never set a
headline in mono.

## 05 · Voice

Plainly, with the working shown. Confidence without decoration. If a sentence wouldn't
sound natural from a senior auditor explaining it over coffee, rewrite it.

- **"We" is the firm** — never a headcount claim. Don't invent a team, staff numbers or
  people who are not on the work; stay explicit about who the client works with.
- **Ahmad is "Founder"** on every surface. "Principal" is retired.
- Specific over vague ("SAR 3B portfolio", not "extensive experience"). No cadence or
  superlative claims until the record earns them. No promises about outcomes.
- **Words we use:** practice, rigorous, tie-out, working paper, judgement, position, memo, scope.
- **Words we avoid** (in both languages): leverage, synergy, cutting-edge, world-class,
  innovative, unlock, empower, disrupt, game-changer, best-in-class, journey.
- Four principles: *Write it down. · Evidence over opinion. · One title, everywhere. ·
  Leave a tool behind.*

## 06 · Layout

- **Ruled, not shadowed.** Sections divide on 1px rules; no drop shadows, no gradients.
- Base-8 spacing: 8 · 16 · 24 · 48 · 80. Max content width 1080–1120px.
- Eyebrows lead with the § chapter mark in mono: `§ 01 · SERVICES`.
- Radii 5–6px on Daftar; generous whitespace — if it feels crowded, delete something.
- Left-align Latin; right-align Arabic; centre only credo and CTA moments.

## 07 · Icons and motion

**Icons** — thin line marks on a 24px grid, 1.5px stroke at every size, round caps and
joins, no fills or duotone; ink, with accent on the single active mark; always paired with
a mono label. Daftar web pages currently use none; add them only in this style.

**Motion** — one ease, *Settle* `cubic-bezier(0.2, 0.8, 0.2, 1)`; 120ms tap · 200ms hover ·
320ms reveal · 560ms page, nothing longer; fade + 8px rise; stagger ≤ 40ms; no bounce or
spinners; always respect `prefers-reduced-motion`.

## 08 · Arabic and bilingual

- Names: **دفتر** (the real word, never a transliteration), **كاليبر**, kicker **من دفتر**.
- Mirror the whole layout for RTL — rules, gutters, alignment. The mark never mirrors.
- No faux-italic, faux-bold or decorative Naskh/Diwani. One numeral system per piece.
- Write each language natively; never machine-translate. Never centre-mix scripts on one
  line — stack them, leading with the primary audience's script.

## 09 · Surfaces

**Web**
- One language switch in the nav: "العربية" (Plex Sans Arabic, no tracking) on English
  pages, "EN" (JetBrains Mono) on Arabic pages. Never a flag.
- `hreflang` en / ar / x-default on both versions; each page carries its own `og:url`.
- OG image 1200×630 on paper, ink and rust only — source `design/brand/og-daftar.html`,
  output `public/og-daftar.png`.
- Keep `sitemap.xml` and `robots.txt` current; retiring a font means removing it from
  every loader the same week.

**Social** — 1080×1080 feed, 1080×1350 portrait, 1080×1920 story, 72px margin. № series
kicker and pillar tag on the top row, one serif line with one accent word, lockup locked
bottom-left. Captions Hook → Context → Takeaway → one Call, 40–180 words. Three feed posts
a week, 5–8 hashtags. No client names without written permission, no AI imagery presented
as real, no politics or religion, no naming-and-shaming of firms. **Never both brands'
marks on one post; Calibre has no cold-channel presence on Daftar's profiles.**

**Print and documents** — Fraunces body 10.5–11pt, JetBrains Mono labels, paper ground,
rust used as rules and the single accent word. Engagement letters, capability
statements and brochures use the same two faces and the folded-file lockup.

## 10 · Calibre (product)

Calibre keeps its approved exception and does **not** take the two-face Daftar rule:

| Role | Value |
|---|---|
| Ground | white `#FFFFFF`, cool neutrals |
| Forest | `#265147` (hover `#1C3D35`), hairline `#D5E3DE` |
| Type | **Lora** (display) + **Plus Jakarta Sans** (UI) |
| Mark | white Lora **C** in a forest tile + *Calibre* in Lora italic + **by Daftar** kicker |

- Never shares a ground with Daftar on one surface; inside a Daftar page it sits on a
  green band. No gradients, heavy shadows, or warm clay/rust.
- The offer is the **Calibre Verdict** — a written finance-hiring decision memo for a
  defined shortlist. Method: **Read, Score, Compare, Calibrate**. Never a ranking, a
  fit score, or a performance prediction.
- Use statement, verbatim: *"Structured hiring advisory for finance roles. Not a
  psychometric assessment. Does not predict performance. The decision, and its
  consequences, rest with the employer."*
- One contact route (`ahmad@daftaradvisory.com`, subject "Calibre Verdict enquiry");
  no CVs before terms are agreed. Fee, timing and data terms are agreed at scoping, never
  promised on the page.

## 11 · Retired — purge on sight

| Retired | Replaced by |
|---|---|
| "D" monogram tile (rust D on ink); the "Ledger total" bars, proposed 6 Oct and withdrawn before merge | The folded-file mark (§02) |
| Instrument Sans, Newsreader, IBM Plex Mono, Amiri | Fraunces + JetBrains Mono; Plex Sans Arabic for Arabic |
| Rust `#B3502B`; `#842815` hover; the `#A8341F → #D07B59` gradient | `#A8341F`; `#7D2415`; no gradients |
| Muted `#78726A`; Paper Dark `#EBE6DA` | `#6F665D`; `#EFEBE1` |
| "Principal" | "Founder" |
| "Practice of one", "small senior teams", "senior hands only" | "we" as the firm (§05) |
| "Hiring diagnostic", pilot "two weeks · fixed fee", `hello@calibre…` | Calibre Verdict; scoping; one verified route |
| "Ranked", "role-fit", "Δ 41 pts" | evidence notes, a human-written recommendation |

---

## CSS tokens (canonical)

```css
.dft {
  /* Colour */
  --paper: #f4f1ea;  --soft: #efebe1;  --card: #faf7f1;
  --ink: #1a1814;    --body: #514c45;  --muted: #6f665d;  --rule: #d8d2c4;
  --rust: #a8341f;   --rust-deep: #7d2415;  --rust-on-ink: #e07458;
  /* Type — two faces */
  --serif: "Fraunces", Georgia, serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
  /* Arabic script */
  --arabic: "IBM Plex Sans Arabic", system-ui, sans-serif;
}
```

---

## Version history

Reconstructed from the repository (all branches, 114 commits) and the documents on file.
Each line records what that version introduced; later lines win.

| Version | Date | What changed | Source |
|---|---|---|---|
| Handbook v1.0–v1.1 | early 2026 | Wordmark-only identity; Amiri for Arabic (v1.0), replaced by IBM Plex Sans Arabic (v1.1) | Handbook v1.3 change log |
| Handbook v1.2–v1.3 | May 2026 | Fraunces + JetBrains Mono, rust `#A8341F`, 70/25/5 ratio, rust-on-ink, accessibility, web anatomy, social system | `Daftar_Brand_Handbook_v1_2.docx` (content v1.3) |
| "Ledger" design system v3 / Handbook v1.4 | 20 Jul 2026 | Daftar × Calibre house system; D and C monograms; Newsreader / Instrument Sans / Plex Mono; rust `#B3502B`; brochures, icons, social, motion | commit `3d7b3ec`, `Brand_Bundle.pdf` |
| Handbook v1.5 | 23 Jul 2026 | Base-8 fix (48/80), one-accent rule, secondary signals, §11 Arabic & bilingual | `brand_handbook-v.5.pdf` |
| Favicon + OG | 28 Jul 2026 | D monogram favicon, OG cards, both brands | commit `1783be2` |
| Site rebuild on v1.5 | 9 Aug 2026 | `BRAND.md` created; live site kept Fraunces / JetBrains / `#A8341F` as a recorded exception | commit `2db8d0a` |
| Profile Playbook v1.4 | 12 Aug 2026 | LinkedIn / Instagram copy on the four-lane catalogue; Calibre off cold channels | playbook docx |
| Three-repo reconciliation | 9–10 Sep 2026 | Calibre claims aligned to METHOD / GUARDRAILS; `calibre-by-daftar` archived | `docs/RECONCILIATION.md` |
| Founder rulings | 12 Sep 2026 | Fraunces canonical everywhere; "we" is the firm | commit `7622548` |
| Logo marks exploration | 13 Sep 2026 | Four candidate symbols: tick, ledger total, D, **folded file**; 1D adoption sheet with three corrections | commit `a68736f` (branch `design/logo-marks`) |
| Calibre playbook v2, audit, final-site spec | 23–27 Sep 2026 | Calibre restraint rules; release audit; proposed copy contract | `docs/` |
| Consolidation | 6 Oct 2026 | Rust unified on `#A8341F` (EN + AR); playbook v2 recorded | PR #41 |
| **Guide v1.6 (this)** | **6 Oct 2026** | **Two faces only (Fraunces + JetBrains Mono); folded file (1D) adopted as the Daftar mark; final guide** | PR #41 |

### Documents still to re-issue against v1.6
- Both tri-fold brochures (`Brand_Bundle.pdf`) — retired stack, D monogram, "small senior
  teams", three practice lines instead of the four-lane catalogue, Calibre pilot copy.
- Profile Playbook — update its brand line; rebuild the avatar and LinkedIn banner on the
  folded-file mark (`public/brand/daftar-mark-tile.svg`).
- `daftar-engagement-letter` skill and capability statement — swap the monogram for the
  folded-file lockup; fonts already match.
- "Established 2024" appears on the site and brochure; the playbook asks for it to be
  anchored to the entity registration date — confirm before reprinting.

### Open items on the live Calibre pages
Tracked in `docs/CALIBRE_BRAND_AUDIT_2026-09-27.md`: fixed-fee and timing promises, three
contact routes, gradient and shadows, unlabelled scorecard UI, missing C-tile lockup.
