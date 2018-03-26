// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['standard', 'plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  "rules": {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],
    "no-underscore-dangle": 0,
    "no-var": 2,
    "no-unused-vars": ["error", { "varsIgnorePattern": "[iI]gnored" }],
    "camelcase": ["warn"],
    "indent": ["error", 4],
    "comma-dangle": 1,
    "max-len": 1,
    "no-multi-str": 1,
    "global-require": 1,
    "no-mixed-operators": 1
  }
}
