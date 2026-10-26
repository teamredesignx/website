import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { getSiteUrl, site } from "@/lib/site";

import "./globals.css";

// One variable family covers the logo's narrow-light and wide-heavy contrast.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Labels, captions and data only.
const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: "We redesign and architect websites so visitors stay, click, and buy.",
    locale: "en_AU",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: site.handle,
    creator: site.handle,
  },
};

export const viewport: Viewport = {
  themeColor: "#15151b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${martianMono.variable}`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
