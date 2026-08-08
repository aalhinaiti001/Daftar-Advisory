import Link from "next/link";

const EMAIL = "mailto:ahmad@daftaradvisory.com";
const CALENDLY = "https://calendly.com/ahmad-daftar/scoping-call";
const WHATSAPP =
  "https://wa.me/962798008835?text=Hi%20Ahmad%2C%20I%20would%20like%20to%20scope%20a%20call.";
const LINKEDIN = "https://linkedin.com/in/ahmad-alhinaiti";

const facts: [string, string][] = [
  ["What clients want", "To know what the issue is, what the work includes, and what happens next."],
  ["What you get", "Clear deliverables, direct communication, and files your team can keep using after the engagement ends."],
  ["Where Daftar works", "Jordan and the UAE — with regional, multi-country engagements on request."],
];

const services: [string, string, string, string[]][] = [
  ["Service 01", "Financial statements", "Preparation or clean-up of financial statements and their supporting files.", ["Draft statements", "Supporting schedules", "Clear file structure"]],
  ["Service 02", "Audit readiness", "Help before the auditor arrives, so the audit runs faster and with less stress.", ["Gap review", "Document list", "Fix plan"]],
  ["Service 03", "Technical review", "A second opinion on a number, memo, treatment, or accounting position.", ["Independent review", "Written comments", "Practical next steps"]],
  ["Service 04", "Transaction support", "For investors, founders, and finance teams who need cleaner numbers before a deal or funding process.", ["Quality of earnings support", "Working capital review", "File clean-up before diligence", "IFRS technical issues", "ZATCA readiness support", "UAE corporate tax coordination", "Pre-IPO and reporting preparation", "Finance file repair and simplification"]],
];

const reasons: [string, string][] = [
  ["Direct contact", "The person you speak with is the person doing the work."],
  ["Clear scope", "The engagement is defined before it starts, so there is less drift and less waste."],
  ["Useful output", "The final file should help you move forward, not create more dependency."],
];

const values: [string, string][] = [
  ["Defined scope", "Daftar defines exactly what it’s solving, what it isn’t, and what done looks like — before billing an hour."],
  ["Straight advice", "If the work needs a different specialist or a formal opinion, Daftar says so early — and won’t stretch scope past its expertise."],
  ["Work you own", "Daftar doesn’t just hand over reports — it builds the models and files your own team can own and reuse."],
  ["Practical judgment", "No 80-page decks. Daftar cuts the noise and gives you sharp answers, clean models, and a clear next step."],
];

const insights: [string, string][] = [
  ["ZATCA e-invoicing waves", "What changes, what teams usually miss, and what to check early."],
  ["UAE corporate tax", "A simple look at first-season pressure points and where teams lose time."],
  ["IFRS 16 in construction", "Lease complexity, file quality, and review discipline in practice."],
  ["Nomu / market readiness", "What to clean up before trying to look market-ready."],
];

const faqs: [string, string][] = [
  ["What does Daftar do?", "Independent finance advisory for founders and finance teams — financial statements, audit readiness, technical reviews, and transaction support."],
  ["How do engagements work?", "One senior practitioner, a clear scope, and a fixed fee. You leave with a practical file your team keeps using after the work ends."],
  ["Who do you work with?", "Founders, CFOs, and lean finance teams across Jordan, the UAE, and the wider region."],
  ["When should we reach out?", "When a first audit is close, when you need financial statements prepared, for a second view on an accounting issue, or when preparing for investment or a transaction."],
  ["What do we leave with?", "A clean, defensible file — statements, schedules, or a memo — plus direct answers you can act on."],
];

function Mark() {
  return (
    <Link className="brand daftar-brand" href="#top" aria-label="Daftar Advisory">
      <b>D</b>
      <span><em>Daftar</em><small>ADVISORY</small></span>
    </Link>
  );
}

