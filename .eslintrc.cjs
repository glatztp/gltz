module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"],
  rules: {},
  env: {
    browser: true,
    es2021: true,
  },
  settings: {},
  ignorePatterns: ["dist/", "node_modules/"],
};
