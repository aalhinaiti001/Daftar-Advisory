import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";

/* The 404 page. Next's global not-found route only honours app/not-found.tsx
   under a single root layout, and this app has two (English and Arabic), so
   the branded page is an ordinary route here and netlify.toml copies its
   export over out/404.html after the build. No-index: it is a 404, not a page. */
export const metadata: Metadata = {
  title: "Not found — Daftar Advisory",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="dft">
      <SiteHeader active="home" />
      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 404 · Not found</Eyebrow>
          <h1 className="dft-h1">That page is not in the <em>file.</em></h1>
          <p className="dft-lead dft-page-lead">
            The address may have changed. Start from the practice page, or draft a scope.
          </p>
          <div className="dft-actions">
            <Link className="dft-btn" href="/">Practice</Link>
            <Link className="dft-btn-ghost" href="/scope">Scope builder</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
