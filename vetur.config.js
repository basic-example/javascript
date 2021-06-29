const projects = [
  ...require("fs")
    .readdirSync("vue", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((dir) => dir.name),
  ...require("fs")
    .readdirSync("nuxt", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((dir) => dir.name),
];

module.exports = {
  projects,
};
