import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";
import { SERVICES } from "../../_data/practice";
import { SERVICE_PAGE_ORDER, serviceBySlug } from "../../_data/services";

/* One template, four pages, driven by app/_data/services.ts. Static export:
   every slug is enumerated here, and an unknown one is a 404 at build time
   rather than a page rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGE_ORDER.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = serviceBySlug(slug);
  if (!page) return {};
  const url = `/services/${page.slug}`;
  const title = `${page.title} | Daftar Advisory`;
  return {
    title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Daftar Advisory",
      title,
      description: page.description,
      url,
      images: ["/og-daftar.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: ["/og-daftar.png"],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const page = serviceBySlug(slug);
  if (!page) notFound();

  const svc = SERVICES[page.key];
  const url = `https://daftaradvisory.com/services/${page.slug}`;

  /* Service, not Offer: there is no price on the page and the fee is agreed
     at scoping. provider points at the organisation node in layout.tsx. */
  const SERVICE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: svc.label,
    serviceType: page.title,
    description: page.description,
    url,
    provider: { "@id": "https://daftaradvisory.com/#organization" },
    areaServed: ["Saudi Arabia", "Jordan", "United Arab Emirates"],
    availableLanguage: ["en", "ar"],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://daftaradvisory.com/services" },
      { "@type": "ListItem", position: 3, name: svc.label, item: url },
    ],
  };

  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="services" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Services · {svc.ref}</Eyebrow>
          <h1 className="dft-h1">
            {page.h1[0]}
            <em>{page.h1[1]}</em>
            {page.h1[2]}
          </h1>
          <div className="dft-article-meta">
            <span>{svc.label}</span>
            <span>·</span>
            <span>{svc.deliverable}</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">{page.lede}</p>
            {page.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <div className="dft-actions">
              <Link className="dft-btn" href={`/scope?service=${page.key}`}>Scope this engagement</Link>
              <Link className="dft-btn-ghost" href="/about">Who does the work</Link>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · What the work covers</Eyebrow>
            <div className="dft-ledger">
              {page.scope.map((s, i) => (
                <article className="dft-ledger-3" key={s.title}>
                  <code>{"0" + (i + 1)}</code>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow as="h2">§ 02 · What you receive</Eyebrow>
              <ul className="dft-check">
                {page.deliverables.map((d, i) => (
                  <li key={d}>
                    <span>{svc.ref + "." + (i + 1)}</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow as="h2">§ 03 · Not in scope</Eyebrow>
              <ul className="dft-check">
                {svc.excluded.map((x) => (
                  <li key={x}>
                    <span>×</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p className="dft-service-note">
                Daftar is a non-attest advisory practice. We prepare and review. We do not audit,
                and we do not sign an opinion. Scope and fee are agreed in writing before the work
                starts.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 04 · Where it applies</Eyebrow>
            <div className="dft-notes dft-notes-3">
              {page.sectors.map((s) => (
                <article key={s.tag}>
                  <span>{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
            <div className="dft-article dft-service-markets">
              <p>{page.markets}</p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-split dft-split-faq">
            <div>
              <Eyebrow as="h2">§ 05 · Questions</Eyebrow>
              <h3 className="dft-h2-sm">Answered plainly.</h3>
              <div className="dft-related">
                <span className="dft-label">Related notes</span>
                <ul>
                  {page.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href}>{r.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="dft-faq">
              {page.faq.map((f, i) => (
                <article key={f.q}>
                  <code>{"0" + (i + 1)}</code>
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
            <h2 className="dft-h2-sm">Tell us what is on the table.</h2>
            <div>
              <p>
                Build a draft scope for {svc.label.toLowerCase()} in two minutes. We reply with a
                senior read on fit within two working days.
              </p>
              <Link className="dft-btn dft-btn-light" href={`/scope?service=${page.key}`}>
                Open the scope builder
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
