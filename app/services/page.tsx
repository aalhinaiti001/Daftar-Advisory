import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { SERVICE_ORDER, SERVICES } from "../_data/practice";
import { SERVICE_PAGES, SERVICE_SLUG } from "../_data/services";

const DESC =
  "IFRS statements, technical accounting review, audit readiness and quality of earnings for Saudi Arabia, Jordan and the UAE. Scope a project in two minutes.";

export const metadata: Metadata = {
  title: "IFRS, Audit Readiness and Technical Review Services | Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "IFRS, Audit Readiness and Technical Review Services | Daftar Advisory",
    description: DESC,
    url: "/services",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFRS, Audit Readiness and Technical Review Services | Daftar Advisory",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

const LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daftar Advisory services",
  itemListElement: SERVICE_ORDER.map((key, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: SERVICES[key].label,
    url: `https://daftaradvisory.com/services/${SERVICE_SLUG[key]}`,
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://daftaradvisory.com/services" },
  ],
};

export default function Services() {
  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="services" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Services</Eyebrow>
          <h1 className="dft-h1">
            IFRS statements, technical review, audit readiness and quality of <em>earnings</em>.
          </h1>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              Four lines of work. Each one has a defined scope, a senior contact, and a file you
              keep when the engagement ends.
            </p>
            <p>
              We take the problem, not the function. A first year under IFRS, an auditor&rsquo;s
              questions nobody has time to answer, a treatment the board wants a second view on, a
              deal that needs numbers to hold up. The pages below say what each line covers, what it
              excludes, what you receive, and the questions clients ask before the first call.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · The four lines</Eyebrow>
            <div className="dft-ledger">
              {SERVICE_ORDER.map((key) => {
                const page = SERVICE_PAGES[SERVICE_SLUG[key]];
                return (
                  <article key={key}>
                    <code>{SERVICES[key].ref}</code>
                    <h3>
                      <Link href={`/services/${page.slug}`}>{SERVICES[key].label}</Link>
                    </h3>
                    <p>{page.lede}</p>
                    <Link className="dft-btn-sm" href={`/services/${page.slug}`}>Read the service page</Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-close">
            <h2>Not sure which line it is?</h2>
            <p>Describe it as you would to a colleague. If it belongs elsewhere, we say so.</p>
            <Link className="dft-btn dft-btn-lg" href="/scope">Open the scope builder</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
