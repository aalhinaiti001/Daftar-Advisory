import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import ScopeBuilder from "./ScopeBuilder";

const DESC =
  "Three questions, one draft engagement outline for IFRS statements, technical review, audit readiness or quality of earnings. We reply within two working days.";
const TITLE = "Scope an IFRS or Audit Readiness Engagement | Daftar Advisory";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/scope" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: TITLE,
    description: DESC,
    url: "/scope",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

export default function Scope() {
  return (
    <div className="dft">
      <SiteHeader active="scope" />

      <main className="dft-rise">
        <section className="dft-wrap dft-scope">
          <Eyebrow tone="rust">§ 00 · Scope builder</Eyebrow>
          <div className="dft-scope-head">
            <h1 className="dft-h1">Draft the engagement before you call.</h1>
            <p>
              Answer three questions. The outline on the right builds as you go, ready to send to us
              or to whoever approves the budget.
            </p>
          </div>
          <ScopeBuilder />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
