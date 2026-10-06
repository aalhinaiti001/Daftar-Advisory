# Brand Source of Truth — Daftar Advisory + Calibre

Canonical brand stack for all house surfaces. When a surface disagrees with this file,
this file wins and the surface gets conformed — not the other way around.

- **Base authority:** House Brand Handbook **v1.5** (§00–§12, the issue that includes
  §11 Arabic & bilingual), as amended by the Founder rulings listed below. Where a ruling
  and the handbook disagree, the ruling wins. Older documents and what they still govern
  are listed under *Source register* at the end of this file.
- **Calibre visual authority:** Calibre Brand Playbook **v2** (working edition 02,
  23 Sep 2026), within the Lora / Plus Jakarta Sans exception below.
- **Strategy overlay:** Canonical House Strategy (21 Jul 2026) governs *positioning*,
  not visual brand — see the Calibre positioning note below.
- **Last consolidated:** 6 October 2026 (see `docs/RECONCILIATION.md`).

One house, two marks. A reader must always know which one is speaking.

## Founder rulings in force

| Date | Ruling |
|---|---|
| 12 Sep 2026 | Fraunces is the Daftar display face on every Daftar surface, English and Arabic. JetBrains Mono is the label face. Newsreader and IBM Plex Mono are retired. |
| 12 Sep 2026 | Daftar speaks as a boutique firm: "we" is the firm, never a headcount claim. |
| Standing | Ahmad is "Founder" on every surface. "Principal" is retired. |
| Standing | The live Calibre site keeps its Lora / Plus Jakarta Sans / forest-green stack. |
| 6 Oct 2026 | **Daftar rust is `#A8341F` on all Daftar surfaces** (EN, AR, favicon, collateral, engagement letters), hover `#7D2415`. The handbook's `#B3502B` is superseded, closing the EN/AR split. |

---

## Colour

### Daftar — cream & rust (the parent / the firm)
| Role        | Token         | Hex        |
|-------------|---------------|------------|
| Paper/cream | `--cream`     | `#F4F1EA`  |
| Rust/accent | `--rust`      | `#A8341F`  |
| Rust hover  | `--rust-deep` | `#7D2415`  |
| Ink         | `--ink`       | `#1A1814`  |
| Soft band   | `--soft-band` | `#EFEBE1`  |
| Rust on ink | `--rust-on-ink` | `#E07458` | contextual variant only, for rust text or icons on ink |
| Muted text  | `--muted`     | `#6F665D`  | replaces the v1.3 `#78726A`, which fails AA on cream |

Implemented in `app/daftar.css` (`.dft`, English) and `app/globals.css` (`.daftar`, Arabic).

### Calibre — white & forest (the product / by Daftar)

The v1.5 handbook values (`#FFFFFF` / `#2C3A31` / `#111214` / `#F5F4F1`) are the
*handbook ideal*. The live product follows the approved exception and playbook v2:

| Role              | Hex        | Notes |
|-------------------|------------|-------|
| Ground            | `#FFFFFF`  | white and cool neutrals only |
| Forest (primary)  | `#265147`  | structural accent, buttons, C-tile |
| Forest (hover)    | `#1C3D35`  | |
| Ink               | `#0E1113` / `#0E211B` | |
| Hairline          | `#D5E3DE`  | green rules, not shadows |

**Playbook v2 rules (Calibre):**
- White / cool-neutral grounds; green as the structural accent; green hairlines.
- **No gradients, no heavy shadows, no warm clay or rust** on Calibre surfaces.
- Radii 8–12px; generous whitespace.
- **Lockup:** Lora **C** in a forest tile + "Calibre" in Lora italic + **by Daftar** kicker
  in Plus Jakarta Sans. No second Daftar logo inside the Calibre artwork.
- **One** public contact route; no candidate CVs or personal data before terms are agreed.
- Fee, finalist count, timing, response-time and data-retention terms are **on hold**
  until approved — they are agreed at scoping, not promised on the page.
- Fictional scores only when visibly labelled *Illustrative*; never ranking, automated
  selection, fit measurement or performance prediction.
- EN / AR claim parity is a release requirement.

**Calibre site copy contract** (proposed 27 Sep 2026, `docs/superpowers/specs/2026-09-27-calibre-final-website-design.md`):
- Lead line: *"Make a finance hiring decision you can explain."* Finance roles only; the
  client brings the shortlist; Calibre does not source candidates.
- Method names are **Read, Score, Compare, Calibrate**. "Score" names the human panel step;
  never a leaderboard, ranking, coloured candidate label, or role-fit measure.
- Use statement, verbatim: *"Structured hiring advisory for finance roles. Not a
  psychometric assessment. Does not predict performance. The decision, and its
  consequences, rest with the employer."*
- Single contact route: `ahmad@daftaradvisory.com`, subject "Calibre Verdict enquiry",
  with *"Please don't send candidate CVs until terms are agreed."*
- Website quality filter: no decorative gradients, generic icons, repeated card grids,
  excessive pills, shadows, giant headings, over-tracked capitals, or stock imagery.

