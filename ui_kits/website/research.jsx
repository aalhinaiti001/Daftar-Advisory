// ============================================================
// Daftar Advisory UI Kit — The Daftar (research briefs)
// ============================================================

const BRIEFS = [
  { id: '001', topic: 'ZATCA · KSA', status: 'Forthcoming · Q2 2026', read: '14 min read', forthcoming: false,
    title: <React.Fragment>The SAR 375,000 threshold — what ZATCA Phase 2 Wave 24 asks of Saudi SMEs, and why most are being quietly <em>over-sold.</em></React.Fragment>,
    deck: 'Wave 24 goes live on 30 June 2026. The technical requirement is well-defined. The implementation market around it is not. This brief is for the founder asking why the quote on their desk reads SAR 150,000 for what should cost a quarter of that.' },
  { id: '002', topic: 'UAE CT', status: 'In drafting · Q2 2026', read: '16 min read', forthcoming: true,
    title: <React.Fragment>UAE Corporate Tax — the first audit <em>season,</em> and what went wrong in the September 2025 filings.</React.Fragment>,
    deck: 'The first FY24 returns are filed. The first auditor reviews are coming back. The pattern that emerged is consistent enough to be useful — and uncomfortable enough to be worth writing down before FY25 closes.' },
  { id: '003', topic: 'IFRS 16 · KSA', status: 'Scheduled · Q3 2026', read: '18 min read', forthcoming: true,
    title: <React.Fragment>IFRS 16 in Saudi construction JVs — the five most common recomputation <em>errors.</em></React.Fragment>,
    deck: 'Site offices, plant-and-equipment leases, accommodation contracts, and the long-tail of fleet rentals — the IFRS 16 working paper rarely ties. This brief is the field guide to the five errors that produce the variance.' },
  { id: '004', topic: 'Nomu · CMA', status: 'Scheduled · Q3 2026', read: '17 min read', forthcoming: true,
    title: <React.Fragment>Nomu without Big Four — a pre-IPO readiness <em>playbook</em> for SAR 30–80M SMEs.</React.Fragment>,
    deck: 'Most Saudi SMEs in the Nomu band do not need a Big Four reporting accountant on day one. They need an honest diagnostic six to twelve months earlier — and the readiness work the financial adviser will not do.' },
];

function BriefList({ open }) {
  return (
    <React.Fragment>
      <section className="research-hero">
        <div className="eyebrow" style={{ marginBottom: '28px' }}>The Daftar · Research Briefs</div>
        <h1>Notes from a single<br /><em>practitioner.</em></h1>
        <p className="lede">A short, irregular series of research briefs. Written for operators and audit committees — not for tax-alert distribution lists. One take per brief, with the workings underneath.</p>
      </section>
      <section className="briefs">
        <div className="briefs-label"><span>Issues</span><span className="count">04 · in print and forthcoming</span></div>
        {BRIEFS.map((b) => (
          <button className={'brief reveal' + (b.forthcoming ? ' forthcoming' : '')} key={b.id} onClick={() => open(b.id)}>
            <span className="brief-num">№ {b.id}</span>
            <span className="brief-body">
              <span className="brief-title">{b.title}</span>
              <span className="brief-deck">{b.deck}</span>
            </span>
            <span className="brief-meta">
              <span className="brief-status">{b.status}</span>
              <span className="brief-topic">{b.topic}</span>
              <span>{b.read}</span>
            </span>
            <span className="brief-arrow">→</span>
          </button>
        ))}
      </section>
    </React.Fragment>
  );
}

// Full reader for brief 001 — demonstrates masthead, drop-cap, callout, data table.
function BriefReader({ id, back }) {
  const b = BRIEFS.find(x => x.id === id) || BRIEFS[0];
  return (
    <React.Fragment>
      <div className="reader-back">
        <button onClick={back}>← All briefs</button>
      </div>
      <div className="masthead">
        <div className="pub-num">The Daftar · № {b.id}</div>
        <h1 className="headline">{b.title}</h1>
        <p className="deck">{b.deck}</p>
        <div className="byline">
          <div>Author<strong>Ahmad Al Hinaiti</strong></div>
          <div>Topic<strong>{b.topic}</strong></div>
          <div>Status<strong>{b.status}</strong></div>
          <div>Length<strong>{b.read}</strong></div>
        </div>
      </div>
      <article className="brief-article">
        <h2><span className="sec-num">§ 01 · The threshold</span>What Wave 24 actually requires</h2>
        <p className="lede">Wave 24 goes live on 30 June 2026. The technical requirement is well-defined; the implementation market around it is not. This brief is for the founder asking why the quote on their desk reads four times what the work should cost.</p>
        <p>The obligation itself is narrow. Any taxpayer whose annual revenue crossed <strong>SAR 375,000</strong> in 2022 or 2023 must integrate their e-invoicing solution with ZATCA's Fatoora platform. The integration is a defined API contract — not a transformation programme.</p>
        <div className="callout">
          <div className="callout-label">The position</div>
          <p>A clean integration is a defined piece of engineering, not a consulting engagement. The price should reflect that.</p>
        </div>
        <h2><span className="sec-num">§ 02 · The over-sell</span>Where the quotes come from</h2>
        <p>The pattern is consistent across the quotes I've reviewed: a fixed integration requirement is repackaged as an open-ended advisory programme, then priced against the fear of a ZATCA penalty rather than the cost of the work.</p>
        <div className="data-table">
          <div className="row"><span className="lbl">Threshold</span><span className="val">SAR <em>375,000</em> annual revenue</span></div>
          <div className="row"><span className="lbl">Go-live</span><span className="val">30 June 2026 · Wave 24</span></div>
          <div className="row"><span className="lbl">Typical quote seen</span><span className="val">SAR 150,000 — <em>≈4× over</em></span></div>
          <div className="row"><span className="lbl">Defensible range</span><span className="val">SAR 30,000–45,000 fixed</span></div>
        </div>
        <h2><span className="sec-num">§ 03 · What to ask for</span>A scope you can defend</h2>
        <ul>
          <li>A fixed-fee integration scoped against the API contract, not a retainer.</li>
          <li>The middleware configuration documented and handed over — no lock-in to a vendor portal.</li>
          <li>A test-mode clearance walkthrough before go-live, with the working file left in your hands.</li>
        </ul>
        <p>If the quote on your desk doesn't read like this, the gap between it and the defensible range is the over-sell — and it is worth a 30-minute call before you sign.</p>
      </article>
    </React.Fragment>
  );
}

Object.assign(window, { BriefList, BriefReader });
