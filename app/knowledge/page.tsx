import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import NotesList from "./NotesList";
import { NOTES } from "../_data/practice";
import { SITE, WEBSITE_ID } from "../_data/site";

const DESC =
  "Short reads on what is changing for finance in the region: IFRS 18, Saudi e-invoicing and transfer pricing, audit readiness. Each one ends with a tool you can run.";
const TITLE = "Notes on IFRS, Audit Readiness and Saudi Compliance | Daftar Advisory";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/knowledge" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: TITLE,
    description: DESC,
    url: "/knowledge",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

const LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Notes",
  url: `${SITE}/knowledge`,
  description: DESC,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: NOTES.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: n.title,
      url: `${SITE}${n.href}`,
    })),
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: SITE },
    { "@type": "ListItem", position: 2, name: "Notes", item: `${SITE}/knowledge` },
  ],
};

export default function Knowledge() {
  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="knowledge" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Notes</Eyebrow>
          <h1 className="dft-h1">Short reads on what is changing for finance in the region.</h1>
          <p className="dft-lead dft-page-lead">
            Written for the finance team that has to act on it. Each note ends with a checklist,
            a plan or a working file you can run yourself.
          </p>
        </section>

        <section className="dft-section">
          <div className="dft-wrap">
            <NotesList />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
