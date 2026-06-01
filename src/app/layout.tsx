import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-space-grotesk", 
  subsets: ["latin", "cyrillic"], 
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

import { Providers } from "@/components/Providers";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "FitManager Web3",
  description: "Первый футбольный Web3-менеджер в Telegram, где побеждает интеллект, а не случайность.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative font-sans selection:bg-neon-violet/30 selection:text-white transition-colors duration-300">
        <Providers>
          <div className="fixed inset-0 bg-bg-main bg-grid-pattern pointer-events-none z-[-2]"></div>
          {/* Top Spotlight */}
          <div className="fixed top-0 left-0 right-0 h-[600px] spotlight pointer-events-none z-[-1] transition-opacity duration-300"></div>
          
          <TopNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
