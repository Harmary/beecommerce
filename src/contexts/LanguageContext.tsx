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
    en: "Transform your eCommerce business with powerful data analytics and real-time insights",
    ru: "Трансформируйте ваш бизнес электронной коммерции с помощью мощной аналитики данных и аналитики в реальном времени",
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
    en: "Get Started",
    ru: "Начать сейчас",
  },
  name: {
    en: "Your Name",
    ru: "Ваше имя",
  },
  email: {
    en: "Business Email",
    ru: "Рабочая почта",
  },
  message: {
    en: "Tell us about your business needs",
    ru: "Расскажите о потребностях вашего бизнеса",
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