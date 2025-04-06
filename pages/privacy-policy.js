// pages/privacy-policy.js
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import translations from "../translations";

// Privacy policy translations
const privacyPolicyContent = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: April 2025",
    intro:
      "At Chat With Lex, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our language learning service via WhatsApp.",
    sections: [
      {
        title: "Information We Collect",
        content: `We may collect information about you in various ways, including:

1. **Personal Data**: When you sign up for our waitlist or service, we collect your email address, name, and preferred language learning path.

2. **Usage Data**: We collect information about how you interact with Lex, including conversation history, frequency of use, and learning progress.

3. **WhatsApp Data**: Since our service operates through WhatsApp, we have access to your WhatsApp profile information that you share with us, including your phone number and profile picture.

4. **Voice Messages**: If you choose to send voice messages to practice pronunciation, we collect and process these audio files.`,
      },
      {
        title: "How We Use Your Information",
        content: `We use the information we collect to:

1. **Provide Our Service**: To create and maintain your account, deliver language learning content, and provide personalized instruction.

2. **Improve Our Service**: We analyze usage patterns to enhance our chatbot's capabilities and your learning experience.

3. **Communication**: We may use your email to send service updates, promotional content, and respond to your inquiries.

4. **Research**: We may use anonymized data for research purposes to improve language learning methodologies.`,
      },
      {
        title: "Data Storage and Security",
        content: `We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.

Your data is stored on secure servers and we limit access to personal information to employees who need it to perform specific functions.`,
      },
      {
        title: "Data Sharing and Disclosure",
        content: `We do not sell your personal information to third parties. We may share your information in the following circumstances:

1. **Service Providers**: We may share data with third-party vendors who help us provide our service (e.g., hosting providers, analytics services).

2. **Legal Requirements**: We may disclose your information if required by law or in response to valid requests by public authorities.

3. **Business Transfers**: If we are involved in a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.`,
      },
      {
        title: "Your Rights",
        content: `Depending on your location, you may have the right to:

1. **Access** the personal information we have about you.
2. **Correct** inaccurate or incomplete information.
3. **Delete** your personal data.
4. **Object to** or **restrict** certain processing of your data.
5. **Data portability**: Request a copy of your data in a structured, commonly used format.

To exercise these rights, please contact us at privacy@chatwithlex.com.`,
      },
      {
        title: "Cookies and Tracking",
        content: `Our website uses cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings.`,
      },
      {
        title: "Children's Privacy",
        content: `Our service is not directed to individuals under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`,
      },
      {
        title: "Changes to This Privacy Policy",
        content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
      },
      {
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us at:

Email: privacy@chatwithlex.com`,
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última Actualización: Abril 2025",
    intro:
      "En Chat With Lex, nos tomamos en serio tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando utilizas nuestro servicio de aprendizaje de idiomas a través de WhatsApp.",
    sections: [
      {
        title: "Información que Recopilamos",
        content: `Podemos recopilar información sobre ti de varias maneras, incluyendo:

1. **Datos Personales**: Cuando te registras en nuestra lista de espera o servicio, recopilamos tu dirección de correo electrónico, nombre y ruta de aprendizaje de idiomas preferida.

2. **Datos de Uso**: Recopilamos información sobre cómo interactúas con Lex, incluyendo el historial de conversaciones, la frecuencia de uso y el progreso del aprendizaje.

3. **Datos de WhatsApp**: Dado que nuestro servicio opera a través de WhatsApp, tenemos acceso a la información de tu perfil de WhatsApp que compartes con nosotros, incluyendo tu número de teléfono y foto de perfil.

4. **Mensajes de Voz**: Si eliges enviar mensajes de voz para practicar la pronunciación, recopilamos y procesamos estos archivos de audio.`,
      },
      {
        title: "Cómo Usamos tu Información",
        content: `Usamos la información que recopilamos para:

1. **Proporcionar Nuestro Servicio**: Para crear y mantener tu cuenta, entregar contenido de aprendizaje de idiomas y proporcionar instrucción personalizada.

2. **Mejorar Nuestro Servicio**: Analizamos patrones de uso para mejorar las capacidades de nuestro chatbot y tu experiencia de aprendizaje.

3. **Comunicación**: Podemos usar tu correo electrónico para enviar actualizaciones del servicio, contenido promocional y responder a tus consultas.

4. **Investigación**: Podemos usar datos anonimizados con fines de investigación para mejorar las metodologías de aprendizaje de idiomas.`,
      },
      {
        title: "Almacenamiento y Seguridad de Datos",
        content: `Implementamos medidas de seguridad apropiadas para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar una seguridad absoluta.

Tus datos se almacenan en servidores seguros y limitamos el acceso a la información personal a los empleados que necesitan realizarla para funciones específicas.`,
      },
      {
        title: "Compartir y Divulgación de Datos",
        content: `No vendemos tu información personal a terceros. Podemos compartir tu información en las siguientes circunstancias:

1. **Proveedores de Servicios**: Podemos compartir datos con proveedores externos que nos ayudan a proporcionar nuestro servicio (por ejemplo, proveedores de alojamiento, servicios de análisis).

2. **Requisitos Legales**: Podemos divulgar tu información si así lo requiere la ley o en respuesta a solicitudes válidas de autoridades públicas.

3. **Transferencias Comerciales**: Si estamos involucrados en una fusión, adquisición o venta de activos, tus datos pueden transferirse como parte de esa transacción.`,
      },
      {
        title: "Tus Derechos",
        content: `Dependiendo de tu ubicación, puedes tener derecho a:

1. **Acceder** a la información personal que tenemos sobre ti.
2. **Corregir** información inexacta o incompleta.
3. **Eliminar** tus datos personales.
4. **Oponerte a** o **restringir** cierto procesamiento de tus datos.
5. **Portabilidad de datos**: Solicitar una copia de tus datos en un formato estructurado y comúnmente utilizado.

Para ejercer estos derechos, contáctanos en privacy@chatwithlex.com.`,
      },
      {
        title: "Cookies y Seguimiento",
        content: `Nuestro sitio web utiliza cookies y tecnologías de seguimiento similares para recopilar información sobre tus actividades de navegación. Puedes administrar tus preferencias de cookies a través de la configuración de tu navegador.`,
      },
      {
        title: "Privacidad de los Niños",
        content: `Nuestro servicio no está dirigido a personas menores de 13 años. No recopilamos conscientemente información personal de niños. Si eres padre o tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos.`,
      },
      {
        title: "Cambios en esta Política de Privacidad",
        content: `Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última Actualización".`,
      },
      {
        title: "Contáctanos",
        content: `Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en:

Correo electrónico: privacy@chatwithlex.com`,
      },
    ],
  },
  pt: {
    title: "Política de Privacidade",
    lastUpdated: "Última Atualização: Abril de 2025",
    intro:
      "No Chat With Lex, levamos sua privacidade a sério. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso serviço de aprendizado de idiomas via WhatsApp.",
    sections: [
      {
        title: "Informações que Coletamos",
        content: `Podemos coletar informações sobre você de várias maneiras, incluindo:

1. **Dados Pessoais**: Quando você se inscreve em nossa lista de espera ou serviço, coletamos seu endereço de e-mail, nome e caminho de aprendizado de idioma preferido.

2. **Dados de Uso**: Coletamos informações sobre como você interage com o Lex, incluindo histórico de conversas, frequência de uso e progresso de aprendizado.

3. **Dados do WhatsApp**: Como nosso serviço opera através do WhatsApp, temos acesso às informações do seu perfil do WhatsApp que você compartilha conosco, incluindo seu número de telefone e foto de perfil.

4. **Mensagens de Voz**: Se você optar por enviar mensagens de voz para praticar a pronúncia, coletamos e processamos esses arquivos de áudio.`,
      },
      {
        title: "Como Usamos Suas Informações",
        content: `Usamos as informações que coletamos para:

1. **Fornecer Nosso Serviço**: Para criar e manter sua conta, entregar conteúdo de aprendizado de idiomas e fornecer instrução personalizada.

2. **Melhorar Nosso Serviço**: Analisamos padrões de uso para aprimorar as capacidades do nosso chatbot e sua experiência de aprendizado.

3. **Comunicação**: Podemos usar seu e-mail para enviar atualizações de serviço, conteúdo promocional e responder às suas consultas.

4. **Pesquisa**: Podemos usar dados anonimizados para fins de pesquisa para melhorar as metodologias de aprendizado de idiomas.`,
      },
      {
        title: "Armazenamento e Segurança de Dados",
        content: `Implementamos medidas de segurança apropriadas para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, então não podemos garantir segurança absoluta.

Seus dados são armazenados em servidores seguros e limitamos o acesso a informações pessoais aos funcionários que precisam delas para executar funções específicas.`,
      },
      {
        title: "Compartilhamento e Divulgação de Dados",
        content: `Não vendemos suas informações pessoais para terceiros. Podemos compartilhar suas informações nas seguintes circunstâncias:

1. **Provedores de Serviços**: Podemos compartilhar dados com fornecedores terceirizados que nos ajudam a fornecer nosso serviço (por exemplo, provedores de hospedagem, serviços de análise).

2. **Requisitos Legais**: Podemos divulgar suas informações se exigido por lei ou em resposta a solicitações válidas de autoridades públicas.

3. **Transferências de Negócios**: Se estivermos envolvidos em uma fusão, aquisição ou venda de ativos, seus dados podem ser transferidos como parte dessa transação.`,
      },
      {
        title: "Seus Direitos",
        content: `Dependendo da sua localização, você pode ter o direito de:

1. **Acessar** as informações pessoais que temos sobre você.
2. **Corrigir** informações imprecisas ou incompletas.
3. **Excluir** seus dados pessoais.
4. **Opor-se a** ou **restringir** certo processamento de seus dados.
5. **Portabilidade de dados**: Solicitar uma cópia de seus dados em um formato estruturado e comumente usado.

Para exercer esses direitos, entre em contato conosco em privacy@chatwithlex.com.`,
      },
      {
        title: "Cookies e Rastreamento",
        content: `Nosso site usa cookies e tecnologias de rastreamento semelhantes para coletar informações sobre suas atividades de navegação. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.`,
      },
      {
        title: "Privacidade Infantil",
        content: `Nosso serviço não é direcionado a indivíduos com menos de 13 anos de idade. Não coletamos conscientemente informações pessoais de crianças. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco.`,
      },
      {
        title: "Alterações nesta Política de Privacidade",
        content: `Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "Última Atualização".`,
      },
      {
        title: "Entre em Contato",
        content: `Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:

E-mail: privacy@chatwithlex.com`,
      },
    ],
  },
};

export default function PrivacyPolicy() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale || "en"];
  const content = privacyPolicyContent[locale || "en"];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{content.title} | Chat With Lex</title>
        <meta name="description" content="Chat With Lex Privacy Policy" />
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
