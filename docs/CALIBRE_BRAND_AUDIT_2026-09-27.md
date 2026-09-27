# Daftar Advisory / Calibre Brand Materials Audit

**Review date:** 27 September 2026  
**Repository:** `aalhinaiti001/Daftar-Advisory`  
**Baseline:** commit `7622548` — *Reconcile Daftar brand voice and service offer*  
**Materials reviewed:**

- `calibre-brand-playbook-v2.html` — working edition 02, 23 September 2026
- `calibre-social-media-strategy-v1.html` — working edition 01, 23 September 2026
- Repository brand and reconciliation records: `BRAND.md`, `CLAUDE.md`, `docs/RECONCILIATION.md`
- Shipped Calibre surfaces: `design/calibre-home.html`, `design/calibre-home-ar.html`
- Deployment path: `netlify.toml`, `public/sitemap.xml`, relevant parent-site Calibre handoffs

## Executive conclusion

**Overall status: Not ready for an unrestricted external release without a short remediation pass.** The repository has a strong foundation: the Calibre pages are deliberately separated from the Daftar canon surface, use the approved Lora / Plus Jakarta Sans exception, provide mirrored English and Arabic pages with RTL markup, include the complete English employer-responsibility statement, and no longer use the retired “hiring diagnostic” or “Δ 41 pts” language. The exact Next.js build and the Netlify-style static copy step both pass.

The remaining risk is concentrated rather than systemic. The pages still read like an active product-sales surface while the supplied playbook and social strategy describe a gated, evidence-led, attachment-stage product. The copy and mock UI use **score / weighted result / reject / fixed fee / two weeks / reply within two days** language without showing the approval trail or method files that would make those claims safe. The surface also includes gradients and heavy shadows that the new playbook explicitly asks teams to avoid, omits the visible Calibre C-tile lockup, exposes three contact routes where the website application rule asks for one, and contains an incorrect Arabic Open Graph URL.

### Recommended release decision

- **Block broad publication / promotion** until Findings F1–F4 are resolved or explicitly approved by the method / brand owner.
- **Resolve F5–F7 before calling the surface production-hardened.**
- The repository can remain publicly accessible as a working or review surface, but it should not be treated as a final, approved product page based on the evidence currently present in the repo.

## Alignment scorecard

| Area | Status | Assessment |
|---|---|---|
| Calibre / Daftar separation | **Mostly aligned** | Separate `/calibre` and `/ar/calibre` artifacts; “by Daftar” is present; no second Daftar logo is placed in the Calibre artwork. |
| Typography | **Aligned by recorded exception** | Lora and Plus Jakarta Sans match the repo’s approved Calibre exception, although the supplied playbook’s working guide emphasizes a more restrained treatment. |
| Core colour direction | **Partially aligned** | The active `ink` theme is cool and close to the supplied palette, but the CSS retains multiple theme variants, a clay palette, and a gradient. |
| Claim boundary | **Not release-safe** | Product copy and mock UI can be read as a scoring / selection product; the primary method and guardrail files are not in this repo. |
| Offer / commercial release gate | **Not evidenced** | Fixed fee, two-week timing, response-time promise and several contact routes are live in the markup despite the supplied hold-for-approval language. |
| English / Arabic parity | **Partially aligned** | Structure and RTL setup are good; the Arabic `og:url` points to the English route and at least one scorecard label remains in English. |
| Accessibility / progressive enhancement | **Partially aligned** | Good `lang`, `dir`, reduced-motion, focus and decorative-icon handling; scroll-reveal content is hidden until JavaScript runs. |
| Build / deployment | **Pass** | `npm run build` passes; the exact Netlify copy command produced both static Calibre artifacts. |
| Social-strategy implementation | **Not evidenced** | The repo contains the product pages but no owner approval record, content ledger, privacy/data process or release checklist tying the site to the strategy gate. |

## Findings

### F1 — High: scoring and selection semantics remain ambiguous against the claim gate

**Evidence**

- English metadata says: “We score your shortlist against a written standard” — `design/calibre-home.html:7`.
- Hero copy says: “We read your finance shortlist, score it against the role…” — `design/calibre-home.html:181–187`.
- The proof card shows `82` and `41`, “Strong shortlist” and “Reject” — `design/calibre-home.html:214–246`.
- The method sequence includes “Score” and “Compare” — `design/calibre-home.html:255–296`.
- The mock scorecard presents a “Weighted result” with `9/10`, `8/10`, and `5/10` — `design/calibre-home.html:299–340`.
- The engagement panel says “Each candidate scored independently” — `design/calibre-home.html:391–408`.
- The Arabic surface mirrors the same model and numeric UI — `design/calibre-home-ar.html:221–252`, `306–347`, and `398–416`.

