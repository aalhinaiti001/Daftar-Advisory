/* ============================================================
   AREA DATA — A / B / C
   Voice: judgment over deliverable. Fixed scope as discipline.
   ============================================================ */

const ALL_AREAS = ["A", "B", "C"];
const AREA_DATA = {
  /* ============ AREA A — TECHNICAL FINANCE ============ */
  A: {
    label: "Area A",
    kicker: "Technical Finance",
    markets: ["Jordan", "KSA", "UAE"],
    title: {
      lead: "Producing, reviewing, and defending the numbers",
      em: "under IFRS."
    },
    lede: "The work the Big Four charges the most for, delivered by one senior practitioner. Trial balance to face statements, every number tied to source, the working file delivered with the engagement.",
    bigStat: {
      num: "SAR 3B+",
      label: "Client revenues under audit management — EY Riyadh, 8 yrs PwC + EY"
    },
    outcomes: [{
      code: "A / 01",
      weeks: "3–5 wks",
      title: {
        lead: "Financial statements your auditor can",
        em: "sign."
      },
      body: "Standalone or consolidated IFRS statements, including first-time adoption. Built so the audit opens on a clean file — and the working papers cross-reference paragraph-by-paragraph to IFRS source.",
      feeUsd: 4500,
      feeSar: 17000,
      feeAed: 16500,
      deliverables: ["Draft consolidated financial statements", "Notes with IFRS paragraph references", "Working file with full tie-out", "Policy memo for contested positions"],
      tags: ["IFRS 10", "IAS 1", "FTA", "Consolidation"]
    }, {
      code: "A / 02",
      weeks: "2 wks",
      title: {
        lead: "A second opinion that holds in the",
        em: "committee room."
      },
      body: "Independent written opinion on one contested IFRS position — revenue, leases, provisions, consolidation. Memo with paragraph references, supporting workpapers, draft disclosure language. Written to survive the auditor and the audit committee.",
      feeUsd: 5500,
      feeSar: 20625,
      feeAed: 20200,
      deliverables: ["Technical memo (8–12 pages)", "Workpaper file with cited references", "Draft disclosure language", "30-min call with auditor or committee"],
      tags: ["IFRS 15", "IFRS 16", "IAS 37", "IFRS 9"]
    }, {
      code: "A / 03",
      weeks: "4 wks",
      title: {
        lead: "Audit ready before the auditor",
        em: "arrives."
      },
      body: "Four-week sprint: reconciliations, documented positions, disclosure drafts, the PBC binder. The audit opens on a clean file — and finishes weeks faster than the management-letter estimate.",
      feeUsd: 7500,
      feeSar: 28125,
      feeAed: 27500,
      deliverables: ["PBC binder, fully populated", "Reconciliation pack (P&L, BS, equity)", "Position memos for material judgements", "Disclosure drafts cross-referenced to TB"],
      tags: ["PBC", "ISQM 1", "SOCPA", "JACPA"]
    }],
    decisionTree: {
      title: "Which outcome you actually need.",
      lede: "Same three questions on every scoping call. Honest answers shorten the engagement and the fee.",
      branches: [{
        q: "Are you producing financials from scratch — or defending a position you've already taken?",
        yes: "Producing → A / 01. Building the statements end-to-end.",
        no: "Defending → A / 02. One contested position, one written opinion."
      }, {
        q: "Has the auditor already raised a query, or is this pre-audit prep?",
        yes: "Auditor in motion → A / 02 (technical opinion).",
        no: "Pre-audit → A / 03 (PBC + readiness sprint)."
      }, {
        q: "Will the financials need a re-statement of prior-year comparatives?",
        yes: "Almost certainly A / 01 with FTA scope baked in.",
        no: "A / 03 likely sufficient — confirm on the scoping call."
      }]
    },
    methodology: [{
      num: "01",
      title: "Scope.",
      body: "30-minute call. We narrow to one defined outcome. If it doesn't fit a fixed scope, you'll hear that on the call."
    }, {
      num: "02",
      title: "Quote.",
      body: "Within 48 hours: one-page engagement note. Fixed fee, fixed dates, named deliverables. Counter-signed by you."
    }, {
      num: "03",
      title: "Build.",
      body: "Weekly checkpoint. Working file shared on day one. Every position memo references IFRS paragraphs."
    }, {
      num: "04",
      title: "Hand over.",
      body: "Working file is yours. No lock-in. The auditor or committee can phone the practitioner directly."
    }],
    sampleDeliverable: {
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "What an A / 02 memo ", /*#__PURE__*/React.createElement("em", null, "looks like.")),
      sub: "Anonymised, single page. Real ones run 8–12. The discipline is the deliverable.",
      lines: [{
        type: "head",
        text: "Technical Memorandum · IFRS 16 Lease Modification"
      }, {
        type: "kv",
        k: "Client",
        v: "[Anonymised KSA Construction JV]"
      }, {
        type: "kv",
        k: "Date",
        v: "12 March 2025"
      }, {
        type: "kv",
        k: "Issued by",
        v: "Ahmad Alhinaiti · Daftar Advisory"
      }, {
        type: "kv",
        k: "Reference",
        v: "DA-25-X4Q2"
      }, {
        type: "rule"
      }, {
        type: "section",
        text: "1 · Question presented"
      }, {
        type: "p",
        text: "Whether the contractual extension of 11 plant-and-machinery leases (Group SubCo A, executed 14-Feb-2025) constitutes a lease modification under IFRS 16.44 — and, if so, whether the modification is accounted for as a separate lease or as a remeasurement of the existing right-of-use asset."
      }, {
        type: "section",
        text: "2 · Conclusion"
      }, {
        type: "p",
        text: "The extensions are modifications under IFRS 16.44. They are not separate leases under IFRS 16.44(a) because the additional right-of-use is for the same underlying asset and the consideration is not commensurate with stand-alone pricing. Therefore, the lessee remeasures the lease liability using the revised discount rate at the modification date (IFRS 16.45) and adjusts the right-of-use asset by the same amount (IFRS 16.46(b))."
      }, {
        type: "section",
        text: "3 · Workpaper references"
      }, {
        type: "list",
        items: ["WP-A: contract pack, dates, term extensions", "WP-B: revised IBR derivation, swap-curve build", "WP-C: schedule recomputation, prior-year tie", "WP-D: draft note disclosure, cross-referenced to TB"]
      }, {
        type: "foot",
        text: "PAGE 01 / 12 · DAFTAR ADVISORY · CONFIDENTIAL"
      }]
    },
    faq: [{
      q: "How is this different from buying a Big Four engagement?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Three differences, in order of importance. ", /*#__PURE__*/React.createElement("em", null, "One:"), " you get a senior practitioner on every page \u2014 not a graduate trained on your file. ", /*#__PURE__*/React.createElement("em", null, "Two:"), " fixed scope, fixed fee, named dates. The Big Four price the engagement; I price the deliverable. ", /*#__PURE__*/React.createElement("em", null, "Three:"), " the working file is yours. No data-room lock-in, no dependency on the firm to interpret what was done.")
    }, {
      q: "Will my auditor actually accept work signed by you?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Yes \u2014 for technical positions. The deliverable here is a memo and workpaper file, not an attest signature. Your auditor signs the audit; I produce the technical position they review. If the work needs an attest signature (audit, review, agreed-upon procedures), I'll tell you on the scoping call and refer you to the right firm.")
    }, {
      q: "What if the scope changes mid-engagement?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "It happens. The engagement note has a one-paragraph variation clause: any change \u2265 10% of fee or \u2265 5 working days requires a written addendum, signed by both. Smaller changes, I absorb. Larger changes, you decide whether to proceed before any extra time is spent. Surprises don't survive in this practice.")
    }, {
      q: "What insurance and continuity cover is in place?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Professional indemnity at USD 1M per claim, USD 2M aggregate, with a UAE-licensed insurer. Named-handover clause: if I am unavailable for clinical reasons, an agreed second practitioner picks up the file, with notice to you. The list of named handover practitioners is in your engagement note. No phantom partners.")
    }]
  },
  /* ============ AREA B — COMPLIANCE ============ */
  B: {
    label: "Area B",
    kicker: "Compliance",
    markets: ["KSA", "UAE"],
    title: {
      lead: "Regulatory work that has a calendar",
      em: "attached."
    },
    lede: "Priced for the middle market, delivered against the actual deadline. ZATCA Phase 2, UAE Corporate Tax, KSA Transfer Pricing — three filings, one practitioner, no middleware up-sell.",
    bigStat: {
      num: "30 Jun 2026",
      label: "ZATCA Phase 2 Wave 24 go-live · SAR 375k revenue threshold"
    },
    outcomes: [{
      code: "B / 01",
      weeks: "4–6 wks",
      title: {
        lead: "ZATCA Phase 2, integrated in",
        em: "six weeks."
      },
      body: "Wave 24 — SAR 375k revenue threshold, go-live 30 June 2026. Vendor selection, CSID onboarding, sandbox tests, parallel run, cutover. No middleware up-sell, no ERP migration in disguise.",
      feeUsd: 3200,
      feeSar: 12000,
      feeAed: 11800,
      deliverables: ["Vendor shortlist & selection memo", "CSID onboarding & sandbox sign-off", "Parallel run report", "Go-live checklist & runbook"],
      tags: ["UBL 2.1", "FATOORA", "CSID", "BR-KSA"]
    }, {
      code: "B / 02",
      weeks: "2–6 wks",
      title: {
        lead: "UAE Corporate Tax, decided before",
        em: "year-end."
      },
      body: "FY24 amendments, FY25 planning, and the Small Business Relief vs QFZP decision memo. IFRS-for-SME book rebuilt where needed, related-party disclosure documented.",
      feeUsd: 3270,
      feeSar: 12275,
      feeAed: 12000,
      deliverables: ["SBR vs QFZP decision memo", "FY24 amendment package (if applicable)", "FY25 tax-position file", "Related-party disclosure schedule"],
      tags: ["CT Law", "SBR", "QFZP", "FTA"]
    }, {
      code: "B / 03",
      weeks: "2–7 wks",
      title: {
        lead: "KSA transfer pricing the auditor will",
        em: "accept."
      },
      body: "Disclosure form, Master File, Local File — for Zakat payers above SAR 48M and SAR 100M. Benchmarking, functional analysis, and the auditor affidavit package where required.",
      feeUsd: 4000,
      feeSar: 15000,
      feeAed: 14700,
      deliverables: ["CTDF (Disclosure Form)", "Local File with benchmarking", "Master File (where threshold met)", "Auditor affidavit package"],
      tags: ["CTDF", "Master File", "Local File", "CbCR"]
    }],
    decisionTree: {
      title: "Which filing actually applies.",
      lede: "Compliance is calendar-driven. The wrong question is 'which service?' The right question is 'which deadline?'",
      branches: [{
        q: "Is your KSA revenue above SAR 375,000 with go-live before 30 June 2026?",
        yes: "Wave 24 → B / 01 (ZATCA Phase 2 integration).",
        no: "Defer — but verify wave assignment in writing. Mis-classification is the most common error."
      }, {
        q: "UAE entity with FY24 closing on or after 1 June 2024?",
        yes: "Filing window open → B / 02. SBR vs QFZP decision should be made before year-end, not after.",
        no: "Pre-FY24 entity — confirm if grandfathered relief applies."
      }, {
        q: "KSA related-party transactions above SAR 48M (CTDF) or SAR 100M (Master File)?",
        yes: "B / 03. Affidavit package required. Plan 6 weeks before audit sign-off, not after.",
        no: "CTDF only — light-touch B / 03 scope on the call."
      }]
    },
    methodology: [{
      num: "01",
      title: "Calendar.",
      body: "We start with the deadline, not the deliverable. Every plan is reverse-built from a real filing date."
    }, {
      num: "02",
      title: "Diagnose.",
      body: "Within one week: a written gap report against the regulator's checklist. No vendor pitch attached."
    }, {
      num: "03",
      title: "File.",
      body: "Sandbox, parallel run, sign-off. Filing is a supervised act — not an after-thought."
    }, {
      num: "04",
      title: "Defend.",
      body: "If the regulator queries, the workpaper file is ready. The audit trail is the deliverable."
    }],
    sampleDeliverable: {
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "What a B / 01 sign-off ", /*#__PURE__*/React.createElement("em", null, "looks like.")),
      sub: "One-page go-live runbook. Real ones include sandbox screenshots and CSID logs.",
      lines: [{
        type: "head",
        text: "ZATCA Phase 2 · Go-Live Runbook"
      }, {
        type: "kv",
        k: "Client",
        v: "[Anonymised KSA Trading Co.]"
      }, {
        type: "kv",
        k: "Wave",
        v: "24 · go-live 30 June 2026"
      }, {
        type: "kv",
        k: "CSID",
        v: "[redacted] · valid through 12-2027"
      }, {
        type: "kv",
        k: "Reference",
        v: "DA-26-Z9R3"
      }, {
        type: "rule"
      }, {
        type: "section",
        text: "1 · Pre-flight (T−7 days)"
      }, {
        type: "list",
        items: ["ERP invoice template UBL 2.1 compliance — verified", "CSID provisioning + private key escrow — confirmed", "Sandbox parallel run, 50 invoice sample — 100% pass", "Customer ID validation (BR-KSA) — exception list documented"]
      }, {
        type: "section",
        text: "2 · Cutover (T−0)"
      }, {
        type: "list",
        items: ["07:00 AST — final TB extract from legacy invoicing", "08:00 AST — production CSID activation", "09:00 AST — first live clearance tested with 1 invoice", "10:00 AST — full production cutover"]
      }, {
        type: "section",
        text: "3 · Post-flight (T+7 days)"
      }, {
        type: "p",
        text: "Daily reconciliation between FATOORA cleared count and ERP issued count. Variance threshold: 0. Any non-zero variance escalates to practitioner within 4 hours."
      }, {
        type: "foot",
        text: "PAGE 01 / 06 · DAFTAR ADVISORY · CONFIDENTIAL"
      }]
    },
    faq: [{
      q: "Why not just use the ERP vendor's ZATCA module?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Use it \u2014 but don't outsource the judgement. Vendor modules pass the technical handshake. They don't decide which invoices are in scope, which exemptions apply, or how to handle credit notes against pre-Phase-2 invoices. ", /*#__PURE__*/React.createElement("em", null, "That's"), " what gets queried by ZATCA. The vendor builds the pipe; this practice signs off the policy.")
    }, {
      q: "Can you handle the corporate tax registration for a brand-new UAE entity?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Yes \u2014 but registration is the 10% of B / 02 that's mechanical. The 90% that matters is the SBR vs QFZP decision and the related-party documentation. New entities still need both, and getting them wrong in year one compounds for three filing seasons. Scope on the call.")
    }, {
      q: "What about VAT? Zakat? E-invoicing for the UAE?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "VAT and Zakat are out of scope for Daftar \u2014 better priced through your audit firm or a tax-licensed practice. UAE e-invoicing is on the roadmap once the FTA finalises the framework (expected late 2026). When it's a defined deliverable with a real deadline, it'll be a fixed-fee outcome. Until then, no.")
    }, {
      q: "What if I miss the Wave 24 deadline?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Penalty exposure starts at SAR 5,000 per non-compliant invoice and escalates with repeat instances. The practical risk isn't the fine \u2014 it's the ZATCA audit that follows. If you're inside 60 days of go-live and not started, the conversation should happen this week, not next month.")
    }]
  },
  /* ============ AREA C — INVESTMENT DECISIONS ============ */
  C: {
    label: "Area C",
    kicker: "Investment Decisions",
    markets: ["Jordan", "KSA", "UAE"],
    title: {
      lead: "The work that gets made",
      em: "into a decision."
    },
    lede: "Written in the register that boards, lenders, and audit committees actually respond to. One defensible answer — not a menu of options, not a McKinsey-flavoured wrap.",
    bigStat: {
      num: "1 answer",
      label: "Per investment case · go / hold / no-go · in writing"
    },
    outcomes: [{
      code: "C / 01",
      weeks: "4–6 wks",
      title: {
        lead: "An investment case that survives the",
        em: "board meeting."
      },
      body: "Market sizing, unit economics, NPV and IRR, sensitivity analysis, governance, risk register, and a written go / no-go recommendation. 25–40 pages, one defensible answer — not a menu of options.",
      feeUsd: 8000,
      feeSar: 30000,
      feeAed: 29400,
      deliverables: ["Investment case (25–40 pages)", "Financial model with sensitivities", "Governance & risk register", "Written go / no-go recommendation"],
      tags: ["DCF", "Sensitivity", "Governance", "Unit economics"]
    }, {
      code: "C / 02",
      weeks: "4–6 wks",
      title: {
        lead: "Nomu readiness — before you hire the",
        em: "adviser."
      },
      body: "For SAR 30–80M SMEs targeting a Nomu listing in 12–24 months. Gap report on IFRS, governance, MIS, and disclosure readiness — with a remediation runway. The bridge before you hire a CMA-licensed adviser.",
      feeUsd: 12000,
      feeSar: 45000,
      feeAed: 44100,
      deliverables: ["Readiness gap report", "Remediation runway (Gantt)", "MIS & disclosure scaffolding", "Adviser-shortlist briefing pack"],
      tags: ["Nomu", "CMA", "IPO readiness", "Governance"]
    }, {
      code: "C / 03",
      weeks: "1–3 wks",
      title: {
        lead: "Quality of earnings for SME",
        em: "deals."
      },
      body: "Normalised EBITDA bridge, working-capital walk, debt-like items, revenue quality. Written for corporate buyers in the SAR 10–100M transaction range — not priced for megadeals.",
      feeUsd: 8000,
      feeSar: 30000,
      feeAed: 29400,
      deliverables: ["Normalised EBITDA bridge", "Working-capital walk & target", "Debt-like items schedule", "Revenue-quality memo"],
      tags: ["QoE", "NWC", "Net debt", "Revenue quality"]
    }],
    decisionTree: {
      title: "Which decision you're actually making.",
      lede: "Investment work fails when the question is fuzzy. Three sharp questions, one outcome each.",
      branches: [{
        q: "Are you deploying capital — or evaluating a target?",
        yes: "Deploying → C / 01 (investment case for board).",
        no: "Evaluating → C / 03 (quality of earnings for diligence)."
      }, {
        q: "Are you 12–24 months from a Nomu listing?",
        yes: "C / 02 → readiness gap before you hire the adviser.",
        no: "Too early or too late — both fixable. Scope on the call."
      }, {
        q: "Does the board need 'one defensible answer' or 'options to discuss'?",
        yes: "Daftar work — C / 01.",
        no: "Wrong practice. Boutique strategy firm or in-house team. Honest answer on the call."
      }]
    },
    methodology: [{
      num: "01",
      title: "Frame.",
      body: "What is the actual decision? What does the board need to say yes to? Written, signed off, before any modelling starts."
    }, {
      num: "02",
      title: "Model.",
      body: "Bottom-up unit economics. Sensitivity to the two or three variables that actually move the answer. No vanity sliders."
    }, {
      num: "03",
      title: "Stress.",
      body: "Downside, base, upside — and one written paragraph on what would change the recommendation."
    }, {
      num: "04",
      title: "Recommend.",
      body: "Go, hold, no-go. One paragraph. Followed by 30 pages defending the paragraph."
    }],
    sampleDeliverable: {
      title: /*#__PURE__*/React.createElement(React.Fragment, null, "What a C / 01 recommendation ", /*#__PURE__*/React.createElement("em", null, "reads like.")),
      sub: "First page of an investment case. Real ones run 25–40 pages with the model attached.",
      lines: [{
        type: "head",
        text: "Investment Case · Project Almond"
      }, {
        type: "kv",
        k: "Sponsor",
        v: "[Anonymised Family Group]"
      }, {
        type: "kv",
        k: "Capital ask",
        v: "USD 14.2M · 5-yr horizon"
      }, {
        type: "kv",
        k: "Recommendation",
        v: "GO · with one condition"
      }, {
        type: "kv",
        k: "Reference",
        v: "DA-25-AL77"
      }, {
        type: "rule"
      }, {
        type: "section",
        text: "Recommendation (in one paragraph)"
      }, {
        type: "p",
        text: "Proceed with the USD 14.2M deployment, conditioned on the SPA carrying a working-capital target equal to 11.4% of trailing-12-month revenue, with a dollar-for-dollar adjustment mechanism. At base case, the project returns a 19.4% IRR and a 2.3x money multiple over five years. Downside (revenue −15%, margin −180 bps) breaks even at year four. Upside (regional expansion to UAE in year three) returns 26.2% IRR. The single concentration risk is the top customer at 31% of revenue — addressed via a structural earn-out claw-back, not via diversification."
      }, {
        type: "section",
        text: "What would change this view"
      }, {
        type: "list",
        items: ["Top customer drops below 50% of current volume in any quarter pre-close → re-price", "Working-capital target cannot be agreed in the SPA → renegotiate or walk", "Audited FY24 EBITDA lands more than 8% below management figure → re-price", "Any new related-party agreement surfaces during diligence → escalate"]
      }, {
        type: "foot",
        text: "PAGE 01 / 32 · DAFTAR ADVISORY · CONFIDENTIAL"
      }]
    },
    faq: [{
      q: "How is this different from a strategy firm's investment memo?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Strategy firms produce ", /*#__PURE__*/React.createElement("em", null, "options."), " This produces ", /*#__PURE__*/React.createElement("em", null, "a decision."), " Strategy firms model 1,000 scenarios and present three; this practice models the two or three variables that actually move the recommendation, and tells you which way to lean. The deliverable is a one-paragraph answer \u2014 followed by 30 pages defending the paragraph.")
    }, {
      q: "Will the financial model be auditable / handed over?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Yes. The model ships in Excel, not in a black-box dashboard. Every input cell is colour-coded. Every formula is documented. Your CFO can run it in five years without phoning me. That's the point of fixed scope \u2014 no dependency lock-in, no consulting tail.")
    }, {
      q: "Can you do this for a target above SAR 100M?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "I can \u2014 but I usually shouldn't. Above SAR 100M, the buyer's audit-committee process gets a lot more procedural, and a Big Four QoE buys you covenant comfort I can't replicate at this fee. Honest scoping on the call: under SAR 100M, this practice is the right call. Above, you're paying for the brand on the cover.")
    }, {
      q: "What if the recommendation is 'no-go'?",
      a: /*#__PURE__*/React.createElement(React.Fragment, null, "Same fee, same timeline, same memo. The discipline is the deliverable \u2014 not the answer. A 'no-go' that saves you an USD 14M mistake is the highest-ROI engagement in this practice. Founders often buy this work specifically because they want a written counter-view to their own enthusiasm.")
    }]
  }
};
Object.assign(window, {
  ALL_AREAS,
  AREA_DATA
});