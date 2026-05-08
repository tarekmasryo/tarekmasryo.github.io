import js from '@eslint/js';
import globals from 'globals';

const strictRules = {
  eqeqeq: ['error', 'always'],
  'no-implicit-globals': 'error',
  'no-undef': 'error',
  'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
  'no-var': 'error',
  'prefer-const': 'error',
};

export default [
  {
    ignores: [
      'assets/**',
      'node_modules/**',
      'test-results/**',
      'playwright-report/**',
      'blob-report/**',
      'dist/**',
      '.cache/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['app.js', 'projects.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: strictRules,
  },

  {
    files: ['tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: strictRules,
  },
  {
    files: ['eslint.config.js', 'scripts/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: strictRules,
  },
];
