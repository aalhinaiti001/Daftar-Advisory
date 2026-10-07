import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { STEPS, EMAIL } from "../_data/practice";
import { ORG_ID, PERSON_ID, LINKEDIN } from "../_data/site";

const DESC =
  "Ahmad Al Hinaiti founded Daftar Advisory, a finance advisory boutique in Amman working across Saudi Arabia, Jordan and the UAE. See how an engagement runs.";
const TITLE = "About Ahmad Al Hinaiti, Founder | Daftar Advisory";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
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

/* The founder node is defined once, in layout.tsx; this page is its home, so
   it says so (mainEntity) and adds the page level detail. Credentials and
   prior firms belong here when they are ready to publish; nothing is listed
   that is not on the page. */
const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://daftaradvisory.com/about",
  name: "About Daftar Advisory",
  description: DESC,
  isPartOf: { "@id": "https://daftaradvisory.com/#website" },
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
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://daftaradvisory.com/about" },
  ],
};

/* Drop a portrait at public/founder.jpg and set this to "/founder.jpg".
   While it is empty the slot renders as a ruled placeholder rather than a
   broken image. (In the design prototype this was the droppable image slot.) */
const PORTRAIT_SRC = "";

const FACTS: [string, React.ReactNode][] = [
  ["Focus", "IFRS reporting and technical review"],
  ["Sectors", "Construction, services, investment"],
  ["Markets", "Saudi Arabia, Jordan, the UAE"],
  ["Languages", "Arabic and English"],
  ["Contact", <a key="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
  ["Profile", <a key="in" href={LINKEDIN} rel="me noopener" target="_blank">LinkedIn</a>],
];

export default function About() {
  return (
    <div className="dft">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <SiteHeader active="about" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · About</Eyebrow>
          <h1 className="dft-h1">A finance advisory boutique in Amman, held to one standard.</h1>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ 01 · The name</Eyebrow>
              <h2 className="dft-h2-sm">Advice should stay useful after the adviser leaves.</h2>
            </div>
            <div>
              <p className="dft-lead" style={{ marginBottom: 22 }}>
                Daftar is the ledger, the book where things are written down and kept. That is what
                we sell: reasoning recorded in a form that outlives the meeting.
              </p>
              <p style={{ marginBottom: 20 }}>
                Too much advisory work evaporates on delivery. Every engagement here ends with a
                model you can rerun, a method you can repeat, or a memo that answers the question.
              </p>
              <p>We take only what we can staff properly. That limit is the point.</p>
            </div>
          </div>
        </section>

        <section id="ahmad-al-hinaiti" className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow wide>§ 02 · Who you work with</Eyebrow>
            <div className="dft-founder">
              <div className="dft-founder-portrait">
                {/* Renders nothing until a real portrait exists. An empty ruled
                    box captioned "Portrait" reads as an unfinished site, which
                    costs more credibility than having no photograph at all. */}
                {PORTRAIT_SRC && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img className="dft-portrait" src={PORTRAIT_SRC} alt="Ahmad Al Hinaiti" width={300} height={376} />
                )}
                <span className="dft-label">Amman, Jordan</span>
              </div>
              <div>
                <h2>Ahmad Al Hinaiti</h2>
                <p className="dft-founder-role">Founder · Advisory and technical review</p>
                <p className="dft-lead-sm" style={{ marginBottom: 20 }}>
                  Ahmad works on the problems clients bring, personally, from first call to final
                  file. Statements, audit preparation, IFRS questions, and the numbers behind a deal.
                </p>
                <p style={{ marginBottom: 30 }}>
                  That is on purpose. It keeps you talking to the person who formed the view.
                </p>
                <div className="dft-facts">
                  {FACTS.map(([label, value], i) => (
                    <div key={i}>
                      <span className="dft-label">{label}</span>
                      <b>{value}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 03 · How an engagement runs</Eyebrow>
            <h2 className="dft-h2-sm" style={{ margin: "0 0 44px", maxWidth: "24ch" }}>
              Four steps, from first call to final file.
            </h2>
            <div className="dft-ledger">
              {STEPS.map((s) => (
                <article className="dft-ledger-3" key={s.num}>
                  <code>{s.num}</code>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">If the work fits, we will say so in two days.</h2>
            <div>
              <p>Describe it as you would to a colleague. If it belongs elsewhere, we say so.</p>
              <Link className="dft-btn dft-btn-light" href="/scope">Open the scope builder</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
