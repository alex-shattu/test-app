module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    // parserOptions: {
    //   project: './jsconfig.js',
    // },
    'import/resolver': {
      alias: ['components', './src/components'],
      node: {
        paths: ['./src'],
      },
    },
  },
};