**Why it matters**

The supplied playbook allows role-specific criteria, evidence notes and a human-written recommendation, and it allows fictional scores only when they are visibly labelled illustrative. It separately prohibits language that implies ranking, automated selection, universal fit measurement or performance prediction (`calibre-brand-playbook-v2.html:30–37`). The proof card does include an “Illustrative” label, so that element is not automatically a breach. The larger issue is that the scorecard / weighted-result UI is not visibly marked as illustrative and the page does not make clear that Calibre never sorts, ranks or labels finalists. A reasonable reader could interpret the page as selling a fit or ranking engine rather than a human-written memo.

This is especially important because the repository’s own reconciliation notes say the external `product/METHOD.md` and `product/GUARDRAILS.md` are the canonical claim sources (`docs/RECONCILIATION.md:7–21`), but those files are not present for this review.

**Recommended action**

1. Ask the method owner to approve the exact words **score**, **weighted result**, **reject**, and **each candidate scored independently** against the current method files.
2. If the UI is only a problem illustration, label the entire card and scorecard **Illustrative example — not a Calibre output**.
3. Remove “Reject”, any implied ordering, and any unapproved aggregate / fit-like score. Prefer “evidence notes”, “criterion-by-criterion review”, “visible disagreement”, and “human-written recommendation”.
4. Add the complete employer-responsibility / non-predictive boundary near the first product claim, not only in the footer.

### F2 — High: unresolved commercial terms are presented as live commitments

**Evidence**

- The page advertises “Fixed fee” — `design/calibre-home.html:198–210`.
- The engagement copy promises “One role · 2 weeks · fixed fee” — `design/calibre-home.html:391–400`.
- The contact section says “We reply within two days” — `design/calibre-home.html:441–455`.
- The mobile CTA links directly to a “Calibre scoping call” mailto — `design/calibre-home.html:521–525`.
- The Arabic page repeats the same commercial framing and timing — `design/calibre-home-ar.html:205–217`, `398–407`, and `528–532`.

**Why it matters**

The playbook explicitly places the fee, finalist count, panel minimum, solo tier, contact address, data-retention promise and jurisdiction-specific assurance on hold pending approval (`calibre-brand-playbook-v2.html:34`, `37`). The social strategy likewise says the package, price, method files and candidate-data terms remain unresolved and that a Calibre public channel should follow an approved offer and paid evidence (`calibre-social-media-strategy-v1.html:22–31`). The current pages behave as if these terms are approved.

**Recommended action**

- Until approved, remove “fixed fee”, “2 weeks”, and “reply within two days”; replace them with scoped, non-committal wording.
- Use one approved next step, ideally the existing `/scope` path if that is the current controlled intake route.
- Record the owner, date, approved offer version and approved contact route in a release checklist or decision record.

### F3 — High: contact and candidate-data release controls are incomplete

**Evidence**

The Calibre page exposes multiple live routes:

- Email, WhatsApp and LinkedIn cards — `design/calibre-home.html:458–474`.
- The same three channels appear in the footer — `design/calibre-home.html:503–509`.
- The Arabic page mirrors them — `design/calibre-home-ar.html:465–480` and `510–516`.

The page invites a user to bring a shortlist but does not provide a visible candidate-data handling, notice, retention or jurisdiction boundary. The social strategy’s workflow requires privacy clearance before publishing and lists the client / candidate data process as a release condition (`calibre-social-media-strategy-v1.html:29`, `31`).

**Why it matters**

The website application table in the playbook calls for **one contact route** and an approved offer (`calibre-brand-playbook-v2.html:35`). Multiple direct channels increase inconsistency and make it unclear where sensitive shortlist material should or should not be sent. This is a release-control issue even if the contact details themselves are accurate.

**Recommended action**

- Choose and verify one public contact route.
- Add a short instruction not to send candidate personal data through an unsecured channel, plus the approved intake / notice link once available.
- Do not promise retention, deletion, jurisdiction or confidentiality terms until those have been approved and implemented.

### F4 — High: Arabic Open Graph URL is incorrect

**Evidence**

