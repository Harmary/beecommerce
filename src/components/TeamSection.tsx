import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  photo: string;
  name: string;
  role: string;
  bio: string;
}

export function TeamSection() {
  const { t } = useLanguage();

  const team: TeamMember[] = [
    {
      photo: "/lovable-uploads/4318ff02-677a-4fd2-9abe-4dc49e3f71cb.png",
      name: "ceoName",
      role: "ceoRole",
      bio: "ceoBio",
    },
    {
      photo: "/lovable-uploads/85ec408a-fb10-400d-bd90-5a2beb43ac33.png",
      name: "backendDevRole",
      role: "backendDevRole",
      bio: "backendDevBio",
    },
  ];

  return (
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
                <AvatarImage src={member.photo} alt={member.name} />
                <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{t(member.name)}</h3>
              <p className="text-primary mb-2">{t(member.role)}</p>
              <p className="text-gray-600">{t(member.bio)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
