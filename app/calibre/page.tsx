/* NOT CURRENTLY DEPLOYED: netlify.toml copies design/calibre-home.html over
   out/calibre.html at build time, so this route never actually reaches a
   visitor. It reflects an earlier, narrower "Calibre Verdict" positioning
   (Daftar evaluates a shortlist alone and hands back one memo) rather than
   the calibration-pilot framing the live page uses now (Daftar runs the
   scorecard method with the client's own panel). Kept as reference for its
   FAQ, lead-gen form, and finance-specific framing, not as a route to wire
   back up without a deliberate decision to do so. */
import Link from "next/link";
import type { Metadata } from "next";

const DESC = "A done-for-you finance-hiring decision memo. One role, one ranked verdict, two weeks.";
export const metadata: Metadata = {
  title: "The Calibre Verdict — by Daftar",
  description: DESC,
  alternates: {
    canonical: "/calibre",
    languages: { en: "/calibre", ar: "/ar/calibre", "x-default": "/calibre" },
  },
  openGraph: { type: "website", siteName: "Calibre by Daftar", title: "The Calibre Verdict — by Daftar", description: DESC, url: "/calibre", images: ["/og-calibre.png"] },
  twitter: { card: "summary_large_image", title: "The Calibre Verdict — by Daftar", description: DESC, images: ["/og-calibre.png"] },
};

const email="mailto:ahmad@daftaradvisory.com?subject=Calibre%20Verdict";
const method=[
  ["Read","Your shortlist, read closely."],
  ["Score","Scored against a role-built rubric."],
  ["Compare","Candidates side by side."],
  ["Calibrate","One ranked, defensible pick."],
];
const deliverables=[
  ["Scorecard","Weighted criteria for the role."],
  ["Reading guide","Strong, adequate, weak — defined."],
  ["Question bank","Questions mapped to each criterion."],
  ["Decision memo","One written recommendation."],
  ["Risk notes","Where the evidence is thin."],
  ["Outcome register","We track the hire after."],
];
const scope=[
  ["One finance role","Controller, finance manager, first hire, FP&A."],
  ["Your shortlist","Three to six, already sourced."],
  ["What we review","CVs, work history, panel evidence."],
  ["Two weeks","Fixed fee, fixed scope."],
];
const faqs=[
  ["Is this recruitment?","No. You source the shortlist; we evaluate it."],
  ["Why finance only?","The evaluation rests on finance judgment."],
  ["We use psychometrics already.","Those read personality; we read the role. They complement."],
  ["A legal risk?","It structures your panel, not a test on candidates."],
  ["How long?","Two weeks. Fee fixed up front."],
];

function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>§ {children}</div>}
function Brand(){return <Link className="brand" href="/calibre"><b>C</b><span><em>Calibre</em><small>BY DAFTAR</small></span></Link>}

