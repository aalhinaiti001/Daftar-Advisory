import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { ARTICLES, formatDate } from "../_data/knowledge";

const DESC =
  "Working notes on IFRS reporting, audit readiness and Saudi compliance, written for finance teams in Jordan and the GCC. Checklists you can download and run on your own file.";

export const metadata: Metadata = {
  title: "IFRS, Audit and Saudi Compliance Notes | Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/knowledge" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "IFRS, Audit and Saudi Compliance Notes | Daftar Advisory",
    description: DESC,
    url: "/knowledge",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFRS, Audit and Saudi Compliance Notes | Daftar Advisory",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

const LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Knowledge",
  url: "https://daftaradvisory.com/knowledge",
  description: DESC,
  isPartOf: { "@id": "https://daftaradvisory.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `https://daftaradvisory.com${a.href}`,
    })),
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: "Knowledge", item: "https://daftaradvisory.com/knowledge" },
  ],
};

/* Newest first; the modified date counts as activity. */
const SORTED = [...ARTICLES].sort((a, b) =>
  (b.modified ?? b.published).localeCompare(a.modified ?? a.published),
);

export default function Knowledge() {
  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="knowledge" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Knowledge</Eyebrow>
          <h1 className="dft-h1">
            Notes on IFRS, audit readiness and Saudi <em>compliance</em>.
          </h1>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              What finance teams here are dealing with now, written down with the working shown.
            </p>
            <p>
              Each note is the method we use on client files, in a form you can run yourself. The
              checklists come with a downloadable workbook. Nothing here is an audit procedure or a
              compliance opinion; it is preparation, and it says so where that matters.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · The notes</Eyebrow>
            <div className="dft-ledger">
              {SORTED.map((a) => (
                <article className="dft-ledger-3" key={a.href}>
                  <code>{a.tag}</code>
                  <h3>
                    <Link href={a.href}>{a.title}</Link>
                  </h3>
                  <div>
                    <p>{a.description}</p>
                    <p className="dft-ledger-meta">
                      {formatDate(a.modified ?? a.published)}
                      {a.arabic && (
                        <>
                          {" · "}
                          <Link href={`/ar${a.href}`} lang="ar">بالعربية</Link>
                        </>
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-close">
            <h2>Working on one of these now?</h2>
            <p>Build a draft scope in two minutes. We reply with a senior read on fit.</p>
            <Link className="dft-btn dft-btn-lg" href="/scope">Open the scope builder</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
