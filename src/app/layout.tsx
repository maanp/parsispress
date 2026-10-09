import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { description, siteName, siteUrl, tagline } from "@/lib/brand";
import { asset, canonical } from "@/lib/metadata";
import "./globals.css";

const editorial = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
  axes: ["opsz", "SOFT", "WONK"],
});

const interfaceFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-interface",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — AI-powered startup intelligence`,
    template: `%s — ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "AI startup ideas",
    "startup opportunity discovery",
    "market research",
    "AI-powered startup intelligence",
    "problem discovery",
    "startup validation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: canonical() },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: canonical(),
    title: `${siteName} — ${tagline}`,
    description,
    images: [
      {
        url: asset("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: `${siteName} — ${tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${tagline}`,
    description,
    images: [asset("/opengraph-image.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${editorial.variable} ${interfaceFont.variable}`}>
      <body className="min-h-screen bg-ivory antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-forest focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}