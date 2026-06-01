import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${orbitron.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#050505] text-foreground font-sans">
        {/* Global Neuro-Punk Grid Background */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: `
              linear-gradient(to right, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
            `
          }}
        ></div>
        
        {/* Subtle animated vignette */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_85%)] pointer-events-none"></div>
        
        {/* Main Content */}
        <div className="relative z-10 flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
