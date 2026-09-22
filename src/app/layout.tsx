import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { config } from "@/config";
import { getOgImageUrl } from "@/lib/ogImage";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ogImage = getOgImageUrl(config.title, config.organization);

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  applicationName: config.title,
  keywords: [
    "SB Care",
    "kesehatan",
    "wellness",
    "perawatan",
    "gaya hidup sehat",
    "tips kesehatan",
    "Indonesia",
    "panduan kesehatan",
  ],
  alternates: {
    canonical: config.baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: config.baseUrl,
    title: config.title,
    description: config.description,
    siteName: config.title,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [ogImage],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: config.organization,
        url: config.baseUrl,
        logo: config.logoUrl,
      },
      {
        "@type": "WebSite",
        name: config.title,
        url: config.baseUrl,
        inLanguage: "id-ID",
        publisher: {
          "@type": "Organization",
          name: config.organization,
        },
      },
    ],
  };

  return (
    <html lang="id">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
