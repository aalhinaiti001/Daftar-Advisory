---
name: daftar-advisory-design
description: Use this skill to generate well-branded interfaces and assets for Daftar Advisory, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping. Daftar is an independent finance advisory practice (IFRS, ZATCA, UAE CT, KSA TP) — editorial, print-restrained, never a consulting slide deck.
user-invocable: true
---

# Daftar Advisory — Design Skill

Read **`README.md`** in this folder first — it is the full system (practice context, content voice, visual foundations, iconography, file index). Then explore the other files as needed.

## Quick orientation

- **`README.md`** — the brand bible. Voice rules, the 70/25/5 colour ratio, type rules, what the practice does and refuses to do.
- **`colors_and_type.css`** — drop-in tokens + semantic classes. Import this into any new artifact.
- **`assets/`** — `favicon.svg` (the D-mark) and `og-image.png` (the typographic share card). The only brand image assets that exist.
- **`preview/`** — small specimen cards for every foundation and component.
- **`ui_kits/website/`** — interactive, pixel-faithful recreation of daftaradvisory.com + the research-brief reader. Reusable React components; copy what you need.
- **`01_Deployed website/`** — the imported production site. The source of truth for any layout question.

## The five rules you cannot break

1. **Five colours, no more.** Paper `#F4F1EA` (≈70%), Ink `#1A1814` (≈25%), Rust `#A8341F` (≈5%), plus Paper-Dark and Muted. No blue, green, or gold. No gradients, no shadows.
2. **Two Latin fonts + one Arabic, forever.** Fraunces (display + body), JetBrains Mono (labels/data only, 400, uppercase), IBM Plex Sans Arabic (Arabic). A third font means it's wrong.
3. **One rust accent word per headline** — italic Fraunces in Latin, colour-only in Arabic. Rust is never a fill or a background.
4. **The wordmark is the logo:** `Daftar` (ink, upright) + `Advisory.` (rust, italic) — always with the period. No symbol mark except the favicon D.
5. **Editorial, print-restrained, generous whitespace.** Left-aligned, tight leading, flat ruled cards with square corners. Never a consulting deck, never stock imagery, never emoji.

## How to work

- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets and tokens out and produce static HTML for the user to view. Reuse `ui_kits/website/` components and `colors_and_type.css`.
- **Production code**: read the rules here and the production site, copy assets, and design as an expert in this brand.
- Honour the voice: direct, dry, specific, rooted in real work. Run copy through the avoidance list (no *leverage / synergy / unlock / journey…*). Use "I", address the reader as "you".

If the user invokes this skill without specifics, ask what they want to build, ask a few focused questions, then act as an expert designer who outputs on-brand HTML artifacts or production code.
