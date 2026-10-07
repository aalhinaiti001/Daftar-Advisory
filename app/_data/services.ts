/* Long form content for the four service pages at /services/<slug>. The short
   copy (label, blurb, included, excluded, deliverable) stays in practice.ts and
   is shared with the home page and the scope builder; this file carries the
   depth a service page needs to rank and to answer a buyer's questions before
   the first call. Same voice rules as practice.ts: plain, no superlatives, no
   promises about outcomes, and the non-attest boundary stated where it bites. */

import type { ServiceKey } from "./practice";

export type ServicePage = {
  key: ServiceKey;
  slug: string;
  /* <title> without the brand suffix. Primary term first. */
  title: string;
  /* The H1, split around the single italic accent word. */
  h1: [string, string, string];
  /* Meta description. Ends with the call to action. */
  description: string;
  lede: string;
  intro: string[];
  scope: { title: string; body: string }[];
  deliverables: string[];
  sectors: { tag: string; title: string; body: string }[];
  markets: string;
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
};

export const SERVICE_PAGE_ORDER = [
  "ifrs-financial-statements",
  "technical-accounting-review",
  "audit-readiness",
  "quality-of-earnings",
] as const;

export type ServiceSlug = (typeof SERVICE_PAGE_ORDER)[number];

export const SERVICE_PAGES: Record<ServiceSlug, ServicePage> = {
  "ifrs-financial-statements": {
    key: "statements",
    slug: "ifrs-financial-statements",
    title: "IFRS Financial Statements Preparation",
    h1: ["IFRS financial statements, ", "tied", " to the trial balance and ready for the auditor."],
    description:
      "A full IFRS statement set mapped from the trial balance, with the notes and the schedules behind every judgement. Scope it in two minutes.",
    lede:
      "A set of statements is only as good as the file behind it. We prepare the statements and the working file together, so every line can be traced back to the ledger.",
    intro: [
      "This is the work for a company that keeps good books but has never drafted a full IFRS set, a group in its first year of consolidation, or a finance team whose auditor has started asking for the statements rather than the ledger. In Saudi Arabia, Jordan and the UAE the statutory set is IFRS, and the auditor expects management to produce the draft. Most teams have the numbers. What they do not have is the time to turn them into a set that holds together.",
      "The usual failure is familiar. The statements are drafted from last year's PDF. The notes no longer agree to the balances. The mapping from the chart of accounts to the statement lines lives in one person's head. Each of those is fixable, and each costs three times as much to fix once the auditor has started.",
    ],
    scope: [
      {
        title: "Mapping the trial balance",
        body: "Every account in the chart is assigned to a statement line and a note line, in a mapping sheet that is part of the deliverable. Next year's additions follow the same route, and the auditor can see how a ledger balance became a reported figure.",
      },
      {
        title: "Drafting the primary statements",
        body: "The statement of financial position, profit or loss and other comprehensive income, changes in equity and cash flows, with comparatives. The cash flow is built from the workings for non cash items and working capital movements, not plugged.",
      },
      {
        title: "Notes and accounting policies",
        body: "Policies written for this entity rather than copied from a template, and the notes the balances call for: revenue under IFRS 15, leases under IFRS 16, financial instruments and expected credit losses under IFRS 9, income tax and zakat under IAS 12, provisions under IAS 37, related parties under IAS 24.",
      },
      {
        title: "Schedules behind the judgements",
        body: "A standalone working paper for each balance that carries judgement: the expected credit loss matrix, the lease schedules and discount rate, the impairment test, the provisions, the going concern assessment. Each one states the inputs, the method and the standard it rests on.",
      },
      {
        title: "Tie-out",
        body: "Every figure in the set agrees to the trial balance, every note agrees to the face of the statements, and the comparatives agree to the prior year signed set. A tie-out sheet records all three, so the check can be rerun after any late adjustment.",
      },
    ],
    deliverables: [
      "The statement set in Word, or in your own template, with comparatives",
      "The working file in Excel: mapping, tie-out, and the note workings",
      "Accounting policy notes written for the entity",
      "A schedule for each balance that carries judgement",
      "A list of open points for management and for the auditor",
      "A short handover note on how to roll the file forward next year",
    ],
    sectors: [
      {
        tag: "Construction",
        title: "Contracting and projects",
        body: "Revenue over time under IFRS 15, contract assets and liabilities, retentions, variation orders and claims, onerous contracts under IAS 37, and joint arrangements under IFRS 11.",
      },
      {
        tag: "Services",
        title: "Professional and managed services",
        body: "The timing of revenue, unbilled work and deferred income, employee benefit liabilities, and lease portfolios under IFRS 16 across offices and vehicles.",
      },
      {
        tag: "Investment",
        title: "Holding and investment entities",
        body: "Fair value under IFRS 13, classification under IFRS 9, the line between consolidation and the investment entity exception under IFRS 10, equity accounting under IAS 28, and related party disclosure.",
      },
    ],
    markets:
      "In Saudi Arabia the set follows IFRS as endorsed by SOCPA, with zakat and income tax presented for ZATCA. In the UAE, corporate tax has made deferred tax under IAS 12 a live line for most entities. In Jordan the set is IFRS as issued, often reported upward to a GCC parent. We prepare in Arabic and in English, and reconcile the two where both are filed.",
    faq: [
      {
        q: "Do we need a full set, or can you fix the one we have?",
        a: "Either. If an existing draft holds up, we tie it out and repair what does not. If the mapping cannot be relied on, starting again from the trial balance is faster than patching, and we will say which it is after reading the file.",
      },
      {
        q: "Our year end closes in six weeks. Is that enough time?",
        a: "It depends on the state of the trial balance, not on the statements. The statements are the fast part. The schedules behind the judgements are slow, because they need decisions from the people with the least free time. Say so in the scope builder and we reply in two working days with a straight answer.",
      },
      {
        q: "Will our auditor accept statements prepared by you?",
        a: "The auditor audits management's statements whoever typed them, and management stays responsible for them. We prepare under management's direction and document the workings so the auditor can test them. We do not audit the file. Daftar is a non-attest practice and does not sign an opinion.",
      },
      {
        q: "What about IFRS 18?",
        a: "IFRS 18 applies to periods beginning on or after 1 January 2027, which makes 2026 the comparative year. A 2026 set prepared by us carries the operating, investing and financing categories in the mapping, so it can be re-presented without a second mapping exercise.",
      },
      {
        q: "Can you prepare the set in Arabic?",
        a: "Yes. We work in Arabic and English. Where the statutory set is filed in Arabic we prepare both languages from the same workings and reconcile them line by line.",
      },
    ],
    related: [
      { title: "IFRS 18 lands in 2027. The comparative year is 2026.", href: "/knowledge/ifrs-18-transition-2026" },
      { title: "The audit readiness checklist", href: "/knowledge/audit-readiness-checklist" },
    ],
  },

  "technical-accounting-review": {
    key: "review",
    slug: "technical-accounting-review",
    title: "IFRS Technical Accounting Review",
    h1: ["A second read on a number or a treatment, ", "written", " to hold up."],
    description:
      "An independent technical review of an IFRS position, with a memo your auditor or board can follow: standard, evidence, alternatives. Scope it in two minutes.",
    lede:
      "Most accounting disputes are not about the standard. They are about whether anyone wrote the reasoning down while there was still time to change the answer.",
    intro: [
      "A technical review is what a finance team asks for when the auditor has pushed back on a treatment, when a board wants an independent view before a result goes out, when a transaction arrives that the books have never seen, or when a group auditor asks for a position paper. The question is usually narrow. The consequences are not.",
      "We read the position and the evidence behind it, apply the standard, set out the alternatives, and write the conclusion in a memo with paragraph level references. The memo is management's, not ours: it records management's position in a form the auditor can test, and it stays on the file after the question is closed.",
    ],
    scope: [
      {
        title: "Reading the position and the evidence",
        body: "The contracts, board minutes and correspondence, the entries as booked, and the auditor's questions as asked. The facts are set out before the standard is applied, because most disagreements turn out to be about the facts.",
      },
      {
        title: "Applying the standard",
        body: "Revenue under IFRS 15, lease identification and discount rates under IFRS 16, impairment and cash generating units under IAS 36, classification and expected credit losses under IFRS 9, business combinations against asset acquisitions under IFRS 3, control under IFRS 10, provisions under IAS 37, income tax and zakat under IAS 12, and the line between an error and a change in estimate under IAS 8.",
      },
      {
        title: "The alternatives, and why they were set aside",
        body: "A conclusion is only as strong as the treatments it rejected. Each alternative is stated with the reason it does not fit the facts, so the reader can see the choice was made rather than assumed.",
      },
      {
        title: "The memo",
        body: "The facts relied on, the standard with paragraph references, the conclusion, the journal entries it implies and the disclosure it requires. Written to be read by an auditor, an audit committee or a parent company controller without a call to explain it.",
      },
      {
        title: "The response to the auditor",
        body: "Where a query is open, we draft the reply from the memo so the auditor receives the reasoning and the evidence together. The reply goes out under management's name. We do not represent you to the auditor or the regulator.",
      },
    ],
    deliverables: [
      "A technical memo with paragraph level references to the standards",
      "The facts and documents relied on, listed",
      "The alternatives considered and the reason each was set aside",
      "The proposed journal entries and the disclosure consequences",
      "Where a model sits behind the number, the model in Excel",
      "A draft reply to the auditor's query, if one is open",
    ],
    sectors: [
      {
        tag: "Construction",
        title: "Contracting and projects",
        body: "Contract modifications, claims and variations, measuring progress, onerous contracts, retentions and advances, and the accounting for joint arrangements and consortia.",
      },
      {
        tag: "Services",
        title: "Professional and managed services",
        body: "Principal against agent, licences and multi element contracts, deferred revenue, performance bonuses, and subscription style arrangements where the obligation is satisfied over time.",
      },
      {
        tag: "Investment",
        title: "Holding and investment entities",
        body: "Control and significant influence, the fair value hierarchy, impairment of investments in subsidiaries, put and call options over non controlling interests, and dividend recognition.",
      },
    ],
    markets:
      "In Saudi Arabia the questions cluster around the interaction of zakat and income tax with IAS 12 and around SOCPA endorsements. In the UAE the first corporate tax periods have raised deferred tax questions most entities had never booked. In Jordan the work is often a group reporting question, with the entity reporting upward to a GCC parent on a different timetable.",
    faq: [
      {
        q: "Is this an audit opinion?",
        a: "No. Daftar is a non-attest practice. A technical memo is advice to management, and it records management's position. The auditor forms their own view, and the memo is written so they can test ours.",
      },
      {
        q: "Our auditor disagrees with us. Will you take our side?",
        a: "We take the standard's side. If the position holds, the memo shows why in a form the auditor can follow. If it does not, we say so early, which is cheaper than finding out in the audit report.",
      },
      {
        q: "How long does a review take?",
        a: "A single position with the evidence to hand takes one to two weeks. Several linked positions, or a model behind the number, take three to four. When it is urgent we do a first pass inside a week, if we can staff it.",
      },
      {
        q: "Can you review a treatment before the auditor sees it?",
        a: "That is the best time to ask. A position written down before fieldwork is a position the auditor tests. One reconstructed during fieldwork is a position the auditor argues with.",
      },
      {
        q: "Do you cover IFRS for SMEs, or local tax positions?",
        a: "Full IFRS as adopted in Saudi Arabia, Jordan and the UAE is the base, and we review IFRS for SMEs on the same footing. A tax or legal position belongs with a tax or legal adviser, and we say so when that is what the question turns out to be.",
      },
    ],
    related: [
      { title: "IFRS 18 lands in 2027. The comparative year is 2026.", href: "/knowledge/ifrs-18-transition-2026" },
      { title: "Saudi compliance in 2026", href: "/knowledge/saudi-compliance-2026" },
    ],
  },

  "audit-readiness": {
    key: "audit",
    slug: "audit-readiness",
    title: "Audit Readiness and Audit Preparation Services",
    h1: ["Audit readiness: the file prepared before the auditor ", "arrives", "."],
    description:
      "Audit preparation for Jordan, Saudi Arabia and the UAE: the request list answered with evidence, judgements written down before fieldwork. Scope it in two minutes.",
    lede:
      "Audits overrun when the file arrives in pieces. Audit readiness is the work of assembling it once, in the order the auditor will read it.",
    intro: [
      "This is the engagement for a first audit, a change of auditor, a group audit with a deadline set by the parent, or a finance team that is stretched across the close and the audit at the same time. The auditor's fee is set on the assumption that the file is ready. When it is not, the overrun is paid twice: once in the auditor's extra hours, and once in the finance team's.",
      "We walk through the file the way the auditor will, answer the request list in advance, and write down the positions that are likely to be challenged before anyone challenges them. The work is preparation. It is not the audit, and we do not do the auditor's testing for them.",
    ],
    scope: [
      {
        title: "What the auditor will test first",
        body: "The state of the close, whether the trial balance has stopped moving, the opening balances against the prior year signed set, bank and intercompany agreement, and cut off. If any of these is loose, nothing else in the file can be relied on yet.",
      },
      {
        title: "The request list, answered in advance",
        body: "The auditor's list mapped to an owner and a date, each item with its evidence attached, and the standard supporting schedules prepared: fixed assets, receivables ageing and expected credit losses, payables and accruals, provisions, leases, borrowings, related parties and equity.",
      },
      {
        title: "Reconciliations and tie-outs",
        body: "Sub ledgers to the general ledger, bank statements to the cash book, intercompany balances in both directions, VAT and zakat returns to the ledger, and payroll to the ledger. Each reconciliation is a working paper, not a verbal assurance.",
      },
      {
        title: "The positions likely to be challenged",
        body: "A memo on the judgements: going concern, revenue recognition, impairment, expected credit losses, provisions, lease terms and discount rates, related party transactions. Each one with the evidence and the reasoning written down before fieldwork, not reconstructed during it.",
      },
      {
        title: "The open item register",
        body: "What is still missing, who owns it, and when it will exist. The register is updated through fieldwork so the auditor and the finance team are working from the same list.",
      },
    ],
    deliverables: [
      "The audit file, indexed to the auditor's request list",
      "An open item register with owners and dates",
      "Reconciliations and tie-out sheets for the main balances",
      "A memo on the positions likely to be challenged",
      "A readiness note on what is still at risk before fieldwork starts",
      "The audit readiness checklist as the baseline, thirty six checks in six groups",
    ],
    sectors: [
      {
        tag: "Construction",
        title: "Contracting and projects",
        body: "Progress measurement and surveys, cost to complete estimates, subcontractor accruals, retentions and claims. These are the balances auditors sample most heavily, and the ones most often supported by memory rather than paper.",
      },
      {
        tag: "Services",
        title: "Professional and managed services",
        body: "Unbilled revenue and cut off, payroll and end of service benefits, lease schedules, and the customer contracts behind deferred income.",
      },
      {
        tag: "Investment",
        title: "Holding and investment entities",
        body: "Valuation support for unquoted holdings, confirmations, group structure charts, intercompany agreement, and the documents behind related party balances.",
      },
    ],
    markets:
      "In Saudi Arabia the zakat and tax computations are prepared alongside the statements so the two agree, and e-invoicing data is reconciled to the ledger before the auditor asks. In the UAE the corporate tax return basis is aligned with the statements. In Jordan the file is prepared with the statutory filing calendar in view, and with any upward reporting to a parent on its own timetable.",
    faq: [
      {
        q: "Is this the same as the audit?",
        a: "No. We prepare, your auditor tests. Daftar is a non-attest practice: we do not sign anything, and we do not speak to the auditor on your behalf unless you ask us to join a call.",
      },
      {
        q: "When should we start?",
        a: "Six to eight weeks before fieldwork for a first audit, and about four for a repeat one. The items that take longest are the judgements, because the people who have to agree them are the ones with the least free time.",
      },
      {
        q: "Can you work from our auditor's PBC list?",
        a: "Yes, and we prefer to. The list becomes the index of the file, so the auditor opens a folder that matches the request they sent.",
      },
      {
        q: "Our team is small. What do you need from us?",
        a: "Access to the ledger and the documents, one named contact, and decisions on the judgements when we bring them. We prepare, your team reviews. That is the division of labour the engagement is built on.",
      },
      {
        q: "Does audit readiness mean a clean opinion?",
        a: "No. It removes the overruns caused by a file that was not ready. The opinion depends on the evidence and on the auditor's judgement, and we make no promise about it.",
      },
    ],
    related: [
      { title: "The audit readiness checklist", href: "/knowledge/audit-readiness-checklist" },
      { title: "Saudi e-invoicing Phase 2: the readiness checklist", href: "/knowledge/saudi-e-invoicing-phase-2-checklist" },
    ],
  },

  "quality-of-earnings": {
    key: "transaction",
    slug: "quality-of-earnings",
    title: "Quality of Earnings Reports for Deals",
    h1: ["Quality of earnings: maintainable earnings, working capital, and the adjustments that ", "matter", "."],
    description:
      "Quality of earnings for buyers, sellers and investors: maintainable earnings, working capital, net debt, every adjustment traced to the records. Scope it in two minutes.",
    lede:
      "A reported profit is a starting point. The deal is priced on what the business can repeat.",
    intro: [
      "A quality of earnings report is what a buyer commissions before the price is agreed, what a seller prepares before a process starts, what an investor asks for at a funding round, and what a board wants before it sets a dividend policy. Many businesses in this region were built for an owner and a tax return, not for an outside reader. The books are not wrong. They are just not written for the question a buyer is asking.",
      "We take reported earnings apart and put them back together as maintainable earnings, with the working capital and net debt that sit behind them. Every adjustment is traced to the ledger, a contract or a management explanation, and the ones we could not verify are listed as such.",
    ],
    scope: [
      {
        title: "Reported to adjusted earnings",
        body: "Owner and family costs, one off items, related party pricing, accounting policy differences, cut off, and run rate adjustments. Each one stated, quantified and traced, with the direction and the reason.",
      },
      {
        title: "Revenue and margin",
        body: "Revenue by customer, product and contract. Concentration, recurring against non recurring, pricing changes, and the gross margin by line so the reader can see where the profit is actually made.",
      },
      {
        title: "Working capital",
        body: "The normal level of working capital, seasonality, debtor days, inventory and supplier terms, and a proposed basis for the working capital peg in the sale agreement.",
      },
      {
        title: "Cash conversion and net debt",
        body: "Earnings to cash, capital expenditure, and the debt like items that move the price: unpaid zakat and tax, end of service benefit liabilities, accrued bonuses, deferred revenue, lease liabilities and amounts due to related parties.",
      },
      {
        title: "Tracing to the records",
        body: "Each adjustment is tied to the ledger, a contract or a documented management explanation. What could not be verified is stated plainly, with what would be needed to verify it.",
      },
    ],
    deliverables: [
      "The quality of earnings report: findings, adjustments and the databook",
      "The adjusted earnings bridge, reported to maintainable",
      "The net working capital analysis and a proposed peg basis",
      "A net debt and debt like items schedule",
      "The supporting workbook with every adjustment traced",
      "A list of the items we could not verify, and what would be needed",
    ],
    sectors: [
      {
        tag: "Construction",
        title: "Contracting and projects",
        body: "Backlog and its margin, cost to complete estimates, retentions, and claims that have been taken to earnings before they have been agreed.",
      },
      {
        tag: "Services",
        title: "Professional and managed services",
        body: "Customer concentration and churn, unbilled work, bonus and commission accruals, and the staff costs that follow the key people out of the door.",
      },
      {
        tag: "Investment",
        title: "Holding and investment entities",
        body: "Look through to the operating businesses, dividend income against operating profit, fair value gains in the result, and the structure behind the equity.",
      },
    ],
    markets:
      "In Saudi Arabia, unpaid zakat, Saudisation related costs and end of service benefit liabilities are the debt like items most often missed. In the UAE the first corporate tax periods and free zone status change the after tax picture. In Jordan the work is often on a target reporting to a GCC acquirer, in a different currency and on a different year end.",
    faq: [
      {
        q: "Is this financial due diligence?",
        a: "It is the core of it. Financial due diligence can also cover tax, legal and commercial questions. We scope those out in writing and point you to the specialists, so the report says what it covers and nothing it does not.",
      },
      {
        q: "Buy side or sell side?",
        a: "Both. A sell side report prepared early removes the surprises a buyer's adviser would otherwise find, and it keeps the negotiation on the number rather than on the file.",
      },
      {
        q: "How long does it take?",
        a: "Three to four weeks with data room access from the start. When a deal is moving faster, a first read on the main adjustments inside a week, if we can staff it.",
      },
      {
        q: "Is it an assurance report or a valuation?",
        a: "Neither. Daftar is a non-attest practice. The report is advice to the party that commissioned it. It does not express an opinion on the financial statements and it does not put a value on the business.",
      },
      {
        q: "What do you need from the business?",
        a: "Monthly management accounts for the last two to three years, the trial balances and general ledger, bank statements, the main customer and supplier contracts, payroll, and the tax and zakat filings. We send the request list on the first day.",
      },
    ],
    related: [
      { title: "The audit readiness checklist", href: "/knowledge/audit-readiness-checklist" },
      { title: "Saudi compliance in 2026", href: "/knowledge/saudi-compliance-2026" },
    ],
  },
};

export function serviceBySlug(slug: string): ServicePage | undefined {
  return (SERVICE_PAGE_ORDER as readonly string[]).includes(slug)
    ? SERVICE_PAGES[slug as ServiceSlug]
    : undefined;
}

/* Service key → page slug, for links from the home ledger and the footer. */
export const SERVICE_SLUG: Record<ServiceKey, ServiceSlug> = {
  statements: "ifrs-financial-statements",
  review: "technical-accounting-review",
  audit: "audit-readiness",
  transaction: "quality-of-earnings",
};
