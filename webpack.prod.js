const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const compression = new CompressionPlugin({
  asset: '[file]',
  algorithm: 'gzip',
  test: /\.js$|\.css$/,
  threshold: 10240,
  minRatio: 0.8,
});

module.exports = merge(common, {
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new CleanWebpackPlugin(['build']),
    new UglifyJSPlugin(),
    compression,
    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'src/index.html',
      env: 'production',
    }),
  ],
});
