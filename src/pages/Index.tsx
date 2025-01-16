import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ContactForm } from "@/components/ContactForm";
import { BarChart3, Database, LineChart, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Index() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "smartDataTitle",
      description: "smartDataDesc",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "analyticsTitle",
      description: "analyticsDesc",
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "monitoringTitle",
      description: "monitoringDesc",
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "integrationTitle",
      description: "integrationDesc",
    },
  ];

  const team = [
    {
      photo: "/lovable-uploads/ea373989-86d4-4354-8921-f5de6664e879.png",
      name: "ceoName",
      role: "ceoRole",
      bio: "ceoBio",
    },
    {
      photo: "/lovable-uploads/85ec408a-fb10-400d-bd90-5a2beb43ac33.png",
      name: "backendDevName",
      role: "backendDevRole",
      bio: "backendDevBio",
    },
  ];

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#team", label: t("team") },
    { href: "#contact", label: t("contact") },
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
                  {link.label}
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
            {t("submit")}
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
                  {t(feature.title)}
                </h3>
                <p className="text-gray-600">
                  {t(feature.description)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.photo} alt={t(member.name)} />
                  <AvatarFallback>{t(member.name).split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">
                  {t(member.name)}
                </h3>
                <p className="text-primary mb-2">
                  {t(member.role)}
                </p>
                <p className="text-gray-600">
                  {t(member.bio)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t("formTitle")}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("formDesc")}
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