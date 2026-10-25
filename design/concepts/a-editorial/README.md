# Concept A · Editorial (Daftar v2)

Design concept for a Daftar Advisory website redesign, exported from Claude Design on
25 October 2026. Reference material only: nothing in this folder is built or deployed.

| File | What it is |
|---|---|
| `Daftar-v2-A-Editorial.bundle.html` | The self-contained export. Open it in a browser to see the prototype. It unpacks React 18 and the page source from an embedded manifest, so it is large and not diffable. |
| `source.dc.html` | The page source extracted from the bundle: markup, inline styles and the data block (lanes, services, cases, scope-builder options). Read and diff this one. It does not render on its own. |
| `REVIEW.md` | The live-site vs. concept assessment and the recommended direction ("Editorial, refined"). |

## What the prototype contains

One React file with seven views switched by a prop: home, services, service detail,
about, scope builder, notes, contact. Service data is defined once in `source.dc.html`
(search for `const SERVICES`): three lanes and eight services, codes A/01 to C/02, plus
a Lane D retainer. Each service carries outcome, audience, in and out of scope, run
time, standards references and one sample case.

## How it sits against BRAND.md and the design system

Checked against `BRAND.md`, `CLAUDE.md` and `design/design-system/README.md`.

**Compliant**
- Fraunces, JetBrains Mono and IBM Plex Sans Arabic only, on every Daftar element.
- Palette is the canon set: paper, ink, rust, rust-deep, rule, body. No retired tokens,
  no gradients, no drop shadows, "Founder" throughout, folded-file mark.
- Eyebrows lead with §; one rust italic accent word per heading; hairline rules.

**Needs a decision before any build**
- *Headline.* "Numbers your auditor, investor and tax authority accept." reads as an
  outcome promise, which BRAND.md rules out. The live headline is the safer positioning.
  "Rigorous finance, without the overhead." survives as the footer line.
- *Service scope.* Eight services vs. the live four. B/03 (close cycle and CFO support)
  and C/02 (UAE corporate tax and transfer pricing) are the furthest from the current
  practice statement. REVIEW.md recommends keeping the four unless expansion is deliberate.
- *Calibre card.* The cross-promotion card sets Lora and Plus Jakarta Sans on a Daftar
  page. BRAND.md approves that stack on Calibre pages; the design-system README says no
  other product's face appears on a Daftar surface. Either set the card in Fraunces and
  mono, or amend the system README.
- *Non-attest notice.* Present as a footer line ("Advisory services only · No audit
  opinions issued") and as a per-service exclusion, but the full notice the live site
  carries is not in the prototype.
- *Left-border accent.* The active scope-builder option uses an inset 3px rust shadow as
  a left border, which the Callout guideline forbids. Replace with a logical-side border
  if kept.

**Placeholders the prototype itself flags**
- Eight sample cases, labelled "replace before launch".
- Founder qualifications: `[ To confirm ]`.
- Technical memo figure dated 14 September 2026, marked "Details changed".

**Engineering gaps**
- No responsive rules (only `prefers-reduced-motion`); desktop widths only.
- Arabic is a nav link; there are no RTL pages.
- Contact form is a mock that shows "Received." without sending.
- All styles are inline. Porting means rebuilding as canon pages in `app/` with rules in
  `app/daftar.css`, not shipping this file.
