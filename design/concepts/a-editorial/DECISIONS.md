# Editorial Refined · Design-decision matrix and implementation plan

Status: decision record, pre-implementation. Nothing in `app/` changes under this
document. It exists so that the port of Concept A is decided here, element by element,
rather than by whoever touches the markup first.

Recorded 25 October 2026 against the live site at commit `212a2bf` (base branch
`aalhin001`), Concept A in this folder, `BRAND.md` v1.6, `CLAUDE.md` and
`design/design-system/README.md`.

## 1. How to read the matrix

Each editorial element gets one of four decisions:

- **Adopt**: take the concept's treatment as designed, built in the canon system.
- **Adapt**: take the idea, change the execution to fit a rule or the live structure.
- **Retain**: keep the live site's treatment. The concept's version is not carried.
- **Reject**: the concept's element does not ship, now or in a later phase.

Rule hierarchy applied: `BRAND.md` wins over `CLAUDE.md` and over the design-system
README. Where a decision needs a rule changed, the row says so and §5 lists the
proposed amendment. No amendment is made by this document.

A decision marked **gated** ships only when its gate is met. Gates are facts, not
tasks: a verified memo, a cleared case, a signed-off business decision.

## 2. The matrix

| # | Element | Live site | Concept A | Decision | Rationale and conditions |
|---|---|---|---|---|---|
| 1 | Headline | "Finance work that feels *simple*, even when the issue is not." | "Numbers your auditor, investor and tax authority accept." | **Retain** | The concept line promises an outcome. `BRAND.md` §05: no promises about outcomes. Live line stays as baseline; may be refined later but not toward an assurance claim. |
| 2 | Hero composition | Two columns: copy left, "The register" facts panel right | Two columns: copy left, technical-memo figure right | **Adapt** | Memo figure replaces the register panel as the hero's evidence element. Register facts (established, base, reach, model) move to a mono strip under the hero or to About. Gated on row 3. |
| 3 | Technical-memo figure | None | Memo page: TO / RE / DATE, Question, Conclusion, standard refs, signature, caption "Details changed" | **Adopt, gated** | The most differentiated element in the concept and consistent with "Write it down". Gate: content is a real engagement with details changed, or captioned as a specimen; every standard reference verified by the founder before publication; signature stays "A. Al Hinaiti". Built as `.dft-memo`, print-safe. |
| 4 | Hero eyebrow | "Clear advice. Senior work. Nothing extra." | "§ 00 · Finance advisory · KSA · UAE · Jordan" | **Adapt** | Keep the § chapter form; carry the geography, which the live hero never states. |
| 5 | Hero "What / For / Different" strip | None | Three mono-labelled lines under the lead | **Adapt** | Useful orientation for a first-time reader. Ship as the mono strip from row 2 only if the hero stays under one screen at 1040px; otherwise drop. |
| 6 | Logo and lockup | Folded-file mark, hairline, "Daftar *Advisory.*" | Same | **Retain** | Identical geometry and lockup. No change to `DaftarMark` or the brand assets. |
| 7 | Typography | Fraunces + JetBrains Mono + Plex Sans Arabic, tokens in `daftar.css` | Same faces; display with opsz 144 / SOFT 40; memo micro-labels in mono | **Retain tokens, Adopt detail** | Keep the live tokens and scale. Add the memo's mono micro-typography and the display optical-size settings as rules on the new components only. No third Latin face anywhere on a Daftar element. |
| 8 | Colour | Canon palette | Canon palette | **Retain** | Identical. Paper 70 · Ink 25 · Rust 5 holds in both. |
| 9 | Section architecture | § 01 Services · § 02 Who we help · § 03 How we work (ink) · § 04 Notes · § 05 Questions · close | § 00 hero · § 01 What we solve · § 02 On the record · § 03 Terms of practice · § 04 Notes · CTA | **Adapt** | Adopt the document-like rhythm (tighter eyebrow-to-heading spacing, hairline section rules, soft bands). Keep "Who we help" and "Questions" because the non-attest answer lives in the FAQ. "On the record" is inserted only when row 13's gate is met. |
| 10 | Ink section budget | One per page ("How we work" on home, close band on About) | Two ink blocks on home (CTA band and Calibre area) | **Retain** | `BRAND.md` and `CLAUDE.md`: at most one ink section per page. Position chosen per page in §4. |
| 11 | Service presentation | Four ledger rows: code, label, blurb, "Scope this" | Table: Ref · Problem solved · You get · Typical time, grouped in lanes, eight rows | **Adapt** | Keep the four services and `practice.ts` as the single source. Adopt the table form, since `ref`, `outcome` and `deliverable` already exist. Adding "Typical time" needs a per-service `run` field; the scope builder already shows indicative runs, so this is consistent, but the founder decides whether a per-service duration is shown on the home page. |
| 12 | Service architecture | Four services: A/01, A/02, A/03, C/03 | Three lanes A/B/C, eight services, plus Lane D retainer | **Reject** | A practice-scope decision, not a design one. Close-cycle support, UAE corporate tax and the retainer do not enter the site until there is a documented business decision and delivery capability. Codes keep the house catalogue. |
| 13 | Case evidence ("On the record") | None | Eight sample cases with sector, code, result, context; labelled "replace before launch" | **Adopt structure, Reject content, gated** | The register form is right for the brand. Gate: at least three delivered engagements, anonymised, with written client clearance on file, and results stated as facts without superlatives. Until then the section does not ship anywhere, home or About. |
| 14 | Sectors served | About lists construction, services, investment | Seven sectors | **Adapt** | Show only sectors with delivered work. The list is content, maintained in `practice.ts`, not in markup. |
| 15 | Service detail pages | None (`/services` redirects to the home anchor) | One page per service: Is this you · In scope · Not in scope · How it runs · A recent result · Specification | **Reject for now** | Four pages of new copy plus a case each (row 13). Candidate for a later phase once rows 11 and 13 are settled. When they ship, replace the `/services` anchor redirects per the note in `public/_redirects`. |
| 16 | Navigation | Practice · About · Scope builder · Calibre · ع · "Book a call" | Practice · Services · About · Notes · Scope builder · Calibre · Contact · العربية | **Retain, one addition pending** | Keep the live set. No "Services" item without service pages. No "Contact" item: `/contact` deliberately resolves to `/scope`. Add "Notes" once a `/knowledge` index exists (row 20); four notes already justify it. Founder to confirm. |
| 17 | Terms of practice (commitments) | Four commitments on the ink section | Same four, roman numerals | **Retain** | Same content. Numerals stay "01" to match the ledger and FAQ codes. |
| 18 | Who we help | Split section with two paragraphs | Dropped | **Retain** | It carries the audience definition the concept pushes into the hero strip. Keep until row 5 proves it redundant. |
| 19 | Questions (FAQ) | Three questions, including the non-attest answer | Dropped | **Retain** | The non-attest question is the one a first-time client asks. Stays. |
| 20 | Notes | Four cards on home, no index page | Featured note plus list on home; Notes page with tag filter | **Adopt** | Build a `/knowledge` index with tags (IFRS, KSA, Audit) and a featured-note layout on home. The four existing articles are the content. |
| 21 | About page | Page head · The name · Who you work with · How an engagement runs · ink close | Shorter: "daftar, n." definition, founder block, engagement steps | **Retain structure, Adopt one device** | Keep the live page. Adopt the dictionary device ("daftar, n. A ledger; a register…") as the opener of § 01. Founder qualifications stay off the page until confirmed; no "[To confirm]" row ships. Portrait logic unchanged. |
| 22 | Calibre on Daftar pages | Nav link only on the English site; a "handoff" band on `/ar` | Card with Lora "C" tile, Lora and Plus Jakarta copy, forest colours, use statement | **Adapt, requires amendment** | `BRAND.md` §10 allows Calibre inside a Daftar page on a green band in its own faces. The design-system README says no other product's face appears on a Daftar surface. Resolution: the Calibre mark (Lora C tile, *Calibre* italic, "by Daftar" kicker) renders as the logo it is; the card's copy and the verbatim use statement set in Fraunces and mono; the card sits on a forest band. See §5 for the README wording. Gated on that amendment. |
| 23 | Scope builder logic | Three questions, four services, five complications, three timings; outline panel; mailto | Same three questions over eight services; same outline | **Retain** | Logic, options and copy stay. The concept adds nothing to the mechanism. |
| 24 | Scope builder active state | `aria-pressed` with ink border | Inset 3px rust shadow as a left border | **Reject** | Left-border accent is barred by the Callout guideline and "ruled, not shadowed". Keep the live treatment; refine with a 2px rust outline on focus only. |
| 25 | Form delivery | `mailto:` with the outline in the body | Mock form showing "Received." | **Adapt, later phase** | A real submission path is wanted. Netlify Forms works with the static export; founder to choose Netlify Forms with a mail notification or keep mailto. Not part of the first port. |
| 26 | Contact page | None (`/contact` → `/scope`) | Dedicated page with form and "twenty minutes, no charge" | **Reject** | One conversion route. The scope builder is the contact page by design. |
| 27 | Closing CTA | "Tell us what is on the table." on paper | "Ten minutes is enough to start." on ink | **Retain** | Keep the live copy and ground. The ink budget on home is spent on "How we work". |
| 28 | Footer | Mark, tagline, email, "Amman · MENA", non-attest sentence | Link columns (Lanes, Practice), founder line, "Advisory services only · No audit opinions issued" | **Adapt** | Keep the live non-attest sentence verbatim. Add the mono founder line per the design-system README. Add one "Practice" column (About, Scope builder, Notes, Calibre). No "Lanes" column (row 12). |
| 29 | Non-attest notice | Full sentence in footer, plus FAQ 03 and per-service exclusions | Short footer line and per-service exclusions | **Retain** | The approved sentence stays everywhere it is today, and appears on any new service table or detail page near the audit-related rows. |
| 30 | Icons | None on Daftar web | Six line icons in the Icon component; unused on the home view | **Reject** | `BRAND.md` §07: Daftar web pages use none. The design-system set remains available for documents. |
| 31 | Motion | `.dft-rise`, reduced-motion respected | `riseIn` 8px, reduced-motion respected | **Retain** | Same ease, same distance. |
| 32 | Responsiveness | Breakpoints 1040 / 900 / 620 in `daftar.css` | None; desktop only | **Retain as a gate** | Every adopted component ships with rules at all three breakpoints and a print check for the checklist pages. No phase closes without it. |
| 33 | Arabic experience | `/ar` on the legacy stylesheet; nav link only | Arabic nav link; no RTL pages | **Adapt, later phase** | New components use logical properties so `/ar` can take them. Porting `/ar` to the canon stylesheet is its own workstream and is the moment to fix the `lang` switch `BRAND.md` flags. |
| 34 | Placeholders | None visible | Bracketed placeholders in memo, about, cases | **Reject** | Nothing bracketed ships. Placeholders are working marks (design-system Placeholder guideline). |

