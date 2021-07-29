module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  ignorePatterns: ["reportWebVitals.js"],
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
  },
};
