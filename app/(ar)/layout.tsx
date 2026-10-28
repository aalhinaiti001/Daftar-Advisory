import type { Metadata } from "next";
import "../globals.css";
import "../daftar.css";

const DESC = "عمل مالي بسيط، حتى حين لا تكون المسألة كذلك. قوائم مالية، استعداد للتدقيق، مراجعة فنية، ودعم صفقات.";

/* Same entity as the English root layout's schema, named in Arabic with the
   English name as alternateName. ProfessionalService, not an attest type. */
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "دفتر للاستشارات",
  alternateName: "Daftar Advisory",
  description: DESC,
  url: "https://daftaradvisory.com/ar",
  email: "ahmad@daftaradvisory.com",
  areaServed: ["Jordan", "Saudi Arabia", "United Arab Emirates", "Middle East"],
  address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
  founder: {
    "@type": "Person",
    name: "أحمد الهنائي",
    alternateName: "Ahmad Al Hinaiti",
    jobTitle: "Founder",
    sameAs: ["https://linkedin.com/in/ahmad-alhinaiti"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daftaradvisory.com"),
  title: "دفتر للاستشارات",
  description: DESC,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "دفتر للاستشارات",
    locale: "ar_AR",
    title: "دفتر للاستشارات",
    description: DESC,
    url: "/ar",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "دفتر للاستشارات",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

/* Root layout for the Arabic tree (/ar and everything under it). The <html>
   element itself carries the language and direction, which the English root
   layout cannot do for these routes; each page still sets lang/dir on its own
   wrapper for the stylesheet's .dft[lang="ar"] block. */
export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
