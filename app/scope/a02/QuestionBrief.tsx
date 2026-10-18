"use client";
import { useState } from "react";
import { EMAIL } from "../../_data/practice";

export default function QuestionBrief() {
  const [question, setQuestion] = useState("");
  const [decision, setDecision] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [evidence, setEvidence] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const complete = Boolean(question.trim() && decision.trim() && deadline && stakeholder);
  const brief = `A/02 — Technical question brief${complete ? "" : " (partial)"}\n\nQuestion: ${question.trim() || "To discuss"}\nDecision required: ${decision.trim() || "To discuss"}\nTiming: ${deadline || "To confirm"}\nReader: ${stakeholder || "To confirm"}\nAvailable evidence: ${evidence.join(", ") || "To discuss"}\n\nPlease confirm fit, scope, fee and availability. No confidential documents are attached.`;
  async function copy() {
    try { await navigator.clipboard.writeText(brief); setFeedback("Brief copied. You can paste it into your email."); }
    catch { setFeedback("Copy is unavailable here. Select and copy the brief below, or use Email this brief."); }
  }
  return <div className="dft-a02-brief">
    <div className="dft-a02-fields">
      <label htmlFor="a02-question">What accounting question needs a view?<textarea id="a02-question" maxLength={400} value={question} onChange={e=>setQuestion(e.target.value)} placeholder="For example: whether a contract transfers control at a point in time or over time." /></label>
      <label htmlFor="a02-decision">What decision will the memorandum support?<textarea id="a02-decision" maxLength={300} value={decision} onChange={e=>setDecision(e.target.value)} placeholder="For example: finalising the accounting policy for this reporting period." /></label>
      <div className="dft-a02-selects"><label htmlFor="a02-deadline">When is a decision needed?<select id="a02-deadline" value={deadline} onChange={e=>setDeadline(e.target.value)}><option value="">Choose timing</option><option>Still exploring</option><option>Within this quarter</option><option>Within four weeks</option><option>Urgent — availability to confirm</option></select></label><label htmlFor="a02-reader">Who needs the position?<select id="a02-reader" value={stakeholder} onChange={e=>setStakeholder(e.target.value)}><option value="">Choose the main reader</option><option>Finance team</option><option>Auditor</option><option>Board or audit committee</option><option>Investor or transaction team</option></select></label></div>
      <fieldset><legend>What evidence is available?</legend>{["Contract or transaction summary", "Existing accounting memo", "Auditor questions", "Relevant financial information", "Multiple scenarios"].map(x=><label className="dft-a02-check" key={x}><input type="checkbox" checked={evidence.includes(x)} onChange={()=>setEvidence(p=>p.includes(x)?p.filter(v=>v!==x):[...p,x])} />{x}</label>)}</fieldset>
      <p className="dft-a02-caption">Your answers stay in this page until you choose to copy or email them. Reloading clears the brief.</p>
    </div>
    <aside className="dft-a02-preview"><div className="dft-panel-head"><span>Your draft</span><span>{complete ? "Ready to discuss" : "In progress"}</span></div><div className="dft-a02-file-inner">
      <h3>{complete ? "A useful starting point." : "Start with the question."}</h3>
      <p>{complete ? "This is enough to start a fit conversation. It does not confirm acceptance, a fee or an accounting conclusion." : "Complete the four prompts, or send a partial brief and discuss the rest with us."}</p>
      <pre tabIndex={0} aria-label="Your technical question brief">{brief}</pre>
      <div className="dft-actions"><a className="dft-btn" href={`mailto:${EMAIL}?subject=${encodeURIComponent("A/02 technical review enquiry")}&body=${encodeURIComponent(brief)}`}>Email this brief</a><button type="button" className="dft-btn-ghost" onClick={copy}>Copy brief</button></div>
      <p role="status" className="dft-a02-caption">{feedback}</p><a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </div></aside>
    <noscript><p>The interactive brief requires JavaScript. Email your general accounting question to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p></noscript>
  </div>;
}
