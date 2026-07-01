# Enhancements applied

Verified: `pnpm check` (tsc) ✓ and `pnpm build` (vite) ✓ both pass.

## Changed files
- `client/src/components/Header.tsx` — added a working **mobile menu** (hamburger toggle, aria-expanded/controls, closes on link click); brand is now a link to `#top`; "Work with me" is a real anchor to `#contact` (was a dead button).
- `client/src/components/Hero.tsx` — added `id="top"`; wired the two **dead CTAs**: "Start a project" → `#contact`, "View case studies" → `#work`.
- `client/src/components/Reveal.tsx` — **new**. framer-motion scroll-into-view fade/rise; honours `prefers-reduced-motion`.
- `client/src/pages/Home.tsx` — wrapped Services / Case Studies / How I Work / About / Contact in `<Reveal>` for staged scroll motion.
- `client/src/index.css` — hamburger + mobile-menu styles; `.nav-toggle` shows ≤820px; smooth anchor scroll with `scroll-margin-top: 84px` so the sticky header doesn't cover targets; reduced-motion disables smooth scroll.
- `client/index.html` — SEO/social meta (description, theme-color, Open Graph, Twitter card).

## Why
- Mobile users previously had **no nav and no CTA** (`.nav-links { display:none }` with no fallback).
- Three primary CTAs did nothing.
- `framer-motion` was installed but unused — the page was fully static.

## Deliberately NOT changed (need your confirmation — possible factual issues)
- Hero/About claim **"EY · Deloitte · PwC"** and **"ACCA · CPA"** — the rest of your material says PwC & EY (no Deloitte; no ACCA/CPA). Confirm the true facts and I'll align.
- Case-study sectors/metrics read as **placeholder** ("30% reduction in audit queries", etc.) — replace with real, defensible numbers.
- Footer **LinkedIn** points to generic `https://linkedin.com`.
- `Contact.tsx` form only `console.log`s — no backend/email wired.

## Known pre-existing items (not introduced by these changes)
- `client/index.html` loads a umami analytics script via `%VITE_ANALYTICS_ENDPOINT%` / `%VITE_ANALYTICS_WEBSITE_ID%`; unset → the script 404s and vite warns at build. Set the env vars or remove the tag.
- `client/src/components/Map.tsx` is **dead code** (never imported); pulls `@types/google.maps` + a Maps API key. Remove or wire it in.
- Manus scaffolding remains: `client/public/__manus__/`, `ManusDialog.tsx`, `vite-plugin-manus-runtime`. Safe to strip for a clean production build.
- framer-motion adds ~weight to the JS bundle (gzip ~142 kB total); fine for a portfolio.
