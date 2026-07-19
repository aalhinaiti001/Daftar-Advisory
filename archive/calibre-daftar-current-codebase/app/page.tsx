import Link from "next/link";

const method = [
  ["Define", "Agree what strong performance looks like for this role before interviews begin."],
  ["Observe", "Use focused questions and a shared reading guide to collect comparable evidence."],
  ["Score", "Rate each criterion independently, with clear anchors for strong, mixed, and weak evidence."],
  ["Calibrate", "Resolve differences as a panel and record one decision with a clear rationale."],
];

const deliverables = [
  ["Role scorecard", "Weighted criteria built around the role, its context, and the decision your panel must make."],
  ["Evidence guide", "Shared definitions of strong, mixed, and weak evidence for every criterion."],
  ["Interview question bank", "Questions and follow-ups mapped directly to the evidence your panel needs."],
  ["Calibration session", "A structured discussion that turns different readings into one reasoned decision."],
  ["Hiring-risk notes", "A clear record of gaps, disagreements, and points to test before an offer."],
  ["Decision memo", "A concise summary of the evidence, the panel’s conclusion, and the reasoning behind it."],
];

const audiences = [
  ["HR leaders", "Set a hiring standard the organization can apply consistently."],
  ["Talent teams", "Give interviewers a clearer process and reduce avoidable rework."],
  ["Hiring managers", "Know what good looks like before meeting the first candidate."],
  ["Founders", "Make important hires with a documented rationale, not instinct alone."],
];

const benefits = [
  ["Clearer", "Define the decision before collecting opinions."],
  ["Consistent", "Give every reviewer the same standard."],
  ["Focused", "Discuss evidence, not general impressions."],
  ["Defensible", "Keep a rationale others can understand later."],
];

const pilotSteps = [
  ["Scope the role", "Agree the criteria, weightings, and evidence required."],
  ["Build the kit", "Prepare the scorecard, reading guide, and interview questions."],
  ["Review and calibrate", "Score independently, then resolve differences together."],
  ["Document the decision", "Receive the completed kit, risk notes, and decision memo."],
];

const faqs = [
  ["Is Calibre software?", "No. Calibre is a focused advisory service delivered through a practical hiring kit and a facilitated calibration session. Your team keeps the complete working set."],
  ["How long does a pilot take?", "Around two to three weeks for one role, from the initial scoping session to the final decision memo."],
  ["Does it replace our interviewers?", "No. Your panel still interviews and decides. Calibre gives reviewers a common standard so their judgments can be compared and discussed."],
  ["Which roles does it suit?", "Roles where the decision matters, the evidence is difficult to read, or several reviewers need to reach a shared conclusion."],
  ["What do we need to begin?", "One active or recent role, the relevant role information, and access to the people responsible for the hiring decision."],
];

function Brand() {
  return <Link className="brand" href="/" aria-label="Calibre home"><span className="calibre-mark" aria-hidden="true">C</span><span><b>Calibre</b><small>BY DAFTAR</small></span></Link>;
}

function Eyebrow({children}:{children:React.ReactNode}) { return <div className="eyebrow"><i />{children}</div>; }

