import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShareMatch — Invest in the Future of Shariah-Compliant Markets",
  description:
    "The world's only Shariah-compliant tokenised asset marketplace. Join our seed round at £64M post-money valuation.",
  openGraph: {
    title: "ShareMatch — Invest in the Future of Shariah-Compliant Markets",
    description:
      "The world's only Shariah-compliant tokenised asset marketplace. Join our seed round at £64M post-money valuation.",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
