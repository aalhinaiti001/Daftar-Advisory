# Brand Source of Truth — Daftar Advisory + Calibre

Canonical brand stack for all house surfaces. When a surface disagrees with this file,
this file wins and the surface gets conformed — not the other way around.

- **Authority:** House Brand Handbook **v1.5** (§00–§09). Verified against the issued PDF.
- **v1.5 latest issued** — confirmed on the handbook cover; supersedes v1.4. (The Business
  Overview still cites v1.4 as its source, but v1.5 governs brand.)
- **Strategy overlay:** House Strategy Amendment 01 (21 Jul 2026) governs *positioning*,
  not visual brand — see the Calibre note below.

One house, two marks. Parent and product **share one type system and one voice; they
diverge only in colour.** A reader must always know which one is speaking.

---

## Colour

### Daftar — cream & rust (the parent / the firm)
| Role        | Token         | Hex        | Live-site status (`design/daftar-home.html`) |
|-------------|---------------|------------|-----------------------------------------------|
| Paper/cream | `--cream`     | `#F4F1EA`  | ✅ canonical (16×)                             |
| Rust/accent | `--rust`      | `#B3502B`  | ❌ retired `#A8341F` live (78×) — conform      |
| Ink         | `--ink`       | `#1A1814`  | ✅ canonical (49×)                             |
| Soft band   | `--soft-band` | `#EFEBE1`  | ⚠️ not present; near-creams used instead       |

### Calibre — white & green (the product / by Daftar)
| Role        | Token             | Hex        |
|-------------|-------------------|------------|
| Paper/white | `--cal-white`     | `#FFFFFF`  |
| Green/accent| `--cal-green`     | `#2C3A31`  |
| Void/band   | `--cal-void`      | `#111214`  |
| Card soft   | `--cal-card`      | `#F5F4F1`  |

> **Approved exception — the live Calibre product surface (`calibre.daftaradvisory.com`).**
> Per Founder ruling, the shipped "Guesswork" design **overrides the v1.5 Calibre spec above**
> for the live product site. It uses **Lora** (display/serif) + **Plus Jakarta Sans** (UI) — not
> the shared Newsreader/Instrument/IBM Plex stack — and a themeable palette (default `ink`):
> forest green `~#265147`/`#2B3A36` primary with a **clay `#B25B3C`** secondary accent and a
> white/paper ground. The v1.5 rows above remain the *handbook ideal*; the live site is a
> recorded exception, not a target to conform. (Daftar's own v1.5 stack is unaffected.)
> **Open flag:** the hero's illustrative **"Δ 41 pts"** stat runs unsourced on the live site —
> the Hiring-Decision Service Strategy v2's own evidence discipline requires naming the source
> and never presenting it as settled fact. Sourcing is a content decision, left to the Founder.

**Colour rules (§03) — apply to Daftar; Calibre live surface is the exception noted above:**
- One accent + one ground per brand. **No third accent. No gradients.**
- **Rust is reserved for large text, rules, icons, and emphasis — never body copy or
  small text on cream** (it sits near the 4.5:1 threshold).
- Parent and product **never share a ground on the same surface.** Cream = Daftar,
  white = Calibre. When Calibre appears inside a Daftar page it sits on a **green band**
  — never the reverse.
- Colour can drop out (mono, email, photocopy) — always back it with a second signal:
  the **monogram**, the **by Daftar** kicker, and the **§ chapter-prefix**.

## Type (§04) — shared by both brands, whole
| Role                     | Family              | Weights   |
|--------------------------|---------------------|-----------|
| Display / headlines      | **Newsreader**      | 400–600 (italic = wordmark voice) |
| Body / UI                | **Instrument Sans** | 400–600   |
| Eyebrows / labels / data | **IBM Plex Mono**   | 400–500 (+3 tracking) |

All three are on Google Fonts (the site already `preconnect`s to `fonts.googleapis.com`).

## Layout & marks (§02, §06)
- Monogram: single knockout letter in a solid tile, set in Newsreader; same corner radius
  and clearspace; **the kicker is never set in the serif.**
- **Ruled, not shadowed** — sections divided by 1px rules, never drop shadow.
- Base-8 spacing (8 · 16 · 24 · 48 · 80). Max content width 1080px; 80px gutters.
- One accent italic phrase per composition (normally a single word).

## Voice (§05)
Plainly, with the working shown. Confidence without decoration. **Ahmad is "Founder"
on every surface — "Principal" is retired.** No cadence/superlative claims until the
record earns them.

---

## Retired — purge on sight
- Font: **Fraunces** → Newsreader
- Font: **JetBrains Mono** → IBM Plex Mono
- Accent: rust **`#A8341F`** → `#B3502B` (incl. SVG loading mark)
- The **`#A8341F → #D07B59` gradient** and the `#D07B59` tint — violate "no gradients /
  no third accent." **Remove the gradient; do not re-derive the tint.**
- **`#842815`** link-hover — re-derive a darker shade from `#B3502B`, or drop.
- Title: **"Principal"** → "Founder".

## Surfaces still on the retired stack
1. **Live site** — `design/daftar-home.html` (compiled artifact; Netlify copies it over
   `out/index.html`). Fonts are embedded as hashed bundler assets, so conforming type here
   means swapping the `@font-face` sources (Google Fonts `<link>` + family rename), not a
   text find-replace. Beyond fonts/accent, the page's **card drop-shadows and gradient
   contradict "ruled, not shadowed / no gradients"** — full §06 compliance is a component
   pass, not a recolour.
2. **`daftar-engagement-letter` skill** — spec references the retired stack; same conform.

## Calibre positioning (Canonical House Strategy, 21 Jul 2026)
Canon reference is the **Canonical House Strategy**, which supersedes the House Strategy,
Amendment 01, and Daftar 2.0. Calibre stays the **hiring-decision product** (attachment-only,
"by Daftar" kicker, pre-revenue). The buyable offer is the **Calibre Verdict** — a done-for-you
**finance-role** hiring-decision memo for a defined shortlist; the label "hiring diagnostic" is
retired. Per the Deep Research Assessment, scope is the **narrow finance-hiring advisory**
(structured role definition, anchored scorecards, written memo) with **no psychometric or
predictive-validity claims**; the broad talent service and work-style tool are deferred/removed.
Any site/collateral copy calling Calibre a "hiring diagnostic" should move to "Calibre Verdict."

---

## CSS custom properties (canonical)
```css
:root {
  /* Daftar */
  --cream: #F4F1EA;  --rust: #B3502B;  --ink: #1A1814;  --soft-band: #EFEBE1;
  /* Calibre */
  --cal-white: #FFFFFF;  --cal-green: #2C3A31;  --cal-void: #111214;  --cal-card: #F5F4F1;
  /* Type (shared) */
  --font-display: "Newsreader", Georgia, serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
}
```
