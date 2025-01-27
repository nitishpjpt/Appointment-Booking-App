export default [
  {
    ignores: ["node_modules/", "dist/", "build/", "*.log"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: "error",
    },
  },
];
