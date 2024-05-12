import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/constant/config";
import { dancingScript, poppins } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";

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
        <body className={`${dancingScript.variable} ${poppins.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
