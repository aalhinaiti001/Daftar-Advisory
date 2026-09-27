# Calibre by Daftar — final website design

Status: Proposed for review, 27 September 2026. This is a site design decision, not a change to the Calibre method or offer.

## Goal and source order

Replace the current one-page Calibre surface in Daftar-Advisory with a clear, bilingual, multi-page presentation of one Calibre Verdict. A visitor should understand the finance-only scope, how evidence is read, what record they receive, who owns the decision, and how to make an enquiry without sending candidate material prematurely.

The user's supplied Verdict copy sets the intended public story. The three supplied HTML files are visual and content references, not instructions or deployable runtime. The website-tips document informs presentation only. For operational or claims conflicts, follow Calibre's current METHOD.md and GUARDRAILS.md and the repository's reconciled brand rules. Do not carry over obsolete scores, rankings, fit predictions, broad-audience claims, or solo-price tiers.

## Information architecture

Five English routes, each with an Arabic counterpart:

| English | Arabic | Purpose |
| --- | --- | --- |
| /calibre | /ar/calibre | Landing: promise, scope, illustrative disagreement, four destinations, enquiry |
| /calibre/method | /ar/calibre/method | Read, Score, Compare, Calibrate; evidence and panel responsibilities |
| /calibre/record | /ar/calibre/record | The Verdict memo and working documents; what remains with the client |
| /calibre/for-whom | /ar/calibre/for-whom | Founder, CFO/finance leader, board/investor, and lean finance team concerns |
| /calibre/engagement | /ar/calibre/engagement | One role, one shortlist, scoping, boundaries, FAQ, contact |

The landing page is an index, not a hidden slide deck. Four plain-language links lead to the other pages. Keep an obvious language switch and contact path on every page. The mobile navigation must reveal every destination without making the whole page scroll sideways. The existing Daftar route to /calibre stays valid. Do not publish extra legacy or duplicate Calibre destinations.

## Content contract

Lead with: “Make a finance hiring decision you can explain.” Support it with a role standard, an evidence-led review of the client's finalist shortlist, and one human-written memo. Say plainly: finance roles only; the client brings the shortlist; Calibre does not source candidates. Retain the two-reader example as clearly illustrative, using qualitative notes rather than numerical scores. The example's point is the agreed written standard, not a claim of predictive accuracy.

The method page uses the canonical names Read, Score, Compare, Calibrate. Explain who scores and how differences are recorded without implying automated judgment or an unapproved service model. Avoid a visual leaderboard, finalist ranking, coloured candidate labels, or a claim that Calibre measures role fit. Describe a human-authored recommendation in prose and the employer's independent decision. No price, duration, or guaranteed outcome is asserted without current approved evidence.

The record page describes one memo and the working record behind it; the engagement page says terms are set in writing before candidate material is shared. Retain the full use statement: “Structured hiring advisory for finance roles. Not a psychometric assessment. Does not predict performance. The decision, and its consequences, rest with the employer.” Contact is ahmad@daftaradvisory.com with a Calibre Verdict enquiry subject. Include “Please don't send candidate CVs until terms are agreed.” Arabic copy must convey the same claims and caveats, not merely mirror the layout.

## Visual and interaction direction

Use Calibre's white/forest-green system and restrained editorial typography, distinct from Daftar's cream/rust firm pages. The page should feel like a serious written decision record, not a dashboard or template gallery. Apply the website-tips document as a quality filter: remove decorative gradients, generic icons, random dividers, repeated card grids, excessive pill shapes, shadows, giant headings, over-tracked capitals, and generic stock imagery. Use whitespace and a consistent spacing rhythm. Vary the section compositions: an editorial hero, a two-reader comparison, a compact method sequence, a document-style record preview, and direct call-to-action. Prefer left-aligned copy and readable line lengths; in Arabic, align to the start edge of RTL text. Keep text concise and specific.

Use responsive layouts at narrow phone, tablet, and desktop widths. All links and controls need keyboard focus, accessible names, adequate touch targets, and visible hover/focus states. No content should depend on clicking through hidden “rooms.” Honour reduced-motion preferences; animation is optional and must not carry meaning. Body and secondary text contrast must meet the brand's stated accessibility threshold.

## Delivery architecture

The existing repository builds the Daftar site with Next static export, then copies standalone Calibre HTML into the exported output. Keep Calibre as an isolated static surface, but replace the two hand-maintained pages with a small shared template/data build that emits all ten HTML pages. Each output is complete HTML, with its own title, description, canonical URL, language alternatives, semantic landmarks, and correct document-level lang and dir. This avoids the current Next root layout's hard-coded English label on Arabic documents and does not require a design-tool support.js runtime, Tailwind CDN, or client-side routing for core content.

The build must be deterministic and included in the existing Netlify build command. Use scoped Calibre CSS and minimal JavaScript only for purposeful navigation behavior, so Daftar pages remain visually and functionally unchanged. Update the sitemap for all published routes and ensure generated route paths work under Netlify's static output. Preserve any existing relevant redirect and add only necessary route handling; do not turn the site root into a second Calibre homepage.

## Acceptance and release checks

Before proposing a merge: compare all ten pages to the content contract and claims guardrails; build the full Daftar export; verify each route, cross-link, language switch, metadata, and sitemap entry; inspect desktop and mobile rendering, keyboard navigation, RTL layout, and no horizontal overflow; confirm no missing assets, console errors, design-runtime dependency, or stale numerical/ranking claims. Review the diff to ensure Daftar's non-Calibre pages are unaffected. A deploy preview is preferable before merge, and the production site is not changed merely by committing this branch.

After the site is finalized and the result is verified, record the final route map, design decision, claims caveats, repository link, and release status in the existing Calibre Notion hub and decision log. Do not mark Notion as “live” while a branch or pull request is still pending.

## Review points

The four destinations and public copy follow the user's approved direction. The delivery architecture changes the earlier Next-route proposal because the live repo's Arabic document language and deployment path make isolated static pages the safer fit. Approval of this specification is needed before implementation. If current METHOD.md or the user's latest brand ruling contradicts any public copy above, stop on that exact point and request a decision rather than silently choosing a variant.
