import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface NavLink {
  href: string;
  label: string;
}

export function Header() {
  const { t } = useLanguage();

  const navLinks: NavLink[] = [
    { href: "/#features", label: t("features") },
    { href: "/#team", label: t("team") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header className='fixed top-0 w-full backdrop-blur-sm z-50 border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center gap-8'>
          <div className='text-2xl font-bold text-secondary'>Beecommerce</div>
          <nav className='hidden md:flex gap-6'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-gray-600 hover:text-primary transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
