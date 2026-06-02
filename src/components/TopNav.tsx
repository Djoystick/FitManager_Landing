"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export default function TopNav() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-12"
      style={{
        background: scrolled
          ? "rgba(5, 6, 15, 0.88)"
          : "rgba(5, 6, 15, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center text-white text-sm font-bold"
          style={{
            background: "var(--color-neon-violet)",
            boxShadow: "var(--shadow-accent-glow)",
          }}
        >
          F
        </div>
        <span
          className="hidden sm:block text-sm font-semibold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          FitManager
        </span>
      </Link>

      {/* Nav Links — desktop */}
      <div className="hidden md:flex items-center gap-5">
        {(["mechanics", "economy", "roadmap"] as const).map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="text-body transition-colors duration-150 hover:text-white"
            style={{ color: "var(--text-dim)" }}
          >
            {t(`nav.${key}`)}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Lang switcher */}
        <div
          className="flex p-0.5 rounded-pill"
          style={{
            background: "rgba(186, 214, 247, 0.04)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {(["RU", "EN"] as const).map((lang) => {
            const lk = lang.toLowerCase() as "ru" | "en";
            return (
              <button
                key={lang}
                onClick={() => setLanguage(lk)}
                className="px-2.5 py-1 text-xs font-medium rounded-pill transition-all duration-150"
                style={{
                  background:
                    language === lk
                      ? "rgba(186, 214, 247, 0.12)"
                      : "transparent",
                  color:
                    language === lk
                      ? "var(--text-primary)"
                      : "var(--text-dim)",
                }}
              >
                {lang}
              </button>
            );
          })}
        </div>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-7 h-7 flex items-center justify-center rounded-md transition-all duration-150 hover:bg-border-subtle"
            style={{
              border: "1px solid var(--border-subtle)",
              color: "var(--text-dim)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={13} />
            ) : (
              <Moon size={13} />
            )}
          </button>
        )}

        {/* CTA pill */}
        <Link
          href="https://t.me/fitmanager_game_bot/app"
          target="_blank"
          className="hidden sm:flex btn-primary text-xs py-1.5 px-3"
          style={{ fontSize: "12px" }}
        >
          {t("nav.play")}
        </Link>
      </div>
    </motion.nav>
  );
}
