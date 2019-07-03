module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    // "plugin:vue/strongly-recommended",
    // "@vue/prettier"
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
}
