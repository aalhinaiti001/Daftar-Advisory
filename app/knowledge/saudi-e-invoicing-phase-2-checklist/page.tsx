import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";
import checklist from "../../_data/saudi-einvoicing-phase-2-checklist.json";

const TITLE = "Saudi e-invoicing Phase 2: the readiness checklist";
const DESC =
  "Which FATOORA wave applies, what clearance and reporting each invoice type needs, and the twenty six checks to work through before the integration deadline. A task companion to our Saudi compliance overview.";
const URL = "/knowledge/saudi-e-invoicing-phase-2-checklist";
const PUBLISHED = "2026-08-30";
const FILE = "/saudi-e-invoicing-phase-2-checklist.xlsx";
const PARENT = "/knowledge/saudi-compliance-2026";

const COUNT = checklist.groups.reduce((n, g) => n + g.items.length, 0);

export const metadata: Metadata = {
  title: `${TITLE} — Daftar Advisory`,
  description: DESC,
  /* No languages map: unlike the parent overview this has no Arabic
     counterpart, per the standing no /ar expansion ruling. */
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    siteName: "Daftar Advisory",
    title: TITLE,
    description: DESC,
    url: URL,
    images: ["/og-daftar.png"],
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ahmad Al Hinaiti",
    jobTitle: "Founder",
    url: "https://daftaradvisory.com/about",
  },
  publisher: { "@type": "Organization", name: "Daftar Advisory", url: "https://daftaradvisory.com" },
  mainEntityOfPage: `https://daftaradvisory.com${URL}`,
  image: "https://daftaradvisory.com/og-daftar.png",
  inLanguage: "en",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: TITLE, item: `https://daftaradvisory.com${URL}` },
  ],
};

/* Only the two waves the parent article establishes. Earlier waves covered
   higher thresholds and their deadlines have passed. */
const WAVES: [string, string, string][] = [
  ["Wave 24", "Revenue subject to VAT above SAR 375,000", "30 June 2026, now passed"],
  [
    "Wave 25",
    "Revenue subject to VAT above SAR 187,500 in any of 2022, 2023, 2024 or 2025",
    "1 February 2027",
  ],
];

const FLOWS: [string, string, string][] = [
  ["Typically", "B2B", "B2C"],
  ["Model", "Clearance", "Reporting"],
  [
    "Timing",
    "Submitted to ZATCA before the invoice reaches the customer",
    "Reported to ZATCA within the prescribed period after issuance",
  ],
  [
    "What the customer gets",
    "The cleared invoice",
    "The invoice at the point of sale, carrying a QR code",
  ],
];

const FAQ: { num: string; q: string; a: string }[] = [
  {
    num: "01",
    q: "ZATCA has not notified us. Are we out of scope?",
    a: "No. A notification confirms the wave, it does not create the obligation, and waiting for one costs you the lead time you need for onboarding and testing. Work the thresholds against your own VAT-subject revenue for each year, reach a conclusion, and keep the working. If the conclusion is that you are in Wave 25, the deadline is 1 February 2027 whether or not the letter has arrived.",
  },
  {
    num: "02",
    q: "Our accounting software already produces a PDF invoice with a QR code. Is that Phase 2?",
    a: "No. Phase 1 asks you to generate and retain electronic invoices. Phase 2 asks your system to produce structured XML data, stamp it, chain it to the invoice before it, and talk to ZATCA directly, either for clearance or for reporting. A PDF with a QR code satisfies neither the format nor the integration requirement, and the gap between the two is a systems project rather than a settings change.",
  },
  {
    num: "03",
    q: "We run one ERP but forty POS terminals. What does that change?",
    a: "It changes the size of section C. Onboarding and cryptographic stamp identifiers apply per solution unit and per device, so forty terminals is forty onboardings, forty sets of credentials, and forty things whose expiry someone has to track. Teams routinely scope this from the ERP alone and discover the terminals late.",
  },
  {
    num: "04",
    q: "Is this the same as the transfer pricing work?",
    a: "Different regime, same direction, and usually the same overstretched team. E-invoicing gives ZATCA transaction-level visibility; transfer pricing asks you to evidence the basis of related-party dealings. Our overview of both sits in the Saudi compliance note this checklist belongs to.",
  },
];

