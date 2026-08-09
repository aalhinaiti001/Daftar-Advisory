import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "./_components/SiteChrome";
import { SERVICE_ORDER, SERVICES, NOTES, FAQ } from "./_data/practice";

const DESC =
  "Daftar helps founders and finance teams with financial statements, audit preparation, technical review, and transaction support. One senior practitioner, a defined scope, and a file your team keeps using.";

export const metadata: Metadata = {
  title: "Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/" },
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
  ["Team", "Senior only"],
  ["Every job leaves", "A model, method, or memo"],
];

const WHO: [string, string][] = [
  ["Founders", "Raising, reporting, or preparing for a first audit."],
  ["Finance teams", "Carrying a close, a group, and a deadline at once."],
  ["Investors", "Testing a target before the money moves."],
];

const COMMITMENTS: [string, string, string][] = [
  ["01", "Defined scope", "What we solve, what we exclude, and what you receive. Written down, agreed, then followed."],
  ["02", "Senior contact", "The person you speak with is the person doing the work. There is no layer between the two."],
  ["03", "Straight advice", "If the work belongs with another specialist, or does not need doing, we say so early."],
  ["04", "Work you own", "You keep the model and the workings, in a form your team can run again next year."],
];

export default function Home() {
  return (
    <div className="dft">
      <SiteHeader active="home" />

      <main className="dft-rise">
        <section className="dft-wrap dft-hero">
          <div>
            <Eyebrow tone="rust">Clear advice. Senior work. Nothing extra.</Eyebrow>
            <h1 className="dft-h1">
              Finance work that feels <em>simple</em>, even when the issue is not.
            </h1>
            <p className="dft-lead">
              Daftar helps founders and finance teams handle the work that carries weight: financial
              statements, audit preparation, technical review, and transaction support. One senior
              practitioner, a defined scope, and a file your team keeps using.
            </p>
            <div className="dft-actions">
              <Link className="dft-btn" href="/scope">Scope a project</Link>
              <Link className="dft-btn-ghost" href="/about">About the practice</Link>
            </div>
          </div>

          <div className="dft-register">
            <div className="dft-register-head">
              <span>The register</span>
              <span>§</span>
            </div>
            <dl className="dft-register-body">
              {REGISTER.map(([term, value]) => (
                <div className="dft-register-row" key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="services" className="dft-section dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 01 · Services</Eyebrow>
            <div className="dft-section-head">
              <h2 className="dft-h2">Four lines of work. Each one ends with a file you own.</h2>
              <p>
                The scope is written before the work begins, so you know what is included, what is
                not, and what you receive at the end.
              </p>
            </div>
            <div className="dft-ledger">
              {SERVICE_ORDER.map((key, i) => (
                <article key={key}>
                  <code>{"0" + (i + 1)}</code>
                  <h3>{SERVICES[key].label}</h3>
                  <p>{SERVICES[key].blurb}</p>
                  <Link className="dft-btn-sm" href={`/scope?service=${key}`}>Scope this</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ 02 · Who we help</Eyebrow>
              <h2 className="dft-h2">
                Built for the point where the finance function runs out of room.
              </h2>
            </div>
            <div>
              <p className="dft-lead-sm" style={{ marginBottom: 22 }}>
                Most of our clients have a capable finance team and a problem that sits above it: a
                first reporting year under IFRS, an auditor asking questions nobody has time to
                answer, a transaction that needs numbers to hold up under scrutiny.
              </p>
              <p style={{ marginBottom: 34 }}>
                We come in for that problem, we solve it in the open, and we leave the working file
                behind. No standing retainer unless you want one, no team you have never met, no
                report that reads well and helps little.
              </p>
              <div className="dft-strip dft-strip-3">
                {WHO.map(([title, body]) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ethics-values" className="dft-section dft-section-dark">
          <div className="dft-wrap">
            <Eyebrow tone="dark">§ 03 · How we work</Eyebrow>
            <h2 className="dft-h2" style={{ margin: "0 0 50px", maxWidth: "22ch" }}>
              Four commitments, made in writing before the work starts.
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
              What finance teams in the region are dealing with now.
            </h2>
            <div className="dft-notes">
              {NOTES.map((n) => (
                <article key={n.title}>
                  <span>{n.tag}</span>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
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
            <p>
              Build a draft scope in two minutes. We reply with a senior read on whether, and how, we
              can help.
            </p>
            <Link className="dft-btn dft-btn-lg" href="/scope">Open the scope builder</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
