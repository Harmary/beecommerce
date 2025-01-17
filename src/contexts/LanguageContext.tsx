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
    ru: "Трансформируйте ваш бизнес электронной коммерции с помощью мощной аналитики данных и оперативных инсайтов в нашем сервисе",
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
  corpEmail: {
    en: "Email",
    ru: "Почта",
  },
  INN: {
    en: "INN",
    ru: "ИНН",
  },
  message: {
    en: "Tell us about your business needs",
    ru: "Расскажите о потребностях вашего бизнеса",
  },
  sponsorText: {
    en: 'Project implemented with the support of the "Innovation Promotion Fund" within the framework of the federal project "University Technology Entrepreneurship Platform"',
    ru: "Проект выполнен при поддержке «Фонда содействия инновациям» в рамках федерального проекта «Платформа университетского технологического предпринимательства»",
  },
  'LLC "Beecommerce", 2024': {
    en: 'LLC "Beecommerce", 2024',
    ru: 'OOO "Бикоммерс", 2024',
  },
  "All rights reserved.": {
    en: "All rights reserved.",
    ru: "Все права защищены.",
  },
  smartDataTitle: {
    en: "Smart Data Collection",
    ru: "Умный сбор данных",
  },
  smartDataDesc: {
    en: "Automatically gather sales, customer behavior, and performance metrics from eCommerce platforms",
    ru: "Автоматический сбор данных о продажах, поведении клиентов и показателях эффективности с платформ электронной коммерции",
  },
  analyticsTitle: {
    en: "Advanced Analytics",
    ru: "Продвинутая аналитика",
  },
  analyticsDesc: {
    en: "Transform raw data into actionable insights with our powerful analytics tools and visualizations",
    ru: "Превращайте необработанные данные в полезные выводы с помощью наших мощных инструментов аналитики и визуализации",
  },
  monitoringTitle: {
    en: "Real-time Monitoring",
    ru: "Мониторинг в реальном времени",
  },
  monitoringDesc: {
    en: "Track your business metrics in real-time and receive instant alerts about important changes",
    ru: "Отслеживайте показатели вашего бизнеса в реальном времени и получайте мгновенные уведомления о важных изменениях",
  },
  integrationTitle: {
    en: "Easy Integration",
    ru: "Простая интеграция",
  },
  integrationDesc: {
    en: "Seamlessly connect with popular eCommerce platforms and start collecting data in minutes",
    ru: "Легко подключайтесь к популярным платформам электронной коммерции и начинайте собирать данные за считанные минуты",
  },
  ceoName: {
    en: "Maria Kharlamova",
    ru: "Мария Харламова",
  },
  ceoRole: {
    en: "CEO & Frontend Developer",
    ru: "CEO и Frontend-разработчик",
  },
  ceoBio: {
    en: "Expert in React and modern web technologies with a passion for creating intuitive user interfaces",
    ru: "Эксперт по React и современным веб-технологиям, увлеченная созданием интуитивных пользовательских интерфейсов",
  },
  backendDevName: {
    en: "Anatoly Divanis",
    ru: "Анатолий Диванис",
  },
  backendDevRole: {
    en: "Backend Developer",
    ru: "Backend-разработчик",
  },
  backendDevBio: {
    en: "Specialized in building scalable backend systems and data processing pipelines",
    ru: "Специализируется на создании масштабируемых бэкенд-систем и конвейеров обработки данных",
  },
  formTitle: {
    en: "Ready to Boost Your eCommerce Analytics?",
    ru: "Готовы улучшить аналитику вашего интернет-магазина?",
  },
  formDesc: {
    en: "Get in touch with us to discover how Beecommerce can transform your business data into actionable insights",
    ru: "Свяжитесь с нами, чтобы узнать, как Beecommerce может превратить данные вашего бизнеса в полезные инсайты",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

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
