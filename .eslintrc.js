module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': [0],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [0],
    'react/function-component-definition': [0],
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
