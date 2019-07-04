module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    // "plugin:vue/strongly-recommended",
    'plugin:vue/essential',
    "@vue/prettier"

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
