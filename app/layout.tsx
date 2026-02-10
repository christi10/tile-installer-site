import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
