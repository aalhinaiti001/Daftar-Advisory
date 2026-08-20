import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";

const TITLE = "IFRS 18 lands in 2027. The comparative year is 2026.";
const DESC =
  "IFRS 18 is mandatory from 1 January 2027, which makes FY2026 the comparative year being restated. What changes, what deliberately does not, and what the next four months are for.";
const URL = "/knowledge/ifrs-18-transition-2026";
const PUBLISHED = "2026-08-19";

export const metadata: Metadata = {
  title: `${TITLE} — Daftar Advisory`,
  description: DESC,
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
  author: { "@type": "Person", name: "Ahmad Al Hinaiti", url: "https://daftaradvisory.com/about" },
  publisher: { "@type": "Organization", name: "Daftar Advisory", url: "https://daftaradvisory.com" },
  mainEntityOfPage: `https://daftaradvisory.com${URL}`,
  image: "https://daftaradvisory.com/og-daftar.png",
};

export default function Ifrs18Transition2026() {
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
            IFRS 18 lands in 2027. The <em>comparative year</em> is 2026.
          </h1>
          <div className="dft-article-meta">
            <span>Ahmad Al Hinaiti</span>
            <span>·</span>
            <span>19 August 2026</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              If you report on a calendar year, the numbers that will sit in the comparative column
              are being generated right now.
            </p>
            <p>
              It is August 2026. For an entity with a 31 December year-end applying IFRS 18 for the
              first time in 2027, the comparative period is the year currently in progress, with
              roughly four months of it left.
            </p>
            <p>
              That is the whole argument for treating this as a live 2026 project rather than a 2027
              one. Transition is retrospective. The 2026 statement of profit or loss will have to be
              re-presented in the new structure, with a line-by-line reconciliation back to what was
              reported under IAS 1. Every month that closes without IFRS 18-capable data is a month
              that has to be reconstructed later, from records that were never designed to answer the
              question.
            </p>
            <p>
              EY has put this bluntly in its published guidance: the data and systems must effectively
              be in place during 2026. That is not a warning about the deadline. It is a warning about
              the year we are in.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 01 · What changes, and what deliberately does not</Eyebrow>
            <div className="dft-article">
              <p>
                IFRS 18 was issued in April 2024 and replaces IAS 1. It is mandatory for annual
                periods beginning on or after 1 January 2027, with early application permitted.
              </p>
              <p>
                It changes nothing about recognition or measurement. Net profit for the period is
                unchanged. Assets, liabilities, and the bottom line are exactly what they would have
                been.
              </p>
              <p>
                This is precisely why the standard gets underestimated. A change that does not move
                the bottom line reads as cosmetic, and cosmetic changes get scheduled late. But
                presentation and disclosure changes reach into the chart of accounts, the
                consolidation system, the investor communications, and the interim reporting
                calendar. Those are slower to move than a measurement adjustment ever is.
              </p>
              <p>
                EY describes it as a major overhaul that will require most, if not all, IFRS reporters
                to update the structure of their income statement, and as something that demands
                judgement and technical knowledge rather than a mechanical re-mapping. Both halves of
                that matter. The judgement is real, and it cannot be outsourced to a mapping table
                built the week before year-end.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 02 · The three workstreams that take the longest</Eyebrow>
            <div className="dft-article">
              <p>
                <strong>Classification into the five categories.</strong> Income and expenses now sit
                in operating, investing, financing, income taxes, or discontinued operations, with two
                mandatory subtotals: operating profit or loss, and profit or loss before financing and
                income taxes. Operating is a residual: it is what remains after everything else has
                been classified, not a positive list of qualifying items. That inverts how most
                preparers instinctively approach it, and it is where the cross-cutting judgements bite:
                foreign exchange differences follow the item they arise from, derivative results follow
                the item being hedged, and a lease splits, with depreciation of the right-of-use asset
                in operating and interest on the lease liability in financing.
              </p>
              <p>
                <strong>The by-nature disclosure, if you present by function.</strong> Entities
                presenting operating expenses by function must disclose specified expenses by nature in
                the notes. In practice this is a genuine data exercise, not a disclosure drafting
                exercise. If the general ledger was built to report by function, the by-nature detail
                may simply not exist at the granularity required, and no amount of note-writing will
                conjure it. This is the workstream most likely to expose the chart of accounts.
              </p>
              <p>
                <strong>Management-defined performance measures.</strong> MPMs are narrower than
                &ldquo;non-GAAP&rdquo; as most people use the term: they are subtotals of income and
                expenses used in public communications outside the financial statements that convey
                management&rsquo;s view of performance and are not IFRS-specified. Free cash flow and
                net debt fall outside. The difficulty is not the definition; it is the inventory.
                Identifying MPMs sends the team back through earnings releases, investor presentations,
                management commentary, and analyst materials, often across several functions that have
                never had to reconcile what they say publicly with what the financial statements
                support. Each identified MPM then needs a description and purpose, a reconciliation to
                the nearest IFRS line or subtotal, the income tax effect and non-controlling interests
                effect for each reconciling item, an explanation of any change in calculation, and a
                statement on non-comparability.
              </p>
              <p>
                The tax and NCI effect per reconciling item is the requirement I would flag first. It
                is not usually available from the existing reporting pack.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 03 · The Jordan and MENA lens</Eyebrow>
            <div className="dft-article">
              <p>
                <strong>Jordan has no endorsement waiting room.</strong> Jordan applies IFRS as issued
                by the IASB, with legal force through the Companies Law and the sectoral regulators,
                and no separate national endorsement step. The practical consequence is that the
                effective date tracks the IASB directly: 1 January 2027, without an intervening local
                process that might create room. Saudi Arabia sits differently, on &ldquo;IFRS as
                endorsed in Saudi Arabia,&rdquo; through a separate SOCPA endorsement process. For
                groups with components in both jurisdictions, that difference in mechanism is worth
                understanding early rather than discovering it during a group reporting cycle.
              </p>
              <p>
                <strong>Banks and insurers are the structurally affected population.</strong> IFRS 18
                identifies two specified main business activities, investing in assets and providing
                financing to customers, and where an entity has one, items that would otherwise be
                investing or financing move into operating. For a bank, that reshapes the face of the
                income statement in a way it does not for a manufacturer. The assessment is made at the
                reporting-entity level, can differ between consolidated and separate financial
                statements, and an entity can have more than one specified main business activity.
                Given the weight of CBJ-regulated banks and insurers in Jordan&rsquo;s full-IFRS
                population, this is where the concentration of effort sits.
              </p>
              <p>
                <strong>Two reporting changes land on the same cycle.</strong> The Amman Stock
                Exchange&rsquo;s climate-related disclosure framework moves from voluntary to mandatory
                for reports published from 1 January 2027 covering 2026 onwards. IFRS 18 first applies
                for periods beginning 1 January 2027. Different frameworks, different teams, one
                reporting calendar, and largely the same finance function absorbing both.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 04 · The consequential amendments people schedule last</Eyebrow>
            <div className="dft-article">
              <p>
                The amendments to other standards are where first-time application quietly becomes
                harder.
              </p>
              <p>
                Under amended <strong>IAS 7</strong>, the indirect method has a single starting point,
                operating profit or loss, and the previous free choice over classifying interest and
                dividends is largely removed. For entities without a specified main business activity,
                the classification is prescribed: interest and dividends received in investing,
                interest and dividends paid in financing. Entities with a specified main business
                activity classify consistently with the income statement treatment.
              </p>
              <p>
                <strong>IAS 34</strong> extends the MPM disclosures into interim reporting and requires
                reconciliation for comparative interim periods. For a December year-end, that means the
                first interim report of 2027 arrives well before the first annual report, and it
                arrives carrying restated comparatives. Anyone planning around a December 2027 deadline
                has the wrong date in the calendar.
              </p>
              <p>
                <strong>IAS 8</strong> is renamed Basis of Preparation of Financial Statements and
                absorbs paragraphs relocated from IAS 1. IAS 33 interacts with the new subtotals where
                additional per-share measures are presented.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 05 · What the next four months are for</Eyebrow>
            <div className="dft-article">
              <p>
                Confirm whether the entity has a specified main business activity, at both consolidated
                and separate levels, because that determination cascades into everything else. Draft
                the classification policy for the five categories and pressure-test it against the
                awkward items (FX, hedges, leases, disposals, restructuring) rather than the easy ones.
                Establish whether the by-nature information exists at the required granularity, and if
                it does not, change the capture now while there are still months left in the
                comparative year. Build the MPM inventory from what has actually been published, not
                from what finance believes is published. And put governance around it that includes
                IT, investor relations, and legal alongside finance. EY names cross-functional
                governance as a success factor for a reason.
              </p>
              <p>
                If your group holds venture-capital-type investments, the one-off IAS 28 re-election
                available on first application is worth a conversation now. The eligibility criteria
                have been the subject of an active IASB clarification project, so confirm the current
                position before relying on it.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">
              The bottom line does not move. Almost everything around it does.
            </h2>
            <div>
              <p>
                And the year that has to be rebuilt is the year still on the calendar. If your FY2026
                file has not had an IFRS 18 check yet, that is a fixed scope, fixed fee conversation,
                not a stage of the audit.
              </p>
              <Link className="dft-btn dft-btn-light" href="/scope?service=review">
                Open the scope builder
              </Link>
            </div>
          </div>
        </section>

        <section className="dft-wrap">
          <p className="dft-article-note">
            Views are my own. This is a general commentary on IFRS 18 and not accounting advice.
            Confirm the requirements against the issued standards and your current local regulatory
            instructions before applying them.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
