module.exports = {
  root: true,

  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 1,
    'vue/max-attributes-per-line': 'off',
    'vue/no-html': 'off',
    'vue/require-default-prop': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
}
