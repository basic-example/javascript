module.exports = (files) => {
  const sep = require("path").sep;
  const exec = require("child_process").exec;
  const obj = files.reduce((acc, value) => {
    const root = __dirname.replace(new RegExp("\\" + sep, "g"), "/");
    const rel = value.replace(root + "/", "");
    const segs = rel.split("/");
    const type = segs.shift();
    const proj = segs.shift();
    const path = segs.join("/");

    if (!path) {
      return acc;
    }

    if (Object.keys(acc).indexOf(type) === -1) {
      acc[type] = [];
    }

    if (acc[type].indexOf(proj) === -1) {
      acc[type].push(proj);
    }

    return acc;
  }, {});

  for (const [type, projects] of Object.entries(obj)) {
    projects.forEach((project) => {
      const cmd = `cd ${type} && cd ${project} && pnpm install && npm run lint`;

      console.log("----------------------------------------------------------");
      console.log(`run: ` + cmd);
      console.log("----------------------------------------------------------");

      exec(cmd, (error) => {
        if (error) {
          throw new Error(error);
        }
      });
    });
  }

  return [];
};