export default function Calibre(){return <main className="calibre">
  <header><Brand/><input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true"/><label className="menu" htmlFor="nav-toggle" aria-label="Menu">☰</label><nav><a href="#method">Method</a><a href="#deliver">The memo</a><a href="#scope-of-work">Scope</a><a href="#faq">FAQ</a><Link href="/">Daftar</Link><Link href="/ar/calibre" className="lang" aria-label="العربية">ع</Link><a className="button small" href="#scope">Request a Verdict</a></nav></header>
  <section className="hero wrap"><div><Eyebrow>The Calibre Verdict</Eyebrow><h1>The finance hire, decided on evidence.</h1><p className="lead">A done-for-you decision memo for one finance role. We score your shortlist and hand you a ranked, defensible pick — in two weeks.</p><div className="actions"><a className="button" href="#scope">Request a Verdict</a><a className="text-link" href="#method">How it works →</a></div></div><Scorecard/></section>
  <section className="cred"><div className="wrap"><article><Eyebrow>Who builds it</Eyebrow><h3>Big-4 and search-firm evaluation, turned on your hire.</h3><p>By Ahmad Al Hinaiti, Founder of Daftar.</p></article><article><Eyebrow>Where it fits</Eyebrow><h3>Alongside Daftar&apos;s finance work.</h3><p>Jordan, the UAE, and the wider region.</p></article></div></section>
  <section className="dark"><div className="wrap problem"><div><Eyebrow>The problem</Eyebrow><h2>Same shortlist.<br/>Four reviewers.<br/>Four verdicts.</h2><p>Without a shared standard, the score follows the reviewer — not the candidate.</p></div><ReviewerCard/></div></section>
  <section id="method" className="section wrap"><Eyebrow>The method</Eyebrow><h2>Opinion to evidence, in four steps.</h2><div className="grid four">{method.map((x,i)=><article className="method" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  <section id="deliver" className="section soft"><div className="wrap"><Eyebrow>What you receive</Eyebrow><h2>A scorecard and a memo.</h2><div className="grid three">{deliverables.map((x,i)=><article className="card" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="scope-of-work" className="section wrap"><Eyebrow>Scope</Eyebrow><h2>One role. One shortlist. One <em>verdict</em>.</h2><div className="grid four">{scope.map((x,i)=><article className="method" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><p className="scope-note">Sourcing and the decision stay yours. You decide; Calibre calibrates.</p></section>
  <section id="who" className="section soft"><div className="wrap who"><div><Eyebrow>Who it&apos;s for</Eyebrow><h2>Anyone who owns a finance hire they&apos;ll defend.</h2></div><div className="people">{[["Founders","Your first finance hire, on evidence."],["CFOs & finance leaders","A read on your next number-owner."],["Boards & investors","A key appointment, not a hunch."],["Lean finance teams","A senior second opinion."]].map(x=><article key={x[0]}><h3><em>{x[0]}</em></h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="pilot" className="pilot"><div className="wrap"><Eyebrow>How it runs</Eyebrow><div className="pilot-grid"><div><h2>One role. Two weeks. A decision you can defend.</h2><p>Bring the role and your shortlist. We hand back the memo.</p><code>ONE FINANCE ROLE · 2 WEEKS · FIXED FEE</code></div><div>{[["Scope","Criteria and weightings, set with you."],["Score","Each candidate, scored independently."],["Calibrate","Four reads into one decision."],["Memo","Scorecard, memo, outcome register."]].map((x,i)=><article className="pilot-step" key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></div></section>
  <section className="benefits wrap">{[["Clearer","One standard before the first interview."],["Faster","Days, not weeks."],["Consistent","The same bar for every reviewer."],["Defensible","A rationale for the file."]].map(x=><article key={x[0]}><em>{x[0]}</em><p>{x[1]}</p></article>)}</section>
  <section id="faq" className="section soft"><div className="wrap faq"><div><Eyebrow>Questions</Eyebrow><h2>Before you ask.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><code>{String(i+1).padStart(2,"0")}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>
  <section id="scope" className="scope"><div className="wrap"><div className="scope-intro"><Eyebrow>Request a Verdict</Eyebrow><h2>Bring one finance role to <em>Calibre</em>.</h2><p className="lead">The role and where your shortlist stands. We reply within two days.</p><div className="contact"><a href={email}>ahmad@daftaradvisory.com</a></div></div><form className="scope-form" name="calibre-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/calibre?scoped=calibre"><input type="hidden" name="form-name" value="calibre-scope"/><p className="scope-hp"><label>Leave this empty <input name="bot-field"/></label></p><div className="row"><div className="field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" required/></div><div className="field"><label htmlFor="c-email">Work email</label><input id="c-email" name="email" type="email" required/></div></div><div className="field"><label htmlFor="c-company">Company</label><input id="c-company" name="company"/></div><div className="row"><div className="field"><label htmlFor="c-role">Finance role</label><select id="c-role" name="finance_role" defaultValue=""><option value="" disabled>Select…</option><option>Financial controller</option><option>Finance manager</option><option>First finance hire</option><option>FP&amp;A lead</option><option>Other</option></select></div><div className="field"><label htmlFor="c-short">Shortlist</label><select id="c-short" name="shortlist" defaultValue=""><option value="" disabled>Select…</option><option>Ready (3–6)</option><option>Still shortlisting</option><option>Not yet sourced</option></select></div></div><div className="field"><label htmlFor="c-notes">The decision, in a line</label><textarea id="c-notes" name="notes"/></div><div className="form-actions"><button className="button" type="submit">Request a Verdict</button><p className="note">One role, fixed scope.</p></div></form></div></section>
  <footer><Brand/><div><Link href="/">ABOUT DAFTAR</Link><a href="mailto:ahmad@daftaradvisory.com">AHMAD@DAFTARADVISORY.COM</a><span>DAFTARADVISORY.COM</span></div></footer>
  </main>}

function Scorecard(){const rows=[["Technical depth",82,"4.1"],["Controls & rigour",64,"3.2"],["Business partnering",90,"4.5"]];return <article className="scorecard"><div className="score-head"><code>SCORECARD · FINANCIAL CONTROLLER</code><code>CAND. #04</code></div>{rows.map(x=><div className="score-row" key={String(x[0])}><span>{x[0]}</span><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="total"><em>Weighted total</em><strong>3.9</strong></div></article>}
function ReviewerCard(){return <article className="review-card"><code>CANDIDATE #04 · UNCALIBRATED</code>{[["A",85,"8.5"],["B",50,"5.0"],["C",75,"7.5"],["D",30,"3.0"]].map(x=><div className="review" key={x[0]}><code>REV. {x[0]}</code><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="spread"><em>Spread</em><code>5.5 points</code></div></article>}
