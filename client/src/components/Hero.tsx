export default function Hero() {
  return (
    <section className="block" id="top" style={{ paddingTop: "var(--s8)" }}>
      <div className="wrap">
        <div className="eyebrow">IFRS Advisory · MENA</div>
        <h1>
          Technical audit and financial reporting<br />
          for regional growth companies
        </h1>
        <p className="lead muted">
          I help CFOs and audit committees navigate IFRS complexity, rebuild financial models, and defend their numbers with confidence. Eight years across Big 4 audit and advisory in the GCC.
        </p>
        <div style={{ marginTop: "var(--s4)", display: "flex", gap: "var(--s2)", flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn-primary">Start a project →</a>
          <a href="#work" className="btn btn-ghost">View case studies</a>
        </div>

        {/* Credibility Strip */}
        <div style={{ marginTop: "var(--s6)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--s4)", borderTop: "1px solid var(--line)", paddingTop: "var(--s4)" }}>
          <div>
            <div className="meta-line">BACKGROUND</div>
            <p style={{ margin: "var(--s1) 0 0", fontWeight: 600 }}>EY · Deloitte · PwC</p>
            <p className="small muted" style={{ margin: "4px 0 0" }}>Big 4 audit & advisory</p>
          </div>
          <div>
            <div className="meta-line">CREDENTIALS</div>
            <p style={{ margin: "var(--s1) 0 0", fontWeight: 600 }}>ACCA · CPA</p>
            <p className="small muted" style={{ margin: "4px 0 0" }}>Professional certifications</p>
          </div>
          <div>
            <div className="meta-line">EXPERIENCE</div>
            <p style={{ margin: "var(--s1) 0 0", fontWeight: 600 }}>8+ years</p>
            <p className="small muted" style={{ margin: "4px 0 0" }}>Regional audit & advisory</p>
          </div>
          <div>
            <div className="meta-line">CLIENTS SERVED</div>
            <p style={{ margin: "var(--s1) 0 0", fontWeight: 600 }}>50+ engagements</p>
            <p className="small muted" style={{ margin: "4px 0 0" }}>Listed & private entities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
