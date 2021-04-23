const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: [path.resolve('./src')],
        extensions: ['.js', '.jsx', '.tsx', '.json', '.ts'],
        alias: {
          '~': './src',
        },
      },
    ],
    // [
    //   'module:react-native-dotenv',
    //   {
    //     moduleName: '@env',
    //     path: '.env',
    //     blacklist: null,
    //     whitelist: null,
    //     safe: false,
    //     allowUndefined: false,
    //   },
    // ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
