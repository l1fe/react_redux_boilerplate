const merge       = require('webpack-merge');
const path        = require('path');

const appConfig   = require('../app.config.js');
const baseConfig  = require('./webpack.config.js');

const rootPath    = path.join(`${__dirname}`, '../');
const appPath     = path.join(rootPath, 'app');

const webpackDevConfig = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    // publicPath: `${appConfig.WEBPACK_DEV_SERVER_HOST}/dist`,
  },

  devServer: {
    contentBase: appPath,
    historyApiFallback: true,
    // publicPath: `${appConfig.WEBPACK_DEV_SERVER_HOST}/dist`,
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

});

module.exports = webpackDevConfig;
