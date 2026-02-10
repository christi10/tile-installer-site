import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tilecraft.co.uk"),
  title: {
    default: "TileCraft | Premium Tile Installation",
    template: "%s | TileCraft",
  },
  description:
    "Expert tile installation services for residential and commercial projects. Bathrooms, kitchens, floors, and custom tiling with precision craftsmanship.",
  keywords: [
    "tile installation",
    "tiling services",
    "bathroom tiling",
    "kitchen tiles",
    "floor tiling",
    "commercial tiling",
    "tile renovation",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tilecraft.co.uk",
    siteName: "TileCraft",
    title: "TileCraft | Premium Tile Installation",
    description:
      "Expert tile installation services for residential and commercial projects.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TileCraft - Premium Tile Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TileCraft | Premium Tile Installation",
    description:
      "Expert tile installation services for residential and commercial projects.",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TileCraft",
  description:
    "Expert tile installation services for residential and commercial projects. Bathrooms, kitchens, floors, and custom tiling with precision craftsmanship.",
  url: "https://tilecraft.co.uk",
  telephone: "+441234567890",
  email: "info@tilecraft.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressRegion: "South East England",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    geoRadius: "80000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tiling Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Tiling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Tiling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Tile Design" } },
    ],
  },
  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
  priceRange: "££",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  );
}
