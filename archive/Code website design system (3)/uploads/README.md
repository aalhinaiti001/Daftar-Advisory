# Calibre by Daftar

Production-ready responsive marketing site recreated from the supplied design prototypes.

## Pages

- `/` — Calibre hiring-decision diagnostic
- `/daftar` — Daftar Advisory parent-firm page

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Main files

- `app/page.tsx` — Calibre page and components
- `app/daftar/page.tsx` — Daftar Advisory page
- `app/globals.css` — complete visual system and responsive styles
- `app/layout.tsx` — metadata and global layout

The booking buttons currently open a pre-addressed email to `ahmad@daftaradvisory.com`. Replace those `mailto:` links with a Calendly or booking URL if desired.
