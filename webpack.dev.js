const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9007,
    host: '0.0.0.0',
    proxy: {
      '/api/v2': {
        target: 'http://...',
        pathRewrite: {
          '^/api/v2': ''
        },
        secure: false
      }
    }
  }
});