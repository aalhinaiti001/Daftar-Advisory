import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calibre by Daftar — Defensible hiring decisions",
  description: "A structured hiring decision diagnostic that helps teams evaluate evidence, compare candidates, and reach one reasoned decision.",
  other: { "codex-preview": "development" },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
