// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    "@/plugins/paypal.js",
  ],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  runtimeConfig: {
    // authSecret: process.env.AUTH_SECRET,
    clientId: process.env.PAYPAL_CLIENT_ID,
  },

  // mongoose: {
  //   uri: process.env.MONGODB_URI,
  //   options: {},
  //   modelsDir: "models",
  //   devtools: true,
  // },
  // nuxtServerUtils: {
  //   enabled: true, // default
  //   enableDevTools: true, // default
  //   mongodbUri: process.env.MONGODB_URI,
  // },

  compatibilityDate: "2024-09-19",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-tradingview",
    // "nuxt-mongoose",
    // "nuxt-server-utils",
    // "@sidebase/nuxt-auth",
    "@element-plus/nuxt",
    "nuxt-paypal",
    "nuxt-nodemailer",
  ],
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
  },
  nodemailer: {
    from: '"John Doe" <john@doe.com>',
    host: "smtp.mailtrap.io",
    port: 465,
    secure: true,
    auth: {
      user: "john@doe.com",
      pass: "",
    },
  },

  // auth: {
  //   baseURL: process.env.AUTH_ORIGIN,
  //   provider: {
  //     type: "authjs",
  //     trustHost: false,
  //     defaultProvider: "github",
  //     addDefaultCallbackUrl: true,
  //   },
  // },
});