function Eye({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><i />{children}</div>;
}

export default function Daftar() {
  return (
    <main className="daftar home" id="top">
      <header>
        <Mark />
        <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden />
        <label className="menu" htmlFor="nav-toggle" aria-label="Menu">☰</label>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#insights-briefs">Insights</a>
          <a href="#daftar-faq">FAQ</a>
          <a href="#scope">Contact</a>
          <Link href="/ar" className="lang" aria-label="العربية">ع</Link>
          <a className="button small" href="#scope">Book a call</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="wrap home-hero">
        <div>
          <Eye>Independent finance advisory</Eye>
          <h1>Finance work that feels <em>simple</em>, even when the issue is not.</h1>
          <p className="lead">Daftar Advisory helps founders and finance teams handle the work that matters most: financial statements, audit preparation, technical review, and transaction support.</p>
          <div className="actions">
            <a className="button" href="#services">See services</a>
            <a className="text-link" href="#scope">Book a call →</a>
          </div>
        </div>
        <div className="home-facts">
          <div><span className="mono">The engagement</span><p>One senior practitioner · Clear scope · Fixed fee · Practical output</p></div>
          {facts.map(([label, body]) => (
            <div key={label}><b>{label}</b><p>{body}</p></div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="wrap">
        <div className="sec-head">
          <Eye>Services</Eye>
          <h2>Four core services. Each ends with a clear output.</h2>
          <p className="lead">Every engagement is scoped to a single, well-defined outcome — nothing more, nothing hidden.</p>
        </div>
        <div className="cards">
          {services.map(([num, name, desc, outputs]) => (
            <article key={name}>
              <code>{num}</code>
              <h3>{name}</h3>
              <p>{desc}</p>
              <div className="tags">{outputs.map((o) => <span key={o}>{o}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="wrap">
        <div className="sec-head">
          <Eye>About the practice</Eye>
          <h2>A finance practice built to stay direct, focused, and useful.</h2>
          <p className="lead">Daftar works best with a clearly defined problem and a client who wants a direct answer.</p>
        </div>
        <div className="cards">
          <article>
            <h3>Growing businesses that need senior finance support.</h3>
            <p>A good fit when a founder, CFO, or finance lead needs real help with an important file, number, or accounting issue.</p>
            <div className="tags">
              <span>Founder-led companies preparing for growth</span>
              <span>Finance teams handling new reporting pressure</span>
              <span>Businesses going into audit or diligence</span>
              <span>Leaders who want a direct answer, not a large team</span>
            </div>
          </article>
          <article>
            <h3>Small by design.</h3>
            <p>The structure is meant to reduce noise. Clients speak directly with the person doing the work, and the work is shaped around a defined problem.</p>
            <div className="tags">
              <span>Senior-led work from start to finish</span>
              <span>Clear engagement boundaries</span>
              <span>Less handoff, less confusion</span>
              <span>Practical files your team can keep using</span>
            </div>
          </article>
        </div>
        <div className="list-rows" style={{ marginTop: 48 }}>
          {reasons.map(([h, p]) => (
            <article key={h}><h3>{h}</h3><p>{p}</p></article>
          ))}
        </div>
      </section>

      {/* Ethics & values */}
      <section id="ethics-values" className="wrap">
        <div className="sec-head">
          <Eye>Ethics &amp; values</Eye>
          <h2>How the practice works — and why.</h2>
          <p className="lead">The principles behind every engagement.</p>
        </div>
        <div className="cards">
          {values.map(([h, p], i) => (
            <article key={h}>
              <code>{`Value 0${i + 1}`}</code>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section id="insights-briefs" className="wrap">
        <div className="sec-head">
          <Eye>Selected topics</Eye>
          <h2>Notes on what finance teams face now.</h2>
          <p className="lead">Practical views on the issues that come up most often.</p>
        </div>
        <div className="cards">
          {insights.map(([h, p]) => (
            <article key={h}><h3>{h}</h3><p>{p}</p></article>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 15 }}>Full articles are in preparation. To discuss any of these topics now, <a className="text-link" href="#scope">book a call</a>.</p>
      </section>

      {/* FAQ */}
      <section id="daftar-faq" className="wrap">
        <div className="faq">
          <div><Eye>Common questions</Eye><h2>Questions, answered.</h2></div>
          <div>
            {faqs.map(([q, a]) => (
              <article key={q}><code>·</code><div><h3>{q}</h3><p>{a}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / scope */}
      <section id="scope" className="wrap">
        <div className="scope-intro">
          <Eye>Get in touch</Eye>
          <h2>Book a call or send a short inquiry.</h2>
          <p className="lead">Send a short note and Daftar will come back with a clear scope, fee, and next step — usually within a couple of days.</p>
          <div className="contact-methods" style={{ marginTop: 28 }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"><span className="m-label">Book on Calendly</span><span className="arrow">→</span></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><span className="m-label">WhatsApp</span><span className="arrow">→</span></a>
            <a href={EMAIL}><span className="m-label">Email</span><span className="m-note">Best for detailed files or documents</span></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><span className="m-label">LinkedIn</span><span className="m-note">Best for a quick first introduction</span></a>
          </div>
        </div>

        <form className="scope-form" name="daftar-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/?scoped=daftar">
          <input type="hidden" name="form-name" value="daftar-scope" />
          <p className="scope-hp"><label>Leave this empty <input name="bot-field" /></label></p>
          <div className="row">
            <div className="field"><label htmlFor="s-name">Name</label><input id="s-name" name="name" placeholder="Your name" required /></div>
            <div className="field"><label htmlFor="s-company">Company</label><input id="s-company" name="company" placeholder="Company name" /></div>
          </div>
          <div className="row">
            <div className="field"><label htmlFor="s-email">Email</label><input id="s-email" name="email" type="email" placeholder="you@company.com" required /></div>
            <div className="field">
              <label htmlFor="s-market">Market</label>
              <select id="s-market" name="market" defaultValue="">
                <option value="" disabled>Select market</option>
                <option>Jordan</option><option>Saudi Arabia</option><option>United Arab Emirates</option><option>Regional / multi-country</option><option>Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="s-service">Service needed</label>
              <select id="s-service" name="service" defaultValue="">
                <option value="" disabled>Select service</option>
                <option>Financial statements</option><option>Audit readiness</option><option>Technical review</option><option>Transaction support</option><option>General advisory inquiry</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="s-timing">Preferred timing</label>
              <select id="s-timing" name="timing" defaultValue="">
                <option value="" disabled>Select timing</option>
                <option>This week</option><option>Within 2 weeks</option><option>This month</option><option>Just exploring</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="s-message">What do you need help with?</label>
            <textarea id="s-message" name="message" placeholder="A short note is enough. What is the issue, what is the deadline, and which service seems closest?" />
          </div>
          <div className="form-actions">
            <button className="button" type="submit">Send this inquiry</button>
            <p className="note">This opens a scoped conversation — a clear read on whether Daftar can help, and how.</p>
          </div>
        </form>
      </section>

      <footer>
        <Mark />
        <em className="foot-tag">Rigorous finance, without the overhead.</em>
        <div>
          <a href="#ethics-values">ETHICS &amp; VALUES</a>
          <a href="#insights-briefs">INSIGHTS</a>
          <a href="#daftar-faq">FAQ</a>
          <a href="#scope">GET IN TOUCH</a>
        </div>
        <small className="disclaimer">Daftar Advisory is a non-attest advisory practice, not a registered statutory auditor.</small>
      </footer>
    </main>
  );
}
