module.exports = {
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "no-unused-vars": "off",
  "import/no-unused-modules": [
    "error"
  ],
  "unicorn/filename-case": [
    "error",
    {
      "case": "kebabCase"
    }
  ],
  "unicorn/prevent-abbreviations": [
    "off"
  ],
  "unicorn/no-null": [
    "off"
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "ignoreRestSiblings": true,
      "args": "after-used"
    }
  ]
};
