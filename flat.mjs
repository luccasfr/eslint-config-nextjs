import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import unicorn from "eslint-plugin-unicorn";
import customRules from "./rules.js";

const react = nextVitals.find((config) => config.plugins?.react)?.plugins.react;
const imports = nextVitals.find((config) => config.plugins?.import)?.plugins.import;

export default [
  ...nextVitals,
  ...nextTypeScript,
  {
    plugins: { unicorn },
    rules: {
      ...react.configs.recommended.rules,
      ...imports.configs.errors.rules,
      ...imports.configs.warnings.rules,
      ...unicorn.configs.recommended.rules,
      ...customRules,
    },
  },
];
