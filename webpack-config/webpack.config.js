const webpack = require('webpack');
const path    = require('path');

const rootPath        = path.join(`${__dirname}`, '../');
const entryPointPath  = path.join(rootPath, 'app/application.jsx');
const distPath        = path.join(rootPath, 'app/dist');

console.log('Dist path', distPath);

const webpackConfig = {
  entry: {
    app: ['webpack/hot/dev-server', entryPointPath],
  },

  output: {
    path: distPath,
    publicPath: 'dist',
    chunkFilename: '[id].[chunkhash].js',
  },

  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        test: /\.css$/,
        loader: 'postcss-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

};

module.exports = webpackConfig;
