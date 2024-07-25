import cheerio from "cheerio";
import tailwindcss from "tailwindcss";

const htmlTransform = (fileStr) => {
  const $ = cheerio.load(fileStr);
  const classGroupedRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
  [...$("[class]")].forEach((el) => {
    let classAttr = el.attribs["class"];
    [...classAttr.matchAll(classGroupedRegex)].forEach(
      ([classGroupedStr, variant, options]) => {
        const classUnGroupedStr = options
          .split(/\s+/)
          .map((option) => variant + option)
          .join(" ");
        classAttr = classAttr.replace(classGroupedStr, classUnGroupedStr);
      },
    );
    el.attribs["class"] = classAttr;
  });
  return $.html();
};

module.exports = {
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    {
      transformIndexHtml: htmlTransform,
    },
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: {
            files: ["./src/index.html"],
            transform: htmlTransform,
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