## 3. The system before the port

The concept's strength is the relationship between its parts, not any one part. The port
therefore adds a small, named set of components to `app/daftar.css` first, with shared
rules, and only then composes pages from them. All are `dft-*` classes with logical
properties and rules at the three breakpoints.

| New class | Role | Shared rules |
|---|---|---|
| `.dft-memo` | The technical-memo figure: ruled page on `card`, mono TO/RE/DATE labels, numbered Question and Conclusion, refs line, signature, `<figcaption>` | Hairline rules in `rule`; base-8 padding; Fraunces body at `body-print` size; mono labels tracked +0.22em in `muted` |
| `.dft-service-table` | The services as a register: Ref · Problem solved · You get · Typical time | Mono header row under a 1px ink rule; tabular lining numerals; row rule in `rule`; collapses to stacked cards at 900px |
| `.dft-record` | The case register, when gated content exists: sector, code, result, context | Same table grammar as the service table |
| `.dft-note-featured` | Featured note plus list on home; tag chips on `/knowledge` | Reuses `.dft-chip` and `.dft-notes` |
| `.dft-calibre-band` | Calibre card on a forest band, mark in Calibre's faces, copy in Daftar's | Forest `#265147` ground, hairline `#D5E3DE`; never shares a ground with Daftar content |
| `.dft-foot-cols` | Footer link column and the founder mono line | Existing footer rules |

