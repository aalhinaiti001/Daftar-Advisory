// ============================================================
// Daftar Advisory UI Kit — Homepage sections
// ============================================================

function Hero({ go }) {
  return (
    <section className="hero">
      <div className="hero-eyebrow">Independent Financial Advisory · KSA · UAE · Jordan</div>
      <h1>Senior finance judgement,<br />without the <em>overhead.</em></h1>
      <p className="hero-sub">
        Daftar Advisory helps founders and CFOs prepare reliable financial statements, audit files, and
        transaction-ready numbers across KSA, UAE, and Jordan. <strong>One senior practitioner does the work
        and stands behind the number.</strong>
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={() => go('home', 'contact')}>
          Book a free 30-minute call <span className="arrow" aria-hidden="true">→</span>
        </button>
        <button className="btn-secondary" onClick={() => go('home', 'services')}>See what we do</button>
      </div>
    </section>
  );
}

function PlainStrip() {
  return (
    <div className="plain-strip">
      <div className="plain-strip-inner">
        <div className="plain-label">In plain English</div>
        <p className="plain-text">
          We help founders and CFOs get their numbers ready for audits, investors, banks, boards, and
          transactions — without hiring a large advisory firm.
        </p>
      </div>
    </div>
  );
}

const TRUST = [
  { num: <React.Fragment><em>8</em> yrs</React.Fragment>, lbl: <React.Fragment>Big Four trained<br />PwC · EY</React.Fragment> },
  { num: <React.Fragment>SAR <em>3B+</em></React.Fragment>, lbl: <React.Fragment>Revenue audited<br />at EY</React.Fragment> },
  { num: <em>4</em>, lbl: <React.Fragment>Countries active<br />KSA · UAE · JOR · USA</React.Fragment> },
  { num: <em>4</em>, lbl: <React.Fragment>Standards we work with<br />IFRS · SOCPA · GAAP · Yellow Book</React.Fragment> },
];

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip-inner">
        {TRUST.map((t, i) => (
          <div className="trust-item reveal" key={i}>
            <div className="trust-num">{t.num}</div>
            <div className="trust-lbl">{t.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const WHEN = [
  ['Your first audit is coming up', 'Prepare financial statements and organise audit files'],
  ['Your auditor is challenging a number', 'Review the accounting treatment and prepare a clear response'],
  ['You are raising money or selling the business', 'Independently review earnings and working capital'],
  ['Your board or investor needs confidence in the numbers', 'Prepare a clear, independent technical memo'],
];

const SERVICES = [
  { tag: 'Technical Finance', name: <React.Fragment>Independent Technical <em>Review</em></React.Fragment>,
    plain: 'A second opinion before someone important relies on the numbers',
    desc: 'An independent review of your financial statements, accounting choices, or supporting files before they go to your auditor, board, or counterparty.',
    del: 'Technical memo · Marked-up working file · 1 revision pass' },
  { tag: 'Technical Finance', name: <React.Fragment>IFRS Financial <em>Statements</em></React.Fragment>, flag: 'Most asked',
    plain: 'Full financial statements built from your trial balance',
    desc: 'Full preparation of IFRS-compliant statements — balance sheet, income statement, cash flow, equity, and notes. Formula-driven so every number is traceable.',
    del: 'Draft statements · Working Excel model · Policy memo' },
  { tag: 'Audit Preparation', name: <React.Fragment>Audit Readiness <em>&amp; Remediation</em></React.Fragment>,
    plain: 'Fix the files before the auditor arrives',
    desc: 'For businesses heading into a first audit or returning after a difficult one. Identify the gaps, fix what can be fixed, organise everything the auditor will need.',
    del: 'Readiness report · Remediation plan · Auditor pack' },
  { tag: 'Transaction Support', name: <React.Fragment>Quality of <em>Earnings</em></React.Fragment>,
    plain: 'Find out what profit is real, recurring, and investor-ready',
    desc: 'An independent analysis of reported earnings for buyers, sellers, or investors. Separates recurring earnings from one-offs and flags anything that changes the number.',
    del: 'QoE memo · Earnings bridge · Working model' },
];

function ServicesSection({ anchorRef }) {
  return (
    <div className="services-wrap" ref={anchorRef}>
      <div className="services-inner">
        <div className="section-label">Services</div>
        <h2 className="section-title">Four services. Every one starts with a <em>free 30-minute call.</em></h2>
        <p className="section-lede">These are the four engagements that produce the clearest outcomes — a written memo, a working file, and a position you can defend.</p>

        <div className="when-table">
          <div className="when-header"><div className="when-col-hd">When this happens</div><div className="when-col-hd">We help with</div></div>
          {WHEN.map((w, i) => (
            <div className="when-row" key={i}><div className="when-situation">{w[0]}</div><div className="when-service">{w[1]}</div></div>
          ))}
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card reveal" key={i}>
              {s.flag && <div className="service-hero-flag">{s.flag}</div>}
              <div className="service-tag">{s.tag}</div>
              <h3 className="service-name">{s.name}</h3>
              <div className="service-plain">{s.plain}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-deliverable"><strong>You receive:</strong> {s.del}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const WHY = [
  ['01', <React.Fragment>You speak to the person doing the <em>work.</em></React.Fragment>, 'The practitioner who takes the scoping call is the same person who builds the statements, writes the memo, and delivers the file. No handoff to a junior team.'],
  ['02', <React.Fragment>Fixed scope. Fixed fee. No <em>surprises.</em></React.Fragment>, 'Every engagement is priced and scoped before work begins — what it covers, what it does not, and what it costs, all in the engagement letter before you commit.'],
  ['03', <React.Fragment>The working file is <em>yours.</em></React.Fragment>, 'Every deliverable ships with the editable working file — formulas intact, assumptions documented, sources cited. No proprietary models. No lock-in.'],
];

function WhySection() {
  return (
    <section className="section">
      <div className="section-label">Why Daftar</div>
      <h2 className="section-title">Three things that make this practice <em>different.</em></h2>
      <p className="section-lede">No marketing claims. These are the specific ways the work is structured — and why clients come back for the next engagement.</p>
      <div className="why-grid">
        {WHY.map((w, i) => (
          <div className="why-card reveal" key={i}>
            <div className="why-num">{w[0]}</div>
            <h3 className="why-title">{w[1]}</h3>
            <p className="why-body">{w[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const CASES = [
  { meta: ['KSA Construction Joint Venture', 'SAR 800M revenue'], title: 'IFRS 16 lease recomputation across 47 contracts.',
    body: "The client's lease model had understated their right-of-use asset by ~11%, caused by inconsistent discount rates across equipment leases. The full schedule was rebuilt from the original contracts and reconciled to the prior-year audited position.",
    rows: [['Delivered', 'Recomputed lease schedule · Technical memo · Audit response file'], ['Timeline', '3 weeks · fixed fee'], ['Outcome', 'Auditor cleared the position without further adjustment']] },
  { meta: ['MENA Healthcare Group', 'SAR 1.2B revenue'], title: 'Full financial statements and audit readiness package.',
    body: 'The client was preparing for their first external audit under IFRS after three years of internal-only reporting. Statements were built end-to-end, every policy position documented, and all the documents the auditor would need organised before they arrived.',
    rows: [['Delivered', 'Draft statements · Notes · Policy memo · Auditor document pack'], ['Timeline', '5 weeks · fixed fee'], ['Outcome', 'Audit completed approximately 40% faster than the original estimate']] },
];

function CasesSection() {
  return (
    <div className="cases-wrap" style={{ background: 'var(--paper-dark)' }}>
      <div className="cases-inner">
        <div className="section-label">Case studies</div>
        <h2 className="section-title">What the work actually <em>looks like.</em></h2>
        <p className="section-lede">Two recent engagements, anonymised. The deliverable and outcome are exactly as they were.</p>
        <div className="cases-grid">
          {CASES.map((c, i) => (
            <div className="case-card reveal" key={i}>
              <div className="case-meta"><span>{c.meta[0]}</span><span className="dot">◆</span><span>{c.meta[1]}</span></div>
              <h3 className="case-title">{c.title}</h3>
              <p className="case-body">{c.body}</p>
              <div className="case-rows">
                {c.rows.map((r, j) => (
                  <div className="case-row" key={j}><span className="case-row-lbl">{r[0]}</span><span className="case-row-val">{r[1]}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  ['Step 01', 'Scoping call', "A 30-minute call to understand what you need. If the work is a fit, I'll say so. If it isn't, I'll tell you directly and point you somewhere better.", 'Free · same week'],
  ['Step 02', 'Written proposal', 'A one-page engagement letter stating exactly what the work covers, what it does not cover, the timeline, and the fee. You know everything before you commit.', 'Within 48 hours'],
  ['Step 03', 'The work', 'Work runs directly, without being handed off. Weekly check-ins with drafts shared as the work progresses — not held until a final reveal.', '1–6 weeks · typical'],
  ['Step 04', 'Delivery', 'The final deliverable plus the working file — formulas, assumptions, sources all intact. One revision pass is included. Everything is yours to keep.', 'Includes 1 revision'],
];

function ProcessSection() {
  return (
    <div className="process-wrap">
      <div className="process-inner">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Four steps. No hidden costs. No <em>surprises.</em></h2>
        <p className="section-lede">Every engagement follows the same process. You know what happens at each stage before it begins.</p>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={i}>
              <div className="step-num">{s[0]}</div>
              <div className="step-title">{s[1]}</div>
              <p className="step-body">{s[2]}</p>
              <div className="step-timing">{s[3]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const METHODS = [
  ['Email', 'ahmad@daftaradvisory.com'],
  ['Phone', '+962 798 008 835'],
  ['LinkedIn', 'ahmad-alhinaiti'],
  ['WhatsApp', '+962 798 008 835'],
];

function ContactSection({ anchorRef }) {
  return (
    <section className="contact-section" ref={anchorRef}>
      <div className="contact-inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: '32px' }}>Currently accepting engagements</div>
          <h2 className="contact-title">Start with a<br />30-minute <em>call.</em></h2>
          <p className="contact-note">
            The scoping call is free and takes 30 minutes. You will get a clear answer about whether the work
            is a fit — and if it is, a written quote within 48 hours. If it isn't, I will tell you on the call.
          </p>
        </div>
        <div className="contact-methods">
          {METHODS.map((m, i) => (
            <a className="contact-method" href="#" onClick={(e) => e.preventDefault()} key={i}>
              <div className="m-label">{m[0]}</div>
              <div className="m-value">{m[1]}</div>
              <div className="m-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ go, servicesRef, contactRef }) {
  return (
    <React.Fragment>
      <Hero go={go} />
      <PlainStrip />
      <TrustStrip />
      <ServicesSection anchorRef={servicesRef} />
      <WhySection />
      <CasesSection />
      <ProcessSection />
      <ContactSection anchorRef={contactRef} />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage });
