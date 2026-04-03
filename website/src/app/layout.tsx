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
    default: "步衡智研 AI Lab | 跌倒康复研究与AI应用",
    template: "%s | 步衡智研",
  },
  description: "专注于跌倒后老人行动困难与下肢康复需求研究，用AI技术整理真实案例，积累康复产品数据资产。",
  keywords: ["跌倒康复", "老人行动困难", "下肢康复", "AI康复研究", "步衡智研"],
  authors: [{ name: "步衡智研" }],
  creator: "步衡智研",
  publisher: "步衡智研",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "步衡智研 AI Lab",
    description: "专注于跌倒后老人行动困难与下肢康复需求研究",
    siteName: "步衡智研",
  },
  twitter: {
    card: "summary_large_image",
    title: "步衡智研 AI Lab",
    description: "专注于跌倒后老人行动困难与下肢康复需求研究",
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
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