### Accessibility (WCAG AA is the floor)
| Pairing | Ratio | Use |
|---|---|---|
| `#A8341F` on cream `#F4F1EA` | 5.86:1 | passes for all text sizes |
| `#A8341F` on ink `#1A1814` | 2.68:1 | **fails — never use**; use `#E07458` (5.75:1) |
| `#6F665D` on cream | 4.99:1 | body and captions |
| `#78726A` on cream | 4.22:1 | **fails for body — retired** |

Body text 4.5:1 minimum; large headlines and non-text marks (rules, icons, focus rings)
3:1 minimum. If a contrast check needs a second opinion, the design isn't ready.

### Colour rules (§03, both brands)
- One accent + one ground per brand. **No third accent. No gradients.**
- **Rust is reserved for large text, rules, icons, and emphasis — never body copy or
  small text on cream.**
- Parent and product **never share a ground on the same surface.** Cream = Daftar,
  white = Calibre. When Calibre appears inside a Daftar page it sits on a **green band**.
- Colour can drop out (mono, email, photocopy) — back it with a second signal: the
  **monogram**, the **by Daftar** kicker, and the **§ chapter-prefix**.

## Type (§04)

### Daftar (and shared house documents)
| Role                     | Family              | Weights   |
|--------------------------|---------------------|-----------|
| Display / headlines      | **Fraunces**        | 300–700 (italic = wordmark voice) |
| Body / UI                | **Instrument Sans** | 400–600   |
| Eyebrows / labels / data | **JetBrains Mono**  | 400–500 (+3 tracking) |
| Arabic text              | **IBM Plex Sans Arabic** | 400–600 |

### Calibre (approved exception)
| Role            | Family              |
|-----------------|---------------------|
| Display / serif | **Lora**            |
| Body / UI       | **Plus Jakarta Sans** |

## Layout & marks (§02, §06)
- Monogram: single knockout letter in a solid tile (Daftar: rust **D** on ink, Fraunces;
  Calibre: white **C** on forest, Lora); same corner radius and clearspace; **the kicker
  is never set in the serif.** The monogram supersedes the v1.3 "the name is the logo,
  no mark" rule. The wordmark stays: "Daftar" upright in ink, "Advisory" as the kicker.
- **Ruled, not shadowed** — sections divided by 1px rules, never drop shadow.
- Base-8 spacing (8 · 16 · 24 · 48 · 80). Max content width 1080–1120px.
- One accent italic phrase per composition (normally a single word).
- At most one dark section per page.

## Iconography (§08)
Thin line marks on a 24px grid, 1.5px stroke at every size, round caps and joins, no
fills, gradients or duotone. Ink by default; accent on the single active mark only.
Always paired with a mono label. **On Daftar web pages, icons remain optional** — the
canon site currently uses none; add them only in this style.

## Motion (§10)
One ease, *Settle*: `cubic-bezier(0.2, 0.8, 0.2, 1)`. Durations 120ms tap · 200ms hover ·
320ms reveal · 560ms page, nothing longer. Fade + 8px rise for entrances; stagger lists
by 40ms at most. No bounce, elastic or spinning loaders. Respect `prefers-reduced-motion`.

## Arabic & bilingual (§11)
- Arabic text is **IBM Plex Sans Arabic**, weights 400–600; Arabic display in SemiBold.
  No faux-italic, faux-bold or faux-serif.
- Names: **دفتر** (never a transliteration), **كاليبر** for Calibre, kicker **من دفتر**.
- The Latin monograms are fixed marks and are never redrawn; everything around them
  mirrors for RTL — rules, gutters and alignment flip with the text.
- Arabic has no italic: the one accent word is colour-only (or weight 500).
- One numeral system per piece — Arabic-Indic for Arabic-first, Western for mixed.
- Write each language natively; never machine-translate. Never centre-mix scripts on one
  line — stack them, leading with the primary audience's script.

## Web anatomy
- One language switch in the primary nav: "العربية" in Plex Sans Arabic (no uppercase,
  no tracking) on English pages; "EN" in JetBrains Mono on Arabic pages. Never a flag.
- Every bilingual page declares `hreflang` `en`, `ar` and `x-default` on both versions.
- Every shareable page has a 1200×630 OG image (Paper ground, Ink and Rust only) with
  `og:image`, width, height and alt. Arabic pages carry their own `og:url`.
- `sitemap.xml` lists every public page including the Arabic mirror; update it and
  `robots.txt` whenever a page is added.
- Retiring a font means removing it from every CSS loader and asset the same week.

## Social (§09, and v1.3 §07–§14 where not superseded)
- 1080×1080 feed, 1080×1350 portrait, 1080×1920 story; 72px margin.
- Numbered mono kicker (№ 001…) and pillar tag on the top row; one serif line with one
  accent word; wordmark locked bottom-left. Daftar posts on cream, Calibre on white.
  **Never both brands' marks on one post** — Calibre credits Daftar in the caption only.
