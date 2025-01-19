import React, { createContext, useContext, useState } from "react";
import { commonTranslations } from "../translations/common";
import { privacyTranslations } from "../translations/privacy";
import { serviceTranslations } from "../translations/service";
import { teamTranslations } from "../translations/team";

type Language = "en" | "ru";

export const translations = {
  ...commonTranslations,
  ...privacyTranslations,
  ...serviceTranslations,
  ...teamTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}