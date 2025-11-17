import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Geometric Sans for UI/Body
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// Display Serif for Headlines
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "M'LiteEv",
  url: "https://mliteev.com",
  logo: "https://mliteev.com/favicon-96x96.png",
  description:
    "Premium electric scooter dealership in Faridabad, Haryana. M'LiteEv offers urban electric scooters, scooty spare parts, and EV service.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Atal Park, Sector-2",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121004",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9818649138",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mliteev.com'),
  title: "M'LiteEv - Energise Your Ride | Premium Electric Scooters",
  description: "Discover premium electric scooters by M'LiteEv. Revolutionizing urban mobility with cutting-edge technology, eco-friendly design, and superior performance.",
  keywords: [
    "electric scooter",
    "electric scooters India",
    "EV scooters",
    "electric scooty",
    "battery scooter",
    "electric two wheeler",
    "premium electric scooter",
    "Faridabad electric scooter showroom",
    "Haryana electric scooter dealer",
    "M'LiteEv",
    "Mlitev",
  ],
  authors: [{ name: "M'LiteEv" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: "M'LiteEv - Energise Your Ride",
    description: "Premium electric scooters for the modern city",
    type: "website",
    locale: "en_US",
    siteName: "M'LiteEv",
    url: 'https://mliteev.com',
  },
  twitter: {
    card: "summary_large_image",
    title: "M'LiteEv - Energise Your Ride",
    description: "Premium electric scooters for the modern city",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="919818649138" />
      </body>
    </html>
  );
}
