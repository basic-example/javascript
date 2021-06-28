module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  root: true,
  rules: {
    "import/first": "error",
    "import/order": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "sort-keys": "error",
  },
};
