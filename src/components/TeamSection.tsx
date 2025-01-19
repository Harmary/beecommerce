import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TeamMember {
  photo: string;
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
      photo: "/lovable-uploads/4318ff02-677a-4fd2-9abe-4dc49e3f71cb.png",
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

  return (
    <section id='team' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 relative' ref={ref}>
        <h2
          className={cn(
            "text-3xl font-bold text-center mb-12 relative",
            "transform transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {t("team")}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {team.map((member, index) => (
            <div
              key={index}
              className={cn(
                "text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 group relative",
                "transform transition-all duration-700 delay-[calc(200ms_*_var(--index))]",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ "--index": index } as React.CSSProperties}
            >
              <Avatar className='w-32 h-32 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300'>
                <AvatarImage
                  src={member.photo}
                  alt={member.name}
                  className='object-cover'
                />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className='text-xl font-semibold'>{t(member.name)}</h3>
              <p className='text-primary mb-2'>{t(member.role)}</p>
              <p className='text-gray-600'>{t(member.bio)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
