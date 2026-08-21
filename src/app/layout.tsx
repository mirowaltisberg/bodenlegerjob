import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bodenlegerjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bodenbelag Jobs Schweiz | Stellen für Bodenbelag-Fachkräfte",
    template: "%s | bodenlegerjob.ch",
  },
  description:
    "Finde Stellen für Boden-Parkettleger, Bodenleger, Parkettleger, Plattenleger und Projektleiter Bodenbelag in der Schweiz.",
  keywords: [
    "Bodenbelagjobs",
    "Bodenbelagjobs Schweiz",
    "Bodenleger Jobs",
    "Projektleiter Bodenbelag",
    "Parkettleger Jobs",
    "Plattenleger Jobs",
    "Industriebodenleger Jobs",
    "Stellen Bodenbelagbranche Schweiz",
    "Bodenbelag Job Schweiz",
    "Bodenbelag Stellen Schweiz",
    "Bodenleger Stellenangebote",
    "Bodenleger Jobs Schweiz",
    "Bodenleger Temporär",
    "Bodenbelag Festanstellung",
    "Bodenleger Lohn Schweiz",
  ],
  openGraph: {
    title: "Bodenbelag Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Boden-Parkettleger EFZ, Bodenleger, Parkett, Platten und Projektleitung Bodenbelag.",
    type: "website",
    url: "/",
    siteName: "bodenlegerjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodenbelag Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Boden-Parkettleger EFZ, Bodenleger, Parkett, Platten und Projektleitung Bodenbelag.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "bodenlegerjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "bodenlegerjob.ch bündelt Stellenangebote mit klarem Bezug zum Bodenbelaggewerk in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "bodenlegerjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Bodenbelag-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
