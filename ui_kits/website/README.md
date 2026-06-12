# Website UI Kit — Daftar Advisory

A high-fidelity, interactive recreation of **daftaradvisory.com** — the marketing/practice site and *The Daftar* research-brief series. Styles are lifted directly from the production HTML (`01_Deployed website/index.html`, `articles.html`, `daftar-001-*.html`), so the kit is pixel-faithful to the live site, not an approximation.

## Run it

Open `index.html`. It's a click-through prototype, not a storybook — it boots on the homepage and you can:

- **Navigate** via the topbar: Services / Case Studies / How It Works scroll-anchor the homepage; **Research** switches to *The Daftar* brief index.
- **Open a brief** — click any row in the brief list to enter the long-form reader (masthead, drop-cap lede, callout, data table, defensible-scope list). "← All briefs" returns.
- **Hover** anything — links go rust, the primary button's arrow nudges, list rows inset with a faint rust wash, service/case cells shift to paper-dark.

## Files

| File | What's in it |
|---|---|
| `index.html` | Shell — loads React 18 + Babel, `kit.css`, and the four JSX modules; mounts `<App>`. |
| `kit.css` | All styles + brand tokens, self-contained (lifted from the production site). |
| `chrome.jsx` | `Topbar`, `SiteFooter`, `Wordmark`, and the `useReveal` scroll-reveal hook. |
| `home.jsx` | Homepage sections: `Hero`, `PlainStrip`, `TrustStrip`, `ServicesSection` (incl. the *When→* table), `WhySection`, `CasesSection`, `ProcessSection` (dark), `ContactSection`, composed as `HomePage`. |
| `research.jsx` | `BriefList` (the four issues) and `BriefReader` (full article layout). |
| `app.jsx` | `App` — view routing between `home` / `research` / `reader`, anchor-scroll handling. |

Components export to `window` (each Babel `<script>` is its own scope) so later modules can use earlier ones.

## Coverage

Chrome (topbar, footer, wordmark, CTA button) · Hero · in-plain-English strip · trust-stat strip · *When→* situation table · service-card grid (with "Most asked" hero flag) · why-grid · case-study cards · dark four-step process · contact-method list · research-brief list rows (incl. `forthcoming` state) · long-form brief reader (masthead, byline grid, rust drop-cap, rule callout, two-column data table, em-dash list).

## Fidelity notes

- **Fonts** load from the Google Fonts CDN (Fraunces / JetBrains Mono / IBM Plex Sans Arabic), exactly as the production site does.
- These are **cosmetic recreations** — forms don't submit, external links are inert (`preventDefault`), and the brief reader shows representative body copy for No. 001. The visual system is the point.
- The Fraunces display headlines use very tight leading (`line-height` 0.95–1.08). They render correctly in real browsers (verified: clean 32–36px gaps to following copy); DOM-rescreenshotting tools sometimes re-wrap them and report a false overlap — trust the live page.
- The Arabic (RTL) homepage exists in the source (`01_Deployed website/ar/index.html`) but is not recreated here; the `العربية` link is a stub. Recreate it from the source if a bilingual kit is needed.

## Extending

Each section is a small, self-contained component driven by a data array at the top of its module (`SERVICES`, `CASES`, `STEPS`, `BRIEFS`, …). Edit the data to re-skin a page; the markup and tokens carry the brand automatically.
