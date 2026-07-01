import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <div className="nav">
        <a href="#top" className="brand" style={{ borderBottom: 0 }} aria-label="Daftar Advisory — home">
          Daftar<b>.</b>{" "}
          <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--muted-text)", letterSpacing: "0.1em" }}>ADVISORY</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Work with me →</a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Work with me →
          </a>
        </nav>
      </div>
    </header>
  );
}
