import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import TopNav from "@/components/TopNav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitManager — Web3 Football Manager on Telegram & TON",
  description:
    "The first Move-to-Earn football manager on Telegram. Convert your real-world steps into Sweat Points, train your cyber-squad, and compete in 10-tier global leagues on the TON blockchain.",
  keywords: "FitManager, Web3, TON, Telegram, Move-to-Earn, football manager, NFT, blockchain",
  openGraph: {
    title: "FitManager — Web3 Football Manager",
    description:
      "The first Move-to-Earn football manager on Telegram & TON. Walk. Train. Dominate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col relative"
        style={{
          fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <Providers>
          {/* Persistent background layers */}
          <div
            className="fixed inset-0 bg-grid pointer-events-none z-0"
            style={{ backgroundColor: "var(--bg-page)" }}
            aria-hidden="true"
          />
          <div
            className="fixed top-0 left-0 right-0 h-[500px] spotlight-top pointer-events-none z-0"
            aria-hidden="true"
          />
          <TopNav />
          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
