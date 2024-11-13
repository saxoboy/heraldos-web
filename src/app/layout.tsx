import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/constant/config";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  manifest: `/favicon/site.webmanifest`,
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: "@saxoboy",
  },
  authors: [
    {
      name: "Israel Herrera E.",
      url: "https://israelherrera.dev",
    },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body className={`${poppins.variable} ${poppins.className}`}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-30">
            <Navbar />
          </div>
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </>
  );
}
