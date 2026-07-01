export default function Services() {
  const services = [
    {
      eyebrow: "IFRS ADVISORY",
      title: "Financial Reporting & Compliance",
      description: "IFRS 9 ECL models, IFRS 16 lease accounting, consolidation complexity, and annual close optimization. I help CFOs and audit committees navigate the technical detail and defend their positions.",
    },
    {
      eyebrow: "AUDIT SUPPORT",
      title: "Audit Readiness & Workpaper Prep",
      description: "Streamline your audit process with clean, defensible workpapers. I prepare lead schedules, reconciliations, and evidence packs that reduce audit friction and close timelines.",
    },
    {
      eyebrow: "MODEL REBUILD",
      title: "Financial Model Restructuring",
      description: "Rebuild fragile, error-prone models into clean, auditable, scalable systems. Consolidation models, revenue recognition engines, and cash-flow forecasts that actually work.",
    },
    {
      eyebrow: "TRAINING & HANDOVER",
      title: "Finance Team Capability Building",
      description: "Train your team on IFRS mechanics, model governance, and audit preparation. Leave behind documented processes and confident staff who own the work.",
    },
  ];

  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="doc-tag">WHAT I DO</div>
        <h2>Services & expertise</h2>
        <div className="grid g2" style={{ marginTop: "var(--s4)" }}>
          {services.map((service, idx) => (
            <div key={idx} className="card">
              <div className="eyebrow" style={{ marginBottom: "var(--s1)" }}>{service.eyebrow}</div>
              <h3>{service.title}</h3>
              <p className="small muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
