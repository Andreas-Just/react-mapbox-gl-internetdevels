module.exports = {
  extends: "@mate-academy/eslint-config-react",
  rules: {
    "no-restricted-syntax": [
      "error",
      "BinaryExpression[operator='in']",
    ],
    "guard-for-in": 0,
    "no-unused-expressions": "off",
    "arrow-body-style": 0,
    "jsx-a11y/label-has-for": 0,
    "object-curly-newline": [2, {
      "ObjectExpression": {
        "consistent": true,
        "minProperties": 5,
      },
    }],
  }
};
