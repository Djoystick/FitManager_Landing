import type { Metadata } from "next";
import { Tektur, Exo_2 } from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin", "cyrillic"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
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
      className={`${tektur.variable} ${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#050505] text-foreground font-sans">
        {/* Global Neuro-Punk Grid Background */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: 'linear-gradient(to right, #00f0ff22 1px, transparent 1px), linear-gradient(to bottom, #00f0ff22 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle animated vignette */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_90%)] pointer-events-none"></div>
        
        {/* Main Content */}
        <div className="relative z-10 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
