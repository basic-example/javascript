module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["*.svelte"],
      plugins: ["svelte3"],
      settings: {
        "svelte3/typescript": () => require("typescript"),
      },
      processor: "svelte3/svelte3",
    },
    {
      files: ["*.svelte", "*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
