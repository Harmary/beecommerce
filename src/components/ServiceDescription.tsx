import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ServiceDescription() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 items-center",
          "transform transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Left column with text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {t("serviceTitle")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("serviceDescription")}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{t(`serviceBenefit${item}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right column with image/illustration */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 absolute -z-10 animate-pulse" />
            <img 
              src="/lovable-uploads/4318ff02-677a-4fd2-9abe-4dc49e3f71cb.png"
              alt="BeeCommerce Analytics"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}