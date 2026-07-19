# Daftar Advisory — website

The live site for **Daftar Advisory** and its product, **Calibre**. Static
HTML/CSS/JS, deployed on **Netlify** from the `aalhin001` branch to
[daftaradvisory.com](https://daftaradvisory.com). No build step.

## Pages

**Daftar Advisory** (Fraunces / JetBrains Mono, cream + rust):

- `index.html` — Home
- `services.html` — Services
- `about.html` — About
- `how-it-works.html` — How it works
- `insights.html` — Insights
- `scope-a-call.html` — Scope a call (inquiry form)

**Calibre** (Newsreader / IBM Plex Mono, white + green) — the hiring-decision
diagnostic product:

- `calibre/index.html` — served at `/calibre/`

## Shared assets

- `site.css`, `site.js` — Daftar site styles and behavior
- `image-slot.js` — image helpers used by the Daftar pages
- `calibre/calibre.css` — self-contained Calibre styles
- `assets/` — favicon and shared assets

## Deploying

Netlify auto-deploys the `aalhin001` branch on every push. Pull requests get a
Netlify **deploy preview**; merging to `aalhin001` publishes to production.

## archive/

`archive/` holds superseded design-session material — the original HTML design
prototypes, the earlier Next.js implementation, and design notes. It is kept
for reference only and is **not** part of the live site.
