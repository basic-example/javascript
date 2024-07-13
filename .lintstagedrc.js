module.exports = (files) => {
  const fs = require("fs");
  const sep = require("path").sep;
  const exec = require("child_process").exec;
  const root = __dirname.replace(new RegExp("\\" + sep, "g"), "/");
  const dirs = files.reduce((acc, value) => {
    const segs = value.replace(root + "/", "").split("/");
    while (segs.pop()) {
      const path = segs.join("/");
      if (path && !acc.includes(path)) {
        acc.push(path);
      }
    }
    return acc;
  }, []);
  const project_dirs = dirs.filter((path) =>
    fs.existsSync(root + "/" + path + "/package.json"),
  );
  project_dirs.forEach((dir) => {
    const cmd =
      dir
        .split("/")
        .map((folder) => `cd ${folder} && `)
        .join("") + "npm install && npm run lint && npm run test";

    console.log("=============================");
    console.log(cmd);
    console.log("=============================");
    exec(cmd, (error) => {
      if (error) {
        throw new Error(error);
      }
    });
  });

  return [];
};
