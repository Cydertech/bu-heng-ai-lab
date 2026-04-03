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

export const metadata: Metadata = {
  title: {
    default: "CyderTech | Network Cameras & Computer Accessories",
    template: "%s | CyderTech",
  },
  description: "Premium network cameras and computer accessories with professional installation services. AI-powered solutions for home security and business needs.",
  keywords: ["network cameras", "computer accessories", "AI solutions", "home security", "installation services", "surveillance"],
  authors: [{ name: "CyderTech" }],
  creator: "CyderTech",
  publisher: "CyderTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "CyderTech | Network Cameras & Computer Accessories",
    description: "Premium network cameras and computer accessories with professional installation services.",
    siteName: "CyderTech",
    url: "https://cydertech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyderTech",
    description: "Premium network cameras and computer accessories with professional installation services.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
