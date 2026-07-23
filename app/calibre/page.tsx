import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calibre by Daftar",
  description: "A hiring-decision diagnostic that turns opinion into evidence.",
};

const email="mailto:ahmad@daftaradvisory.com?subject=Calibre%20diagnostic%20call";
const methods=[
  ["Read","A role-specific reading guide tells every reviewer exactly what signal to look for."],
  ["Score","Structured scorecards convert judgment into comparable, defensible evidence."],
  ["Compare","Scores line up side by side, so disagreement surfaces immediately — not after the offer."],
  ["Calibrate","A facilitated session resolves the gaps into one decision the whole team can stand behind."],
];
const deliverables=[
  ["Role-specific scorecard","Weighted criteria built for the role you're actually hiring, not a generic template."],
  ["Candidate-reading guide","What strong, average, and weak answers look like — so reviewers read the same way."],
  ["Interview question bank","Questions mapped to each criterion, with follow-ups that pressure-test the signal."],
  ["Calibration session","A working session where the panel reconciles scores into one verdict."],
  ["Hiring-risk notes","Where evidence is thin, where the panel disagreed, and what to probe before an offer."],
  ["Executive findings memo","A one-page, decision-ready summary leadership can put in the file and defend later."],
];
const faqs=[
  ["Is this software or a service?","A service, delivered as a working kit. We build the scorecard, reading guide, and question bank for your role, facilitate the calibration, and you keep every artifact."],
  ["How long does a pilot take?","Two to three weeks for a single role, from scoping to the findings memo. Timelines and cost are clear before we start."],
  ["Does it replace our interviewers?","No — it sharpens them. Your panel still interviews and scores; Calibre gives them a shared standard so their judgments become comparable."],
  ["What roles does it work for?","Any role where the decision matters and the panel disagrees. We build the criteria fresh each time, so it is not tied to one function."],
  ["What do we need to bring?","One active or recent hire and the panel who ran it. That is enough to run the method end-to-end on your own pipeline."],
];

function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>{children}</div>}
function Brand(){return <Link className="brand" href="/calibre"><b>C</b><span><em>Calibre</em><small>BY DAFTAR</small></span></Link>}

