"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

export default function TopNav() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-2">
      <div className="flex bg-bg-card-solid border border-border-strong rounded-pill p-1 shadow-subtle-5">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-medium rounded-pill transition-all ${
            language === 'en' 
              ? 'bg-border-strong text-text-main shadow-sm' 
              : 'text-text-muted hover:text-text-main hover:bg-border-subtle'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1 text-xs font-medium rounded-pill transition-all ${
            language === 'ru' 
              ? 'bg-border-strong text-text-main shadow-sm' 
              : 'text-text-muted hover:text-text-main hover:bg-border-subtle'
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
}
