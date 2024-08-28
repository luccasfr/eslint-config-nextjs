// index.js
module.exports = {
  extends: [
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:unicorn/recommended"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "import/no-unused-modules": ["error"],
    "unicorn/filename-case": [
      "error",
      {
        "case": "kebabCase"
      }
    ],
    "unicorn/prevent-abbreviations": ["off"],
    "unicorn/no-null": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "args": "after-used"
      }
    ]
  }
};