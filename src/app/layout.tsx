import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { config } from "@/config";
import { getOgImageUrl } from "@/lib/ogImage";

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
    "SBCare",
    "health",
    "wellness",
    "care",
    "lifestyle",
    "health tips",
    "Indonesia",
    "medical guidance",
  ],
  alternates: {
    canonical: "/",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
