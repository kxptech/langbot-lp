// pages/index.js - Main Landing Page
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import translations from "../translations";
import AnimatedWhatsAppMockup from "@/components/AnimatedWhatsAppMockup";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || "en"];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would add your email to a database
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.hero?.title ||
                  "Learn Languages Naturally with Your AI Companion"}
              </h1>
              <p className="text-xl mb-8">
                {t.hero?.subtitle ||
                  "Chat With Lex is a WhatsApp chatbot that helps you master a new language through natural conversations, just like chatting with a friend."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#waitlist"
                  className="bg-[#FF9B42] hover:bg-[#E88A38] text-white px-6 py-3 rounded-md font-medium text-center"
                >
                  {t.hero?.cta || "Join the Waitlist"}
                </a>
                <a
                  href="#how-it-works"
                  className="border border-[#FF9B42] text-[#FF9B42] hover:bg-[#FFF5EB] px-6 py-3 rounded-md font-medium text-center"
                >
                  {t.hero?.learnMore || "Learn More"}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Animated WhatsApp chat mockup */}
              <AnimatedWhatsAppMockup translations={t} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.features.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.features.list.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#FFF5EB] rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#FF9B42] text-xl">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.howItWorks.title}
            </h2>
            <div className="max-w-3xl mx-auto">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="flex mb-12 last:mb-0">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#FF9B42] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < t.howItWorks.steps.length - 1 && (
                      <div className="h-full w-0.5 bg-[#FF9B42] opacity-30 my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Language Focus Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {t.languageFocus?.title || "Language Learning Paths"}
            </h2>
            <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
              {t.languageFocus?.subtitle ||
                "We're currently focused on these language combinations, with more coming soon!"}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Spanish for Brazilians */}
              <Link
                href={"/focus/spanish-for-portuguese"}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-1 border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/es.png"
                        alt="Spanish flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/br.png"
                        alt="Brazilian flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Spanish for Brazilians
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn Spanish with Brazilian Portuguese as your native
                  language
                </p>
                <span className="text-[#FF9B42] mt-auto font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              {/* English for Brazilians */}
              <Link
                href={"/focus/english-for-portuguese"}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-1 border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/gb.png"
                        alt="UK flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/br.png"
                        alt="Brazilian flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    English for Brazilians
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn English with Brazilian Portuguese as your native
                  language
                </p>
                <span className="text-[#FF9B42] mt-auto font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              {/* Spanish for English Speakers */}
              <Link
                href={"/focus/spanish-for-english"}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-1 border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/es.png"
                        alt="Spanish flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/gb.png"
                        alt="UK flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Spanish for English Speakers
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn Spanish with English as your native language
                </p>
                <span className="text-[#FF9B42] mt-auto font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              {/* English for Spanish Speakers */}
              <Link
                href={"/focus/english-for-spanish"}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-1 border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/gb.png"
                        alt="UK flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src="https://flagcdn.com/w80/es.png"
                        alt="Spanish flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    English for Spanish Speakers
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn English with Spanish as your native language
                </p>
                <span className="text-[#FF9B42] mt-auto font-medium flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-lg text-[#FF9B42] font-semibold mb-2">
                  {t.pricing.plans[0].name}
                </h3>
                <p className="text-3xl font-bold mb-6">
                  {t.pricing.plans[0].price}
                </p>
                <p className="text-gray-600 mb-6">
                  {t.pricing.plans[0].description}
                </p>
                <ul className="mb-8 space-y-3">
                  {t.pricing.plans[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="block w-full bg-[#FF9B42] hover:bg-[#E88A38] text-white text-center px-4 py-3 rounded-md font-medium"
                >
                  {t.pricing.plans[0].cta}
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-[#FF9B42]">
                <div className="bg-[#FFF5EB] text-[#FF9B42] text-sm font-semibold py-1 px-3 rounded-full inline-block mb-3">
                  {t.pricing.plans[1].badge}
                </div>
                <h3 className="text-lg text-[#FF9B42] font-semibold mb-2">
                  {t.pricing.plans[1].name}
                </h3>
                <p className="text-3xl font-bold mb-6">
                  {t.pricing.plans[1].price}
                </p>
                <p className="text-gray-600 mb-6">
                  {t.pricing.plans[1].description}
                </p>
                <ul className="mb-8 space-y-3">
                  {t.pricing.plans[1].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="block w-full bg-[#FF9B42] hover:bg-[#E88A38] text-white text-center px-4 py-3 rounded-md font-medium"
                >
                  {t.pricing.plans[1].cta}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.faq.title}
            </h2>
            <div className="max-w-3xl mx-auto">
              {t.faq.questions.map((faq, index) => (
                <div
                  key={index}
                  className="mb-6 border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 bg-[#FFF5EB]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{t.waitlist.title}</h2>
              <p className="text-xl mb-8">{t.waitlist.subtitle}</p>

              {submitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md">
                  <p className="font-medium">{t.waitlist.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.waitlist.emailPlaceholder}
                      required
                      className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FF9B42]"
                    />
                    <button
                      type="submit"
                      className="bg-[#FF9B42] hover:bg-[#E88A38] text-white px-6 py-3 rounded-md font-medium"
                    >
                      {t.waitlist.button}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {t.waitlist.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
