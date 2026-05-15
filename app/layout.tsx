import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yinglian — Premium video production on WeChat",
  description:
    "Yinglian helps brands and businesses create premium video content through a simple chat with Sammy on WeChat.",
  openGraph: {
    title: "Yinglian — Premium video production on WeChat",
    description:
      "High-quality videos, started on WeChat. Chat with Sammy to brief, review, and receive brand-ready films.",
    type: "website",
    locale: "en_US",
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
      className={`${dmSans.variable} ${notoSansSC.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-yl-bg text-yl-text">{children}</body>
    </html>
  );
}
