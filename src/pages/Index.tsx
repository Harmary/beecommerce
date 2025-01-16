import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ContactForm } from "@/components/ContactForm";
import { BarChart3, Database, LineChart, Settings } from "lucide-react";

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Database className="w-10 h-10" />,
      title: { en: "Data Collection", ru: "Сбор данных" },
      description: {
        en: "Automated collection of eCommerce metrics and KPIs",
        ru: "Автоматизированный сбор метрик и KPI электронной коммерции",
      },
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: { en: "Analytics", ru: "Аналитика" },
      description: {
        en: "Comprehensive analysis and visualization of your data",
        ru: "Комплексный анализ и визуализация ваших данных",
      },
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: { en: "Monitoring", ru: "Мониторинг" },
      description: {
        en: "Real-time monitoring of your business metrics",
        ru: "Мониторинг бизнес-метрик в реальном времени",
      },
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: { en: "Integration", ru: "Интеграция" },
      description: {
        en: "Easy integration with your existing systems",
        ru: "Простая интеграция с вашими существующими системами",
      },
    },
  ];

  const team = [
    {
      name: { en: "John Smith", ru: "Джон Смит" },
      role: { en: "CEO", ru: "Генеральный директор" },
    },
    {
      name: { en: "Jane Doe", ru: "Джейн Доу" },
      role: { en: "CTO", ru: "Технический директор" },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">Beecommerce</div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-light/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            {t("slogan")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("features")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border hover:border-primary transition-colors group"
              >
                <div className="text-primary mb-4 group-hover:animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title[t("language") as "en" | "ru"]}
                </h3>
                <p className="text-gray-600">
                  {feature.description[t("language") as "en" | "ru"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("team")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">
                  {member.name[t("language") as "en" | "ru"]}
                </h3>
                <p className="text-gray-600">
                  {member.role[t("language") as "en" | "ru"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("contact")}</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Beecommerce</h3>
              <p className="text-gray-400">
                Email: contact@beecommerce.com<br />
                Phone: +1 234 567 890
              </p>
            </div>
            <div>
              <img
                src={"/lovable-uploads/c60441f2-fc22-45e4-84dd-00392976e982.png"}
                alt="Sponsor Logo"
                className="h-12 mb-4"
              />
              <p className="text-sm text-gray-400">{t("sponsorText")}</p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-700">
            © {new Date().getFullYear()} Beecommerce. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}