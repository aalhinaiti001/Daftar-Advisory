import Link from "next/link";

const practices = [
  ["Finance and reporting", "Clear reporting, close support, technical accounting, and financial analysis for decisions that matter."],
  ["Readiness and compliance", "Focused preparation for tax, regulatory, transaction, and market-readiness requirements."],
  ["Decision advisory", "Structured analysis for owners and leaders facing complex financial choices."],
];

const principles = [
  ["Start with the decision", "Define the question, the audience, and the standard the work must meet."],
  ["Keep the team senior", "Work directly with the people responsible for the analysis and the answer."],
  ["Leave a usable record", "Deliver a model, method, or memo—not advice that disappears after the meeting."],
  ["Make reasoning legible", "Help the client, the board, and the next decision-maker understand how the conclusion was reached."],
];

function DaftarBrand(){return <Link className="brand daftar-brand" href="/daftar" aria-label="Daftar Advisory home"><span className="register-mark" aria-hidden="true"><i/><i/><i/><i/></span><span><b>Daftar</b><small>ADVISORY</small></span></Link>}
function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>{children}</div>}

export default function Daftar(){return <main className="daftar-site">
  <header className="nav shell"><DaftarBrand/><nav aria-label="Primary navigation"><a href="#story">Why Daftar</a><a href="#practice">Practice</a><a href="#principles">How we work</a><Link href="/">Calibre</Link><a className="button small" href="mailto:ahmad@daftaradvisory.com?subject=Advisory enquiry">Start a conversation</a></nav><details><summary>Menu</summary><div><a href="#story">Why Daftar</a><a href="#practice">Practice</a><a href="#principles">How we work</a><Link href="/">Calibre</Link><a href="mailto:ahmad@daftaradvisory.com?subject=Advisory enquiry">Start a conversation</a></div></details></header>

  <section className="shell"><div className="daftar-hero"><Eyebrow>Boutique finance and decision advisory · Amman</Eyebrow><h1>Finance work that leaves the decision clear—and the reasoning on record.</h1><p className="lead">Daftar helps leaders across Jordan, the GCC, and the wider MENA region work through important financial decisions with clear analysis, direct senior involvement, and a file that holds up.</p><div className="actions"><a className="button" href="mailto:ahmad@daftaradvisory.com?subject=Advisory enquiry">Start a conversation</a><a className="text-link" href="#story">Why Daftar →</a></div></div></section>

  <section className="stats"><div><b>2024</b><small>ESTABLISHED · AMMAN</small></div><div><b>MENA</b><small>JORDAN · GCC · REGION</small></div><div><b>3</b><small>FOCUSED PRACTICE LINES</small></div><div><b><i>Calibre</i></b><small>FIRST PRODUCT</small></div></section>

  <section id="story" className="section shell story"><div><Eyebrow>Why Daftar</Eyebrow><h2>A decision should outlast the meeting.</h2></div><div><p className="lead"><em>Daftar</em>—the ledger or register—is named for the discipline at the heart of the practice: writing decisions down in a form that holds up.</p><p>We founded the firm for leaders who are tired of advice that disappears when the engagement ends. We work in small, senior teams, and every engagement leaves behind a working artifact: a model, a method, or a memo.</p><p>Our role is to make the reasoning clear—to you, to your board, and to whoever inherits the decision after you.</p></div></section>

  <section id="practice" className="section band"><div className="shell"><div className="section-heading"><div><Eyebrow>The practice</Eyebrow><h2>Focused work across three areas.</h2></div><p>Different questions, approached with the same discipline: define, analyse, document.</p></div><div className="practices cards">{practices.map((x,i)=><article key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>

  <section id="principles" className="section shell"><div className="section-heading"><div><Eyebrow>How we work</Eyebrow><h2>Small teams. Clear scope. Usable output.</h2></div><p>The work is designed around the decision—not the size of the presentation.</p></div><div className="grid four ruled">{principles.map((x,i)=><article key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>

  <section className="section shell"><div className="callout"><div><Eyebrow>Calibre by Daftar</Eyebrow><h2>The same rigor, applied to hiring.</h2><p>Calibre is the first productised expression of the Daftar approach: a structured diagnostic that helps teams evaluate candidates, compare evidence, and document one defensible hiring decision.</p></div><Link className="button" href="/">Explore Calibre →</Link></div></section>

  <section className="daftar-cta"><div className="shell"><Eyebrow>Begin with the question</Eyebrow><h2>Tell us what decision you need to make.</h2><p>We will help you determine whether there is a clear, useful scope for the work.</p><a className="button" href="mailto:ahmad@daftaradvisory.com?subject=Advisory enquiry">Start a conversation</a></div></section>

  <footer className="dark"><div className="shell footer"><DaftarBrand/><div><Link href="/">Calibre</Link><a href="mailto:ahmad@daftaradvisory.com">Email</a><span>AMMAN · MENA</span></div></div></footer>
</main>}
