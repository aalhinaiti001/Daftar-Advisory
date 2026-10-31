# Daftar Advisory · one-page flier

Print collateral exported from Claude Design on 31 October 2026. Reference and print
source; not part of the website build.

| File | What it is |
|---|---|
| `Daftar-Advisory-Flier.bundle.html` | The self-contained export. Open it in a browser and print, or export to PDF from the browser. It embeds the fonts (Fraunces, JetBrains Mono) and the paged-document scaffold. |
| `source.html` | The page markup and styles extracted from the bundle, for reading and diffing. It references the bundle's font files by id and does not render on its own. |
| `preview.png` | Render of the bundle at 1000 px wide, for a quick look. |

Three exports were received ("Flier", "Flier 1", "Flier 2"). They are one design: the
markup and copy are identical and only the embedded resource identifiers differ, so
one copy is kept.

## Content

One page, letter size. Header: wordmark and region strip. § 00 headline "Rigorous
finance, *without* the overhead." with the four-service lead. § 01 register of the four
services (A/01, A/02, A/03, C/03) with what the client receives. The four commitments.
An ink block pointing to `daftaradvisory.com/scope` with the email and "Amman · Founder
led". The non-attest sentence as the foot line.

## Against BRAND.md and the design system

**Compliant.** Two Latin faces only. Rust, ink and paper from the canon palette, no
gradients or shadows, hairline rules, one ink block, "Founder", the four services as on
the site, the non-attest sentence present.

**To settle before print.**
- *Page size.* The export is US letter (8.5 × 11 in). The design system's print rule is
  A4. The scaffold supports `size="a4"`; re-export at A4 for the region's printers.
- *Lockup.* The header carries the wordmark alone. The brand book asks for the
  horizontal lockup (mark, hairline, wordmark) on printed documents. Add the folded-file
  mark from `design/design-system/assets/Marks/daftar-lockup-horizontal.svg`.
- *Token drift.* A few literal colours sit near, not on, the tokens: body text
  `#4a443c` (token `body` is `#514c45`), rules `#c9c1b3` (`rule` is `#d8d2c4`), the
  accent on ink `#e0664a` (`rust-on-ink` is `#e07458`), and two greys (`#5e574d`,
  `#bdb4a6`) with no token. Snap them to tokens on the next export.
- *Headline.* "Rigorous finance, without the overhead." is the brand's tagline and the
  site's footer line. The site's hero keeps "Finance work that feels simple, even when
  the issue is not." Fine for a flier; noted so the two stay deliberate.
