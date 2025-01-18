import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Database, LineChart, Settings } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const { t } = useLanguage();
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });

  const features: Feature[] = [
    {
      icon: <Database className='w-10 h-10' />,
      title: "smartDataTitle",
      description: "smartDataDesc",
    },
    {
      icon: <BarChart3 className='w-10 h-10' />,
      title: "analyticsTitle",
      description: "analyticsDesc",
    },
    {
      icon: <LineChart className='w-10 h-10' />,
      title: "monitoringTitle",
      description: "monitoringDesc",
    },
    {
      icon: <Settings className='w-10 h-10' />,
      title: "integrationTitle",
      description: "integrationDesc",
    },
  ];

  return (
    <section id='features' className='relative py-32'>
      {/* Blurred object under heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      
      <h2 className='text-3xl font-bold text-center mb-16 relative'>
        {t("features")}
      </h2>
      <div className='absolute left-1/2 top-48 bottom-0 lg:w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent'></div>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-16'>
          {features.map((feature, index) => (
            <div
              key={index}
              ref={
                index === 0
                  ? ref1
                  : index === 1
                  ? ref2
                  : index === 2
                  ? ref3
                  : ref4
              }
              className={cn(
                "p-6 rounded-lg border hover:border-primary transition-all duration-300 group relative",
                "transform transition-all duration-700",
                index % 2 === 0 ? "mr-auto" : "ml-auto",
                index % 2 === 0
                  ? "translate-x-[-100px]"
                  : "translate-x-[100px]",
                (index === 0 && inView1) ||
                  (index === 1 && inView2) ||
                  (index === 2 && inView3) ||
                  (index === 3 && inView4)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0",
                "max-w-xl w-full"
              )}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 lg:w-8 lg:h-0.5 bg-gradient-to-${
                  index % 2 === 0 ? "r" : "l"
                } from-primary/50 to-transparent ${
                  index % 2 === 0 ? "right-[-32px]" : "left-[-32px]"
                }`}
              ></div>
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <div className='text-primary mb-4 group-hover:animate-float'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{t(feature.title)}</h3>
                  <p className='text-gray-600'>{t(feature.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}