- The Arabic document correctly declares `lang="ar" dir="rtl"` — `design/calibre-home-ar.html:2`.
- Its `og:title` and `og:description` are Arabic, but `og:url` incorrectly points to the English path `https://daftaradvisory.com/calibre` — `design/calibre-home-ar.html:7–13`.
- The English page has the expected `/calibre` URL — `design/calibre-home.html:7–13`.
- Neither static page declares a visible `hreflang` / alternate-link set in the document head.

**Why it matters**

The playbook treats English / Arabic claim parity as a release requirement (`calibre-brand-playbook-v2.html:36`), and the strategy asks for human review of translated claims (`calibre-social-media-strategy-v1.html:29`, `31`). The wrong Arabic social URL can send previews and share metadata to the wrong language surface and makes the bilingual implementation less trustworthy.

**Recommended action**

- Set the Arabic `og:url` to `https://daftaradvisory.com/ar/calibre`.
- Add canonical / alternate metadata for both static pages if the hosting setup supports it.
- Run a bilingual metadata and risky-term check in CI or the Netlify build.
- Translate or deliberately retain the word “Ownership” in the Arabic mock scorecard; do not leave it accidental or unexplained (`design/calibre-home-ar.html:321–325`).

### F5 — Medium: visual treatment conflicts with the supplied playbook’s restraint rules

**Evidence**

- The contact panel uses a radial gradient — `design/calibre-home.html:441–445`; mirrored at `design/calibre-home-ar.html:449–452`.
- The page uses `shadow-sm`, `shadow-md` and `shadow-xl` on proof, scorecard and contact surfaces — `design/calibre-home.html:214–217`, `299–300`, `441–445`; mirrored in Arabic.
- The CSS retains multiple production-visible theme definitions, including `clay` and `midnight` — `design/calibre-home.html:46–81`.
- The `clay` theme introduces a warm paper and orange / clay colour direction — `design/calibre-home.html:57–60`.

**Why it matters**

The supplied playbook calls for white and cool-neutral grounds, green as the structural accent, green hairlines, clear whitespace, 8–12px radii, and specifically says to avoid gradients, heavy shadows and warm clay / rust (`calibre-brand-playbook-v2.html:32`). The active `ink` theme is relatively close to the cool palette, and the repository records Lora / Plus Jakarta as an approved Calibre exception in `BRAND.md:35–44`. This is therefore a **version-governance conflict**, not evidence that the entire page uses the wrong brand. Nevertheless, the shipped code still contains treatments the newer playbook asks teams not to use.

**Recommended action**

- Remove the radial gradient and replace shadows with borders / hairlines and tonal fills.
- Freeze one approved production theme; remove or isolate `clay` / `midnight` options from the shipped page unless they are explicitly approved.
- Keep the live Calibre exception documented, but make the newer playbook’s no-gradient / no-heavy-shadow rules executable in the production stylesheet.

### F6 — Medium: visible Calibre lockup is incomplete

**Evidence**

- The header renders text-only “Calibre” and “by Daftar” — `design/calibre-home.html:128–134`.
- The footer repeats text-only “Calibre by Daftar” — `design/calibre-home.html:482–492`.
- The Arabic surface follows the same pattern — `design/calibre-home-ar.html:135–141` and `489–499`.

**Why it matters**

The playbook’s working lockup is a Lora **C** in a forest tile, “Calibre” in Lora italic and a Plus Jakarta Sans **by Daftar** kicker; the kicker remains present but a second Daftar logo does not share the artwork (`calibre-brand-playbook-v2.html:31`). The repository does provide a C-tile favicon, but the visible page chrome does not use the specified mark. The result is recognizable, but not fully compliant with the supplied identity instruction.

**Recommended action**

Add one visible C-tile + wordmark lockup in the header and footer, with the kicker set in the approved sans treatment. Keep the standalone Daftar link in navigation, but do not add a second Daftar logo to the Calibre artwork.

### F7 — Medium: prototype runtime dependencies and no-JavaScript reveal state reduce production readiness

**Evidence**

- The pages compile Tailwind in the browser through the Play CDN — `design/calibre-home.html:17–22`; the file itself says this is prototype-only.
- Lucide is loaded from the unpinned `https://unpkg.com/lucide@latest` URL — `design/calibre-home.html:41–44`.
- All `[data-reveal]` elements begin with `opacity:0` and become visible only when the inline script adds `.is-in` — `design/calibre-home.html:88–105`, `528–560`.
- The repository has no dedicated brand-claim, bilingual-parity or accessibility test suite; `package.json` contains only the basic Next scripts and dependencies.

