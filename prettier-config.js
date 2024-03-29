module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  printWidth: 80,
  endOfLine: "auto",
  overrides: [
    {
      files: ["*.css"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
