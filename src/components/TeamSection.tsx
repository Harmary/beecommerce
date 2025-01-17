import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export function TeamSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team: TeamMember[] = [
    {
      name: "Maria Kharlamova",
      role: "CEO & Frontend Developer",
      bio: "ceoBio",
    },
    {
      name: "Anatoly Divanis",
      role: "Backend Developer",
      bio: "backendDevBio",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 relative" ref={ref}>
        <h2 className={cn(
          "text-3xl font-bold text-center mb-12 relative",
          "transform transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {t("team")}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 group relative",
                "transform transition-all duration-700 delay-[calc(200ms_*_var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <Avatar className="w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600">{t(member.bio)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}