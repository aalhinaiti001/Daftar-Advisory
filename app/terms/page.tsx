import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { EMAIL } from "../_data/practice";

const DESC =
  "The basis on which Daftar Advisory offers this website, what its content is and is not, and the professional disclaimer that applies to a non-attest practice.";
const UPDATED = "7 October 2026";

export const metadata: Metadata = {
  title: "Terms of Use and Disclaimer | Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Terms of Use and Disclaimer | Daftar Advisory",
    description: DESC,
    url: "/terms",
    images: ["/og-daftar.png"],
  },
};

export default function Terms() {
  return (
    <div className="dft">
      <SiteHeader active="legal" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Terms</Eyebrow>
          <h1 className="dft-h1">Terms of use and disclaimer.</h1>
          <div className="dft-article-meta">
            <span>Daftar Advisory</span>
            <span>·</span>
            <span>Amman, Jordan</span>
            <span>·</span>
            <span>Updated {UPDATED}</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              This site describes what Daftar Advisory does and publishes notes on the work. Using
              it does not make you a client, and nothing on it is advice on your situation.
            </p>
            <p>
              By using the site you accept these terms. If you do not, please do not use it.
              Questions go to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </section>

        <section id="disclaimer" className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 01 · Professional disclaimer</Eyebrow>
            <p>
              <strong>Daftar Advisory is a non-attest advisory practice.</strong> We prepare and
              review. We do not audit, we do not sign an audit or assurance opinion, and we are not a
              registered statutory auditor in any jurisdiction. Where a page refers to audit
              readiness or audit preparation, it means preparing a file for your auditor to test,
              not auditing it.
            </p>
            <p>
              The articles, checklists and downloadable workbooks are general information, written
              for finance teams working under IFRS in Jordan and the GCC. They are not accounting,
              tax, legal or investment advice, they do not take your facts into account, and they
              are not a substitute for advice on your own position. Standards, regulations and
              filing calendars change; a note is accurate as at the date shown on it and is not
              updated continuously.
            </p>
            <p>
              Advice on a specific matter is given only under a written engagement letter, which
              sets out the scope, the exclusions, the deliverable and the fee. Where these terms and
              an engagement letter differ, the engagement letter applies.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 02 · Using the site and its content</Eyebrow>
            <p>
              The text, checklists and workbooks on this site are Daftar Advisory&rsquo;s. You may
              download them and use them inside your own organisation, including on your own
              audit file, and you may quote from them with attribution and a link. You may not
              republish them, sell them, or present them as your own.
            </p>
            <p>
              The scope builder produces a draft outline for discussion. It is not an offer, and
              no engagement exists until a letter is signed by both sides. The indicative timings it
              shows are typical runs, not commitments.
            </p>
            <p>
              Links to other sites are provided for reference. We do not control them and are not
              responsible for their content.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 03 · Liability</Eyebrow>
            <p>
              The site is provided as it is. To the extent the law allows, Daftar Advisory accepts
              no liability for loss arising from reliance on the site&rsquo;s content, from its
              availability, or from errors in it. Nothing in these terms limits liability that
              cannot be limited by law, and nothing in them limits the liability agreed in an
              engagement letter.
            </p>
            <p>
              These terms are governed by the laws of the Hashemite Kingdom of Jordan, and the
              courts of Amman have jurisdiction over any dispute about them. Our{" "}
              <Link href="/privacy">privacy policy</Link> explains what the site collects.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
