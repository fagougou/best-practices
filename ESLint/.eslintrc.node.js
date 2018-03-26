module.exports = {
    "env": {
        "node": true,
        "mocha": true
    },
    "extends": "standard",
    //"ignore-pattern": "./.eslintrc.js",
    "rules": {
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": true
        }],
        "no-underscore-dangle": 0,
        "no-var": 2,
        "no-unused-vars": ["error", { "varsIgnorePattern": "should$|[iI]gnored" }],
        "camelcase": ["warn"],
        "indent": ["error", 4],
        "comma-dangle": 1,
        "max-len": 1,
        "no-multi-str": 1,
        "global-require": 1,
        "no-mixed-operators": 1
    }
}
