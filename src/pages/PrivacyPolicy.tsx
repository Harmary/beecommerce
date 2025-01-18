import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t("privacyPolicy")}</h1>
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
        >
          {t("Back to Home")}
        </Button>
      </div>
      <div className="prose prose-lg">
        <p className="mb-4">{t("privacyPolicyIntro")}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t("dataCollection")}</h2>
        <p className="mb-4">{t("dataCollectionText")}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t("dataUsage")}</h2>
        <p className="mb-4">{t("dataUsageText")}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t("dataSecurity")}</h2>
        <p className="mb-4">{t("dataSecurityText")}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t("cookies")}</h2>
        <p className="mb-4">{t("cookiesText")}</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t("contact")}</h2>
        <p className="mb-4">{t("contactText")}</p>
      </div>
    </div>
  );
}