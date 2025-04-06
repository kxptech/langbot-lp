// pages/terms.js
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import translations from "../translations";

// Terms of Service translations
const termsContent = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: April 2025",
    intro:
      "Welcome to Chat With Lex. Please read these Terms of Service carefully before using our language learning service via WhatsApp.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: `By accessing or using Chat With Lex in any way, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you should not use the service.

These Terms may be modified from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.`,
      },
      {
        title: "2. Description of Service",
        content: `Chat With Lex is a language learning service that operates through WhatsApp. The service provides language learning content, grammar corrections, audio exchanges, and other learning tools through a conversational interface.

We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.`,
      },
      {
        title: "3. User Accounts",
        content: `To use our service, you must register for an account by providing certain information. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.

You agree to notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts that violate these Terms.`,
      },
      {
        title: "4. User Content",
        content: `Our service allows you to submit content, including text messages and voice recordings ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content in connection with the Service.

You represent and warrant that your User Content does not violate copyright, trademark, or other intellectual property rights, and does not contain unlawful, defamatory, or otherwise objectionable material.`,
      },
      {
        title: "5. Subscription and Payments",
        content: `Chat With Lex offers subscription-based access to our service. By subscribing, you agree to pay the fees indicated for your subscription type. All payments are non-refundable except as required by law.

We may change subscription fees upon notice. Continued use of the service after a fee change constitutes acceptance of the new fees.`,
      },
      {
        title: "6. Free Trial",
        content: `We may offer a free trial period for new users. Upon expiration of the free trial, your account will automatically be charged according to your selected subscription plan unless you cancel before the trial ends.

Users who join our waitlist may receive an extended free period as specified in our promotional materials.`,
      },
      {
        title: "7. Intellectual Property",
        content: `The Service and its original content, features, and functionality are owned by Chat With Lex and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Chat With Lex. You may not use these marks without our prior written permission.`,
      },
      {
        title: "8. Prohibited Uses",
        content: `You agree not to:
- Use the Service for any illegal purpose
- Attempt to gain unauthorized access to the Service or user accounts
- Interfere with or disrupt the Service or servers
- Collect or store personal data about other users
- Use the Service to transmit harmful code or malware
- Use the Service to harass, abuse, or harm another person
- Use the Service to impersonate any person or entity
- Use the Service to send unsolicited communications or spam`,
      },
      {
        title: "9. Limitation of Liability",
        content: `In no event shall Chat With Lex, its officers, directors, employees, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.

Our liability for any direct damages shall be limited to the amount you paid to us for the Service or $100, whichever is greater.`,
      },
      {
        title: "10. Disclaimer of Warranties",
        content: `The Service is provided on an "as is" and "as available" basis without any warranties of any kind. We disclaim all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free, or that any content will be accurate, reliable, complete, or suitable for your needs.`,
      },
      {
        title: "11. Indemnification",
        content: `You agree to defend, indemnify, and hold harmless Chat With Lex and its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.`,
      },
      {
        title: "12. Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in [Your Jurisdiction].`,
      },
      {
        title: "13. Termination",
        content: `We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.

Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`,
      },
      {
        title: "14. Children's Privacy",
        content: `The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.`,
      },
      {
        title: "15. Contact Information",
        content: `If you have any questions about these Terms, please contact us at:

Email: terms@chatwithlex.com`,
      },
    ],
  },
  es: {
    title: "Términos de Servicio",
    lastUpdated: "Última Actualización: Abril 2025",
    intro:
      "Bienvenido a Chat With Lex. Por favor lee estos Términos de Servicio cuidadosamente antes de usar nuestro servicio de aprendizaje de idiomas a través de WhatsApp.",
    sections: [
      {
        title: "1. Aceptación de Términos",
        content: `Al acceder o utilizar Chat With Lex de cualquier manera, aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo con todos los términos y condiciones, no deberías utilizar el servicio.

Estos Términos pueden ser modificados de vez en cuando. Te notificaremos de cualquier cambio publicando los nuevos Términos en esta página y actualizando la fecha de "Última Actualización". Tu uso continuado del Servicio después de cualquier cambio constituye tu aceptación de los nuevos Términos.`,
      },
      // The rest of the sections would follow the same pattern
    ],
  },
  pt: {
    title: "Termos de Serviço",
    lastUpdated: "Última Atualização: Abril de 2025",
    intro:
      "Bem-vindo ao Chat With Lex. Por favor, leia estes Termos de Serviço cuidadosamente antes de usar nosso serviço de aprendizado de idiomas via WhatsApp.",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        content: `Ao acessar ou usar o Chat With Lex de qualquer forma, você concorda em estar vinculado por estes Termos de Serviço. Se você não concordar com todos os termos e condições, você não deve usar o serviço.

Estes Termos podem ser modificados de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando os novos Termos nesta página e atualizando a data de "Última Atualização". Seu uso continuado do Serviço após quaisquer alterações constitui sua aceitação dos novos Termos.`,
      },
      // The rest of the sections would follow the same pattern
    ],
  },
};

export default function TermsOfService() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || "en"];
  const content = termsContent[locale || "en"];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{content.title} | Chat With Lex</title>
        <meta name="description" content="Chat With Lex Terms of Service" />
      </Head>

      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
            <p className="text-gray-500 mb-6">{content.lastUpdated}</p>

            <p className="mb-8">{content.intro}</p>

            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <div className="prose prose-gray">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
