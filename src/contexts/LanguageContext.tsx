"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language } from '../i18n/dictionaries';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (keyPath: string) => {
    const keys = keyPath.split('.');
    let current: any = dictionaries[language];
    for (const key of keys) {
      if (current[key] === undefined) {
        return keyPath; // fallback to key path
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
