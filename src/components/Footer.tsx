"use client";

import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border-strong bg-bg-main relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-violet flex items-center justify-center text-white font-bold text-lg leading-none shadow-md">
              F
            </div>
            <span className="text-body-lg font-bold text-text-main tracking-tight">
              FitManager Web3
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="https://t.me/FitManagerWeb3" 
              target="_blank"
              className="text-body text-text-muted hover:text-text-main transition-colors flex items-center gap-2"
            >
              <TerminalSquare className="w-4 h-4 opacity-70" />
              {t('footer.blog')}
            </Link>
            <Link 
              href="https://t.me/fitmanager_game_bot/FitManager" 
              target="_blank"
              className="text-body text-text-muted hover:text-text-main transition-colors"
            >
              {t('footer.play')}
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border-strong flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-text-muted opacity-60">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-text-main transition-colors">{t('footer.privacy')}</Link>
            <Link href="#" className="hover:text-text-main transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
