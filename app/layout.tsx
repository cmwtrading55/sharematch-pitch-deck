import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShareMatch — Shariah-Compliant Digital Markets Platform",
  description:
    "The first Shariah-compliant tokenised asset marketplace. Seed round closing 27th March 2026 at $83M post-money. EIS eligible.",
  openGraph: {
    title: "ShareMatch — Shariah-Compliant Digital Markets Platform",
    description:
      "The first Shariah-compliant tokenised asset marketplace. Seed round closing 27th March 2026 at $83M post-money. EIS eligible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1b4af96337064ff3bdeee05e87a90bee"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
