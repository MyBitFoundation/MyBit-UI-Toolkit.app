module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
        }
      }
    }],
    '@neutrinojs/jest',
    ['@neutrinojs/react', {
      html: {
        title: 'MyBit - UI Kit'
      },
    }],
    '@neutrinojs/style-loader'
  ]
};
