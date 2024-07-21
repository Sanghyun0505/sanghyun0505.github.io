/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
