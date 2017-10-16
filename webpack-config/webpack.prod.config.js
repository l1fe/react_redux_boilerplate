const merge       = require('webpack-merge');
const path        = require('path');
const Uglify      = require('uglifyjs-webpack-plugin');

const appConfig   = require('../app.config.js');
const baseConfig  = require('./webpack.config.js');

const webpackProdConfig = merge(baseConfig, {
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    // new Uglify(),
  ],
});

module.exports = webpackProdConfig;
