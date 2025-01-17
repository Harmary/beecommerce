import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{t("privacyPolicy")}</h1>
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