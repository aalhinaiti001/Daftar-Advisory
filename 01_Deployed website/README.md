# Daftar Advisory — Netlify Deployment Bundle

Everything in this folder is ready to deploy. Drag the entire folder onto netlify.com → Deploys, or connect a Git repo and push.

## What's included

- **11 HTML pages** — homepage, start, scoping, areas, articles, capability statements, four research briefs
- **404.html** — branded fallback page (Netlify auto-detects)
- **_redirects** — pretty URLs (`/start` instead of `/start.html`)
- **_headers** — security headers + HTML caching policy
- **robots.txt** — allows all crawlers
- **sitemap.xml** — pre-built for search engine submission

## Deployment

### Option 1 — Drag and drop
1. Go to https://app.netlify.com → Sites → Add new site → Deploy manually
2. Drag this entire folder onto the deployment zone
3. Netlify will assign a `random-name.netlify.app` URL — preview it, then connect your custom domain

### Option 2 — Git-connected
1. Push this folder's contents to a Git repository (GitHub, GitLab, Bitbucket)
2. In Netlify: Add new site → Import existing project → connect repo
3. Build settings: leave blank (no build needed — these are static files)
4. Publish directory: `.` (or whatever folder contains index.html)

### Custom domain
1. Site settings → Domain management → Add custom domain → `daftaradvisory.com`
2. Update DNS at your registrar — Netlify shows the exact records (A or ALIAS + CNAME)
3. SSL provisions automatically via Let's Encrypt within ~10 minutes

## Post-deployment checklist

After the site goes live, verify:
- [ ] All four research briefs load when clicking from the homepage publications section
- [ ] The footer "Capability statement" link resolves correctly
- [ ] Pretty URLs work: `daftaradvisory.com/start` and `daftaradvisory.com/briefs/zatca-wave-24`
- [ ] Google Search Console verification: visit `https://daftaradvisory.com/google81cc37d83dbc7032.html` and confirm the line `google-site-verification: google81cc37d83dbc7032.html` is shown — then click **Verify** in Search Console
- [ ] Submit `/sitemap.xml` to Google Search Console once verification completes
- [ ] LinkedIn preview renders (paste the URL into a LinkedIn post draft) — note: no OG image until one is added
- [ ] Mobile preview on actual phone (not just devtools) — the topbar nav strip should swipe horizontally

## Known follow-ups (not blocking launch)

- **OG card image** — when you have a 1200×630 PNG, save it as `/og-card.png` in this folder and re-add the line `<meta property="og:image" content="https://daftaradvisory.com/og-card.png">` to `index.html` (currently omitted to avoid pointing at a 404)
- **Briefs 002–004** — currently marked `forthcoming` with `pointer-events: none`. Remove the `forthcoming` class on each `<a>` tag when the brief is genuinely published
- **Brief #001** — still labelled "Forthcoming · Q2 2026" in copy. Update the status line when the file goes live (or change to "Published")
- **Arabic version** — placeholder `arabic.html` was deliberately excluded. Build properly when committing to bilingual delivery

## Cache notes

- HTML files have `Cache-Control: must-revalidate` so updates appear immediately
- Static assets (none currently) would inherit Netlify's default 1-year cache via fingerprinted filenames

## Voice & brand

Do not edit copy without referring to the Brand Handbook v1.2 and Profile Playbook v1.3. The site uses the avoidance list (no "leverage," "synergy," etc.), the one-italic-rust-word-per-headline rule, and the 70/25/5 colour ratio. Ask before adding new vocabulary.
