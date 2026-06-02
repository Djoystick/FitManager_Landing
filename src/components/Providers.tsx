"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="fitmanager-theme"
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
