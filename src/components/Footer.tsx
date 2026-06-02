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

          {/* Links */}
          <div className="flex items-center gap-4 text-caption" style={{ color: "var(--text-dim)" }}>
            <Link
              href="https://t.me/fitmanager_game_bot"
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
            <Link href="#" className="hover:text-white transition-colors duration-150">
              {t("footer.privacy")}
            </Link>
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
