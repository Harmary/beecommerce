import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />

      <section id='contact' className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            {t("formTitle")}
          </h2>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            {t("formDesc")}
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
