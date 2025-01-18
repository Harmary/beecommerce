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
  privacyPolicy: {
    en: "Privacy Policy",
    ru: "Политика конфиденциальности",
  },
  privacyPolicyIntro: {
    en: "This Privacy Policy describes how we collect, use, and handle your personal information when you use our services.",
    ru: "Данная Политика конфиденциальности описывает, как мы собираем, используем и обрабатываем вашу личную информацию при использовании наших услуг.",
  },
  dataCollection: {
    en: "Data Collection",
    ru: "Сбор данных",
  },
  dataCollectionText: {
    en: "We collect information that you provide directly to us, including name, email address, and any other information you choose to provide.",
    ru: "Мы собираем информацию, которую вы предоставляете нам напрямую, включая имя, адрес электронной почты и любую другую информацию, которую вы решите предоставить.",
  },
  dataUsage: {
    en: "Data Usage",
    ru: "Использование данных",
  },
  dataUsageText: {
    en: "We use the information we collect to provide, maintain, and improve our services, and to communicate with you.",
    ru: "Мы используем собранную информацию для предоставления, поддержки и улучшения наших услуг, а также для связи с вами.",
  },
  dataSecurity: {
    en: "Data Security",
    ru: "Безопасность данных",
  },
  dataSecurityText: {
    en: "We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.",
    ru: "Мы принимаем разумные меры для защиты вашей личной информации от потери, кражи, неправомерного использования и несанкционированного доступа.",
  },
  cookies: {
    en: "Cookies",
    ru: "Файлы cookie",
  },
  cookiesText: {
    en: "We use cookies and similar technologies to collect information about how you interact with our services.",
    ru: "Мы используем файлы cookie и аналогичные технологии для сбора информации о том, как вы взаимодействуете с нашими услугами.",
  },
  contactText: {
    en: "If you have any questions about this Privacy Policy, please contact us at info@beecommercecorp.ru",
    ru: "Если у вас есть вопросы по поводу данной Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу info@beecommercecorp.ru",
  },
  agreeToPrivacyPolicy: {
    en: "I agree to the",
    ru: "Я согласен с",
  },
  "I agree to the": {
    en: "I agree to the",
    ru: "Я согласен с",
  },
  "privacy policy": {
    en: "privacy policy",
    ru: "политикой конфиденциальности",
  },
  "Maria Kharlamova": {
    en: "Maria Kharlamova",
    ru: "Мария Харламова",
  },
  "Anatoly Divanis": {
    en: "Anatoly Divanis",
    ru: "Анатолий Диванис",
  },
  "Back to Home": {
    en: "Back to Home",
    ru: "Вернуться на главную",
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
