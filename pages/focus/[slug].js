// pages/focus/[slug].js
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import translations from "../../translations";

// This would ideally come from a CMS or API
const focusPages = {
  "spanish-for-portuguese": {
    en: {
      title: "Spanish for Brazilian Portuguese Speakers",
      description:
        "Learn Spanish naturally with Chat With Lex, designed specifically for native Brazilian Portuguese speakers.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Focused on common challenges for Portuguese speakers learning Spanish",
        "Special attention to 'false friends' between Portuguese and Spanish",
        "Cultural context relevant to Brazil and Spanish-speaking Latin America",
      ],
      commonMistakes: [
        "Using 'embarazada' when you mean 'embarrassed' (it actually means 'pregnant')",
        "Saying 'exito' when you mean 'exit' (it actually means 'success')",
        "Using Portuguese sentence structure in Spanish sentences",
      ],
      testimonial: {
        text: "As a Brazilian, I found learning Spanish through Chat With Lex much easier than traditional methods. The bot understands the specific challenges I face and helps me avoid common mistakes.",
        author: "Mariana from São Paulo",
      },
    },
    es: {
      title: "Español para hablantes de portugués brasileño",
      description:
        "Aprende español naturalmente con Chat With Lex, diseñado específicamente para hablantes nativos de portugués brasileño.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Enfocado en los desafíos comunes para los hablantes de portugués que aprenden español",
        "Atención especial a los 'falsos amigos' entre portugués y español",
        "Contexto cultural relevante para Brasil y América Latina hispanohablante",
      ],
      commonMistakes: [
        "Usar 'embarazada' cuando quieres decir 'avergonzado' (en realidad significa 'grávida')",
        "Decir 'exito' cuando quieres decir 'salida' (en realidad significa 'sucesso')",
        "Usar la estructura de oraciones portuguesa en frases españolas",
      ],
      testimonial: {
        text: "Como brasileña, encontré que aprender español a través de Chat With Lex es mucho más fácil que los métodos tradicionales. El bot comprende los desafíos específicos que enfrento y me ayuda a evitar errores comunes.",
        author: "Mariana de São Paulo",
      },
    },
    pt: {
      title: "Espanhol para falantes de português brasileiro",
      description:
        "Aprenda espanhol naturalmente com o Chat With Lex, projetado especificamente para falantes nativos de português brasileiro.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Focado nos desafios comuns para falantes de português que aprendem espanhol",
        "Atenção especial aos 'falsos amigos' entre português e espanhol",
        "Contexto cultural relevante para o Brasil e América Latina hispânica",
      ],
      commonMistakes: [
        "Usar 'embarazada' quando você quer dizer 'envergonhado' (na verdade significa 'grávida')",
        "Dizer 'exito' quando você quer dizer 'saída' (na verdade significa 'sucesso')",
        "Usar a estrutura de frases portuguesa em frases espanholas",
      ],
      testimonial: {
        text: "Como brasileira, achei aprender espanhol através do Chat With Lex muito mais fácil que os métodos tradicionais. O bot entende os desafios específicos que enfrento e me ajuda a evitar erros comuns.",
        author: "Mariana de São Paulo",
      },
    },
  },
  "english-for-portuguese": {
    en: {
      title: "English for Brazilian Portuguese Speakers",
      description:
        "Learn English naturally with Chat With Lex, designed specifically for native Brazilian Portuguese speakers.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Focus on pronunciation challenges specific to Portuguese speakers",
        "Special attention to English verb tenses that don't exist in Portuguese",
        "Practice with common English expressions and idioms",
      ],
      commonMistakes: [
        "Confusing 'actually' with 'currently' (false cognate with 'atualmente')",
        "Using present continuous when simple present is needed",
        "Difficulty with English 'th' sounds",
      ],
      testimonial: {
        text: "Chat With Lex helped me overcome my fear of speaking English. The personalized corrections and constant practice through WhatsApp made learning convenient and effective.",
        author: "Rafael from Rio de Janeiro",
      },
    },
    es: {
      title: "Inglés para hablantes de portugués brasileño",
      description:
        "Aprende inglés de manera natural con Chat With Lex, diseñado específicamente para hablantes nativos de portugués brasileño.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Enfoque en los desafíos de pronunciación específicos para hablantes de portugués",
        "Atención especial a los tiempos verbales en inglés que no existen en portugués",
        "Práctica con expresiones y modismos comunes en inglés",
      ],
      commonMistakes: [
        "Confundir 'actually' con 'currently' (falso cognado con 'atualmente')",
        "Usar el presente continuo cuando se necesita el presente simple",
        "Dificultad con los sonidos 'th' en inglés",
      ],
      testimonial: {
        text: "Chat With Lex me ayudó a superar mi miedo a hablar inglés. Las correcciones personalizadas y la práctica constante a través de WhatsApp hicieron que aprender fuera conveniente y efectivo.",
        author: "Rafael de Río de Janeiro",
      },
    },
    pt: {
      title: "Inglês para falantes de português brasileiro",
      description:
        "Aprenda inglês naturalmente com o Chat With Lex, projetado especificamente para falantes nativos de português brasileiro.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "br",
          name: "Brazilian",
        },
      },
      benefits: [
        "Foco nos desafios de pronúncia específicos para falantes de português",
        "Atenção especial aos tempos verbais em inglês que não existem em português",
        "Prática com expressões e idiomatismos comuns em inglês",
      ],
      commonMistakes: [
        "Confundir 'actually' com 'currently' (falso cognato com 'atualmente')",
        "Usar o presente contínuo quando o presente simples é necessário",
        "Dificuldade com os sons 'th' em inglês",
      ],
      testimonial: {
        text: "O Chat With Lex me ajudou a superar meu medo de falar inglês. As correções personalizadas e a prática constante pelo WhatsApp tornaram o aprendizado conveniente e eficaz.",
        author: "Rafael do Rio de Janeiro",
      },
    },
  },
  "spanish-for-english": {
    en: {
      title: "Spanish for English Speakers",
      description:
        "Learn Spanish naturally with Chat With Lex, designed specifically for native English speakers.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "gb",
          name: "UK",
        },
      },
      benefits: [
        "Focus on Spanish verb conjugations and tenses",
        "Special attention to gender agreement in Spanish",
        "Cultural context relevant to Spanish-speaking countries",
      ],
      commonMistakes: [
        "Using 'embarazada' when you mean 'embarrassed' (it actually means 'pregnant')",
        "Forgetting to use different forms of 'you' (tú, usted, vosotros, ustedes)",
        "Difficulty with the Spanish 'r' sound",
      ],
      testimonial: {
        text: "Chat With Lex made learning Spanish so much more practical than classroom learning. I love being able to practice throughout my day, and the corrections help me avoid making the same mistakes repeatedly.",
        author: "Michael from New York",
      },
    },
    es: {
      title: "Español para hablantes de inglés",
      description:
        "Aprende español de manera natural con Chat With Lex, diseñado específicamente para hablantes nativos de inglés.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "gb",
          name: "UK",
        },
      },
      benefits: [
        "Enfoque en las conjugaciones y tiempos verbales en español",
        "Atención especial al acuerdo de género en español",
        "Contexto cultural relevante para países de habla hispana",
      ],
      commonMistakes: [
        "Usar 'embarazada' cuando quieres decir 'embarrassed' (en realidad significa 'pregnant')",
        "Olvidar usar diferentes formas de 'tú' (tú, usted, vosotros, ustedes)",
        "Dificultad con el sonido 'r' en español",
      ],
      testimonial: {
        text: "Chat With Lex hizo que aprender español fuera mucho más práctico que aprender en el aula. Me encanta poder practicar durante todo el día, y las correcciones me ayudan a evitar cometer los mismos errores repetidamente.",
        author: "Michael de Nueva York",
      },
    },
    pt: {
      title: "Espanhol para falantes de inglês",
      description:
        "Aprenda espanhol naturalmente com o Chat With Lex, projetado especificamente para falantes nativos de inglês.",
      flags: {
        target: {
          code: "es",
          name: "Spanish",
        },
        native: {
          code: "gb",
          name: "UK",
        },
      },
      benefits: [
        "Foco nas conjugações e tempos verbais em espanhol",
        "Atenção especial ao acordo de gênero em espanhol",
        "Contexto cultural relevante para países de língua espanhola",
      ],
      commonMistakes: [
        "Usar 'embarazada' quando quer dizer 'embarrassed' (na verdade significa 'pregnant')",
        "Esquecer de usar diferentes formas de 'você' (tú, usted, vosotros, ustedes)",
        "Dificuldade com o som 'r' em espanhol",
      ],
      testimonial: {
        text: "O Chat With Lex tornou o aprendizado de espanhol muito mais prático do que o aprendizado em sala de aula. Adoro poder praticar ao longo do dia, e as correções me ajudam a evitar cometer os mesmos erros repetidamente.",
        author: "Michael de Nova York",
      },
    },
  },
  "english-for-spanish": {
    en: {
      title: "English for Spanish Speakers",
      description:
        "Learn English naturally with Chat With Lex, designed specifically for native Spanish speakers.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "es",
          name: "Spanish",
        },
      },
      benefits: [
        "Focus on English pronunciation challenges for Spanish speakers",
        "Special attention to English verb tenses and their usage",
        "Practice with common English expressions and idioms",
      ],
      commonMistakes: [
        "Adding 'e' before words that start with 's' (saying 'especial' instead of 'special')",
        "Confusing 'actual' with 'current' (false cognate with 'actual')",
        "Difficulty with English vowel sounds",
      ],
      testimonial: {
        text: "Chat With Lex understands the specific challenges I face as a Spanish speaker. The daily practice through WhatsApp has dramatically improved my English fluency.",
        author: "Carlos from Mexico City",
      },
    },
    es: {
      title: "Inglés para hispanohablantes",
      description:
        "Aprende inglés de forma natural con Chat With Lex, diseñado específicamente para hablantes nativos de español.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "es",
          name: "Spanish",
        },
      },
      benefits: [
        "Enfoque en los desafíos de pronunciación en inglés para hispanohablantes",
        "Atención especial a los tiempos verbales en inglés y su uso",
        "Práctica con expresiones y modismos comunes en inglés",
      ],
      commonMistakes: [
        "Agregar 'e' antes de palabras que comienzan con 's' (decir 'especial' en lugar de 'special')",
        "Confundir 'actual' con 'current' (falso cognado con 'actual')",
        "Dificultad con los sonidos vocálicos en inglés",
      ],
      testimonial: {
        text: "Chat With Lex entiende los desafíos específicos que enfrento como hispanohablante. La práctica diaria a través de WhatsApp ha mejorado drásticamente mi fluidez en inglés.",
        author: "Carlos de Ciudad de México",
      },
    },
    pt: {
      title: "Inglês para falantes de espanhol",
      description:
        "Aprenda inglês naturalmente com o Chat With Lex, projetado especificamente para falantes nativos de espanhol.",
      flags: {
        target: {
          code: "gb",
          name: "UK",
        },
        native: {
          code: "es",
          name: "Spanish",
        },
      },
      benefits: [
        "Foco nos desafios de pronúncia em inglês para falantes de espanhol",
        "Atenção especial aos tempos verbais em inglês e seu uso",
        "Prática com expressões e idiomatismos comuns em inglês",
      ],
      commonMistakes: [
        "Adicionar 'e' antes de palavras que começam com 's' (dizer 'especial' em vez de 'special')",
        "Confundir 'actual' com 'current' (falso cognato com 'actual')",
        "Dificuldade com os sons das vogais em inglês",
      ],
      testimonial: {
        text: "O Chat With Lex entende os desafios específicos que enfrento como falante de espanhol. A prática diária através do WhatsApp melhorou drasticamente minha fluência em inglês.",
        author: "Carlos da Cidade do México",
      },
    },
  },
};

