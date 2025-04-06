// components/Header.js
import { useRouter } from "next/router";
import Link from "next/link";
import translations from "../translations";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || "en"];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            Chat With Lex
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="hover:text-[#FF9B42]">
                {t.nav.features}
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-[#FF9B42]">
                {t.nav.howItWorks}
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#FF9B42]">
                {t.nav.pricing}
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#FF9B42]">
                {t.nav.faq}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <select
            onChange={(e) =>
              router.push(router.pathname, router.asPath, {
                locale: e.target.value,
              })
            }
            value={locale}
            className="border rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="pt">Português</option>
          </select>

          <a
            href="#waitlist"
            className="bg-[#FF9B42] hover:bg-[#E88A38] text-white px-4 py-2 rounded-md font-medium hidden md:block"
          >
            {t.nav.joinWaitlist}
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
