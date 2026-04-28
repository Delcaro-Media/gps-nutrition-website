import type { Metadata } from "next";
import { Overpass, Jost, Caveat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/data/siteConfig";
import "@fontsource/open-sauce-sans/400.css";
import "@fontsource/open-sauce-sans/500.css";
import "@fontsource/open-sauce-sans/600.css";
import "@fontsource/open-sauce-sans/700.css";
import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GPS Nutrition | Personalized One-on-One Nutrition Consulting",
    template: "%s | GPS Nutrition",
  },
  description:
    "Personalized one-on-one nutrition consulting with Gwen Ganske, CHN. Plans designed around your body, goals, and lifestyle — including lab requisitions and detailed analysis.",
  applicationName: "GPS Nutrition",
  authors: [{ name: "Gwen Ganske" }],
  creator: "Gwen Ganske",
  publisher: "GPS Nutrition Ltd.",
  keywords: [
    "GPS Nutrition",
    "Gwen Ganske",
    "registered holistic nutritionist",
    "one-on-one nutrition consulting",
    "personalized nutrition plan",
    "metabolic balance",
    "holistic nutrition",
    "nutrition coach Canada",
    "lab requisitions nutrition",
    "healthy eating",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GPS Nutrition | Personalized One-on-One Nutrition Consulting",
    description:
      "Personalized one-on-one nutrition consulting designed for your body, goals, and lifestyle.",
    url: siteConfig.url,
    siteName: "GPS Nutrition",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPS Nutrition | Personalized One-on-One Nutrition Consulting",
    description:
      "Personalized one-on-one nutrition consulting designed for your body, goals, and lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/logo.png`,
  description:
    "Personalized one-on-one nutrition consulting designed for your body, goals, and lifestyle. Includes lab requisitions and detailed analysis.",
  serviceType: "Nutrition Consulting",
  priceRange: "$$",
  email: siteConfig.emails.info,
  telephone: siteConfig.phone.tel,
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  founder: {
    "@type": "Person",
    name: siteConfig.owner,
    jobTitle: "Registered Holistic Nutritionist",
    worksFor: { "@id": `${siteConfig.url}/#business` },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nutrition Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "One-on-One Nutrition Consulting",
          description:
            "Fully personalized nutrition plan designed for your body, goals, and lifestyle. Includes lab requisitions and detailed analysis.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${overpass.variable} ${jost.variable} ${caveat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-900 focus:text-sm focus:font-sans focus:rounded focus:shadow-lg"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
