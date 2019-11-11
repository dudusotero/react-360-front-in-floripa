module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "import/prefer-default-export": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "class-methods-use-this": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
