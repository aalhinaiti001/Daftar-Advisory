# Daftar Advisory — Brand Source of Truth

Canonical brand stack for all Daftar surfaces. When a surface disagrees with this
file, this file wins and the surface gets conformed — not the other way around.

- **Authority:** House Brand Handbook **v1.5** (latest issued; its own changelog
  supersedes v1.4).
- **Open flag:** whether a handbook later than v1.5 exists is **[NOT FOUND — VERIFY]**.
  The files on hand stop at v1.5; if that is current, it governs. Update this file if a
  later revision is confirmed.

---

## Daftar — colour

| Role       | Token         | Hex        | Status on live site (`design/daftar-home.html`) |
|------------|---------------|------------|--------------------------------------------------|
| Paper/cream| `--cream`     | `#F4F1EA`  | ✅ already canonical (16×)                        |
| Ink        | `--ink`       | `#1A1814`  | ✅ already canonical (49×)                        |
| Rust/accent| `--rust`      | `#B3502B`  | ❌ retired `#A8341F` still live (78×) — conform   |
| Soft band  | `--soft-band` | `#EFEBE1`  | ⚠️ not present; near-creams used instead          |

Neutral text greys already in use (`#322D27`, `#5A544D`, `#4A453E`) are outside the four
headline tokens above; leave them unless the handbook specifies a neutral ramp.

## Daftar — type

| Role                    | Family           | Status on live site        |
|-------------------------|------------------|----------------------------|
| Display / headlines     | **Newsreader**   | ❌ retired **Fraunces** live |
| Body / UI               | **Instrument Sans** | ❌ not loaded             |
| Eyebrows / labels / data| **IBM Plex Mono**| ❌ retired **JetBrains Mono** live |

All three are available on Google Fonts (the site already `preconnect`s to
`fonts.googleapis.com`).

---

## Retired — purge on sight

- Font: **Fraunces**
- Font: **JetBrains Mono**
- Accent: rust **`#A8341F`** (and its tuned companions `#D07B59` gradient light end,
  `#842815` link-hover — re-derive from `#B3502B` when the accent is conformed)

## Surfaces that still carry the retired stack

1. **The live site** — `design/daftar-home.html` (compiled artifact; the Netlify build
   copies it over `out/index.html`). Fonts are embedded as hashed bundler assets, so
   conforming type here means replacing the `@font-face` sources (Google Fonts `<link>` +
   family rename), not a text find-replace. The accent hexes *can* be swapped directly.
2. **The `daftar-engagement-letter` skill** — its spec references the retired stack and
   needs the same conformance.

---

## CSS custom properties (canonical)

```css
:root {
  --cream: #F4F1EA;
  --ink: #1A1814;
  --rust: #B3502B;
  --soft-band: #EFEBE1;

  --font-display: "Newsreader", Georgia, serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
}
```