- Captions: Hook → Context → Takeaway → one Call; 40–180 words, 80–120 ideal.
- Cadence three feed posts a week; 5–8 hashtags; no client names without written
  permission, no outcome promises, no AI imagery presented as real, no political or
  religious takes, no naming-and-shaming of firms.
- **Calibre has no cold-channel presence.** No Calibre mark, name or link on Daftar's
  LinkedIn or Instagram (Profile Playbook v1.4).

## Voice (§05)
Plainly, with the working shown. Confidence without decoration. "We" is the firm; copy
must not invent a team, staff numbers, or people who are not on the work. The
senior-contact commitment stays explicit about who the client works with. No
cadence/superlative claims until the record earns them.

---

## Retired — purge on sight
- Positioning: "practice of one" / "small senior teams" / "senior hands only" — both
  overclaim or underclaim against the 12 Sep "we is the firm" ruling
- Colour: muted `#78726A` → `#6F665D`; "Paper Dark" `#EBE6DA` → soft band `#EFEBE1`
- Calibre collateral: "hiring diagnostic", "pilot · one role · two weeks · fixed fee",
  `hello@calibre.daftaradvisory.com` (not a verified route)
- Font: **Newsreader** → Fraunces
- Font: **IBM Plex Mono** → JetBrains Mono
- Rust **`#B3502B`** on Daftar surfaces → `#A8341F` (superseded 6 Oct 2026)
- The **`#A8341F → #D07B59` gradient** and the `#D07B59` tint — "no gradients / no third
  accent". Do not re-derive the tint.
- **`#842815`** link-hover → `#7D2415`
- Title: **"Principal"** → "Founder"
- Label: **"hiring diagnostic"** → "Calibre Verdict"
- Claims: "ranked", "role-fit", unsourced "Δ 41 pts"

## Calibre positioning (Canonical House Strategy, 21 Jul 2026)
Calibre is the **hiring-decision product** (attachment-only, "by Daftar" kicker,
pre-revenue). The buyable offer is the **Calibre Verdict** — a done-for-you
**finance-role** hiring-decision memo for a defined shortlist. Scope is narrow
finance-hiring advisory (structured role definition, anchored scorecards, written memo)
with **no psychometric or predictive-validity claims**.

**Normative for Calibre claims:** `product/METHOD.md` and `product/GUARDRAILS.md` in the
`calibre-saas-claude` repo. Where site copy and those files disagree, those files win. The
method never sorts, ranks, or labels finalists and never produces a "fit" score.

## Open items (tracked in `docs/CALIBRE_BRAND_AUDIT_2026-09-27.md`)
- Shipped Calibre pages still carry fixed-fee / timing / response-time commitments, three
  contact routes, a radial gradient and heavy shadows, unlabelled scorecard UI, and no
  visible C-tile lockup. The **Calibre Verdict** design (`docs/Calibre Verdict.html`) is
  the preferred replacement once it has an Arabic counterpart and production metadata.

---

## CSS custom properties (canonical)
```css
:root {
  /* Daftar */
  --cream: #F4F1EA;  --rust: #A8341F;  --rust-deep: #7D2415;
  --ink: #1A1814;    --soft-band: #EFEBE1;
  /* Calibre (live exception) */
  --cal-white: #FFFFFF;  --cal-forest: #265147;  --cal-forest-deep: #1C3D35;
  --cal-ink: #0E211B;    --cal-rule: #D5E3DE;
  /* Type */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-arabic: "IBM Plex Sans Arabic", system-ui, sans-serif;
  --cal-serif: "Lora", Georgia, serif;
  --cal-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

---

## Source register
Every brand document on file, newest first, and what still governs. Reviewed 6 Oct 2026.

| Document | Issued | Status |
|---|---|---|
| This file + Founder rulings | 6 Oct 2026 | **Canonical** |
| Calibre Brand Playbook v2 | 23 Sep 2026 | Canonical for Calibre visuals |
| House Brand Handbook v1.5 — `brand_handbook-v.5.pdf` (15 pp, includes §11 Arabic) | 23 Jul 2026 | Base authority for structure, marks, layout, icons, social, motion, Arabic. **Type and rust superseded** (Newsreader / Plex Mono / `#B3502B`). Its spacing chart still shows 44/76 against its own 48/80 rule — use 48/80. |
| `Brand_Bundle.pdf` (v1.5 + Daftar & Calibre tri-folds) | Jul 2026 | Earlier v1.5 issue without §11. **Both brochures need re-issue**: retired stack, "small senior teams", "EST 2024", three practice lines instead of the four-lane catalogue, and Calibre "hiring diagnostic" / pilot-fee / unverified email. |
| Daftar Profile Playbook v1.4 | 12 Aug 2026 | Canonical for LinkedIn / Instagram field copy and the four-lane catalogue. **Its brand line is superseded** — it names the retired stack and wrongly flags `#A8341F` assets as off-brand. |
| `Daftar_Brand_Handbook_v1_2.docx` (content is **v1.3**) | May 2026 | Superseded on type (Fraunces-only body), "Principal", "practice of one", no-mark rule, muted `#78726A`. Still the source for rust-on-ink, accessibility, web anatomy and the social posting rules carried above. |
