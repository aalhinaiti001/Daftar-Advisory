# Repo reconciliation — Daftar Advisory, Calibre

Three repositories describe Calibre and the house brand, and they had drifted apart.
This file records which one is canonical for what and how the drift was resolved.
Reviewed 10 September 2026.

## Who owns what

| Question | Canonical source |
|---|---|
| What Calibre *is*, and what it may claim | `calibre-saas-claude` — `product/METHOD.md`, `product/GUARDRAILS.md` |
| Colour, type, voice, retired tokens | this repo — `BRAND.md` |
| What is actually shipped at `daftaradvisory.com` and `/calibre` | this repo — `app/`, `design/`, `netlify.toml` |
| Product architecture decisions | `calibre-saas-claude` — `product/DECISIONS.md` |

`calibre-by-daftar` is **not canonical for anything**. It is an archive of earlier
design work retained only as provenance. See below.

Where two sources disagreed, the rule applied was *better grounded wins, not newest*.
The method files won on claims because they are the only artefacts tied to the July 2026
deep research assessment and to legal exposure. `BRAND.md` won on visual tokens because
it is the handbook of record and already carries the Founder's exceptions.

## Reconciled in this repo

**1. The site promised something the method forbids.**
`design/calibre-home.html` and `-ar.html` sold "a ranked, defensible verdict" and a
"one ranked recommendation", in five places each. `METHOD.md` §6 and §9 are explicit that
the weighted result is shown in entry order and that the method never sorts, ranks,
colours, or labels finalists; the recommendation in §7.8 is human-written prose. The word
was removed on both language surfaces. The offer is unchanged: one written verdict, with
the reasons and the risks named.

**2. "Role-fit scorecard" → "Role-specific scorecard".**
`GUARDRAILS.md` §2 prohibits producing a fit score and §7 forbids implying the method
measures fit. The deliverables list already used "role-specific"; the engagement list
now matches it. Mirrored in Arabic.

**3. The use statement was half-quoted.**
Both footers carried "not a psychometric assessment, does not predict performance" but
dropped the clause that carries the liability. `METHOD.md` §7.10 is now quoted whole:
the decision, and its consequences, rest with the employer.

**4. `BRAND.md` contradicted itself on rust.**
The colour table marked `#A8341F` a defect to conform while the exception block below
approved it for that same surface. The table now reads as the exception it is.

**5. `BRAND.md` open flag on the unsourced "Δ 41 pts" stat is closed here.**
It was removed from both Calibre pages in this repo. It remains only in the retired
`calibre-by-daftar` bundle, which is retained as design provenance and is not deployed.

**6. `BRAND.md` described a deploy path that no longer exists.**
It said the Daftar home is served from `design/daftar-home.html` over `out/index.html`.
`netlify.toml` stopped doing that when the Next home page shipped. The exception is
unchanged; only the description of where the stack lives was corrected.

**7. `README.md` described a different repository.**
It listed `/` as the Calibre diagnostic and `/daftar` as the firm page, and credited a
"Ledger design system". Neither route exists. It now maps the three real surfaces and
carries the retired "hiring diagnostic" label nowhere.

## Reconciled in related repos

Completed 10 September 2026:

- **`calibre-by-daftar` is now an explicit design archive.** Its Netlify configuration
  and GitHub Pages workflow were removed in `Calibre-by-Daftar` PR #8, GitHub Pages was
  disabled, and the two stale PRs that could republish the retired site were closed.
  The design canvas,
  deck, component cards, and old bundle remain as provenance. Its README points here
  for the canonical site and warns that the old bundle must not be republished.
- **`calibre-saas-claude` now records the website work as applied.** Its PR #3 updates the
  2 September founder decision entry and points it to `daftaradvisory.com/calibre`.
- **The booking shortcuts work again.** PR #37 routes `/book` and `/call` to `/scope`
  with temporary redirects, replacing the unsupported `mailto:` targets.

Live checks on 10 September returned 200 for `daftaradvisory.com/calibre`, with none of
the retired claims above, and 404 for the former Netlify, GitHub Pages, and legacy custom
domain URLs.

## Not changed, deliberately

- **`design/daftar-home.html` stays.** It is superseded and not deployed, and `netlify.toml`
  explains why it must not be copied over `index.html`. It is also the export the recorded
  brand exception was baked from, so deleting it would lose the provenance.
- **The Calibre Lora / Plus Jakarta Sans / forest-green stack stays.** Approved exception.
- **The hero's "Reader A 82 / Reader B 41" panel stays.** It depicts the problem, two
  readers with no shared standard, and is labelled illustrative. It is not the product's
  output, so the no-labels rule does not reach it.

## Consolidation — 6 October 2026

