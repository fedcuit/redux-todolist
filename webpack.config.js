var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

const ENV = process.env.NODE_ENV;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

var common = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.css', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: APP_PATH
    }, {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: APP_PATH
    }]
  }
}
if (ENV === 'development' || !ENV) {
  module.exports = merge(common, {
    devtool: 'eval',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Kanban app'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progess: true,
      port: 4000
    },
  });
}
