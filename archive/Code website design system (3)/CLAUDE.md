# Ledger — the Daftar × Calibre house design system

**Reference name: "Ledger".** One design system, two marks. Built on *daftar* (the ledger/register). When designing anything for Daftar Advisory or Calibre, bind to this system — do not invent tokens.

## The two brands
- **Daftar Advisory** (parent / the firm): **cream ground, rust accent.** § chapter numbering on eyebrows.
- **Calibre by Daftar** (product / hiring diagnostic): **white ground, deep-green accent.** Always carries the *by Daftar* kicker.
- **Rule:** parent and product never share a ground on one surface. Cream = Daftar; white = Calibre. A sister brand only appears on its own dark hand-off panel (green for Calibre, ink for Daftar), never reversed.

## Tokens
Daftar — paper `#F4F1EA`, card `#FBF9F4`, soft `#EFEBE1`, rust `#B3502B`, ink `#1A1814`, rule `#D8D2C4`, muted `#78726A`.
Calibre — paper `#FFFFFF`, card `#F5F4F1`, green `#2C3A31`, void/ink `#111214`, rule `#E4E3DF`, muted `#77787A`.
Shared body text `#3C3E42` / `#4A4C50`.

## Type (shared, whole)
- **Newsreader** — display & headlines; italic is the wordmark voice. 400–600.
- **Instrument Sans** — body & UI. 400–600.
- **IBM Plex Mono** — eyebrows, labels, data. 400–500, +2–3px tracking, uppercase.
- One accent italic word per headline, no more.

## Layout / motion / icons
- 1px ruled dividers, never drop shadow. Base-8 spacing. Max width 1080px, 76px gutters.
- Icons: 24px grid, 1.5px hairline stroke, round caps, ink; accent on one active mark only.
- Motion: single "Settle" ease `cubic-bezier(0.2,0.8,0.2,1)`; 120–560ms; no overshoot/bounce/spinners.
- Social: 1080 grid, № series kicker, wordmark bottom-left.

## Files
- `Ledger Design System.dc.html` — the system reference (tokens + component library).
- `Brand Handbook.dc.html` (+ `Brand Handbook-print.html`) — narrative handbook, § 00–11.
- `Daftar Brochure.dc.html` / `Calibre Brochure.dc.html` (+ `-print.html`) — tri-fold brochures.
- `Brand Bundle.html` — all three combined into one PDF.
Keep every `.dc.html` and its `-print.html` copy in sync when editing.
