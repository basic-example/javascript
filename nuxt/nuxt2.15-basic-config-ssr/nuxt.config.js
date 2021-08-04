export default {
  head: {
    title: "nuxt-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  ssr: false, // default: true, false
};