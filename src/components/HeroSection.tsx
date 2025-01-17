import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className='lg:pt-80 lg:pb-96 pt-32 pb-32 bg-gradient-to-b from-primary-light/10 to-white'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-secondary mb-6'>
          {t("slogan")}
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
          {t("description")}
        </p>
        <Button size='lg' className='group'>
          {t("submit")}
          <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
        </Button>
      </div>
    </section>
  );
}
