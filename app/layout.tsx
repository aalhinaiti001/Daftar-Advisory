import type { Metadata } from "next";
import "./globals.css";
import "./daftar.css";

const DESC = "Clear finance work for founders and finance teams — financial statements, audit readiness, technical review, transaction support.";

export const metadata: Metadata = {
  metadataBase: new URL("https://daftaradvisory.com"),
  title: "Daftar Advisory",
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
  return <html lang="en"><body>{children}</body></html>;
}
