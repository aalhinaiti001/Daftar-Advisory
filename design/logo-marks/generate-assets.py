#!/usr/bin/env python3
"""Emit the standalone production SVGs for the four Daftar mark directions.

Geometry is lifted verbatim from the design board. SHELL/ACCENT are
substituted per variant so a knockout is never a hand-edited second copy.
"""
import pathlib

OUT = pathlib.Path(__file__).parent / "assets"
OUT.mkdir(parents=True, exist_ok=True)

INK, RUST = "#1A1814", "#A8341F"
PAPER, RUST_ON_INK = "#F4F1EA", "#E07458"

def tick(shell_w, accent_w):
    return ("0 0 100 100", (
        f'  <rect x="4" y="4" width="92" height="92" fill="none" stroke="SHELL" stroke-width="{shell_w}"/>\n'
        f'  <path d="M24 52 L43 71 L78 29" fill="none" stroke="ACCENT" stroke-width="{accent_w}" stroke-linecap="square"/>\n'
    ))

def ledger(h, y2, y3, total_h):
    return ("0 0 100 100", (
        f'  <rect x="30" y="6" width="70" height="{h}" fill="SHELL"/>\n'
        f'  <rect x="14" y="{y2}" width="86" height="{h}" fill="SHELL"/>\n'
        f'  <rect x="44" y="{y3}" width="56" height="{h}" fill="SHELL"/>\n'
        f'  <rect x="0" y="79" width="100" height="{total_h}" fill="ACCENT"/>\n'
    ))

D_PATH = ("M17 17h18c7.5 0 12 4 12 10.5 0 5.2-2.9 8.8-8.3 10.1L49 47H37.8l-9.1-8.5h-2.5V47H17V17z"
          "m9.2 7.5v6.8h7.4c2.8 0 4.2-1.2 4.2-3.4 0-2.2-1.5-3.4-4.3-3.4h-7.3z")

def dmark(r):
    return ("0 0 64 64", (
        f'  <path d="{D_PATH}" fill="SHELL"/>\n'
        f'  <circle cx="47" cy="47" r="{r}" fill="ACCENT"/>\n'
    ))

def folded_file():
    return ("0 0 100 100", (
        '  <path d="M4 4 H64 L96 36 V96 H4 Z" fill="SHELL"/>\n'
        '  <path d="M64 4 L96 36 H64 Z" fill="ACCENT"/>\n'
    ))

# name -> (label, base cut, small cut)
MARKS = {
    "tick":   ("Daftar audit tick mark",  tick(7, 11),          tick(9, 13)),
    "ledger": ("Daftar ledger mark",      ledger(13, 29, 52, 15), ledger(15, 30, 54, 17)),
    "d":      ("Daftar D mark",           dmark(4),             dmark(4.5)),
    "file":   ("Daftar file mark",        folded_file(),        folded_file()),
}

def emit(path, label, cut, shell, accent):
    viewbox, body = cut
    body = body.replace("SHELL", shell).replace("ACCENT", accent)
    path.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" role="img" aria-label="{label}">\n'
        f'  <title>{label}</title>\n'
        f'{body}</svg>\n'
    )

for name, (label, base, small) in MARKS.items():
    emit(OUT / f"daftar-mark-{name}.svg", label, base, INK, RUST)
    emit(OUT / f"daftar-mark-{name}-knockout.svg", label, base, PAPER, RUST_ON_INK)
    emit(OUT / f"daftar-mark-{name}-small.svg", label, small, INK, RUST)

# The favicon is the 1A small cut — the thickened strokes are what let the
# rust tick survive at 16px.
emit(OUT / "favicon.svg", "Daftar Advisory", MARKS["tick"][2], INK, RUST)

for f in sorted(OUT.iterdir()):
    print(f.name, f.stat().st_size)
