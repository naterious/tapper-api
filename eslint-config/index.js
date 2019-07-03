module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint', 'eslint-plugin-import'],
  'extends': [
    './core.js',
    './import.js',
    './fp.js',
  ],
  // 'env': {
  //   'browser': false,
  //   'es6': true,
  //   'node': true,
  // },
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
    },
    'useJSXTextNode': false,
    'project': './tsconfig.json',
  },
};
