import type { Metadata } from "next";
import "./globals.css";
import "./daftar.css";

import { SERVICE_ORDER, SERVICES, EMAIL } from "./_data/practice";
import { SERVICE_SLUG } from "./_data/services";
import { SITE, ORG_ID, PERSON_ID, WEBSITE_ID, LINKEDIN } from "./_data/site";

const DESC =
  "IFRS financial statements, technical accounting review, audit readiness and quality of earnings for finance teams in Saudi Arabia, Jordan and the UAE.";

/* Google Fonts, loaded as a <link> rather than the @import globals.css used
   to carry: an @import is only discovered once the stylesheet has parsed,
   which put the webfonts a full round trip later on the critical path. */
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..700,0..100&family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap";

/* Non-attest practice: the schema type is ProfessionalService, NOT
   AccountingService/FinancialService. Those imply licensed attest work the
   practice explicitly does not provide, and the site copy says so.
   ProfessionalService is a LocalBusiness subtype, so the address and area
   served here are what a local listing reads. One graph, three nodes: the
   practice, the founder, the site. Pages reference the ids rather than
   repeating the nodes. */
const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "Daftar Advisory",
      alternateName: "دفتر للاستشارات",
      description: DESC,
      url: SITE,
      logo: `${SITE}/brand/daftar-mark-tile.svg`,
      image: `${SITE}/og-daftar.png`,
      email: EMAIL,
      foundingDate: "2024",
      founder: { "@id": PERSON_ID },
      address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Jordan" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      availableLanguage: ["en", "ar"],
      knowsAbout: [
        "IFRS financial statements",
        "IFRS 18",
        "Technical accounting review",
        "Audit readiness",
        "Quality of earnings",
        "Saudi e-invoicing",
        "Zakat and corporate tax reporting",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICE_ORDER.map((key) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE}/services/${SERVICE_SLUG[key]}#service`,
            name: SERVICES[key].label,
            description: SERVICES[key].blurb,
            url: `${SITE}/services/${SERVICE_SLUG[key]}`,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Ahmad Al Hinaiti",
      jobTitle: "Founder",
      url: `${SITE}/about`,
      email: EMAIL,
      worksFor: { "@id": ORG_ID },
      sameAs: [LINKEDIN],
      knowsLanguage: ["en", "ar"],
      knowsAbout: ["IFRS", "Audit readiness", "Technical accounting review", "Quality of earnings"],
      address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE,
      name: "Daftar Advisory",
      inLanguage: ["en", "ar"],
      publisher: { "@id": ORG_ID },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daftaradvisory.com"),
  title: "IFRS Financial Statements and Audit Readiness | Daftar Advisory",
  description: DESC,
  icons: { icon: "/favicon.svg" },
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
    title: "Daftar Advisory — Rigorous finance, without the overhead.",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS_HREF} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
