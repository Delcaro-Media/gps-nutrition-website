import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gpsnutrition.ca"),
  title: {
    default: "GPS Nutrition | Personalized Nutrition Services",
    template: "%s | GPS Nutrition",
  },
  description:
    "Personalized nutrition services including meal plans, group programs, and one-on-one consultations. Guiding your path to better nutrition.",
  keywords: [
    "GPS Nutrition",
    "nutritionist",
    "meal plans",
    "nutrition consulting",
    "group nutrition programs",
    "personalized nutrition",
    "healthy eating",
    "Canada",
  ],
  openGraph: {
    title: "GPS Nutrition",
    description:
      "Personalized nutrition services including meal plans, group programs, and one-on-one consultations.",
    url: "https://www.gpsnutrition.ca",
    siteName: "GPS Nutrition",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GPS Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPS Nutrition",
    description:
      "Personalized nutrition services. Meal plans, group programs, and one-on-one consultations.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "GPS Nutrition Ltd.",
              url: "https://www.gpsnutrition.ca",
              description:
                "Personalized nutrition services including meal plans, group programs, and one-on-one consultations.",
              serviceType: "Nutrition Consulting",
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
            }),
          }}
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
      {/* TODO: Replace G-XXXXXXXXXX with your real Google Analytics measurement ID */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
