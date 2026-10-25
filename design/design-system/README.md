Daftar Advisory is a boutique technical finance practice in Amman serving Saudi Arabia (primary), the UAE and Jordan, for CFOs, founders and boards of mid-market companies. Daftar means the ledger or register: the firm does the work properly, writes it down in a form that holds up, and hands it over so the client can run it again. Build every Daftar surface from this system.

## Content fundamentals

- Write plainly, with the working shown. If a sentence would not sound natural from a senior auditor explaining it over coffee, rewrite it.
- "We" is the firm. Never state a headcount and never invent a team member. Ahmad Al Hinaiti is **Founder** on every surface, never "Principal".
- Be specific ("SAR 3B portfolio"), technical when it matters, honest about trade-offs, bilingual when useful.
- Never use: leverage, synergy, cutting-edge, world-class, unlock, empower, disrupt, best-in-class, journey, or their Arabic equivalents. No outcome promises. No superlatives the record has not earned.
- The four principles are the argument of every document: **Write it down. Evidence over opinion. One title, everywhere. Leave a tool behind.**
- Headline idea: "Rigorous finance, without the overhead." Each heading carries one accent word, set in Fraunces italic in `rust`.
- Footer on every document: `Ahmad Al Hinaiti · Founder · ahmad@daftaradvisory.com`, in mono.
- Mark every unsupplied fact with a bracketed placeholder (see the Placeholder component). Never invent a client, figure, credential or team.
- Daftar services are non-attest advisory. Engagement letters and proposals carry the non-attest notice in full.

## Visual foundations

**Colour.** Paper 70 · Ink 25 · Rust 5. Never invert the ratio, add a third accent or use a gradient.
- Ground is `paper`. Alternate sections use `soft`; cards use `card`; hairlines use `rule`.
- Text: `ink` for headings, `body` for running text, `muted` for labels and captions. All pass WCAG AA on `paper`, `soft` and `card`.
- `rust` carries large text, rules and one accent word, never body copy. `rust-deep` is hover and deep state.
- At most one ink section per page. On ink, text is `paper`, `body-on-ink` or `muted-on-ink`, and rust becomes `rust-on-ink`. Plain `rust` on ink fails (2.7 : 1).

**Type.** Two Latin faces; a third Latin face means the design is wrong.
- Fraunces sets everything that reads: display (opsz 144, SOFT 40), headings, body and buttons. Its italic is the accent voice. Use the `display`, `heading-1` to `heading-3`, `body-web`, `body-print` and `small` styles.
- JetBrains Mono 400, uppercase, tracked +0.22em to +0.26em, sets everything that labels or measures: `eyebrow`, `chapter-mark`, service codes, `figure`, footers.
- IBM Plex Sans Arabic is for Arabic only (`arabic-*` styles). Arabic has no italic: its accent word takes `rust` and weight 500. Never track Arabic.
- In print, body is Fraunces 10.5–11pt (`body-print`). Tables use tabular lining numerals.

**Layout.**
- Rule with 1px hairlines (`hairline`, in `rule`); never a drop shadow.
- Spacing is base-8: `space-1` 8, `space-2` 16, `space-3` 24, `space-4` 48, `space-5` 80.
- Radii are `radius-sm` 5px and `radius-md` 6px.
- Eyebrows lead with § in mono. Left-align Latin text; right-align Arabic and mirror the layout, not the mark.
- Print is A4 on a `paper` ground with the horizontal lockup in the header and the mono footer. Letters, statements and brochures always carry the horizontal lockup.
- Brochures open with a № series kicker and use one accent word per spread.

**Motion.** One ease, `easing-settle`. Durations: `duration-tap` 120, `duration-hover` 200, `duration-reveal` 320, `duration-page` 560. Fade and an 8px rise; no bounce, no spinners; respect reduced motion. Print has none.

**States.** Hover on a primary action moves `ink` to `rust-deep`. Focus is a 2px `rust` outline offset 3px.

## The mark and lockups

- The mark is the folded file: an ink page with its corner turned down in `rust` (`#A8341F`). Files: `assets/Marks/`.
- Two cuts only. Standard (fold 64/36) at 24px and up; Small (fold 54/46) below 24px; minimum 16px.
- Clear space equals the fold height on every side.
- Knockout on ink: the page becomes `paper`, the corner stays `#A8341F`.
- Four lockups: Horizontal (default), Stacked, Micro strip, Arabic. The wordmark is "Daftar Advisory." with "Advisory." in `rust` italic (`rust-on-ink` on ink). The Arabic wordmark is "دفتر للاستشارات." with the accent word in `rust` at weight 500.
- The D monogram is retired. Do not use it.

## Iconography

Icons sit on a 24px grid with a 1.5px stroke, round caps, no fills, drawn in `ink` with `rust` on at most one active mark, and always carry a mono label. The six drawings in the Icon component are the starting set; draw new ones to the same rules.

## Arabic

- Set Arabic in IBM Plex Sans Arabic, right-aligned, `direction: rtl`, with no letter-spacing.
- Mirror the page: lockup at the right, footer reversed, label column at the right. Do not flip the mark.
- Set Latin inside Arabic (an email, a reference) in the mono face, left-to-right.
- Arabic labels are 11–12px at weight 500 in `muted`, not uppercase mono.

## Scope

This system covers Daftar only. Any other product keeps its own system and never appears on a Daftar surface; no other product's colour or face is defined here.
