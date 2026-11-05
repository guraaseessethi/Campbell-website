import type { Metadata } from "next";
import "@fontsource/gloock/latin-400.css";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "./globals.css";
import { site } from "@/lib/site";
import { ConceptRibbon } from "@/components/ConceptRibbon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Motion } from "@/components/Motion";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s | Campbell's British Tearoom" },
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: { siteName: site.name, locale: "en_CA", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <ConceptRibbon />
        <Header />
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <Motion />
        <JsonLd />
      </body>
    </html>
  );
}
