module.exports = {
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  plugins: ["promise"],
  extends: "eslint:recommended",
};
