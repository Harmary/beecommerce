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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='lg:pt-80 lg:pb-96 pt-32 pb-32 bg-gradient-to-b from-primary-light/10 to-white relative overflow-hidden'>
      <div className='container mx-auto px-4 text-center' ref={ref}>
        <div className={cn(
          "transform transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h1 className='text-4xl md:text-6xl font-bold text-secondary mb-6 relative'>
            {t("slogan")}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
            {t("description")}
          </p>
          <Button 
            size='lg' 
            className='group hover:scale-105 transition-all duration-300'
            onClick={scrollToContact}
          >
            {t("submit")}
            <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </div>
    </section>
  );
}