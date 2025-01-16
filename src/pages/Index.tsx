import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ContactForm } from "@/components/ContactForm";
import { BarChart3, Database, LineChart, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Database className="w-10 h-10" />,
      title: { 
        en: "Smart Data Collection", 
        ru: "Умный сбор данных" 
      },
      description: {
        en: "Automatically gather sales, customer behavior, and performance metrics from your eCommerce platforms",
        ru: "Автоматический сбор данных о продажах, поведении клиентов и показателях эффективности с ваших платформ электронной коммерции",
      },
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: { 
        en: "Advanced Analytics", 
        ru: "Продвинутая аналитика" 
      },
      description: {
        en: "Transform raw data into actionable insights with our powerful analytics tools and visualizations",
        ru: "Превращайте необработанные данные в полезные выводы с помощью наших мощных инструментов аналитики и визуализации",
      },
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: { 
        en: "Real-time Monitoring", 
        ru: "Мониторинг в реальном времени" 
      },
      description: {
        en: "Track your business metrics in real-time and receive instant alerts about important changes",
        ru: "Отслеживайте показатели вашего бизнеса в реальном времени и получайте мгновенные уведомления о важных изменениях",
      },
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: { 
        en: "Easy Integration", 
        ru: "Простая интеграция" 
      },
      description: {
        en: "Seamlessly connect with popular eCommerce platforms and start collecting data in minutes",
        ru: "Легко подключайтесь к популярным платформам электронной коммерции и начинайте собирать данные за считанные минуты",
      },
    },
  ];

  const team = [
    {
      name: { 
        en: "Alex Thompson", 
        ru: "Алекс Томпсон" 
      },
      role: { 
        en: "CEO & Founder", 
        ru: "Генеральный директор и основатель" 
      },
      bio: {
        en: "10+ years of experience in eCommerce analytics and business intelligence",
        ru: "Более 10 лет опыта в аналитике электронной коммерции и бизнес-аналитике"
      }
    },
    {
      name: { 
        en: "Maria Rodriguez", 
        ru: "Мария Родригес" 
      },
      role: { 
        en: "Chief Technology Officer", 
        ru: "Технический директор" 
      },
      bio: {
        en: "Expert in big data processing and machine learning algorithms",
        ru: "Эксперт в обработке больших данных и алгоритмах машинного обучения"
      }
    },
  ];

  const navLinks = [
    { href: "#features", label: { en: "Features", ru: "Возможности" } },
    { href: "#team", label: { en: "Team", ru: "Команда" } },
    { href: "#contact", label: { en: "Contact", ru: "Контакты" } },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-secondary">Beecommerce</div>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label[t("language") as "en" | "ru"]}
                </a>
              ))}
            </nav>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-light/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            {t("slogan")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t("description")}
          </p>
          <Button size="lg" className="group">
            {t("language") === "en" ? "Start Free Trial" : "Начать бесплатный период"}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
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
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("team")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">
                  {member.name[t("language") as "en" | "ru"]}
                </h3>
                <p className="text-primary mb-2">
                  {member.role[t("language") as "en" | "ru"]}
                </p>
                <p className="text-gray-600">
                  {member.bio[t("language") as "en" | "ru"]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t("contact")}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("language") === "en" 
              ? "Ready to transform your eCommerce analytics? Get in touch with us to start your journey towards data-driven success."
              : "Готовы трансформировать вашу аналитику электронной коммерции? Свяжитесь с нами, чтобы начать путь к успеху, основанному на данных."}
          </p>
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
                Phone: +7 (999) 123-45-67
              </p>
            </div>
            <div>
              <img
                src="/lovable-uploads/c60441f2-fc22-45e4-84dd-00392976e982.png"
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