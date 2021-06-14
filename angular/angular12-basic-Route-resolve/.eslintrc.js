module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        createDefaultProgram: true,
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
      ],
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
    },
    {
      files: ["*.html"],
      excludedFiles: ["*inline-template-*.component.html"],
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", { parser: "angular" }],
      },
    },
  ],
};
