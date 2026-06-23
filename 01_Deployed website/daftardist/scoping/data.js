/* ============================================================
   SCOPING DATA — services catalogue, markets, sectors
   Mirrors the structure on the marketing site exactly.
   ============================================================ */

const MARKETS = [{
  id: "jordan",
  flag: "JO",
  name: "Jordan",
  note: "Amman SMEs, family groups, audit-firm subcontracts.",
  eta: "On-site or remote · same time zone"
}, {
  id: "ksa",
  flag: "SA",
  name: "Saudi Arabia",
  note: "Construction, real estate, energy. ZATCA, transfer pricing, Nomu.",
  eta: "Riyadh on-site visits · monthly"
}, {
  id: "uae",
  flag: "AE",
  name: "United Arab Emirates",
  note: "Federal Corporate Tax, free-zone reporting, healthcare, hospitality.",
  eta: "Dubai on-site visits · as needed"
}, {
  id: "other",
  flag: "—",
  name: "Elsewhere",
  note: "Cross-border IFRS work, GCC subsidiaries of non-MENA groups.",
  eta: "Quoted case-by-case"
}];
const AREAS = [{
  id: "A",
  label: "Area A",
  title: "Technical Finance",
  blurb: "IFRS / SOCPA financial statements, second opinions, audit readiness.",
  outcomes: ["A01", "A02", "A03"]
}, {
  id: "B",
  label: "Area B",
  title: "Compliance",
  blurb: "ZATCA Phase 2, UAE Corporate Tax, KSA transfer pricing.",
  outcomes: ["B01", "B02", "B03"]
}, {
  id: "C",
  label: "Area C",
  title: "Investment Decisions",
  blurb: "Investment cases, Nomu readiness, quality of earnings.",
  outcomes: ["C01", "C02", "C03"]
}, {
  id: "D",
  label: "Lane D",
  title: "Ongoing Partnership",
  blurb: "Fractional finance retainers, audit-firm subcontracts.",
  outcomes: ["D01", "D02"]
}];
const OUTCOMES = {
  A01: {
    code: "A / 01",
    area: "A",
    markets: ["jordan", "ksa", "uae"],
    title: "Financial statements your auditor can sign.",
    body: "Standalone or consolidated IFRS statements, including first-time adoption. Trial balance flows to notes flows to face statements — every number tied to source.",
    feeUsd: 4500,
    feeSar: 17000,
    feeAed: 16500,
    weeksLow: 3,
    weeksHigh: 5,
    tags: ["IFRS 10", "IAS 1", "FTA", "Consolidation"],
    deliverables: ["Draft consolidated financial statements", "Notes to the financial statements", "Working file with full tie-out", "Policy memo for contested positions"]
  },
  A02: {
    code: "A / 02",
    area: "A",
    markets: ["jordan", "ksa", "uae"],
    title: "A second opinion that holds in committee.",
    body: "Independent written opinion on one contested IFRS position — revenue, leases, provisions, consolidation. Memo with paragraph references and draft disclosure language.",
    feeUsd: 5500,
    feeSar: 20625,
    feeAed: 20200,
    weeksLow: 2,
    weeksHigh: 2,
    tags: ["IFRS 15", "IFRS 16", "IAS 37", "IFRS 9"],
    deliverables: ["Technical memo (8–12 pages)", "Workpaper file with paragraph references", "Draft disclosure language", "30-min call with auditor or committee"]
  },
  A03: {
    code: "A / 03",
    area: "A",
    markets: ["jordan", "ksa", "uae"],
    title: "Audit ready before the auditor arrives.",
    body: "Four-week sprint: reconciliations, documented positions, disclosure drafts, and the PBC binder. The audit opens on a clean file.",
    feeUsd: 7500,
    feeSar: 28125,
    feeAed: 27500,
    weeksLow: 4,
    weeksHigh: 4,
    tags: ["PBC", "ISQM 1", "SOCPA", "JACPA"],
    deliverables: ["PBC binder, fully populated", "Reconciliation pack (P&L, BS, equity)", "Position memos for material judgements", "Disclosure drafts cross-referenced to TB"]
  },
  B01: {
    code: "B / 01",
    area: "B",
    markets: ["ksa"],
    title: "ZATCA Phase 2, integrated in six weeks.",
    body: "Wave 24 — SAR 375k revenue threshold, go-live 30 June 2026. Vendor selection, CSID onboarding, sandbox tests, parallel run, cutover.",
    feeUsd: 3200,
    feeSar: 12000,
    feeAed: 11800,
    weeksLow: 4,
    weeksHigh: 6,
    tags: ["UBL 2.1", "FATOORA", "CSID", "BR-KSA"],
    deliverables: ["Vendor shortlist & selection memo", "CSID onboarding & sandbox sign-off", "Parallel run report", "Go-live checklist & runbook"]
  },
  B02: {
    code: "B / 02",
    area: "B",
    markets: ["uae"],
    title: "UAE Corporate Tax, decided before year-end.",
    body: "FY24 amendments, FY25 planning, Small Business Relief vs QFZP decision memo. IFRS-for-SME book rebuilt where needed.",
    feeUsd: 3270,
    feeSar: 12275,
    feeAed: 12000,
    weeksLow: 2,
    weeksHigh: 6,
    tags: ["CT Law", "SBR", "QFZP", "FTA"],
    deliverables: ["SBR vs QFZP decision memo", "FY24 amendment package (if applicable)", "FY25 tax-position file", "Related-party disclosure schedule"]
  },
  B03: {
    code: "B / 03",
    area: "B",
    markets: ["ksa"],
    title: "KSA transfer pricing the auditor will accept.",
    body: "Disclosure form, Master File, Local File — for Zakat payers above SAR 48M and SAR 100M. Benchmarking, functional analysis, and the auditor affidavit package.",
    feeUsd: 4000,
    feeSar: 15000,
    feeAed: 14700,
    weeksLow: 2,
    weeksHigh: 7,
    tags: ["CTDF", "Master File", "Local File", "CbCR"],
    deliverables: ["CTDF (Disclosure Form)", "Local File with benchmarking", "Master File (where threshold met)", "Auditor affidavit package"]
  },
  C01: {
    code: "C / 01",
    area: "C",
    markets: ["jordan", "ksa", "uae"],
    title: "An investment case that survives the board.",
    body: "Market sizing, unit economics, NPV / IRR, sensitivity, governance, risk register, and a written go / no-go recommendation. 25–40 pages, one defensible answer.",
    feeUsd: 8000,
    feeSar: 30000,
    feeAed: 29400,
    weeksLow: 4,
    weeksHigh: 6,
    tags: ["DCF", "Sensitivity", "Governance", "Unit economics"],
    deliverables: ["Investment case (25–40 pages)", "Financial model with sensitivities", "Governance & risk register", "Written go / no-go recommendation"]
  },
  C02: {
    code: "C / 02",
    area: "C",
    markets: ["ksa"],
    title: "Nomu readiness — before you hire the adviser.",
    body: "For SAR 30–80M SMEs targeting Nomu in 12–24 months. Gap report on IFRS, governance, MIS, disclosure. The bridge before you hire a CMA-licensed adviser.",
    feeUsd: 12000,
    feeSar: 45000,
    feeAed: 44100,
    weeksLow: 4,
    weeksHigh: 6,
    tags: ["Nomu", "CMA", "IPO readiness", "Governance"],
    deliverables: ["Readiness gap report", "Remediation runway (Gantt)", "MIS & disclosure scaffolding", "Adviser-shortlist briefing pack"]
  },
  C03: {
    code: "C / 03",
    area: "C",
    markets: ["jordan", "ksa", "uae"],
    title: "Quality of earnings for SME deals.",
    body: "Normalised EBITDA bridge, working-capital walk, debt-like items, revenue quality. Written for corporate buyers in the SAR 10–100M range.",
    feeUsd: 8000,
    feeSar: 30000,
    feeAed: 29400,
    weeksLow: 1,
    weeksHigh: 3,
    tags: ["QoE", "NWC", "Net debt", "Revenue quality"],
    deliverables: ["Normalised EBITDA bridge", "Working-capital walk & target", "Debt-like items schedule", "Revenue-quality memo"]
  },
  D01: {
    code: "D / 01",
    area: "D",
    markets: ["jordan", "ksa", "uae"],
    title: "Fractional finance function — tight scope rails.",
    body: "Month-end close review, IFRS policy memos, board-pack discipline, investor reporting. Twenty to forty hours per month — not outsourced bookkeeping.",
    feeUsd: 2800,
    feeUsdHigh: 5500,
    feeSar: 10500,
    feeAed: 10300,
    retainer: true,
    tags: ["Close review", "Policy memos", "Investor reporting"],
    deliverables: ["Monthly close review memo", "Board-pack template & cadence", "Investor-reporting cadence", "Ad-hoc policy notes"]
  },
  D02: {
    code: "D / 02",
    area: "D",
    markets: ["ksa"],
    title: "Audit-firm subcontract, partner-to-partner.",
    body: "For mid-tier KSA firms with IFRS 15 / 16 construction exposure. Workpapers in your file format, under your signature.",
    feeUsd: 1200,
    feeSar: 4500,
    feeAed: 4400,
    dayRate: true,
    tags: ["IFRS 15", "IFRS 16", "Consolidation", "SOCPA"],
    deliverables: ["Workpapers in your firm's format", "Position memos for the partner file", "Audit-quality review checklist", "Day-rate or fixed per engagement"]
  }
};
const SECTORS = ["Construction & contracting", "Real estate & developers", "Energy & industrial", "Healthcare & clinics", "Hospitality & F&B", "Retail & consumer", "Trading & distribution", "Family group / holding co.", "Audit-firm subcontract", "Other"];
const REVENUE_BANDS = [{
  id: "u5",
  label: "Under SAR 5M",
  note: "Pre-revenue or early stage"
}, {
  id: "5-30",
  label: "SAR 5–30M",
  note: "SME core"
}, {
  id: "30-100",
  label: "SAR 30–100M",
  note: "Mid-market"
}, {
  id: "100-500",
  label: "SAR 100–500M",
  note: "Upper mid-market"
}, {
  id: "500p",
  label: "SAR 500M+",
  note: "Listed-equivalent scale"
}];
const URGENCY = [{
  id: "now",
  label: "Inside 4 weeks",
  note: "Filing or audit deadline"
}, {
  id: "qtr",
  label: "This quarter",
  note: "Plenty of runway"
}, {
  id: "half",
  label: "Next 3–6 months",
  note: "Planning ahead"
}, {
  id: "expl",
  label: "Exploring",
  note: "Pre-decision"
}];
Object.assign(window, {
  MARKETS,
  AREAS,
  OUTCOMES,
  SECTORS,
  REVENUE_BANDS,
  URGENCY
});