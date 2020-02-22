module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
  },
};
