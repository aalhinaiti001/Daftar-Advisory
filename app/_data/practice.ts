/* Content for the Daftar site. Shared by the home page and the scope builder
   so the four service lines stay in step across both. Copy is deliberately
   free of hyphens and dashes. */

export type ServiceKey = "statements" | "audit" | "review" | "transaction";

export type Service = {
  label: string;
  ref: string;
  blurb: string;
  outcome: string;
  included: string[];
  excluded: string[];
  deliverable: string;
};

export const SERVICE_ORDER: ServiceKey[] = ["statements", "audit", "review", "transaction"];

export const SERVICES: Record<ServiceKey, Service> = {
  statements: {
    label: "Financial statements",
    ref: "A/01",
    blurb:
      "Preparation or clean up of a full IFRS set, tied back to the trial balance and ready for the auditor.",
    outcome:
      "A complete set of IFRS financial statements, agreed to the trial balance, with notes and supporting schedules an auditor can work from.",
    included: [
      "Mapping the trial balance to the statement lines",
      "Drafting the primary statements and the notes",
      "Supporting schedules for the balances that carry judgment",
    ],
    excluded: ["Bookkeeping and transaction processing", "The audit opinion itself"],
    deliverable: "Statement set plus the live working file",
  },
  audit: {
    label: "Audit readiness",
    ref: "A/02",
    blurb:
      "Preparation before the auditor arrives, so the audit runs on your calendar rather than theirs.",
    outcome:
      "A prepared file and a clear list of open items, so the audit starts on evidence rather than on requests.",
    included: [
      "A walk through the areas the auditor will test first",
      "A request list answered in advance, with the evidence attached",
      "A short memo on the positions most likely to be challenged",
    ],
    excluded: ["Acting as your auditor", "Signing any opinion on the statements"],
    deliverable: "Prepared audit file and open item register",
  },
  review: {
    label: "Technical review",
    ref: "A/03",
    blurb:
      "A second read on a number, a memo, or a treatment, written so it holds up under challenge.",
    outcome:
      "An independent view on the treatment, with the reasoning written down in a form your auditor or board can follow.",
    included: [
      "Reading the position and the evidence behind it",
      "A written conclusion with the standard references",
      "A note on the alternatives considered and why they were set aside",
    ],
    excluded: ["Preparing the underlying records", "Representing you to the regulator"],
    deliverable: "Technical memo with references",
  },
  transaction: {
    label: "Transaction support",
    ref: "B/01",
    blurb:
      "Financial work around a deal: quality of earnings, working capital, and the numbers behind the model.",
    outcome:
      "A clear view of what the numbers say before the money moves, and where the risk actually sits.",
    included: [
      "Testing the earnings quality and the working capital position",
      "Reading the model for the assumptions that carry the value",
      "A findings note written for the people making the decision",
    ],
    excluded: ["Legal and tax structuring advice", "Valuation opinions for regulatory filing"],
    deliverable: "Findings note and a reusable model",
  },
};

export const FOCUS = [
  { key: "first", label: "First year under IFRS", adds: "Opening balance work and the transition disclosures" },
  { key: "group", label: "Group with subsidiaries", adds: "Consolidation, eliminations, and the group level checks" },
  { key: "open", label: "Auditor questions still open", adds: "A response file for the points the auditor has raised" },
  { key: "board", label: "Board or investor deadline", adds: "A short summary written for readers outside finance" },
  { key: "thin", label: "The team is stretched", adds: "We carry the preparation, your team reviews rather than builds" },
] as const;

export const TIMING = [
  {
    key: "explore",
    code: "T0",
    label: "Still exploring",
    duration: "Two to three weeks once we start",
    next: "We reply within two working days with a plain read on fit.",
  },
  {
    key: "quarter",
    code: "T1",
    label: "This quarter",
    duration: "Three to four weeks end to end",
    next: "We confirm scope and fee in writing before any work begins.",
  },
  {
    key: "urgent",
    code: "T2",
    label: "Urgent",
    duration: "A first pass inside one week",
    next: "Send this today. Urgent work is accepted only when we can staff it properly.",
  },
] as const;

export const NOTES: { tag: string; title: string; body: string; href?: string }[] = [
  {
    tag: "IFRS 18",
    title: "The comparative year is 2026",
    body: "Mandatory from 2027, which makes the year in progress the one being restated.",
    href: "/knowledge/ifrs-18-transition-2026",
  },
  {
    tag: "KSA",
    title: "Electronic invoicing waves",
    body: "What changes at each wave, and the parts finance teams usually discover late.",
    href: "/knowledge/saudi-compliance-2026",
  },
  {
    tag: "Audit",
    title: "The audit readiness checklist",
    body: "Thirty six checks to work through before the auditor arrives, in the order we run them.",
    href: "/knowledge/audit-readiness-checklist",
  },
  { tag: "UAE", title: "Corporate tax, first season", body: "Where the pressure lands in a first filing year, and what to fix beforehand." },
];

export const FAQ = [
  { num: "01", q: "What does Daftar actually do?", a: "Finance work that carries weight: statements, audit preparation, technical review, and the numbers behind a transaction. We take the problem, not the whole function." },
  { num: "02", q: "How do engagements work?", a: "Scope, fee, and deliverable are agreed in writing first. Then the work runs against that document, and changes to it are agreed the same way." },
  { num: "03", q: "Who will I be working with?", a: "A senior practitioner, directly. There is no junior team behind the curtain and no account layer in front of it." },
  { num: "04", q: "When should we reach out?", a: "Before the deadline rather than during it. The earlier the read, the cheaper the fix. A short call costs nothing." },
  { num: "05", q: "What do we keep at the end?", a: "The deliverable and the working file behind it, built so your team can run it again next period without us." },
];

export const STEPS = [
  { num: "01", title: "A short call", body: "Twenty minutes on the situation. You will get a straight answer on whether this is work we should take." },
  { num: "02", title: "Scope in writing", body: "What we solve, what we exclude, what you receive, and the fee. Nothing starts before that is agreed." },
  { num: "03", title: "The work, in the open", body: "One senior contact and a working file you can see as it develops. No surprises at delivery." },
  { num: "04", title: "Handover", body: "The deliverable, the workings, and a short note on how to run it again next period." },
];

export const EMAIL = "ahmad@daftaradvisory.com";
