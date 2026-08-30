import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";

const TITLE = "Saudi Compliance in 2026";
const DESC =
  "What businesses need to know about e-invoicing and transfer pricing: ZATCA's FATOORA Wave 25, transfer pricing for zakat payers, and the disclosure form with no minimum threshold.";
const URL = "/knowledge/saudi-compliance-2026";
const PUBLISHED = "2026-08-11";

export const metadata: Metadata = {
  title: `${TITLE} — Daftar Advisory`,
  description: DESC,
  alternates: {
    canonical: URL,
    languages: { en: URL, ar: "/ar/knowledge/saudi-compliance-2026", "x-default": URL },
  },
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
  author: { "@type": "Person", name: "Ahmad Al Hinaiti", url: "https://daftaradvisory.com/about" },
  publisher: { "@type": "Organization", name: "Daftar Advisory", url: "https://daftaradvisory.com" },
  mainEntityOfPage: `https://daftaradvisory.com${URL}`,
  image: "https://daftaradvisory.com/og-daftar.png",
  inLanguage: "en",
};

export default function SaudiCompliance2026() {
  return (
    <div className="dft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <SiteHeader active="knowledge" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Knowledge</Eyebrow>
          <h1 className="dft-h1">
            Saudi compliance in 2026: <em>e-invoicing</em> and transfer pricing.
          </h1>
          <div className="dft-article-meta">
            <span>Ahmad Al Hinaiti</span>
            <span>·</span>
            <span>Amman · MENA · Remote</span>
            <span>·</span>
            <span>11 August 2026</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              Saudi Arabia&rsquo;s tax compliance framework is moving deeper into the way businesses
              operate. In 2026, two areas deserve particular attention: ZATCA&rsquo;s expanding
              FATOORA e-invoicing programme, and the broader application of transfer pricing
              requirements, including to zakat-paying businesses.
            </p>
            <p>
              For finance leaders, the significance goes beyond another filing deadline. Both regimes
              increasingly require compliance to be built into systems, transaction processes,
              documentation, and governance.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 01 · E-invoicing</Eyebrow>
            <h2 className="dft-h2-sm" style={{ marginBottom: 28 }}>
              Phase 2 continues to expand.
            </h2>
            <div className="dft-article">
              <p>Saudi Arabia&rsquo;s e-invoicing framework remains divided into two stages.</p>
              <p>
                Phase 1, the Generation Phase, has applied since December 2021 and requires taxpayers
                to generate and retain electronic invoices through compliant electronic solutions.
              </p>
              <p>
                Phase 2, the Integration Phase, began in January 2023 and is being implemented
                progressively through taxpayer waves. Under Phase 2, businesses must integrate their
                invoicing systems directly with ZATCA&rsquo;s FATOORA platform and satisfy additional
                technical and data requirements.
              </p>
              <p>
                The latest development is Wave 25, announced by ZATCA on 24 July 2026. Wave 25 covers
                taxpayers whose revenues subject to VAT exceeded SAR 187,500 in any of 2022, 2023,
                2024, or 2025. Taxpayers falling within the wave are required to integrate their
                e-invoicing solutions with FATOORA no later than 1 February 2027. ZATCA will notify
                affected taxpayers directly.
              </p>
              <p>
                This follows Wave 24, which covered taxpayers above SAR 375,000 and had an integration
                deadline of 30 June 2026. The direction is clear: Phase 2 is progressively reaching
                smaller businesses.
              </p>
              <p>
                <strong>Integration means more than producing a digital invoice.</strong> A PDF invoice
                generated by accounting software is not, by itself, sufficient for Phase 2. The
                underlying invoicing solution must be capable of generating compliant structured
                invoice data and interacting with ZATCA according to the required process. ZATCA&rsquo;s
                technical framework distinguishes between two principal invoice flows: standard tax
                invoices, generally associated with B2B transactions, follow the clearance model and
                must be submitted to ZATCA for clearance before reaching the customer; simplified tax
                invoices, generally associated with B2C transactions, follow the reporting model and
                must be reported to ZATCA within the prescribed period after issuance.
              </p>
              <p>
                Phase 2 also introduces a series of system-level requirements, including structured XML
                invoice data, unique invoice identifiers, cryptographic controls, invoice hash
                chaining, QR codes, security credentials, and direct connectivity with ZATCA&rsquo;s
                systems. For businesses operating through several POS terminals, e-commerce platforms,
                or ERP systems, this makes e-invoicing an IT, finance, and controls project, rather
                than a tax-only exercise.
              </p>
              <p>
                For the task level view of that project, our{" "}
                <Link href="/knowledge/saudi-e-invoicing-phase-2-checklist">
                  Phase 2 readiness checklist
                </Link>{" "}
                sets out the wave test, the two invoice flows, and the twenty six checks to work
                through before the integration deadline.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 02 · Transfer pricing</Eyebrow>
            <h2 className="dft-h2-sm" style={{ marginBottom: 28 }}>
              A wider compliance population.
            </h2>
            <div className="dft-article">
              <p>
                At the same time, transfer pricing has become relevant to a substantially broader group
                of Saudi businesses. Transfer pricing governs transactions between related persons and
                persons under common control. The fundamental requirement is the arm&rsquo;s length
                principle: controlled transactions should be priced on conditions comparable to those
                that would apply between independent parties.
              </p>
              <p>
                One of the most important changes in recent years was the extension of the broader
                transfer pricing framework to zakat payers, from financial years beginning on or after
                1 January 2024. This means Saudi and GCC-owned businesses that may previously have
                viewed transfer pricing primarily as a corporate income tax issue now need to assess
                their own obligations carefully.
              </p>
              <p>
                <strong>The disclosure form has no minimum transaction threshold.</strong> A
                particularly important distinction concerns the Disclosure Form of Controlled
                Transactions, commonly referred to as the transfer pricing disclosure form, or CTDF.
                Where a taxpayer has controlled transactions, the disclosure requirement is not limited
                to large groups. The CTDF applies to both relevant income-tax taxpayers and zakat
                payers with controlled transactions, regardless of their value. The filing deadline is
                generally within 120 days after the end of the financial year, together with the annual
                tax or zakat return.
              </p>
              <p>
                ZATCA&rsquo;s current FAQ likewise confirms that the disclosure form remains applicable
                where aggregate controlled transactions are below SAR 6 million. An affidavit or
                Chartered Accountant Certificate from a licensed auditor is also required with the
                disclosure form, certifying the consistent application of the relevant transfer pricing
                policy. This is an important point for smaller businesses: being below the Master File
                and Local File thresholds does not necessarily remove the disclosure obligation.
              </p>
              <p>
                <strong>Master File and Local File thresholds.</strong> The more detailed documentation
                requirements depend on the type of taxpayer and the aggregate value of controlled
                transactions. For corporate income tax and mixed taxpayers, the key threshold remains
                SAR 6 million of aggregate controlled transactions; businesses below that level
                generally benefit from the Small Enterprise exemption from Master File and Local File
                requirements. For 100% zakat-paying entities, a transitional regime applies during
                FY2024&ndash;FY2026:
              </p>
            </div>

            <div className="dft-article-table-wrap">
              <table className="dft-article-table">
                <thead>
                  <tr>
                    <th>Aggregate controlled transactions</th>
                    <th>FY2024&ndash;FY2026 position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Up to SAR 48 million</td>
                    <td>Master File / Local File generally not required</td>
                  </tr>
                  <tr>
                    <td>Above SAR 48 million but below SAR 100 million</td>
                    <td>Optional</td>
                  </tr>
                  <tr>
                    <td>SAR 100 million or more</td>
                    <td>Mandatory</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="dft-article">
              <p>
                From FY2027 onward, the mandatory threshold for 100% zakat payers moves to above SAR 48
                million under the phased framework described in ZATCA&rsquo;s updated guidance. The
                Master File provides group-level information, while the Local File focuses much more
                closely on the Saudi entity, its controlled transactions, functional analysis, transfer
                pricing method, financial information, and arm&rsquo;s length support.
              </p>
              <p>
                These files are generally submitted when requested by ZATCA. However, this should not
                be interpreted as permission to prepare them only once a request arrives. ZATCA expects
                adequate documentation to already exist when the disclosure form is filed, with
                requested documentation then provided within the period specified by the Authority,
                which will be no less than 30 days.
              </p>
              <p>
                <strong>Country-by-country reporting remains a separate test.</strong> Large
                multinational groups must also consider Country-by-Country Reporting. The Saudi
                threshold remains consolidated MNE group revenue exceeding SAR 3.2 billion in the
                preceding financial year. The reporting framework contains separate notification and
                report-filing requirements, so businesses should not assume that completion of the
                transfer pricing disclosure form automatically satisfies every CbCR obligation.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 03 · What businesses should be doing now</Eyebrow>
            <div className="dft-article">
              <p>
                The practical response should begin with scope, not paperwork. Businesses should first
                determine which e-invoicing wave applies, using historical VAT-subject revenue and any
                notification received from ZATCA. For Wave 25 taxpayers, the current integration
                deadline is 1 February 2027. They should then assess whether every invoicing channel,
                including ERP systems, POS terminals, and e-commerce platforms, is capable of operating
                under the required FATOORA model.
              </p>
              <p>
                Separately, finance and tax teams should establish a complete register of related-party
                and controlled transactions. This should include more than obvious sales and purchases:
                management charges, financing, guarantees, shared services, intellectual property
                arrangements, cost allocations, and other intercompany dealings may all require
                consideration under the transfer pricing framework. The Local File requirements
                themselves demonstrate the breadth of information expected around controlled
                transactions and their economic analysis.
              </p>
              <p>
                Documentation should then be aligned with the applicable threshold and prepared
                contemporaneously, rather than reconstructed after ZATCA raises a request.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 04 · The larger compliance shift</Eyebrow>
            <div className="dft-article">
              <p>
                FATOORA and transfer pricing appear to address different areas of tax compliance, but
                they reflect the same underlying direction. Saudi tax compliance is becoming
                increasingly transaction-level, data-driven, and system-based.
              </p>
              <p>
                E-invoicing gives ZATCA structured visibility over invoicing activity. Transfer pricing
                requires businesses to demonstrate the commercial and economic basis of transactions
                with related parties. Together, they make the quality of underlying systems,
                documentation, and internal controls increasingly important.
              </p>
              <p>
                For businesses, the strongest approach is therefore not to treat each new requirement as
                a separate annual exercise. The objective should be to build a compliance structure in
                which transactions are captured correctly, related-party relationships are visible,
                documentation is maintained as activity occurs, and tax requirements are incorporated
                into normal finance and system processes.
              </p>
              <p>
                In that environment, compliance becomes less about responding to the next deadline, and
                more about ensuring that the business is ready before it arrives.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">
              Compliance is becoming transaction-level, data-driven, and system-based.
            </h2>
            <div>
              <p>
                If your invoicing systems or your controlled-transaction file have not had a check
                against Wave 25 and the transfer pricing thresholds, that is a fixed scope, fixed fee
                conversation, not a stage of the audit.
              </p>
              <Link className="dft-btn dft-btn-light" href="/scope?service=review">
                Open the scope builder
              </Link>
            </div>
          </div>
        </section>

        <section className="dft-wrap">
          <p className="dft-article-note">
            This article is intended as a general overview of the Saudi regulatory position as at
            August 2026 and does not constitute tax, legal, or regulatory advice.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
