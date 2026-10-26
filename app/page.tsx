import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "./_components/SiteChrome";
import { SERVICE_ORDER, SERVICES, NOTES, FAQ, MEMO, formatNoteDate } from "./_data/practice";

const DESC =
  "Financial statements, technical review, audit readiness and quality of earnings for founders and finance teams. A boutique firm, a defined scope, and a file you keep.";

export const metadata: Metadata = {
  /* Names the actual services, not just the firm: "Daftar Advisory" alone
     tells a search result nothing about what the practice does. */
  title: "Daftar Advisory — IFRS financial statements and audit readiness",
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

export default function Home() {
  const [featured, ...rest] = NOTES;
  return (
    <div className="dft">
      <SiteHeader active="home" />

      <main className="dft-rise">
        <section className="dft-wrap dft-hero">
          <div>
            <Eyebrow tone="rust">§ 00 · Finance advisory · KSA · UAE · Jordan</Eyebrow>
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

          {/* The evidence element of the hero: the shape of what a client receives
              (DECISIONS.md rows 2 and 3). Headings inside are spans, not h2/h3, so the
              figure does not sit in the document outline between the h1 and § 01. */}
          <figure className="dft-memo">
            <div className="dft-panel-head dft-memo-head">
              <span>{MEMO.head}</span>
              <span>{MEMO.ref}</span>
            </div>
            <dl className="dft-memo-meta">
              <div><dt>To</dt><dd>{MEMO.to}</dd></div>
              <div><dt>Re</dt><dd>{MEMO.re}</dd></div>
              <div><dt>Date</dt><dd>{MEMO.date}</dd></div>
            </dl>
            <div className="dft-memo-body">
              <div>
                <span className="dft-memo-h">1 · Question</span>
                <p>{MEMO.question}</p>
              </div>
              <div>
                <span className="dft-memo-h">2 · Conclusion</span>
                <p>{MEMO.conclusion}</p>
              </div>
            </div>
            <div className="dft-memo-foot">
              <span className="dft-memo-refs">{MEMO.refs}</span>
              <span className="dft-memo-sig">{MEMO.signed}</span>
            </div>
            <figcaption>{MEMO.caption}</figcaption>
          </figure>
        </section>

        {/* The register, as a mono strip under the hero (DECISIONS.md row 2). */}
        <div className="dft-wrap">
          <dl className="dft-strip">
            {REGISTER.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section id="services" className="dft-section dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 01 · Services</Eyebrow>
            <h2 className="dft-h2" style={{ marginBottom: 44 }}>Four lines of work. Each one ends with a file you own.</h2>
            {/* The services as a register (DECISIONS.md row 11). Columns come from
                practice.ts; "Typical time" is deliberately absent until the founder
                decides whether a per-service duration belongs on this page. */}
            <table className="dft-service-table">
              <colgroup>
                <col className="dft-col-ref" />
                <col />
                <col />
                <col />
                <col className="dft-col-act" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Ref</th>
                  <th scope="col">Service</th>
                  <th scope="col">Outcome</th>
                  <th scope="col">You get</th>
                  <th scope="col"><span className="dft-visually-hidden">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_ORDER.map((key) => (
                  <tr key={key}>
                    <td><code>{SERVICES[key].ref}</code></td>
                    <td data-label="Service">
                      <h3>{SERVICES[key].label}</h3>
                      <p>{SERVICES[key].blurb}</p>
                    </td>
                    <td data-label="Outcome">{SERVICES[key].outcome}</td>
                    <td data-label="You get">{SERVICES[key].deliverable}</td>
                    <td><Link className="dft-btn-sm" href={`/scope?service=${key}`}>Scope this</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="dft-table-note">
              Daftar is a non-attest practice. We prepare and review. We do not audit, and we do
              not sign an opinion.
            </p>
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
            {/* The newest note leads; the rest list beside it (DECISIONS.md row 20).
                NOTES is kept newest first in practice.ts. */}
            <div className="dft-note-featured">
              <article className="dft-note-lead">
                <div className="dft-note-meta">
                  <span className="dft-note-tag">{featured.tag}</span>
                  <time dateTime={featured.updated ?? featured.date}>
                    {formatNoteDate(featured.updated ?? featured.date)}
                  </time>
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.summary}</p>
                <Link className="dft-btn-sm" href={featured.href}>Read the note</Link>
              </article>
              <div className="dft-note-list">
                {rest.map((n) => (
                  <Link className="dft-note-row" href={n.href} key={n.href}>
                    <span className="dft-note-tag">{n.tag}</span>
                    <span className="dft-note-title">{n.title}</span>
                    <time dateTime={n.date}>{formatNoteDate(n.date)}</time>
                  </Link>
                ))}
                <Link className="dft-note-all" href="/knowledge">All notes</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calibre, as its own mark on its own ground, with the copy in Daftar's
            faces (BRAND.md §10; DECISIONS.md row 22). Forest, never ink: the one
            ink section on this page is § 03. */}
        <section id="calibre" className="dft-section dft-calibre-band" aria-labelledby="calibre-h">
          <div className="dft-wrap dft-calibre-inner">
            <div className="dft-calibre-mark" aria-hidden="true">
              <span className="dft-calibre-tile">C</span>
              <span className="dft-calibre-name">Calibre</span>
              <span className="dft-calibre-kicker">by Daftar</span>
            </div>
            <div>
              <Eyebrow>Also from Daftar</Eyebrow>
              <h2 id="calibre-h" className="dft-h2-sm">
                Hiring a finance lead? The Calibre Verdict is a written decision memo on your
                shortlist, before you make the offer.
              </h2>
              <p className="dft-calibre-use">
                Structured hiring advisory for finance roles. Not a psychometric assessment. Does
                not predict performance. The decision, and its consequences, rest with the
                employer.
              </p>
              <Link className="dft-btn-light" href="/calibre">Visit Calibre</Link>
            </div>
          </div>
        </section>

        <section id="daftar-faq" className="dft-section dft-section-soft">
          <div className="dft-wrap dft-split dft-split-faq">
            <div>
              <Eyebrow>§ 05 · Questions</Eyebrow>
              <h2 className="dft-h2">Answered plainly.</h2>
            </div>
            <div className="dft-faq">
              {FAQ.map((f) => (
                <article key={f.num}>
                  <code>{f.num}</code>
                  <div>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </article>
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

      <SiteFooter />
    </div>
  );
}
