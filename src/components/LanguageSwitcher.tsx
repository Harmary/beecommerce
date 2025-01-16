import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "en" ? "default" : "outline"}
        onClick={() => setLanguage("en")}
        className="w-12"
      >
        EN
      </Button>
      <Button
        variant={language === "ru" ? "default" : "outline"}
        onClick={() => setLanguage("ru")}
        className="w-12"
      >
        RU
      </Button>
    </div>
  );
}