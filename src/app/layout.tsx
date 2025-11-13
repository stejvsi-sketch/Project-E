import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "M'LiteEv - Energise Your Ride | Premium Electric Scooters",
  description: "Discover premium electric scooters by M'LiteEv. Revolutionizing urban mobility with cutting-edge technology, eco-friendly design, and superior performance.",
  keywords: "electric scooters, ev scooters, electric mobility, eco-friendly transport, M'LiteEv",
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
  openGraph: {
    title: "M'LiteEv - Energise Your Ride",
    description: "Premium electric scooters for the modern city",
    type: "website",
    locale: "en_US",
    siteName: "M'LiteEv",
  },
  twitter: {
    card: "summary_large_image",
    title: "M'LiteEv - Energise Your Ride",
    description: "Premium electric scooters for the modern city",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="919876543210" />
      </body>
    </html>
  );
}
