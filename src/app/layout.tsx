import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "cyrillic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased bg-midnight-abyss text-comet`}
    >
      <body className="min-h-full flex flex-col relative font-sans selection:bg-neon-violet/30 selection:text-white">
        
        {children}
      </body>
    </html>
  );
}
