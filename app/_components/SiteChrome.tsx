import Link from "next/link";
import { EMAIL } from "../_data/practice";

/* Header and footer for the Daftar pages. The active nav item is passed in
   rather than read from usePathname so these stay server components. */

/* "knowledge" has no nav entry (Knowledge articles are not in primary nav
   yet), it only stops the header from wrongly underlining another item. */
export type Page = "home" | "about" | "scope" | "knowledge";

function Mark({ href = "/" }: { href?: string }) {
  return (
    <Link className="dft-brand" href={href}>
      <b>D</b>
      <span>
        <em>Daftar</em>
        <small>ADVISORY</small>
      </span>
    </Link>
  );
}

export function Eyebrow({
  tone,
  wide,
  children,
}: {
  tone?: "rust" | "dark";
  /** Wider gap below, for sections whose heading does not follow immediately. */
  wide?: boolean;
  children: React.ReactNode;
}) {
  const cls =
    (tone === "rust" ? " dft-eyebrow-rust" : tone === "dark" ? " dft-eyebrow-dark" : "") +
    (wide ? " dft-eyebrow-wide" : "");
  return (
    <div className={"dft-eyebrow" + cls}>
      <i />
      {children}
    </div>
  );
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
          {/* /book 302s to Calendly via public/_redirects; a CTA labelled
              "Book a call" should book a call, not open the scope builder. */}
          <a className="dft-btn dft-cta" href="/book">Book a call</a>
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