export default function Home() {
  return <main className="calibre-site">
    <header className="nav shell"><Brand/><nav aria-label="Primary navigation"><a href="#method">Method</a><a href="#deliver">Deliverables</a><a href="#who">Who it’s for</a><a href="#pilot">Pilot</a><a href="#faq">FAQ</a><Link href="/daftar">Daftar</Link><a className="button small" href="mailto:ahmad@daftaradvisory.com?subject=Calibre diagnostic call">Discuss one role</a></nav><details><summary aria-label="Open menu">Menu</summary><div><a href="#method">Method</a><a href="#deliver">Deliverables</a><a href="#who">Who it’s for</a><a href="#pilot">Pilot</a><a href="#faq">FAQ</a><Link href="/daftar">Daftar</Link><a href="mailto:ahmad@daftaradvisory.com?subject=Calibre diagnostic call">Discuss one role</a></div></details></header>

    <section className="hero shell">
      <div><Eyebrow>Hiring decision diagnostic</Eyebrow><h1>Turn different opinions into one defensible hiring decision.</h1><p className="lead">Calibre gives your hiring panel a shared standard for reading evidence, comparing candidates, and explaining why a decision was made.</p><div className="actions"><a className="button" href="mailto:ahmad@daftaradvisory.com?subject=Calibre diagnostic call">Discuss one role</a><a className="text-link" href="#method">See how it works →</a></div><p className="micro-proof">ONE ROLE · APPROX. 2–3 WEEKS · FIXED SCOPE</p></div>
      <Scorecard />
    </section>

    <section className="dark"><div className="shell problem"><div><Eyebrow>Where hiring breaks down</Eyebrow><h2>Same candidate.<br/>Four reviewers.<br/>Four different readings.</h2><p>When reviewers use different standards, disagreement looks like insight. The conversation becomes harder to resolve, and the final decision is difficult to explain after the fact.</p></div><ReviewerCard/></div></section>

    <section id="method" className="section shell"><div className="section-heading"><div><Eyebrow>The Calibre method</Eyebrow><h2>Move from impression to evidence.</h2></div><p>One shared process, applied before, during, and after the interview.</p></div><div className="grid four ruled">{method.map((x,i)=><article key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>

    <section id="deliver" className="section band"><div className="shell"><div className="section-heading"><div><Eyebrow>What you receive</Eyebrow><h2>A working decision system.</h2></div><p>Built for one role, used by the people who own the decision, and kept by your team.</p></div><div className="grid three cards">{deliverables.map((x,i)=><article key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>

    <section id="who" className="section shell split"><div><Eyebrow>Who it’s for</Eyebrow><h2>For teams that need agreement—and a reason behind it.</h2><p>Calibre is most useful when several people influence the hire and the cost of a weak decision is high.</p></div><div className="audiences">{audiences.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>

    <section id="pilot" className="green"><div className="section shell"><Eyebrow>The pilot</Eyebrow><div className="pilot"><div><h2>Start with one real role.</h2><p>Use an active or recent hire to test the method in your own context. The engagement is short, defined, and designed to leave your team with something it can use again.</p><small>ONE ROLE · APPROX. 2–3 WEEKS · FIXED SCOPE</small></div><ol>{pilotSteps.map((x)=><li key={x[0]}><div><h3>{x[0]}</h3><p>{x[1]}</p></div></li>)}</ol></div></div></section>

    <section className="benefits shell" aria-label="Calibre outcomes">{benefits.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</section>

    <section id="faq" className="section band"><div className="shell faq"><div><Eyebrow>Common questions</Eyebrow><h2>What to know before we speak.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><small>0{i+1}</small><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>

    <section className="cta shell"><Eyebrow>A focused first step</Eyebrow><h2>Bring one role to Calibre.</h2><p>In a short call, we can assess where your process loses consistency and whether a pilot would be useful.</p><a className="button" href="mailto:ahmad@daftaradvisory.com?subject=Calibre diagnostic call">Discuss one role</a></section>
    <footer className="dark"><div className="shell footer"><Brand/><div><Link href="/daftar">About Daftar</Link><a href="mailto:ahmad@daftaradvisory.com">Email</a><span>DAFTARADVISORY.COM</span></div></div></footer>
  </main>;
}

function Scorecard(){const rows=[["Role expertise",82,"4.1"],["Execution evidence",64,"3.2"],["Stakeholder judgment",90,"4.5"]];return <div className="scorecard" aria-label="Example calibrated candidate scorecard"><div className="card-head"><span>ROLE SCORECARD · PRODUCT LEAD</span><b>CANDIDATE 04</b></div>{rows.map((r,i)=><div className="score-row" key={r[0]}><span>{r[0]}</span><i><em style={{width:`${r[1]}%`}} className={i===2?"accent":""}/></i><b>{r[2]}</b></div>)}<div className="total"><em>Weighted score</em><b>3.9</b></div><p className="card-note">Illustrative scorecard</p></div>}
function ReviewerCard(){const rows=[["Reviewer A",85,"8.5"],["Reviewer B",50,"5.0"],["Reviewer C",75,"7.5"],["Reviewer D",30,"3.0"]];return <div className="review" aria-label="Example uncalibrated reviewer spread"><small>CANDIDATE 04 · BEFORE CALIBRATION</small>{rows.map((r,i)=><div className="review-row" key={r[0]}><span>{r[0]}</span><i><em style={{width:`${r[1]}%`}} className={i%2?"accent":""}/></i><b>{r[2]}</b></div>)}<div className="spread"><em>Reviewer spread</em><b>5.5 points</b></div><p className="card-note">Illustrative comparison</p></div>}
