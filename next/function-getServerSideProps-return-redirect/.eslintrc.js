module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: { version: "detect" },
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {},
  overrides: [],
};
