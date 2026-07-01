export default function HowIWork() {
  const approach = [
    {
      step: "01",
      title: "Understand the problem",
      description: "I start with your current state: what's broken, what's working, and what your audit or CFO team actually needs. No assumptions.",
    },
    {
      step: "02",
      title: "Design the solution",
      description: "I design a clear, auditable approach — whether that's a model rebuild, a process redesign, or training. You see the plan before I start.",
    },
    {
      step: "03",
      title: "Execute with transparency",
      description: "I work alongside your team, building workpapers and documentation as I go. You're never surprised at the end.",
    },
    {
      step: "04",
      title: "Hand over with confidence",
      description: "I leave behind clean, documented systems and a team that understands them. The work is yours to own.",
    },
  ];

  return (
    <section className="block">
      <div className="wrap">
        <div className="doc-tag">APPROACH</div>
        <h2>How I work</h2>
        <p className="lead muted" style={{ marginBottom: "var(--s5)" }}>
          I work as an extension of your team, not a black box. Every engagement is transparent, documented, and designed to leave you stronger.
        </p>

        <div className="grid g2">
          {approach.map((item, idx) => (
            <div key={idx} style={{ paddingBottom: "var(--s4)", borderBottom: "1px solid var(--line)" }}>
              <div style={{ marginBottom: "var(--s2)" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "24px", fontWeight: 600, color: "var(--rust)" }}>
                  {item.step}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p className="small muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