**Why it matters**

The current build is valid, but a static product page should not depend on a runtime CSS compiler, an unpinned icon CDN, or JavaScript to make the main content visible. This is not a direct copy violation, but it makes the page less deterministic and less suitable for the playbook’s release gate.

**Recommended action**

- Compile and ship a pinned Calibre stylesheet rather than relying on Tailwind Play CDN.
- Pin the Lucide version or inline only the required SVGs.
- Make reveal content visible by default and add an enhancement class only when JavaScript is available.
- Add a small validation script that checks EN / AR risky terms, `lang` / `dir`, `og:url`, approved use statements, and the presence of the current release checklist.

### F8 — Medium: release approval and source trace are not evidenced in the repo

**Evidence**

- The playbook says the cited method, guardrail and decision files were not in the reviewed folder and that claims, contact details and commercial terms must be confirmed before final use — `calibre-brand-playbook-v2.html:28`, `34`, `37`.
- The social strategy says the document authorizes no posts, ads or outreach and requires an owner-approved offer, paid evidence, data process and public-channel decision — `calibre-social-media-strategy-v1.html:22`, `31`.
- The repo’s reconciliation file points to an external `calibre-saas-claude` repository as the canonical source for what Calibre is and may claim — `docs/RECONCILIATION.md:7–21`.

**Why it matters**

A code repository can implement a brand system without storing every legal or method file, but it should still carry a traceable release decision. At present the implementation contains the page, while approval evidence remains in narrative docs or an external repository. That makes it difficult for a reviewer to tell which copy is final, which is illustrative and which terms are still provisional.

**Recommended action**

Add a small, non-sensitive `docs/CALIBRE_RELEASE_GATE.md` (or equivalent) recording:

- method / guardrail / decision-file versions reviewed;
- approved offer and commercial-term version;
- approved contact route;
- candidate-data / privacy process status;
- EN / AR review date and reviewer;
- brand owner approval and next review date.

## What is already working

The audit found several positive controls that should be retained:

1. **Correct surface separation.** The Calibre pages are copied to `/calibre` and `/ar/calibre` by `netlify.toml:1–15`, rather than being mixed into the Daftar Next.js route tree.
2. **Approved type exception.** Lora and Plus Jakarta Sans are explicitly documented as the live Calibre exception in `BRAND.md:35–44` and used by both pages.
3. **Bilingual document setup.** The Arabic page has `lang="ar" dir="rtl"`, Arabic copy, and a dedicated Arabic font load (`design/calibre-home-ar.html:2`, `123–128`).
4. **Employer-responsibility statement.** The English footer includes the complete four-part boundary: structured hiring advisory, not psychometric, does not predict performance, and the decision / consequences rest with the employer (`design/calibre-home.html:487–492`). The Arabic footer carries a substantive equivalent (`design/calibre-home-ar.html:494–499`).
5. **Known historical drift was partly corrected.** The repository reconciliation records the removal of “ranked” / “fit” wording and the unsourced `Δ 41 pts` stat (`docs/RECONCILIATION.md:26–50`).
6. **Build reliability.** `npm run build` completed successfully with type checking, linting and static export. The exact Netlify-style command also produced non-empty `out/calibre.html` and `out/ar/calibre.html` artifacts.
7. **Motion and icon basics.** Reduced-motion handling is present, and decorative icons are marked `aria-hidden="true"` throughout the Calibre pages.

## Remediation order

### P0 — before external product promotion

1. Resolve F1 against the current method / guardrail files; remove or explicitly label ambiguous scoring and selection UI.
2. Remove or approve the fixed-fee, two-week and response-time commitments (F2).
3. Select one verified contact route and add the approved candidate-data intake / privacy boundary (F3).
4. Correct Arabic `og:url` and add bilingual metadata checks (F4).

### P1 — before calling the page production-final

5. Remove gradient / heavy-shadow treatment and freeze the approved theme (F5).
6. Add the visible C-tile lockup and verify the “by Daftar” kicker treatment (F6).
7. Compile and pin runtime assets; make content visible without JavaScript and add a lightweight claim / parity check (F7).
8. Add a release-gate record tied to the source-file versions and approvals (F8).

### P2 — social-strategy operations outside this website repo

