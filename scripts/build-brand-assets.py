#!/usr/bin/env python3
"""Emit the Daftar mark (the folded file, mark 1D) as standalone SVGs into
public/brand/ and the favicon into public/favicon.svg.

The geometry is defined once here and matches DaftarMark in
app/_components/SiteChrome.tsx. The page colour is substituted per variant;
the corner is rust #A8341F on every variant, because it sits on the page and
never on the ground. Run from the repo root:

    python3 scripts/build-brand-assets.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "brand"
OUT.mkdir(parents=True, exist_ok=True)

INK, PAPER, RUST = "#1A1814", "#F4F1EA", "#A8341F"

# Two cuts. The fold moves from 64/36 to 54/46 below 24px so the rust corner
# still registers at favicon size. Nothing else changes.
CUTS = {"standard": (64, 36), "small": (54, 46)}


def mark(cut, page, inset=0.0, scale=1.0):
    fold, drop = CUTS[cut]

    def pt(x, y):
        return f"{inset + x * scale:g} {inset + y * scale:g}"

    return (
        f'  <path d="M{pt(4, 4)} L{pt(fold, 4)} L{pt(96, drop)} L{pt(96, 96)} '
        f'L{pt(4, 96)} Z" fill="{page}"/>\n'
        f'  <path d="M{pt(fold, 4)} L{pt(96, drop)} L{pt(fold, drop)} Z" fill="{RUST}"/>'
    )


def svg(body, label="Daftar Advisory"):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" '
        f'role="img" aria-label="{label}">\n  <title>{label}</title>\n{body}\n</svg>\n'
    )


files = {
    OUT / "daftar-mark.svg": svg(mark("standard", INK)),
    OUT / "daftar-mark-small.svg": svg(mark("small", INK)),
    OUT / "daftar-mark-knockout.svg": svg(mark("standard", PAPER)),
    # Avatar / app icon: the mark on a paper tile.
    OUT / "daftar-mark-tile.svg": svg(
        f'  <rect width="100" height="100" rx="14" fill="{PAPER}"/>\n'
        + mark("standard", INK, inset=18, scale=0.64)
    ),
    # Favicon: small cut on a paper tile, so the ink page survives dark tab bars.
    ROOT / "public" / "favicon.svg": svg(
        f'  <rect width="100" height="100" rx="16" fill="{PAPER}"/>\n'
        + mark("small", INK, inset=12, scale=0.76)
    ),
}

# The Ledger total cuts from the earlier proposal are superseded; remove any
# leftover files so nothing stale ships.
for stale in OUT.glob("daftar-mark-*.svg"):
    if stale not in files:
        stale.unlink()

for path, text in files.items():
    path.write_text(text)
    print(path.relative_to(ROOT), len(text))
