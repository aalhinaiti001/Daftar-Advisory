import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import ScopeBuilder from "./ScopeBuilder";

const DESC =
  "Answer three questions and Daftar assembles a draft engagement outline you can send to us, or hand to whoever approves the budget.";

export const metadata: Metadata = {
  title: "Scope builder — Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/scope" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Scope builder — Daftar Advisory",
    description: DESC,
    url: "/scope",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scope builder — Daftar Advisory",
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
              Answer three questions. The register on the right assembles a draft outline you can
              send to us, or hand to whoever approves the budget.
            </p>
          </div>
          <ScopeBuilder />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
