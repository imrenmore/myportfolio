import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the base URL for metadata (e.g., your production URL)
const METADATA_BASE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imrenmore.com";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA_BASE),
  title: "Imren More",
  description: "Imren More builds accessible web experiences.",
  openGraph: {
    title: "Imren More",
    description: "Imren More builds accessible web experiences.",
    images: [
      {
        url: "images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Imren More - Front End Engineer",
      },
    ],
    type: "website",
    url: "/", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/duckie.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
