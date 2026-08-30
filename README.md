# Calibre by Daftar

Responsive Next.js codebase recreated from the supplied Ledger design system.

## Pages

- `/` — Calibre hiring-decision diagnostic
- `/daftar` — Daftar Advisory firm page

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

The project exports a static site to `out/`, suitable for Netlify. Booking links currently open an email to `ahmad@daftaradvisory.com`; swap the `/book` and `/call` targets in `public/_redirects` for a Microsoft Bookings URL once one exists.
