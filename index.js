module.exports = {
  extends: [
  "next/core-web-vitals",
  "plugin:react/recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:unicorn/recommended"
],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: require("./rules.js")
};
