export default function CaseStudies() {
  const cases = [
    {
      sector: "HEALTHCARE",
      title: "IFRS 9 ECL Model Rebuild",
      context: "Regional healthcare group, 3 entities, SAR 2.5B revenue",
      claim: "Led complete ECL model rebuild from legacy spreadsheet to auditable, scalable system",
      evidence: "Denial methodology · consolidated workbook v3 · tie-out to signed FS · delivered on timeline",
      metrics: [
        "30% reduction in audit queries",
        "Model now supports real-time forecasting",
        "Team trained and confident",
      ],
    },
    {
      sector: "FINANCIAL SERVICES",
      title: "Consolidation & Intercompany Cleanup",
      context: "Private equity-backed holding company, 8 subsidiaries across GCC",
      claim: "Restructured fragmented consolidation process and eliminated recurring reconciliation errors",
      evidence: "Process mapped · workpaper templates built · controls documented · team trained",
      metrics: [
        "Audit close time cut by 40%",
        "Zero intercompany errors in final FS",
        "Process now repeatable and auditable",
      ],
    },
    {
      sector: "INDUSTRIAL",
      title: "Revenue Recognition & Lease Accounting",
      context: "Listed manufacturing company, IFRS 15 & 16 implementation",
      claim: "Designed and implemented IFRS 15 revenue model and IFRS 16 lease register from scratch",
      evidence: "Policy framework · transaction templates · monthly reconciliation process · audit sign-off",
      metrics: [
        "Successful first-year audit with no adjustments",
        "Lease register now integrated into ERP",
        "CFO team confident in year-round compliance",
      ],
    },
  ];

  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="doc-tag">SELECTED WORK</div>
        <h2>Recent engagements</h2>
        <div style={{ marginTop: "var(--s4)", display: "grid", gap: "var(--s6)" }}>
          {cases.map((caseStudy, idx) => (
            <div key={idx} className="card" style={{ padding: "var(--s5)" }}>
              <div className="eyebrow" style={{ marginBottom: "var(--s2)" }}>{caseStudy.sector}</div>
              <h3 style={{ marginBottom: "var(--s1)" }}>{caseStudy.title}</h3>
              <p className="small muted" style={{ marginBottom: "var(--s4)", fontStyle: "italic" }}>{caseStudy.context}</p>

              {/* Claim vs Evidence */}
              <div className="recon" style={{ marginBottom: "var(--s4)" }}>
                <div className="col claim">
                  <h4>The claim</h4>
                  <p className="small" style={{ margin: 0, fontWeight: 500 }}>{caseStudy.claim}</p>
                </div>
                <div className="mid" aria-hidden="true">⊢</div>
                <div className="col evid">
                  <h4>The evidence</h4>
                  <p className="small" style={{ margin: 0, fontWeight: 500 }}>{caseStudy.evidence}</p>
                </div>
              </div>

              {/* Outcome metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--s2)" }}>
                {caseStudy.metrics.map((metric, midx) => (
                  <div key={midx} style={{ paddingLeft: "var(--s3)", borderLeft: "3px solid var(--rust)" }}>
                    <p className="small" style={{ margin: 0, fontWeight: 600, color: "var(--ink)" }}>{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
