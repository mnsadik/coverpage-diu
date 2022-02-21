import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - DIU Cover Page Generator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@mnsadik" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://diucoverpage.netlify.app",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Welcome to DIU Cover Page Generator",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          'This amazing application will assist you in creating a cover page for your assignment or lab report. Simply enter your information, select "Continue" and you are good to go!!!',
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/CardImg.jpg",
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "DIU Cover Page Generator",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://diucoverpage.netlify.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Welcome to DIU Cover Page Generator",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          'This amazing application will assist you in creating a cover page for your assignment or lab report. Simply enter your information, select "Continue" and you are good to go!!!',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/CardImg.jpg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Daffodil International University's Logo",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/printer.client.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
