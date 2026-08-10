import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://disccaddy.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Disc Caddy: Play smarter disc golf",
    template: "%s | Disc Caddy",
  },
  description:
    "Line up your next shot with a smart caddy built for the teepad, not the parking lot. Discs, courses, bag work, and friends in one disc golf companion.",
  openGraph: {
    title: "Disc Caddy: Play smarter disc golf",
    description:
      "Insight when it counts: smart caddy, recommendations, reviews, bag analysis, and rounds with friends, without the tab shuffle.",
    url: siteUrl,
    siteName: "Disc Caddy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disc Caddy: Play smarter disc golf",
    description:
      "A caddy for your pocket: recommendations, reviews, and rounds with friends in one place.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
