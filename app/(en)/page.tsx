import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { SERVICE_ORDER, SERVICES, FAQ } from "../_data/practice";
import "./home.css";

const DESC =
  "IFRS financial statements, technical review, audit readiness and quality of earnings for finance teams in Saudi Arabia, Jordan and the UAE. Scope a project in two minutes.";

/* Primary term first, brand last: "Daftar Advisory" alone tells a search
   result nothing about what the practice does. */
const TITLE = "IFRS Financial Statements and Audit Readiness | Daftar Advisory";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  /* /ar is the Arabic counterpart of this page; x-default points at the
     English one. Without these the two rank as duplicates of each other. */
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Daftar Advisory — Rigorous finance, without the overhead.",
    description: DESC,
    url: "/",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

/* The questions in the Questions chapter, as FAQPage markup. The answers are
   the same strings the page renders, so the two cannot drift. */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const REGISTER: [string, string][] = [
  ["Established", "2024"],
  ["Base", "Amman, Jordan"],
  ["Reach", "Jordan, GCC, MENA"],
  ["Model", "Founder led"],
  ["Every job leaves", "A model, method, or memo"],
];

const COMMITMENTS: [string, string, string][] = [
  ["01", "Defined scope", "What we solve, what we exclude, what you get. In writing, first."],
  ["02", "Senior contact", "The person you speak to does the work."],
  ["03", "Straight advice", "If it belongs elsewhere, or need not be done, we say so."],
  ["04", "Work you own", "You keep the model and the workings, in a form you can rerun."],
];

const HOME_NOTES = [
  { tag: "IFRS 18", title: "The comparative year is 2026", href: "/knowledge/ifrs-18-transition-2026" },
  { tag: "KSA", title: "Electronic invoicing waves", href: "/knowledge/saudi-compliance-2026" },
  { tag: "Audit", title: "The audit readiness checklist", href: "/knowledge/audit-readiness-checklist" },
  { tag: "KSA", title: "The Phase 2 readiness checklist", href: "/knowledge/saudi-e-invoicing-phase-2-checklist" },
];

export default function Home() {
  return (
    <div className="dft dft-home dft-home-layered">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <SiteHeader active="home" />

      <main className="dft-rise">
        <section className="dft-wrap dft-hero dft-home-hero">
          <div className="dft-home-intro">
            <Eyebrow tone="rust">Clear advice. Senior work. Nothing extra.</Eyebrow>
            <h1 className="dft-h1">
              Finance work that feels <em>simple</em>, even when the issue is not.
            </h1>
            <p className="dft-lead">
              Statements, technical review, audit readiness, quality of earnings. A boutique firm,
              a defined scope, a file you keep.
            </p>
            <div className="dft-actions">
              <Link className="dft-btn" href="/scope">Scope a project</Link>
              <Link className="dft-btn-ghost" href="/about">About the practice</Link>
            </div>
          </div>

          <div className="dft-home-stage">
            <div className="dft-home-art">
              {/* Responsive, local asset for the static export. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/daftar-ledger-640.webp"
                srcSet="/daftar-ledger-640.webp 640w, /daftar-ledger-1200.webp 1200w"
                sizes="(max-width: 592px) calc(100vw - 44px), (max-width: 760px) 548px, (max-width: 1288px) 50vw, 600px"
                width={1200}
                height={800}
                alt=""
                fetchPriority="high"
              />
            </div>
            <div className="dft-register">
              <div className="dft-register-head"><span>The register</span></div>
              <dl className="dft-register-body">
                {REGISTER.map(([term, value]) => (
                  <div className="dft-register-row" key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="services" className="dft-section dft-section-soft">
          <div className="dft-wrap">
            <div className="dft-home-services-head">
              <Eyebrow>§ 01 · Services</Eyebrow>
              <h2 className="dft-h2">Four lines of work. Each one ends with a file you own.</h2>
            </div>
            <div className="dft-home-service-grid">
              {SERVICE_ORDER.map((key) => (
                <article className="dft-home-service-card" key={key}>
                  <Link href={`/scope?service=${key}`} aria-label={`Scope this service: ${SERVICES[key].label}`}>
                    <code>{SERVICES[key].ref}</code>
                    <h3>{SERVICES[key].label}</h3>
                    <p>{SERVICES[key].blurb}</p>
                    <div className="dft-home-service-action">
                      Scope this <span aria-hidden="true">↗</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ 02 · Who we help</Eyebrow>
              <h2 className="dft-h2">Built for the point where finance runs out of room.</h2>
            </div>
            <div>
              <p className="dft-lead-sm" style={{ marginBottom: 22 }}>
                Most clients have a capable finance team and a problem above it: a first year under
                IFRS, an auditor&rsquo;s questions nobody has time to answer, a deal that needs
                numbers to hold up.
              </p>
              <p>We take the problem, solve it in the open, and leave the file behind.</p>
            </div>
          </div>
        </section>

        <section id="ethics-values" className="dft-section dft-section-dark">
          <div className="dft-wrap">
            <Eyebrow tone="dark">§ 03 · How we work</Eyebrow>
            <h2 className="dft-h2" style={{ margin: "0 0 50px", maxWidth: "22ch" }}>
              Four commitments, in writing, before the work starts.
            </h2>
            <div className="dft-commitments">
              {COMMITMENTS.map(([num, title, body]) => (
                <div key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights-briefs" className="dft-section">
          <div className="dft-wrap">
            <Eyebrow>§ 04 · Notes</Eyebrow>
            <h2 className="dft-h2" style={{ marginBottom: 40 }}>
              What finance teams here are dealing with now.
            </h2>
            <div className="dft-notes">
              {HOME_NOTES.map((n) => (
                <article key={n.title}>
                  <span>{n.tag}</span>
                  <h3>{n.title}</h3>
                  <Link className="dft-btn-sm" href={n.href}>Read the note</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="daftar-faq" className="dft-section dft-section-soft">
          <div className="dft-wrap dft-split dft-split-faq">
            <div>
              <Eyebrow>§ 05 · Questions</Eyebrow>
              <h2 className="dft-h2">Answered plainly.</h2>
            </div>
            <div className="dft-home-faq">
              {FAQ.map((f, i) => (
                <details key={f.num} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section">
          <div className="dft-wrap dft-close">
            <h2>Tell us what is on the table.</h2>
            <p>Build a draft scope in two minutes. We reply with a senior read on fit.</p>
            <Link className="dft-btn dft-btn-lg" href="/scope">Open the scope builder</Link>
          </div>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}
