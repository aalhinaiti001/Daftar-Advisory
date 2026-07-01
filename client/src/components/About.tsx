export default function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="doc-tag">BACKGROUND</div>
        <h2>About</h2>

        <div className="two">
          <div>
            <p>
              I'm an audit and IFRS specialist with eight years across Big 4 advisory and regional practices in the GCC. I've led financial reporting projects for listed companies, private equity platforms, and government entities — working with CFOs, audit committees, and external auditors to solve complex accounting problems.
            </p>
            <p>
              My work focuses on the technical detail: IFRS 9 ECL models, consolidation complexity, revenue recognition, and lease accounting. But I'm equally focused on the people side — training teams, documenting processes, and leaving behind systems that actually work.
            </p>
            <p>
              I'm ACCA-qualified and hold a CPA designation. I work across Arabic and English, and I know the GCC market — the regulatory landscape, the audit expectations, and the pressure CFOs face.
            </p>
          </div>

          <div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Credentials & experience</h3>

              <div style={{ marginBottom: "var(--s3)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--s1)" }}>PROFESSIONAL</div>
                <p style={{ margin: "0 0 var(--s1)", fontWeight: 600 }}>ACCA (Association of Chartered Certified Accountants)</p>
                <p className="small muted" style={{ margin: 0 }}>Full member, 2018–present</p>
              </div>

              <div style={{ marginBottom: "var(--s3)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--s1)" }}>PROFESSIONAL</div>
                <p style={{ margin: "0 0 var(--s1)", fontWeight: 600 }}>CPA (Certified Public Accountant)</p>
                <p className="small muted" style={{ margin: 0 }}>UAE license, 2019–present</p>
              </div>

              <div style={{ marginBottom: "var(--s3)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--s1)" }}>EXPERIENCE</div>
                <p style={{ margin: "0 0 var(--s1)", fontWeight: 600 }}>8+ years audit & advisory</p>
                <p className="small muted" style={{ margin: 0 }}>EY, Deloitte, PwC, and regional firms</p>
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: "var(--s1)" }}>LANGUAGES</div>
                <p style={{ margin: "0 0 var(--s1)", fontWeight: 600 }}>Arabic · English</p>
                <p className="small muted" style={{ margin: 0 }}>Fluent in both professional and technical contexts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
