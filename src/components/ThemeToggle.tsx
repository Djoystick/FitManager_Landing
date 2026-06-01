"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center my-16 relative z-20">
      <div className="flex bg-bg-card border border-border-strong rounded-pill p-1 shadow-subtle-5 backdrop-blur-md">
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center justify-center w-12 h-8 rounded-pill transition-all ${
            theme === 'dark' 
              ? 'bg-border-strong text-text-main shadow-sm' 
              : 'text-text-muted hover:text-text-main'
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('light')}
          className={`flex items-center justify-center w-12 h-8 rounded-pill transition-all ${
            theme === 'light' 
              ? 'bg-border-strong text-text-main shadow-sm' 
              : 'text-text-muted hover:text-text-main'
          }`}
        >
          <Sun className="w-4 h-4" />
        </button>
      </div>
      <p className="mt-4 text-sm font-medium text-text-muted">
        {language === 'ru' ? 'Поддерживается светлая и темная тема.' : 'Light and dark modes supported.'}
      </p>
    </div>
  );
}
