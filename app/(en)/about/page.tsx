import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";
import { STEPS, EMAIL } from "../../_data/practice";
import { SITE, ORG_ID, PERSON_ID, WEBSITE_ID, LINKEDIN, ESTABLISHED_YEAR } from "../../_data/site";
import "./about.css";

const DESC =
  "Meet Ahmad Al Hinaiti, founder of Daftar Advisory, and see how the Amman-based finance advisory practice scopes, delivers and hands over its work.";
const TITLE = "About Ahmad Al Hinaiti, Founder | Daftar Advisory";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: TITLE,
    description: DESC,
    url: "/about",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

/* The founder node is defined once, in the English root layout; this page is
   its home, so it says so (mainEntity) and adds the page level detail.
   Credentials and prior firms belong here when they are ready to publish;
   nothing is listed that is not on the page. */
const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE}/about`,
  name: "About Daftar Advisory",
  description: DESC,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Ahmad Al Hinaiti",
    jobTitle: "Founder",
    description:
      "Founder of Daftar Advisory. Works personally on IFRS financial statements, technical accounting review, audit readiness and quality of earnings, from first call to final file, in Arabic and English.",
    worksFor: { "@id": ORG_ID },
    sameAs: [LINKEDIN],
    knowsLanguage: ["en", "ar"],
    workLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" } },
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: SITE },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
  ],
};

const FACTS = [
  ["Established", ESTABLISHED_YEAR],
  ["Based in", "Amman, Jordan"],
  ["Markets served", "Saudi Arabia (primary), the UAE and Jordan"],
  ["Working languages", "Arabic and English"],
] as const;

export default function About() {
  return (
    <div className="dft dft-about-refresh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="about" />

      <main className="dft-rise">
        <section className="dft-about-hero">
          <div className="dft-wrap dft-about-hero-inner">
            <div>
              <Eyebrow>About Daftar Advisory</Eyebrow>
              <h1 className="dft-h1">Advice you can use after the work is done.</h1>
              <p className="dft-lead">
                Daftar is a founder-led finance advisory practice in Amman. We help founders, CFOs
                and boards with IFRS financial statements, technical accounting review, audit
                readiness and quality of earnings.
              </p>
              <div className="dft-actions">
                <Link className="dft-btn dft-btn-light" href="/scope">Scope a project</Link>
              </div>
            </div>
            <figure className="dft-about-art">
              {/* Responsive, local asset for the static export. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/daftar-ledger-640.webp"
                srcSet="/daftar-ledger-640.webp 640w, /daftar-ledger-1200.webp 1200w"
                sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 860px) 560px, (max-width: 1168px) 44vw, 500px"
                width={1200}
                height={800}
                alt=""
                fetchPriority="high"
              />
              <figcaption className="dft-about-caption">
                <b>daftar <span aria-hidden="true">·</span> <span lang="ar" dir="rtl">دَفْتَر</span></b>
                A ledger or register. A record you keep.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="ahmad-al-hinaiti" className="dft-section dft-section-about dft-about-profile">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>Who you work with</Eyebrow>
              <h2 className="dft-h2">Ahmad Al Hinaiti</h2>
              <p className="dft-founder-role">Founder</p>
              <p className="dft-lead-sm">
                Ahmad leads the work directly, from the first conversation to the final file.
                You discuss the evidence with the person who prepares the answer, and you keep
                the working file after handover.
              </p>
              <div className="dft-actions">
                <a className="dft-btn-sm" href={"mailto:" + EMAIL}>Email Ahmad</a>
                <a className="dft-btn-sm" href={LINKEDIN} rel="me noopener" target="_blank">LinkedIn profile</a>
              </div>
            </div>
            <dl className="dft-about-facts">
              {FACTS.map(([label, value]) => (
                <div key={label}>
                  <dt className="dft-label">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft dft-about-process">
          <div className="dft-wrap">
            <Eyebrow>How an engagement runs</Eyebrow>
            <h2 className="dft-h2">From the first conversation to the handover.</h2>
            <ol className="dft-about-steps">
              {STEPS.map((step) => (
                <li key={step.num}>
                  <code aria-hidden="true">{step.num}</code>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="flier" className="dft-section dft-section-about">
          <div className="dft-wrap">
            <div className="dft-download">
              <h2 className="dft-h2-sm">Daftar on one page</h2>
              <p>A printable overview of our services, what we deliver, and how we work.</p>
              <div className="dft-download-actions">
                <a className="dft-btn-sm" href="/daftar-advisory-flier-a4.pdf" download>
                  Download A4 (PDF)
                </a>
                <a className="dft-btn-sm" href="/daftar-advisory-flier-a5.pdf" download>
                  Download A5 (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">What does the work need to answer?</h2>
            <div>
              <p>Tell us the question, what’s on file, and when you need an answer.</p>
              <Link className="dft-btn dft-btn-light" href="/scope">Open the scope builder</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
