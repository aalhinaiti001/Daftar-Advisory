import Link from "next/link";
import { EMAIL } from "../_data/practice";

/* Header and footer for the Daftar pages. The active nav item is passed in
   rather than read from usePathname so these stay server components. */

/* "knowledge" has no nav entry (Knowledge articles are not in primary nav
   yet), it only stops the header from wrongly underlining another item. */
export type Page = "home" | "about" | "scope" | "knowledge";

/* The Daftar mark: "Ledger total" — three right-aligned entries and the rust
   total rule beneath them (House Brand Guide v1.6, §02). One geometry, three
   size cuts: stroke weight grows as the mark shrinks so the total survives at
   small sizes. Colours come from --mark-shell / --mark-accent (daftar.css), so
   the knockout on ink is a scope change, never a second drawing. */
const LEDGER_CUTS = {
  base: { h: 13, y2: 29, y3: 52, total: 15 }, // 30px and up
  md: { h: 14, y2: 29, y3: 53, total: 16 }, // 22–28px
  sm: { h: 15, y2: 30, y3: 54, total: 17 }, // 20px and below
} as const;

export function LedgerMark({
  size = 30,
  title,
}: {
  size?: number;
  /** Omit when the mark sits beside the wordmark; the link carries the name. */
  title?: string;
}) {
  const c = size <= 20 ? LEDGER_CUTS.sm : size <= 28 ? LEDGER_CUTS.md : LEDGER_CUTS.base;
  return (
    <svg
      className="dft-mark"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect className="dft-mark-shell" x="30" y="6" width="70" height={c.h} />
      <rect className="dft-mark-shell" x="14" y={c.y2} width="86" height={c.h} />
      <rect className="dft-mark-shell" x="44" y={c.y3} width="56" height={c.h} />
      <rect className="dft-mark-total" x="0" y="79" width="100" height={c.total} />
    </svg>
  );
}

function Mark({ href = "/" }: { href?: string }) {
  return (
    <Link className="dft-brand" href={href} aria-label="Daftar Advisory, home">
      <LedgerMark size={30} />
      <span className="dft-brand-rule" aria-hidden="true" />
      <span className="dft-wordmark" aria-hidden="true">
        Daftar <em>Advisory.</em>
      </span>
    </Link>
  );
}

export function Eyebrow({
  tone,
  wide,
  as: Tag = "div",
  children,
}: {
  tone?: "rust" | "dark";
  /** Wider gap below, for sections whose heading does not follow immediately. */
  wide?: boolean;
  /* Where the eyebrow IS the section title rather than a label above one,
     render it as a real heading. Long-form pages otherwise leave the document
     outline with a single h2, which is unnavigable by screen reader. */
  as?: "div" | "h2" | "h3";
  children: React.ReactNode;
}) {
  const cls =
    (tone === "rust" ? " dft-eyebrow-rust" : tone === "dark" ? " dft-eyebrow-dark" : "") +
    (wide ? " dft-eyebrow-wide" : "");
  return <Tag className={"dft-eyebrow" + cls}>{children}</Tag>;
}

export function SiteHeader({ active }: { active: Page }) {
  const current = (p: Page) => (p === active ? ("page" as const) : undefined);
  return (
    <header className="dft-header">
      <div className="dft-header-inner">
        <Mark />
        {/* CSS only disclosure: the checkbox sits before the nav so the
            :checked sibling selector can reveal it on small screens. */}
        <input type="checkbox" id="dft-nav-toggle" className="dft-nav-toggle" />
        <label className="dft-menu" htmlFor="dft-nav-toggle" aria-label="Menu">
          ☰
        </label>
        <div className="dft-nav-wrap">
          <nav className="dft-nav">
            <Link href="/" aria-current={current("home")}>Practice</Link>
            <Link href="/about" aria-current={current("about")}>About</Link>
            <Link href="/scope" aria-current={current("scope")}>Scope builder</Link>
            {/* Not in the design comp. Kept so the Calibre product page and the
                Arabic site stay reachable from the primary navigation. */}
            <Link href="/calibre">Calibre</Link>
            <Link href="/ar" className="dft-lang" aria-label="العربية">ع</Link>
          </nav>
          {/* Keep the CTA on the scope builder until the Microsoft Bookings
              page for ahmad@daftaradvisory.com is ready. Then replace this
              destination and the /book and /call redirects together. */}
          <Link className="dft-btn-ghost dft-cta" href="/scope">Book a call</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="dft-footer">
      <div className="dft-wrap">
        <Mark />
        <em className="dft-foot-tag">Rigorous finance, without the overhead.</em>
        <div className="dft-foot-links">
          <a href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
          <span>AMMAN · MENA</span>
        </div>
      </div>
      <div className="dft-wrap">
        <p className="dft-foot-note">
          Daftar Advisory is a non-attest advisory practice, not a registered statutory auditor.
        </p>
      </div>
    </footer>
  );
}
