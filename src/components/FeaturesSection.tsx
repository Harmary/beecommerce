import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Database, LineChart, Settings } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format",
    },
    {
      icon: <BarChart3 className='w-10 h-10' />,
      title: "analyticsTitle",
      description: "analyticsDesc",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format",
    },
    {
      icon: <LineChart className='w-10 h-10' />,
      title: "monitoringTitle",
      description: "monitoringDesc",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format",
    },
    {
      icon: <Settings className='w-10 h-10' />,
      title: "integrationTitle",
      description: "integrationDesc",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format",
    },
  ];

  return (
    <section id='features' className='relative py-32 overflow-hidden'>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <h2 className='text-3xl font-bold text-center mb-16 relative'>
        {t("features")}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      </h2>
      <div className='absolute left-1/2 top-3 mt-16 bottom-0 lg:w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent'></div>
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
                "p-6 rounded-lg border hover:border-primary transition-all duration-300 group relative bg-white/50 backdrop-blur-sm",
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