The supplied social strategy is intentionally cautious: founder / Daftar educational content first, one substantial post per week as a six-week test, no cold Calibre funnel, no scraping or artificial engagement, and a public Calibre channel only after offer stability and paid evidence (`calibre-social-media-strategy-v1.html:24–31`). The repository does not contain a social content ledger or publishing workflow. That is not, by itself, a website defect; it does mean the social release conditions cannot be verified from this repository alone.

## Validation performed

```text
npm run build                         PASS
Next.js type checking / linting      PASS (via build)
Static export                         PASS
Netlify-style Calibre copy step       PASS
  out/calibre.html                    43,832 bytes
  out/ar/calibre.html                 46,461 bytes
```

No code changes were made to the repository during this audit. The report is an external review artifact based on the cloned baseline and the two supplied working documents; it is not a legal, privacy or method-owner approval.

## Source-review addendum — 27 September 2026

Three additional supplied files were reviewed after the initial audit:

- `CalibreBrandHandbook.html`
- `CalibreVerdict.html`
- `CalibreGuidedv2.dc.html`

### Updated verdict

The new **Calibre Verdict** and **Guide v2** are materially closer to the supplied brand playbook than the currently shipped `design/calibre-home.html` and `design/calibre-home-ar.html`. They should be treated as the preferred direction for a future implementation, but they do **not** change the audit status of the shipped repository until they are wired into the deploy path and given an Arabic counterpart.

### Improvements confirmed in the new source files

- **Claim boundary:** `CalibreVerdict.html:43–63` replaces numeric reader scores with qualitative, explicitly illustrative disagreement; `CalibreVerdict.html:154–165` states that nothing is scored at the definition step, and the method uses evidence notes, visible divergence and a human-written recommendation.
- **Offer discipline:** `CalibreVerdict.html:97–107`, `179–190` and `CalibreGuidedv2.dc.html:130–151`, `241–251` make the role, finalist count, fee and candidate-data handling items agreed at scoping rather than fixed public promises.
- **Candidate-data boundary:** `CalibreVerdict.html:117–129` and `CalibreGuidedv2.dc.html:173–187` use one email route and explicitly say not to send CVs until terms are agreed.
- **Identity:** `CalibreVerdict.html:32–38` and `CalibreGuidedv2.dc.html:13–23` show the C-tile, Calibre wordmark and `by Daftar` kicker required by the playbook.
- **Visual restraint:** the new source design uses forest / cool-neutral colours, rules and whitespace without the previous product page’s radial gradient and heavy shadows (`CalibreVerdict.html:11–29`, `32–129`; `CalibreGuidedv2.dc.html:10–24`, `40–50`).
- **Use statement:** `CalibreVerdict.html:111–115` and `CalibreGuidedv2.dc.html:155–160` place the full approved use statement in the FAQ / release flow.

### Remaining implementation blockers before promoting the new direction

1. `CalibreVerdict.html` is English-only. It links to `/ar/calibre` at line 36 but does not supply the corresponding Arabic page, so the bilingual release gate remains open.
2. The Verdict file is a design artifact rather than a production metadata-complete page: the `<title>` appears after `<body>` begins (`CalibreVerdict.html:1–4`), the root `<html>` has no `lang`, and there are no Open Graph, canonical or alternate-language tags.
3. The route is JavaScript-driven and hides all non-landing rooms with the `hidden` attribute until the inline script renders them (`CalibreVerdict.html:67–130`, `231–280`). It needs a deliberate no-JavaScript and crawler fallback before production use.
4. `CalibreGuidedv2.dc.html` is a design-comp artifact using `<x-dc>`, `<sc-if>` and `<sc-for>` constructs (`CalibreGuidedv2.dc.html:9–10`, `15–18`); it must not be copied directly into the Netlify output without compilation or conversion.
5. The supplied `CalibreBrandHandbook.html` is a bundled design artifact with a compressed manifest rather than a line-oriented handbook. Its visible thumbnail confirms the white C on a forest tile, but the bundled payload was not treated as independently verifiable normative text in this addendum.

### Implementation decision for this commit

This commit adds the **audit verdict and source-review addendum** to `docs/CALIBRE_BRAND_AUDIT_2026-09-27.md`. It does not replace the live Calibre pages with the new Verdict artifact, because doing so without an Arabic counterpart, production metadata and a compiled route would create a new release gap. The code base is built and validated separately below.
