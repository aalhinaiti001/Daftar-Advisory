# _archive — superseded & non-deployable artifacts

Nothing in this folder is part of the live site. These files are kept for
reference only (and remain in git history). The single source of truth for the
website is **`01_Deployed website/`** at the repo root.

## What's here and why

### `Website_v2_Update/`
An earlier homepage **redesign draft** (committed `3ad310f`, 2026-06-12 00:57).
It proposed a different information architecture — "three practice areas, nine
services" — versus the live homepage's "four services."

It was **superseded** by the live homepage: `01_Deployed website/index.html` was
refreshed later the same day (commit `f746504`, 2026-06-12 21:13, ~20h after this
draft). The draft is also not production-ready on its own — it lacks the OG /
canonical / favicon tags the live page carries, and has no navigation to the rest
of the site (about, articles, the Arabic homepage, the research briefs).

Kept in case any of its copy or section ideas are wanted later. If you decide this
redesign *should* become the live homepage, it needs the SEO/meta block and
site navigation ported over first.

### `Daftar Advisory - About (bundler export).html`
A self-unpacking **bundler export** of the About page (~976 KB of compressed
JavaScript with an "Unpacking…" loader). It is a build artifact, **not editable
or directly deployable** HTML.

The canonical, editable, nav-wired About page is
**`01_Deployed website/about.html`**. This export is retained only as a snapshot.
