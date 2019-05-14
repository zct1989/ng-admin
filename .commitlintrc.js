module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [0, 'never'],
    'scope-empty': [0, 'never'],
    'scope-case': [2, 'always', 'lowerCase'],
    'header-max-length': [2, 'always', 80],
  },
};
