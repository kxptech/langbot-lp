// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es", "pt"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when i18n.localeDetection is false)
    domains: [
      {
        domain: "chatwithlex.com",
        defaultLocale: "en",
      },
      {
        domain: "chatwithlex.es",
        defaultLocale: "es",
      },
      {
        domain: "chatwithlex.com.br",
        defaultLocale: "pt",
      },
    ],
  },
  images: {
    domains: ["chatwithlex.com"],
  },
};

export default nextConfig;
