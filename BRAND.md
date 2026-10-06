# Brand Source of Truth — Daftar Advisory + Calibre

Canonical brand stack for all house surfaces. When a surface disagrees with this file,
this file wins and the surface gets conformed — not the other way around.

- **Base authority:** House Brand Handbook **v1.5** (§00–§09), as amended by the Founder
  rulings listed below. Where a ruling and the handbook disagree, the ruling wins.
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
  is never set in the serif.**
- **Ruled, not shadowed** — sections divided by 1px rules, never drop shadow.
- Base-8 spacing (8 · 16 · 24 · 48 · 80). Max content width 1080–1120px.
- One accent italic phrase per composition (normally a single word).
- At most one dark section per page.

## Voice (§05)
Plainly, with the working shown. Confidence without decoration. "We" is the firm; copy
must not invent a team, staff numbers, or people who are not on the work. The
senior-contact commitment stays explicit about who the client works with. No
cadence/superlative claims until the record earns them.

---

## Retired — purge on sight
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
