module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Adicione esta linha
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // outras extensões que você está usando
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // suas regras personalizadas
  },
};
