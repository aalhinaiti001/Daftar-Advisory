import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";
import QuestionBrief from "./QuestionBrief";

const description = "Independent technical review of one IFRS accounting position. A written memorandum, supporting workpapers and a senior walkthrough. From USD 5,500.";
export const metadata: Metadata = {
  title: "Independent Technical Review | A/02 — Daftar Advisory",
  description,
  alternates: { canonical: "/scope/a02" },
  openGraph: { title: "One position. One memorandum. — Daftar Advisory", description, url: "/scope/a02", images: ["/og-daftar.png"] },
};

export default function TechnicalReview() {
  return <div className="dft">
    <SiteHeader active="scope" />
    <main id="main" className="dft-rise dft-a02">
      <section className="dft-wrap dft-a02-hero">
        <div>
          <Eyebrow tone="rust">A/02 · Independent technical review</Eyebrow>
          <h1 className="dft-h1">One position.<br />One <em>memorandum.</em></h1>
          <p className="dft-lead">When an accounting question needs a defensible answer, we read the evidence, work through the alternatives, and put our reasoning on the record.</p>
          <div className="dft-actions"><Link className="dft-btn" href="/scope?service=review">Scope this review</Link><a className="dft-btn-ghost" href="#question-brief">Prepare your question</a></div>
          <p className="dft-a02-caption">For finance leaders with a defined IFRS question.</p>
        </div>
        <aside className="dft-a02-file" aria-label="Engagement at a glance">
          <div className="dft-panel-head"><span>The engagement file</span><span>A/02</span></div>
          <div className="dft-a02-file-inner">
            <span className="dft-label">Independent technical review</span>
            <h2>A position you can explain.</h2>
            <dl><div><dt>Starting fee</dt><dd>USD 5,500</dd></div><div><dt>Typical delivery</dt><dd>2–4 weeks</dd></div><div><dt>Starting point</dt><dd>One defined issue</dd></div><div><dt>Contact</dt><dd>Ahmad Al Hinaiti</dd></div></dl>
            <p>Timing begins at scope lock. The starting fee covers a clear single issue; complexity and multiple scenarios are quoted separately.</p>
          </div>
        </aside>
      </section>

      <section className="dft-a02-section dft-section-soft"><div className="dft-wrap dft-a02-split">
        <div><Eyebrow>§ 01 · The right question</Eyebrow><h2 className="dft-h2">A defined issue.<br />A decision ahead.</h2></div>
        <div className="dft-a02-rows">
          <article><span>01</span><div><h3>A treatment under challenge</h3><p>Your finance team and auditor need the facts, alternatives and applicable IFRS requirements set out clearly.</p></div></article>
          <article><span>02</span><div><h3>A transaction with judgement</h3><p>A contract, acquisition or restructuring raises a specific recognition, measurement or disclosure question.</p></div></article>
          <article><span>03</span><div><h3>A position the board must understand</h3><p>A material judgement needs a written record that connects the evidence to the conclusion.</p></div></article>
        </div>
      </div></section>

      <section className="dft-wrap dft-a02-section"><Eyebrow>§ 02 · What stays with you</Eyebrow><h2 className="dft-h2">The answer, with the working.</h2>
        <div className="dft-a02-deliverables">{[
          ["01", "Technical memorandum", "The facts, question, paragraph-level IFRS references, alternatives and our recommendation."],
          ["02", "Accounting consequences", "Proposed journal entries and draft disclosures where the agreed question requires them."],
          ["03", "Evidence appendix", "Supporting workpapers that make the path from source evidence to conclusion inspectable."],
          ["04", "Senior walkthrough", "A discussion of the position and one revision within the agreed scope."],
        ].map(([n,t,b])=><article key={n}><span className="dft-label">{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>
        <p className="dft-a02-boundary">Daftar provides non-attest advisory work. This engagement does not provide an audit or assurance opinion. Our independent conclusion may differ from the position initially proposed.</p>
      </section>

      <section id="question-brief" className="dft-a02-section dft-section-soft"><div className="dft-wrap"><Eyebrow>§ 03 · Your technical question brief</Eyebrow><h2 className="dft-h2">Put the question on one page.</h2><p className="dft-a02-intro">Organise what you know before a conversation. Keep names, figures and contract details general. Please arrange a secure exchange with us before sending confidential documents.</p><QuestionBrief /></div></section>

      <section className="dft-wrap dft-a02-section dft-a02-split"><div><Eyebrow>§ 04 · Before we begin</Eyebrow><h2 className="dft-h2">Scope first.<br />Then the work.</h2></div><div className="dft-a02-rows">
        <article><span>01</span><div><h3>Confirm fit</h3><p>We discuss the accounting question, available evidence and decision deadline.</p></div></article>
        <article><span>02</span><div><h3>Agree the engagement</h3><p>We confirm the fee, deliverables, exclusions, dependencies and timetable in writing.</p></div></article>
        <article><span>03</span><div><h3>Read, reason, hand over</h3><p>The person you speak to does the work. You receive the memorandum, its supporting file and a walkthrough.</p></div></article>
        <p>Need bookkeeping, broad audit preparation or ongoing finance support? <Link href="/scope">Explore the other service lines.</Link></p>
      </div></section>
    </main><SiteFooter />
  </div>;
}
