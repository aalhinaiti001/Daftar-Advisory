/* Index of the Knowledge articles, for /knowledge and the sitemap. Each entry
   mirrors the constants at the top of its page.tsx; when an article's date or
   title changes, change it in both places. */

export type Article = {
  tag: string;
  title: string;
  description: string;
  href: string;
  published: string;
  modified?: string;
  /* Set when an Arabic counterpart exists at /ar + href. */
  arabic?: boolean;
};

export const ARTICLES: Article[] = [
  {
    tag: "IFRS 18",
    title: "IFRS 18 lands in 2027. The comparative year is 2026.",
    description:
      "What the new presentation standard changes, why the 2026 statements are already in scope, and a transition plan you can run on this year's file.",
    href: "/knowledge/ifrs-18-transition-2026",
    published: "2026-08-19",
    modified: "2026-09-12",
  },
  {
    tag: "Audit",
    title: "The audit readiness checklist",
    description:
      "Thirty six checks across the close, the supporting schedules, the judgements, the controls evidence and the request list. What to have ready before the auditor arrives.",
    href: "/knowledge/audit-readiness-checklist",
    published: "2026-08-30",
  },
  {
    tag: "KSA",
    title: "Saudi e-invoicing Phase 2: the readiness checklist",
    description:
      "The integration phase of ZATCA e-invoicing, wave by wave, and the checks a finance team runs before its wave date.",
    href: "/knowledge/saudi-e-invoicing-phase-2-checklist",
    published: "2026-08-30",
  },
  {
    tag: "KSA",
    title: "Saudi compliance in 2026",
    description:
      "The e-invoicing waves, zakat and tax filings, and the reporting calendar a Saudi entity works to this year.",
    href: "/knowledge/saudi-compliance-2026",
    published: "2026-08-11",
    arabic: true,
  },
];

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
