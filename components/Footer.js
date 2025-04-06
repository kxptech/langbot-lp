// components/Footer.js
import { useRouter } from "next/router";
import Link from "next/link";
import translations from "../translations";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || "en"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Chat With Lex</h3>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white"
                >
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.languages}</h3>
            <ul className="space-y-2">
              {t.footer.languagesList.map((lang, index) => (
                <li key={index}>
                  <Link
                    href={router.pathname}
                    locale={lang.code}
                    className="text-gray-400 hover:text-white"
                  >
                    {lang.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Chat With Lex.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
