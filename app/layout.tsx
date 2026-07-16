import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShareMatch · The World's First Shariah-Compliant Sports Investment Market",
  description:
    "The Future of SportsFi. Live and trading on Solana. Seed round open now: £4M at £60M pre-money. The only chance to own ShareMatch. EIS eligible.",
  openGraph: {
    title: "ShareMatch · The World's First Shariah-Compliant Sports Investment Market",
    description:
      "The Future of SportsFi. Live and trading on Solana. Seed round open now: £4M at £60M pre-money. The only chance to own ShareMatch. EIS eligible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
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
