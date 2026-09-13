# Daftar Advisory — Logo Marks

Four candidate symbol directions for Daftar, with the lockup system, the voice lines
and in-situ applications. A design reference for choosing a mark, not shipped code.

```
design/logo-marks/
  index.html          the board — four directions, the line, lockups, in situ
  tokens.css          the brand foundation subset this page uses
  logo-marks.css      layout and components (no colour or type values of its own)
  assets/             standalone production SVGs
  generate-assets.py  regenerates assets/ from one geometry definition
```

Open `index.html` directly. No build step, no server, and nothing here is deployed —
`netlify.toml` copies only `calibre-home.html` and `calibre-home-ar.html` out of
`design/`, so this folder stays out of the published site.

## Origin

Implemented from the Claude Design handoff `Daftar Logo Marks.dc.html`. That prototype
was a canvas document: every rule inlined on the element, the symbol art copy-pasted at
each size, and two board toggles wrapping the lockup and in-situ sections. This build
keeps the pixels and drops that scaffolding.

- **`logo-marks.css` defines no hex values and no font stacks.** It reads tokens and the
  shared `.eyebrow`, `.label` and `.wordmark` classes from `tokens.css`, so retuning a
  token retunes the page.
- **Each symbol is defined once.** The marks live in an inline `<symbol>` sprite and are
  placed with `<use>`. Fill and stroke read two custom properties, `--mark-shell` and
  `--mark-accent`, so the knockout is a scope change (`.mark--knockout`) rather than a
  second copy of the art that can drift.

## The size-tuned cuts

The mark is not one drawing scaled. Stroke weight grows as the mark shrinks, so the rust
incident survives at favicon size.

| Cut    | Use at         | 1A tick | 1B ledger bars | 1C dot |
| ------ | -------------- | ------- | -------------- | ------ |
| base   | 30px and up    | 7 / 11  | 13, total 15   | r 4    |
| `-md`  | 22–28px        | 8 / 12  | 14, total 16   | —      |
| `-sm`  | 20px and below | 9 / 13  | 15, total 17   | r 4.5  |

1D folded file is solid fill and needs no compensation; one cut serves everywhere.
Geometry is identical across cuts. Only weight moves.

## Assets

`assets/` holds each mark in three forms, plus the favicon:

- `daftar-mark-{tick,ledger,d,file}.svg` — ink shell, rust accent, transparent ground
- `daftar-mark-*-knockout.svg` — paper shell, rust-on-ink accent, for ink surfaces
- `daftar-mark-*-small.svg` — the thickened cut, for 20px and below
- `favicon.svg` — the 1A small cut

They are viewBox-only with no fixed width or height, so they scale to whatever box they
are placed in. Regenerate with `python3 generate-assets.py`, which holds the geometry
once and substitutes the two colour ramps per variant.

This is **not** the live `public/favicon.svg`. Nothing here replaces a shipped asset
until a direction is chosen.

## Token divergence from the app

Core values match `app/daftar.css` exactly: paper `#F4F1EA`, ink `#1A1814`, rust
`#A8341F`. Three do not, and are carried from the brand handbook the board was built
against. Reconcile before reusing them in the app.

| Token       | Here                     | `app/daftar.css`        |
| ----------- | ------------------------ | ----------------------- |
| `--muted`   | `#78726A`                | `#6F665D`               |
| rust on ink | `#E07458`                | no equivalent           |
| hairlines   | ink at 10% / 22% opacity | `--rule: #d8d2c4` solid |

Fonts come from the same Google Fonts import the app uses in `app/globals.css`.

## Decisions worth a second look

1. **Four directions, not one.** The board is an exploration and the choice of mark is
   still open, so all four are built out equally. The lockup section is drawn against 1A
   because the design specified that.
2. **The voice lines.** Ported from the Calibre identity board into Fraunces and the
   official rust. Excluded on instruction: *"Senior finance judgement, without the
   overhead."* With the lead gone, *"Every problem has a solution. Every number has a
   story."* is set as the lead.
3. **The in-situ website hero changed.** The prototype's hero carried the excluded line.
   It now carries the lead instead. Revert the `.situ-browser__headline` copy if the
   exclusion was meant to apply only to the voice block.
4. **`BRAND.md` says the wordmark is the logo and there is no symbol.** Adding one is a
   deliberate deviation, and the board says so on its face. Nothing here is adopted until
   that call is made.
5. **Narrow viewports.** The prototype's 480px card minimums are desktop board
   constraints and would scroll sideways on a phone. One breakpoint at 620px relaxes
   them. Nothing above that width moves.
