"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative z-10 py-6"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "var(--color-neon-violet)" }}
            >
              F
            </div>
            <span
              className="text-caption font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              FitManager Web3
            </span>
          </div>

          {/* Links & Docs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-caption" style={{ color: "var(--text-dim)" }}>
            <Link
              href="https://t.me/fitmanager_game_bot/app"
              target="_blank"
              className="hover:text-white transition-colors duration-150"
            >
              {t("footer.play")}
            </Link>
            <Link
              href="https://t.me/FitManagerWeb3"
              target="_blank"
              className="hover:text-white transition-colors duration-150"
            >
              {t("footer.blog")}
            </Link>

            {/* Documentation Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2 sm:mt-0 sm:ml-4">
              <Link href="/terms" className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/70 hover:text-white transition-all duration-200">
                {t("footer.terms")}
              </Link>
              <Link href="/privacy" className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/70 hover:text-white transition-all duration-200">
                {t("footer.privacy")}
              </Link>
              <button onClick={() => alert('This app is for entertainment only and is not a medical device. We are not an exchange or broker. TON purchases are in-game transactions.')} className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/70 hover:text-white transition-all duration-200">
                {t("footer.disclaimer")}
              </button>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-caption" style={{ color: "var(--text-dim)", opacity: 0.5 }}>
            © {new Date().getFullYear()} {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
}
