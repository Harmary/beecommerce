import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:info@beecommercecorp.ru";
  };

  return (
    <footer className='bg-secondary text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>
              {t('LLC "Beecommerce", 2024')}
            </h3>
            <p className='text-gray-400'>
              {`${t("INN")} 9200024439`}
              <br />
              {t("corpEmail")}:{" "}
              <a
                className='text-primary'
                href='mailto:info@beecommercecorp.ru'
                target='_top'
              >
                info@beecommercecorp.ru
              </a>
              <br />
            </p>
          </div>
          <div>
            <img
              src='/lovable-uploads/c60441f2-fc22-45e4-84dd-00392976e982.png'
              alt='Sponsor Logo'
              className='h-12 mb-4'
            />
            <p className='text-sm text-gray-400'>{t("sponsorText")}</p>
          </div>
        </div>
        <div className='text-center text-sm text-gray-400 pt-8 border-t border-gray-700'>
          © {new Date().getFullYear()} Beecommerce. {t("All rights reserved.")}
        </div>
      </div>
    </footer>
  );
}