Review of every brand and playbook rule in this repo, so that `BRAND.md` is a single,
self-consistent statement of current canon.

1. **Rust unified on `#A8341F`.** The English site, favicon, engagement-letter skill and
   house-style documents already used it; only `/ar` (`app/globals.css` `.daftar`) still
   ran the handbook's `#B3502B`. Arabic is now conformed, and `#B3502B` moves to the
   retired list. This closes the EN/AR colour split previously listed as open.
2. **Stale lines above retired.** The 10 September notes described Fraunces / JetBrains
   Mono as a retired-but-excepted stack and said `/ar` ran a different type system. The
   12 September ruling made both canonical everywhere; those lines are removed.
3. **`BRAND.md` no longer contradicts its own CSS block.** It previously set
   `--rust: #B3502B` as canonical while approving `#A8341F` as the live value.
4. **Calibre playbook v2 recorded as normative visual rules** (no gradients or heavy
   shadows, C-tile lockup, one contact route, terms held until approved). Previously
   these existed only as citations in the 27 September audit.
5. **Arabic Calibre `og:url` fixed** to `/ar/calibre` (audit finding F4, first half).
6. **Calibre final-site spec brought onto the default branch.** The 27 September
   proposal (`docs/superpowers/specs/2026-09-27-calibre-final-website-design.md`) lived
   only on `codex/calibre-final-site`. It is the newest Calibre copy contract in the repo,
   so its lead line, method names, use statement and single contact route are now in
   `BRAND.md`. It remains *proposed*; implementation still needs approval.
7. **`daftar-engagement-letter` flag closed.** Its spec (Fraunces, JetBrains Mono,
   `#A8341F`, paper `#F4F1EA`) matches current canon.

8. **Four local brand documents reviewed** (Brand Handbook "v1.2" file whose content is
   v1.3, Profile Playbook v1.4, the v1.5 Brand Bundle, and the later v1.5 handbook PDF with
   §11 Arabic). Their still-valid rules that `BRAND.md` lacked are now in it: rust-on-ink
   `#E07458`, contrast minimums, iconography, motion, Arabic & bilingual, web anatomy and
   social posting. Superseded points are listed in `BRAND.md`'s source register, which
   also names the collateral that needs re-issue (both tri-fold brochures).
   Contrast check: `#A8341F` on cream is 5.86:1, better than the handbook's `#B3502B`
   (4.54:1), which supports the rust decision in item 1. The v1.3 muted `#78726A` fails
   AA at 4.22:1; the site's `#6F665D` (4.99:1) is kept.

Still open: audit findings F1–F3 and F5–F8 on the shipped Calibre pages. They involve
offer and claim copy that needs the method owner's approval, so they are tracked in
`BRAND.md` rather than changed here.

**Local folder:** not reachable directly; the four documents above were supplied by
upload instead. Any other files in `Daftar and (claibre)` remain uncompared.

## Brand Guide v1.6 — 6 October 2026

Founder instruction: two typefaces for Daftar, and the Ledger design icon as the logo.

- **Type:** Fraunces + JetBrains Mono. Chosen over Fraunces + Instrument Sans because
  it is the pair the Founder's own v1.3 handbook and the engagement-letter skill already
  specify, and the mono "register" voice is what the § eyebrows, service codes and
  figures rely on. Instrument Sans was used only for body and navigation; both now set
  in Fraunces. Its loader is removed from `app/globals.css`. Arabic script stays on IBM
  Plex Sans Arabic. Calibre keeps its Lora / Plus Jakarta Sans exception.
- **Mark:** direction 1B "Ledger total" from the 13 September logo-marks exploration
  (branch `design/logo-marks`, commit `a68736f`) replaces the D monogram on the header,
  footer, Arabic pages, favicon and OG image. Geometry lives once in
  `scripts/build-brand-assets.py` and `LedgerMark`.
- `BRAND.md` rewritten as the final guide with the reconstructed version history; a
  designed edition is at `design/brand/house-brand-guide.html`.

### Mark changed to the folded file (1D) — 6 October 2026, before merge

Founder decision after comparing 1B and 1D side by side. The Ledger total bars read close
to Clipkit's three-bar logo at small sizes; the folded file argues from the name and
the handover instead. Adopted with the 1D adoption sheet's corrections: a small cut
below 24px (fold 54/46), clear space = the fold height, Calibre keeps its C monogram.
One correction was refined against v1.6: the *corner* stays `#A8341F` on ink because it
sits on the paper page, but rust *text* on ink keeps `#E07458`, since `#A8341F` text on
ink fails AA at 2.68:1. The component is now `DaftarMark`; the Ledger cuts were removed
from `public/brand/`.
