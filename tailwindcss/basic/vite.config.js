import tailwindcss from "tailwindcss";

module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: {
            files: ["./src/index.html"],
          },
          theme: {
            extend: {},
          },
          plugins: [],
        }),
      ],
    },
  },
};
