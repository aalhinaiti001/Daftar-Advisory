import type { ServiceKey } from "./practice";

type ServicePage = {
  path: string;
  title: string;
  description: string;
  when: string;
  example: string;
  inputs: readonly string[];
  note?: { path: string; label: string };
};

export const SERVICE_PAGES: Record<ServiceKey, ServicePage> = {
  statements: {
    path: "/services/ifrs-financial-statements",
    title: "IFRS Financial Statement Preparation",
    description: "Daftar prepares IFRS financial statements and the supporting working file, tied to the trial balance, for finance teams in Jordan, Saudi Arabia and the UAE.",
    when: "The trial balance is ready, but your team still needs to turn it into a set of IFRS financial statements with notes, comparatives and a clear tie back to the ledger.",
    example: "For a group with subsidiaries, start with the entity trial balances, the consolidation and the eliminations. Agree which balances and disclosures need supporting schedules before drafting the statements.",
    inputs: ["Current and prior period trial balances", "Prior financial statements and notes", "Schedules for significant balances and judgments"],
    note: { path: "/knowledge/ifrs-18-transition-2026", label: "IFRS 18 transition plan and tracker" },
  },
  review: {
    path: "/services/technical-accounting-review",
    title: "Technical Accounting Review",
    description: "Get a written second opinion on an IFRS treatment, accounting judgment or reported number, with an independent conclusion and references your auditor or board can follow.",
    when: "Your team has a proposed accounting treatment and needs someone to test the reasoning against the facts, the records and the relevant standard before the position goes to an auditor or board.",
    example: "If one discount rate is applied across a lease portfolio, bring the leases and the rate methodology. The review can focus on whether the approach fits the portfolio and where the inputs or assumptions need further evidence.",
    inputs: ["The question and your proposed treatment", "Relevant contracts, calculations and accounting policy", "A decision deadline and any open auditor questions"],
    note: { path: "/knowledge/ifrs-18-transition-2026", label: "IFRS 18 transition plan and tracker" },
  },
  audit: {
    path: "/services/audit-readiness",
    title: "Audit Readiness and Preparation",
    description: "Prepare the audit file, address the auditor’s request list and document open issues before fieldwork with Daftar’s audit readiness service.",
    when: "Fieldwork is approaching and reconciliations, schedules or accounting positions still need work. Start with the request list, the evidence already available and the items nobody owns yet.",
    example: "If the previous audit ran late because the supporting schedules arrived separately, agree a single evidence index and an open item register. Give each gap an owner and a due date before fieldwork.",
    inputs: ["The auditor’s request list and fieldwork date", "The trial balance and available schedules", "Prior audit adjustments and unresolved requests"],
    note: { path: "/knowledge/audit-readiness-checklist", label: "Audit readiness checklist and workbook" },
  },
  transaction: {
    path: "/services/quality-of-earnings",
    title: "Quality of Earnings Analysis",
    description: "Assess maintainable earnings, working capital and cash conversion for a transaction with a quality of earnings report and supporting workbook.",
    when: "A decision on a business depends on how much of the reported result can continue and how well those earnings turn into cash. The work focuses on the adjustments and working capital movements that matter to that decision.",
    example: "If reported earnings rose after a large one-off contract, trace the revenue and associated costs to the records. Show the adjustment in a bridge from reported to maintainable earnings and check what happened to receivables and cash.",
    inputs: ["Monthly management accounts and trial balances", "A breakdown of proposed earnings adjustments", "Working capital schedules and cash flow information"],
  },
};
