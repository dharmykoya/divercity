module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  ignorePatterns: ["reportWebVitals.js"],
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    // " eslint implicit-arrow-linebreak": ["error", "beside"],
    checkContextTypes: [0],
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
