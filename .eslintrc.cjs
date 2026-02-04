/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: ['react', 'react-hooks'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // MUST be last — disables formatting rules
  ],

  rules: {
    /* React 17+ (no need to import React in JSX) */
    'react/react-in-jsx-scope': 'off',

    /* Useful but not noisy */
    'react/prop-types': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    /* JSX & style sanity */
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',

    /* Hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  ignorePatterns: ['dist/', 'build/', 'node_modules/'],
};
