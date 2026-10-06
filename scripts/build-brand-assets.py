#!/usr/bin/env python3
"""Emit the Daftar Ledger mark as standalone SVGs into public/brand/ and the
favicon into public/favicon.svg.

The geometry is defined once here and matches LedgerMark in
app/_components/SiteChrome.tsx. Colour is substituted per variant, so the
knockout is never a hand-edited second copy. Run from the repo root:

    python3 scripts/build-brand-assets.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

INK, RUST = "#1A1814", "#A8341F"
PAPER, RUST_ON_INK = "#F4F1EA", "#E07458"

# Size cuts: entries thicken as the mark shrinks so the rust total survives.
CUTS = {
    "base": dict(h=13, y2=29, y3=52, total=15),  # 30px and up
    "md": dict(h=14, y2=29, y3=53, total=16),    # 22-28px
    "sm": dict(h=15, y2=30, y3=54, total=17),    # 20px and below
}


def rects(cut, shell, accent, inset=0.0, scale=1.0):
    c = CUTS[cut]
    rows = [(30, 6, 70, c["h"], shell), (14, c["y2"], 86, c["h"], shell),
            (44, c["y3"], 56, c["h"], shell), (0, 79, 100, c["total"], accent)]
    out = []
    for x, y, w, h, fill in rows:
        out.append(
            f'  <rect x="{inset + x * scale:g}" y="{inset + y * scale:g}" '
            f'width="{w * scale:g}" height="{h * scale:g}" fill="{fill}"/>'
        )
    return "\n".join(out)


def svg(body, label="Daftar Advisory"):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" '
        f'role="img" aria-label="{label}">\n  <title>{label}</title>\n{body}\n</svg>\n'
    )


files = {
    OUT / "daftar-mark.svg": svg(rects("base", INK, RUST)),
    OUT / "daftar-mark-small.svg": svg(rects("sm", INK, RUST)),
    OUT / "daftar-mark-knockout.svg": svg(rects("base", PAPER, RUST_ON_INK)),
    # App-icon form: the mark on a paper tile, for avatars and social profiles.
    OUT / "daftar-mark-tile.svg": svg(
        f'  <rect width="100" height="100" rx="14" fill="{PAPER}"/>\n'
        + rects("base", INK, RUST, inset=18, scale=0.64)
    ),
    # Favicon: small cut on a paper tile so the ink entries survive dark tab bars.
    ROOT / "public" / "favicon.svg": svg(
        f'  <rect width="100" height="100" rx="16" fill="{PAPER}"/>\n'
        + rects("sm", INK, RUST, inset=14, scale=0.72)
    ),
}

for path, text in files.items():
    path.write_text(text)
    print(path.relative_to(ROOT), len(text))
