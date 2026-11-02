# Daftar Advisory · one-page flier

Print collateral exported from Claude Design on 31 October 2026. Reference and print
source; not part of the website build.

| File | What it is |
|---|---|
| `flier-print.html` | **The print source.** One file, two page sizes. Open it and print to PDF with background graphics on and margins set to none: `?size=a4` (default) or `?size=a5`; `?size=both` shows the two sheets on screen. The A5 is a reflow of the A4, not a scale. Fonts are the design system's own files under `design/design-system/fonts/`; colours are the tokens; the header carries the full lockup. |
| `flier-a4.pdf`, `flier-a5.pdf` | Print-ready exports of the source, one page each, exact A4 (210 × 297 mm) and A5 (148 × 210 mm). Regenerate from the source after any change. |
| `preview-a4.png`, `preview-a5.png` | Renders of the two sheets. |
| `Daftar-Advisory-Flier.bundle.html` | The original Claude Design export (US letter). Kept as the reference the print source was built from. It embeds the fonts and the paged-document scaffold. |
| `source.html` | The page markup and styles extracted from that export, for reading and diffing. It does not render on its own. |
| `preview.png` | Render of the original export. |

Three exports were received ("Flier", "Flier 1", "Flier 2"). They are one design: the
markup and copy are identical and only the embedded resource identifiers differ, so
one copy is kept.

## Content

One page, letter size. Header: wordmark and region strip. § 00 headline "Rigorous
finance, *without* the overhead." with the four-service lead. § 01 register of the four
services (A/01, A/02, A/03, C/03) with what the client receives. The four commitments.
An ink block pointing to `daftaradvisory.com/scope` with the email and "Amman · Founder
led". The non-attest sentence as the foot line.

## Sizes

A4 is the primary: the design system's print rule, and the version for PDF and anyone
printing it themselves. A5 is the pocket variant for meetings and events, a standard cut
at regional print shops. B5 was considered and set aside: ISO B5 is a custom cut in the
region and buys little over A5.

The A5 reflow keeps the headline and lead, the four-row register and the ink block, and
folds the four commitments into one "How we work" line. Floors: display 30pt, lead 10pt,
register titles 12pt, mono labels 6.5pt, foot line 6.5pt, margins 12mm.

## Against BRAND.md and the design system

**The print source is on-brand.** Two Latin faces only, from the system's own font
files. Rust, ink, paper, body, muted and rule as tokens, no literal colours off the
scale. Hairline rules, one ink block, the four services as on the site, "Founder", the
non-attest sentence as the foot line, the full lockup (mark, hairline, wordmark) in the
header, A4 as the primary size.

**Notes on the original export**, resolved in the print source: it was US letter where
the print rule is A4; its header carried the wordmark without the mark; and a few
colours sat near the tokens rather than on them (`#4a443c` for body, `#c9c1b3` for rules,
`#e0664a` for the accent on ink, and two greys with no token).

The headline is the brand tagline, "Rigorous finance, without the overhead." The site's
hero keeps "Finance work that feels simple, even when the issue is not." Deliberate: the
flier leads with the line that also closes every page of the site.