export default function SaudiEInvoicingPhase2Checklist() {
  return (
    <div className="dft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <SiteHeader active="knowledge" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Knowledge</Eyebrow>
          <h1 className="dft-h1">
            Saudi e-invoicing Phase 2: the <em>readiness</em> checklist.
          </h1>
          <div className="dft-article-meta">
            <span>Ahmad Al Hinaiti</span>
            <span>·</span>
            <span>Founder, Daftar Advisory</span>
            <span>·</span>
            <span>30 August 2026</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              Phase 2 is not a tax filing. It is a change to the systems that issue your invoices, and
              it fails in the places tax teams do not own.
            </p>
            <p>
              Our{" "}
              <Link href={PARENT}>Saudi compliance overview</Link> covers what changed in 2026 and
              why. This is the companion piece: what to actually work through, in what order, before
              the integration deadline for your wave.
            </p>
            <p>
              The pattern we see is consistent. Scope gets set from the ERP, the POS estate and the
              e-commerce platform surface late, and the work that was sized as a tax project turns
              out to need IT for onboarding, credentials and connectivity. Sections A and C are where
              that goes wrong, and they are the two worth reading first.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · Which wave applies</Eyebrow>
            <div className="dft-article">
              <p>
                Phase 2 is being rolled out in waves by revenue subject to VAT. Wave 25, announced on
                24 July 2026, is the one currently in front of most businesses that are not yet
                integrated.
              </p>
            </div>
            <div className="dft-article-table-wrap">
              <table className="dft-article-table">
                <caption>Current and immediately preceding waves</caption>
                <thead>
                  <tr>
                    <th scope="col">Wave</th>
                    <th scope="col">Who it covers</th>
                    <th scope="col">Integration deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {WAVES.map(([wave, who, deadline]) => (
                    <tr key={wave}>
                      <th scope="row" style={{ whiteSpace: "nowrap" }}>{wave}</th>
                      <td>{who}</td>
                      <td>{deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dft-article">
              <p>
                Earlier waves covered higher thresholds and their deadlines have passed. The direction
                is the point: each wave reaches further down, so a business outside the current one is
                usually looking at the next rather than at an exemption.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 02 · Clearance or reporting</Eyebrow>
            <div className="dft-article">
              <p>
                Phase 2 splits invoices into two flows with different timing. Which one applies is
                decided by the invoice type, not by the system issuing it, so a business selling both
                B2B and B2C has to support both.
              </p>
            </div>
            <div className="dft-article-table-wrap">
              <table className="dft-article-table">
                <caption>The two invoice flows</caption>
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">Standard tax invoice</th>
                    <th scope="col">Simplified tax invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {FLOWS.map(([label, standard, simplified]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{standard}</td>
                      <td>{simplified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dft-article">
              <p>
                The consequence worth planning for is the clearance one. If a standard invoice has to
                reach ZATCA before it reaches the customer, then an outage is not an IT incident, it
                is a billing stoppage. Agree what the business does in that case before go-live, not
                during it.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 03 · The checklist</Eyebrow>
            {checklist.groups.map((group) => (
              <div className="dft-check-group" key={group.ref}>
                <h3>
                  {group.ref}. {group.title}
                </h3>
                <p>{group.blurb}</p>
                <ul className="dft-check">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <span>
                        {group.ref}/{String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 04 · Take it with you</Eyebrow>
            <div className="dft-download">
              <span className="dft-label">The working file</span>
              <h3>Phase 2 readiness checklist</h3>
              <p>
                All {COUNT} checks as a workbook, with owner, status and evidence columns left blank
                for your team. Useful as the shared list between finance and IT, which is usually the
                thing that is missing.
              </p>
              <a className="dft-btn-sm" href={FILE} download>
                Download the checklist (XLSX)
              </a>
            </div>
            <div className="dft-article">
              <p>
                One caution on using it. The checks are deliberately task-level rather than a
                restatement of ZATCA&rsquo;s technical specification, which is versioned and updated.
                Confirm the detail of each requirement against the current specification and against
                any notification you have received.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 05 · Questions we get asked</Eyebrow>
            <div className="dft-faq dft-faq-article">
              {FAQ.map((f) => (
                <article key={f.num}>
                  <code>{f.num}</code>
                  <div>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">The deadline is fixed. The scope is the part you control.</h2>
            <div>
              <p>
                We read the invoicing estate, confirm which wave and which flows apply, and hand back
                a scoped readiness plan your finance and IT teams can run against. Fixed scope, fixed
                fee, and the file stays with you.
              </p>
              <Link className="dft-btn dft-btn-light" href="/scope?service=review">
                Scope a Phase 2 readiness review
              </Link>
            </div>
          </div>
        </section>

        <section className="dft-wrap">
          <p className="dft-article-note">
            This is a general preparation aid reflecting the position as at August 2026, and does not
            constitute tax, legal, or regulatory advice. Daftar is a non-attest advisory practice and
            does not act as your auditor or as a certified e-invoicing solution provider. Confirm
            every requirement against ZATCA&rsquo;s current technical specifications, the applicable
            regulations, and any notification issued to you.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
