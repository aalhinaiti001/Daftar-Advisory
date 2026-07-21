import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daftar Advisory",
  description: "An independent advisory practice that leaves every engagement with a working artifact — a model, method, or memo.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
