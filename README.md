# @luccasfr/eslint-config-nextjs

This package provides an ESLint configuration for Next.js projects using TypeScript and React. It includes a set of rules and plugins to ensure code quality and consistency.

## Installation

To install the package, run the following command:

```sh
npm install --save-dev @luccasfr/eslint-config-nextjs
```

Install all peer-dependencies:
```sh
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn
```

ESLint and Next.js are not included in the install script, as it is assumed you are already using Next.js and ESLint.

# Usage
To use this ESLint configuration in your project, extend it in your .eslintrc file:
```json
{
  "extends": [
    "@luccasfr/eslint-config-nextjs"
  ],
  "rules": {
    // ...
  }
}
```

# Rules
This configuration includes the following rules and plugins:

## Plugins
* @typescript-eslint
* eslint-plugin-import
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-unicorn

## Extends
* plugin:react-hooks/recommended
* next/core-web-vitals
* plugin:react/recommended
* plugin:import/errors
* plugin:import/warnings
* plugin:unicorn/recommended

## Custom Rules
* "react/react-in-jsx-scope": "off"
* "react/prop-types": "off"
* "no-unused-vars": "off"
* "import/no-unused-modules": ["error"]
* "unicorn/filename-case": ["error", { "case": "kebabCase" }]
* "unicorn/prevent-abbreviations": ["off"]
* "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "ignoreRestSiblings": true, "args": "after-used" }]

# Peer Dependencies
Make sure to install the following peer dependencies:

* @typescript-eslint/eslint-plugin
* @typescript-eslint/parser
* @tanstack/eslint-plugin-query
* eslint (>=8.57.0)
* eslint-plugin-import
* eslint-plugin-react
* eslint-plugin-react-hooks
* eslint-plugin-unicorn
* next

# Author
Lucas Ferreira - lucas.ferreira@jerasoft.inf.br

# License
This project is licensed under the ISC License.
## Supported patched Next.js releases

Version 1.1.0 supports Next.js 15.5.29 and later 15.x releases, or 16.4.6 and later 16.x releases. Install the matching `eslint-config-next` version explicitly. The Next.js peer is a compatibility requirement; applications must update their own Next.js runtime and lockfile.

For Next.js 15 with ESLint 8.57.1, keep the legacy `.eslintrc` usage shown above.

For Next.js 16 with ESLint 9, use the flat entry in `eslint.config.mjs`:

```js
import nextConfig from "@luccasfr/eslint-config-nextjs/flat.mjs";

export default [...nextConfig];
```

The flat entry preserves the package's custom rules and uses Next.js 16's native flat configuration. Use a Node.js version supported by the selected Next.js release.