export default function LanguageFocus() {
  const router = useRouter();
  const { locale, query } = router;
  const { slug } = query;

  const t = translations[locale || "en"];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // If the page is not yet generated, this will be displayed initially until getStaticProps runs
  if (router.isFallback || !slug) {
    return <div className="container mx-auto px-4 py-20">Loading...</div>;
  }

  const pageContent = focusPages[slug]?.[locale || "en"];

  if (!pageContent) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="mt-4">
          The language focus you're looking for doesn't exist.
        </p>
        <Link href="/" className="text-[#FF9B42] mt-4 inline-block">
          Return to home page
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would add your email to a database
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{pageContent.title} | Chat With Lex</title>
        <meta name="description" content={pageContent.description} />
        <meta
          name="keywords"
          content={`language learning, WhatsApp bot, AI language tutor, ${pageContent.title.toLowerCase()}, chat with lex`}
        />
      </Head>

      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center">
                  {/* Target language flag */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 mr-2">
                    <img
                      src={`https://flagcdn.com/w160/${
                        pageContent?.flags?.target?.code || "es"
                      }.png`}
                      alt={`${
                        pageContent?.flags?.target?.name || "Target"
                      } flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Native language flag */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={`https://flagcdn.com/w160/${
                        pageContent?.flags?.native?.code || "gb"
                      }.png`}
                      alt={`${
                        pageContent?.flags?.native?.name || "Native"
                      } flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-6">{pageContent.title}</h1>
              <p className="text-xl mb-8">{pageContent.description}</p>
              <a
                href="#waitlist"
                className="bg-[#FF9B42] hover:bg-[#E88A38] text-white px-6 py-3 rounded-md font-medium inline-block"
              >
                {t.hero?.cta || "Join the Waitlist"}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <ul className="space-y-4">
                  {pageContent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-[#FF9B42] mr-2 mt-0.5"
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
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Common Mistakes We Help With
              </h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <ul className="space-y-4">
                  {pageContent.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#FFF5EB] rounded-lg p-8 relative">
                <svg
                  className="h-12 w-12 text-[#FF9B42] opacity-20 absolute top-6 left-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-lg mb-4 italic">
                    {pageContent.testimonial.text}
                  </p>
                  <p className="font-semibold">
                    {pageContent.testimonial.author}
                  </p>
                </div>
              </div>
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

// This function gets called at build time
export async function getStaticPaths() {
  // Get all the possible language focus slugs
  const paths = Object.keys(focusPages).flatMap((slug) =>
    ["en", "es", "pt"].map((locale) => ({
      params: { slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: false, // Return 404 for any paths not returned by getStaticPaths
  };
}

// This function gets called at build time
export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  // If the requested slug doesn't exist, return a 404
  if (!focusPages[slug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      // You can pass any data you need to the page component
    },
  };
}