Spacing between chapters tightens to the concept's rhythm (eyebrow to heading 8px,
heading to body 24px, chapter gap 80px) by adjusting `.dft-section` and `.dft-eyebrow`
once, not per page.

## 4. Page-by-page plan

Each phase is one pull request. A phase closes only when `npm run build` exports clean,
the three breakpoints are checked in the exported `out/`, and the print stylesheet still
strips chrome on the checklist pages.

**Phase 0 · Decision record** (this PR). The matrix above, the concept and the review.

**Phase 1 · Home: hero, services, footer.**
Files: `app/page.tsx`, `app/daftar.css`, `app/_data/practice.ts`, `app/_components/SiteChrome.tsx`.
- Hero per rows 1 to 5: live headline, memo figure, mono strip.
- Services per row 11: `.dft-service-table` over the four services; add `run` to
  `practice.ts` only if the founder approves showing it.
- Footer per rows 28 and 29.
- Section rhythm per §3.
Gates: memo content verified (row 3); decision on "Typical time" (row 11).

**Phase 2 · Notes and Calibre.**
Files: new `app/knowledge/page.tsx`, `app/page.tsx`, `SiteChrome.tsx`, `daftar.css`,
`public/sitemap.xml`.
- `/knowledge` index with tags; featured note on home (row 20); "Notes" nav item (row 16).
- Calibre band on home (row 22) after the README amendment in §5 is agreed.
Gates: README amendment; founder confirms "Notes" in primary nav.

