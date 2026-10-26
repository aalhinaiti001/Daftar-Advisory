import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import NotesList from "./NotesList";

const DESC =
  "Short reads on what is changing for finance in the region: IFRS 18, Saudi e-invoicing and transfer pricing, audit readiness. Each one ends with a tool you can run.";

export const metadata: Metadata = {
  title: "Notes — Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/knowledge" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Notes — Daftar Advisory",
    description: DESC,
    url: "/knowledge",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes — Daftar Advisory",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

export default function Knowledge() {
  return (
    <div className="dft">
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
