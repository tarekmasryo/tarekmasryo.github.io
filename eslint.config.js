import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser
    },
    rules: {
      // Keep this repo friendly: warn instead of failing PRs
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  }
];