**Phase 3 · Evidence.**
Files: `app/page.tsx`, `app/about/page.tsx`, `practice.ts`, `daftar.css`.
- "On the record" on home and About (row 13); sectors list (row 14); About opener (row 21).
- Service detail pages only if rows 11 and 13 are both settled and the founder wants them
  (row 15); update `public/_redirects` in the same PR.
Gates: three cleared cases on file.

**Phase 4 · Delivery and Arabic.**
Files: `app/scope/ScopeBuilder.tsx`, `app/ar/*`, `app/globals.css` or a canon port.
- Form delivery (row 25); scope-builder focus state (row 24).
- Arabic port to canon with the new components (row 33).
Gates: decision on Netlify Forms; Arabic copy written natively, never machine-translated.

## 5. Rule amendments proposed, not made

1. `design/design-system/README.md`, "Scope": change "Any other product keeps its own
   system and never appears on a Daftar surface" to "Any other product keeps its own
   system. On a Daftar surface it appears only as its own mark, on a band of its own
   ground, with the surrounding copy set in Daftar's faces." This matches `BRAND.md` §10
   and resolves row 22.
2. `CLAUDE.md` §2: once Phase 2 ships, note that "Notes" is in primary nav and that
   `/knowledge` has an index page.
3. `BRAND.md`: no change required by any row above. Row 3's memo figure is a new
   component, not a rule change.

## 6. Decisions the founder owns

The matrix leaves these open on purpose. Each blocks a specific row.

1. Memo content: which engagement, what is changed, and sign-off on the standard
   references (row 3).
2. Whether "Typical time" shows per service on the home page (row 11).
3. "Notes" in primary nav (row 16).
4. The README amendment wording in §5.1 (row 22).
5. Case clearance process and the first three cases (row 13).
6. Sectors to list (row 14).
7. Service detail pages, yes or no, and when (row 15).
8. Form delivery mechanism (row 25).
