export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "var(--s5) 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--s4)", marginBottom: "var(--s5)" }}>
          <div>
            <div className="brand" style={{ marginBottom: "var(--s2)" }}>
              Daftar<b>.</b>
            </div>
            <p className="small muted">IFRS advisory & audit support for regional finance teams.</p>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-text)", margin: "0 0 var(--s2)" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#services">IFRS Advisory</a>
              </li>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#services">Audit Support</a>
              </li>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#services">Model Rebuild</a>
              </li>
              <li>
                <a href="#services">Training</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--mono)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-text)", margin: "0 0 var(--s2)" }}>
              Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#work">Work</a>
              </li>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#about">About</a>
              </li>
              <li style={{ marginBottom: "var(--s1)" }}>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: "var(--s3)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--s2)" }}>
          <p className="small muted" style={{ margin: 0 }}>© {currentYear} Daftar Advisory. All rights reserved.</p>
          <p className="small muted" style={{ margin: 0 }}>Designed and built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
