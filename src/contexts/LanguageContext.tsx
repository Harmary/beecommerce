import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ru";

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

export const translations: Translations = {
  slogan: {
    en: "Harvesting eCommerce insights, like bees collect honey",
    ru: "Собираем аналитику электронной коммерции, как пчелы собирают мед",
  },
  description: {
    en: "Comprehensive data collection and analytics platform for eCommerce businesses",
    ru: "Комплексная платформа сбора и анализа данных для электронной коммерции",
  },
  features: {
    en: "Features",
    ru: "Возможности",
  },
  team: {
    en: "Our Team",
    ru: "Наша Команда",
  },
  contact: {
    en: "Contact Us",
    ru: "Связаться с нами",
  },
  submit: {
    en: "Submit",
    ru: "Отправить",
  },
  name: {
    en: "Name",
    ru: "Имя",
  },
  email: {
    en: "Email",
    ru: "Эл. почта",
  },
  message: {
    en: "Message",
    ru: "Сообщение",
  },
  sponsorText: {
    en: 'Project implemented with the support of the "Innovation Promotion Fund" within the framework of the federal project "University Technology Entrepreneurship Platform"',
    ru: 'Проект выполнен при поддержке «Фонда содействия инновациям» в рамках федерального проекта «Платформа университетского технологического предпринимательства»',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

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