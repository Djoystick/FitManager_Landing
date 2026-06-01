"use client";

import Link from "next/link";
import { TerminalSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t shadow-subtle-3 bg-midnight-abyss relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-violet flex items-center justify-center text-ghost-white font-bold text-lg leading-none">
              F
            </div>
            <span className="text-body-lg font-bold text-ghost-white tracking-tight">
              FitManager Web3
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="https://t.me/FitManagerWeb3" 
              target="_blank"
              className="text-body text-comet hover:text-ghost-white transition-colors flex items-center gap-2"
            >
              <TerminalSquare className="w-4 h-4 opacity-70" />
              Dev-Блог
            </Link>
            <Link 
              href="https://t.me/fitmanager_game_bot/FitManager" 
              target="_blank"
              className="text-body text-comet hover:text-ghost-white transition-colors"
            >
              Play Game
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t shadow-subtle-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-comet opacity-60">
          <p>© {new Date().getFullYear()} FitManager. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-ghost-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ghost-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
