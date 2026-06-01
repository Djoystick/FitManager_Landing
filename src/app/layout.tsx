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
  title: "FitManager | Web3 Cyber-Football",
  description: "The First Move-to-Earn Football Manager on Telegram & TON. Convert your real-world sweat into digital glory.",
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
      <body className="min-h-full flex flex-col relative bg-background">
        {/* Global Neuro-Punk Grid Background */}
        <div className="fixed inset-0 z-[-1] cyber-grid opacity-30 pointer-events-none"></div>
        {/* Subtle animated vignette */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)] pointer-events-none"></div>
        
        {children}
      </body>
    </html>
  );
}
