import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, Eyebrow } from "../../../_components/SiteChrome";
import { SERVICE_ORDER, SERVICES } from "../../../_data/practice";
import { SERVICE_PAGES } from "../../../_data/service-pages";
import { ORG_ID, SITE } from "../../../_data/site";

const slug = (path: string) => path.split("/").at(-1)!;
type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_ORDER.map((key) => ({ service: slug(SERVICE_PAGES[key].path) }));
}

function getService(value: string) {
  const key = SERVICE_ORDER.find((item) => slug(SERVICE_PAGES[item].path) === value);
  if (!key) notFound();
  return { key, service: SERVICES[key], page: SERVICE_PAGES[key] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = getService((await params).service);
  const title = page.title + " | Daftar Advisory";
  return {
    title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website", siteName: "Daftar Advisory", title, description: page.description,
      url: page.path, images: ["/og-daftar.png"],
    },
    twitter: { card: "summary_large_image", title, description: page.description, images: ["/og-daftar.png"] },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { key, service, page } = getService((await params).service);
  const url = SITE + page.path;
  const scope = "/scope?service=" + key;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", "@id": url + "#service", name: page.title,
        description: service.blurb, url, provider: { "@id": ORG_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: service.label, item: url },
        ],
      },
    ],
  };

  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <SiteHeader active="services" />
      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">Services · {service.ref}</Eyebrow>
          <h1 className="dft-h1">{page.title}</h1>
          <p className="dft-lead">{service.blurb}</p>
          <div className="dft-actions">
            <Link className="dft-btn" href={scope}>Scope this service</Link>
            <Link className="dft-btn-ghost" href="/#services">All services</Link>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap dft-article">
            <h2 className="dft-h2-sm">When to bring us in</h2>
            <p>{page.when}</p>
            <p>{page.example}</p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-split">
            <div className="dft-article">
              <h2 className="dft-h2-sm">What you get</h2>
              <p><strong>{service.deliverable}.</strong> {service.outcome}</p>
              <ul>{service.included.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Outside this scope</h3>
              <ul>{service.excluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="dft-article">
              <h2 className="dft-h2-sm">What to bring</h2>
              <ul>{page.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
              {page.note && <p><Link href={page.note.path}>{page.note.label}</Link></p>}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">Tell us what the work needs to answer.</h2>
            <div>
              <p>Ahmad Al Hinaiti leads the work directly. We agree the scope, fee and handover before we start.</p>
              <Link className="dft-btn dft-btn-light" href={scope}>Scope this service</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
