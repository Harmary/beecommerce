import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='lg:pt-80 lg:pb-96 pt-32 pb-32 bg-gradient-to-b from-primary-light/10 to-white'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-secondary mb-6'>
          {t("slogan")}
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
          {t("description")}
        </p>
        <Button size='lg' className='group' onClick={scrollToContact}>
          {t("submit")}
          <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
        </Button>
      </div>
    </section>
  );
}