export default function Calibre(){return <main className="calibre">
  <header><Brand/><nav><a href="#method">Method</a><a href="#deliver">Deliverables</a><a href="#who">Who it&apos;s for</a><a href="#pilot">Pilot</a><a href="#faq">FAQ</a><Link href="/">Daftar</Link><a className="button small" href="#scope">Book a call</a></nav><a className="menu" href="#method" aria-label="Open navigation">☰</a></header>
  <section className="hero wrap"><div><Eyebrow>Hiring Decision Diagnostic</Eyebrow><h1>Your hiring decisions are more guesswork than you think.</h1><p className="lead">Calibre replaces subjective candidate evaluation with structured scorecards, a shared reading method, and team calibration — so the same candidate earns the same read, every time.</p><div className="actions"><a className="button" href="#scope">Book a diagnostic call</a><a className="text-link" href="#method">See the method →</a></div></div><Scorecard/></section>
  <section className="dark"><div className="wrap problem"><div><Eyebrow>The problem</Eyebrow><h2>Same candidate.<br/>Four reviewers.<br/>Four verdicts.</h2><p>Most hiring runs on gut feel dressed up as judgment. Without a shared standard, the score drifts with the reviewer — not the candidate — and no one can say, afterwards, why the decision was made.</p></div><ReviewerCard/></div></section>
  <section id="method" className="section wrap"><Eyebrow>The Calibre method</Eyebrow><h2>Four steps from opinion to evidence.</h2><div className="grid four">{methods.map((x,i)=><article className="method" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  <section id="deliver" className="section soft"><div className="wrap"><Eyebrow>What you receive</Eyebrow><h2>A working kit, not a slide deck.</h2><div className="grid three">{deliverables.map((x,i)=><article className="card" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="who" className="section wrap who"><div><Eyebrow>Who it&apos;s for</Eyebrow><h2>For anyone who owns a hiring decision they&apos;ll have to defend.</h2></div><div className="people">{[["HR leaders","A standard the whole org can trust and repeat."],["Talent teams","Faster screening with far less second-guessing."],["Hiring managers","Clarity on what “good” means for the role."],["Founders","High-stakes hires made on evidence, not vibes."]].map(x=><article key={x[0]}><h3><em>{x[0]}</em></h3><p>{x[1]}</p></article>)}</div></section>
  <section id="pilot" className="pilot"><div className="wrap"><Eyebrow>How the pilot works</Eyebrow><div className="pilot-grid"><div><h2>Start with one role.</h2><p>Bring one active or recent hire. We run it end-to-end through a short, fixed-scope engagement — so you see the method on your own pipeline before committing further.</p><code>ONE ROLE · ~2–3 WEEKS · FIXED SCOPE</code></div><div>{[["Scope the role","Define criteria and weightings with your panel."],["Structured review","Reviewers score independently against the shared guide."],["Calibrate","Turn four opinions into one defensible decision."],["Findings memo","Keep the full kit and a decision-ready summary."]].map((x,i)=><article className="pilot-step" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></div></section>
  <section className="benefits wrap">{[["Clearer","Everyone knows what “good” means before the first interview."],["Faster","Less circular debate; decisions land in days, not weeks."],["More consistent","The same standard across every reviewer and role."],["More defensible","A documented rationale you can stand behind later."]].map(x=><article key={x[0]}><em>{x[0]}</em><p>{x[1]}</p></article>)}</section>
  <section id="faq" className="section soft"><div className="wrap faq"><div><Eyebrow>Common questions</Eyebrow><h2>Before you book the call.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>
  <section id="scope" className="scope"><div className="wrap"><div className="scope-intro"><Eyebrow>Book a diagnostic</Eyebrow><h2>Bring one role to <em>Calibre</em>.</h2><p className="lead">A short diagnostic call is enough to see whether your process is measuring the candidate — or the reviewer. Tell us where you&apos;re hiring; we reply within two working days.</p><div className="contact"><a href={email}>ahmad@daftaradvisory.com</a></div></div><form className="scope-form" name="calibre-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/?scoped=calibre"><input type="hidden" name="form-name" value="calibre-scope"/><p className="scope-hp"><label>Leave this empty <input name="bot-field"/></label></p><div className="row"><div className="field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" required/></div><div className="field"><label htmlFor="c-email">Work email</label><input id="c-email" name="email" type="email" required/></div></div><div className="field"><label htmlFor="c-company">Company</label><input id="c-company" name="company"/></div><div className="row"><div className="field"><label htmlFor="c-role">Role or team you&apos;re hiring</label><input id="c-role" name="role"/></div><div className="field"><label htmlFor="c-vol">Hires per year</label><select id="c-vol" name="hires_per_year" defaultValue=""><option value="" disabled>Select…</option><option>Fewer than 10</option><option>10–50</option><option>More than 50</option></select></div></div><div className="field"><label htmlFor="c-notes">What feels inconsistent right now?</label><textarea id="c-notes" name="notes"/></div><div className="form-actions"><button className="button" type="submit">Request a diagnostic call</button><p className="note">One role, fixed scope. No obligation beyond the call.</p></div></form></div></section>
  <footer><Brand/><div><Link href="/">ABOUT DAFTAR</Link><a href="mailto:ahmad@daftaradvisory.com">AHMAD@DAFTARADVISORY.COM</a><span>DAFTARADVISORY.COM</span></div></footer>
  </main>}

function Scorecard(){const rows=[["Problem framing",82,"4.1"],["Execution evidence",64,"3.2"],["Stakeholder signal",90,"4.5"]];return <article className="scorecard"><div className="score-head"><code>SCORECARD · SR. PRODUCT MANAGER</code><code>CAND. #04</code></div>{rows.map(x=><div className="score-row" key={String(x[0])}><span>{x[0]}</span><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="total"><em>Weighted total</em><strong>3.9</strong></div></article>}
function ReviewerCard(){return <article className="review-card"><code>CANDIDATE #04 · UNCALIBRATED</code>{[["A",85,"8.5"],["B",50,"5.0"],["C",75,"7.5"],["D",30,"3.0"]].map(x=><div className="review" key={x[0]}><code>REV. {x[0]}</code><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="spread"><em>Spread</em><code>5.5 points</code></div></article>}
