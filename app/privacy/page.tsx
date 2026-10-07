import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { EMAIL } from "../_data/practice";

const DESC =
  "What Daftar Advisory collects when you use this site or send us an enquiry, why, how long it is kept, and how to ask for it to be corrected or deleted.";
const UPDATED = "7 October 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Privacy Policy | Daftar Advisory",
    description: DESC,
    url: "/privacy",
    images: ["/og-daftar.png"],
  },
};

export default function Privacy() {
  return (
    <div className="dft">
      <SiteHeader active="legal" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Privacy</Eyebrow>
          <h1 className="dft-h1">Privacy policy.</h1>
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
              This site collects as little as it can. What it does collect is listed here, with the
              reason, and with the address to write to if you want it corrected or removed.
            </p>
            <p>
              Daftar Advisory is a finance advisory practice based in Amman, Jordan, and is the
              controller of any personal data described on this page. Questions about this policy
              go to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 01 · What we collect, and why</Eyebrow>
            <p>
              <strong>Enquiries you send.</strong> The scope builder prepares an email in your own
              mail client; nothing is stored on this site until you choose to send it. The Arabic
              enquiry form and the Calibre enquiry form submit the fields you fill in (name, email,
              organisation, the matter and its timing) to Netlify, which hosts this site, and
              forwards them to us. We use them to reply to you and, if an engagement follows, to
              scope it.
            </p>
            <p>
              <strong>Server logs.</strong> Netlify records the technical details of each request,
              including the IP address, the page requested and the browser, for the purpose of
              serving the site and keeping it secure. We do not use those logs to identify visitors.
            </p>
            <p>
              <strong>Fonts.</strong> The typefaces are loaded from Google Fonts, so your browser
              sends a request, including your IP address, to Google when a page loads. Google&rsquo;s
              handling of that request is described in its own privacy policy.
            </p>
            <p>
              <strong>Nothing else.</strong> This site runs no analytics, no advertising, no
              tracking pixels, and sets no cookies of its own.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 02 · Legal basis and retention</Eyebrow>
            <p>
              We process an enquiry because you asked us to reply to it, and we keep the
              correspondence for as long as the matter is open and for a reasonable period after,
              so that a later engagement can refer back to it. Where an engagement follows, the
              client file is kept for the period our professional and tax obligations in Jordan
              require. An enquiry that leads nowhere is deleted on request, or in the ordinary
              course of clearing the inbox.
            </p>
            <p>
              Information you share about your business during an engagement is handled under the
              engagement letter, which takes precedence over this page.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 03 · Who else sees it</Eyebrow>
            <p>
              Netlify (hosting and form handling) and Microsoft 365 (email) process data on our
              behalf. We do not sell personal data, and we do not share it with anyone else unless
              the law requires it or you ask us to, for example by asking us to speak to your
              auditor.
            </p>
            <p>
              Some of those providers store data outside Jordan. Where they do, they hold it under
              their own published security and privacy terms.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article">
            <Eyebrow as="h2">§ 04 · Your rights</Eyebrow>
            <p>
              You can ask what we hold about you, ask for it to be corrected or deleted, and
              withdraw consent where the processing rests on it. Write to{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We reply within a reasonable time and say
              what we have done. If you are in a jurisdiction with a data protection authority,
              you may also complain to it.
            </p>
            <p>
              This page is updated when the site or the way it handles data changes. The date at
              the top is the date of the last change. Our{" "}
              <Link href="/terms">terms of use</Link> set out the basis on which the rest of the
              site is offered.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
