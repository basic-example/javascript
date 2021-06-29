const projects = require("fs")
  .readdirSync(".", { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((dir) => dir.name);

module.exports = {
  projects,
};
