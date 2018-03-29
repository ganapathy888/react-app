const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

const compression = new CompressionPlugin({
  asset: "[file]",
  algorithm: "gzip",
  test: /\.js$|\.css$/,
  threshold: 10240,
  minRatio: 0.8
});

module.exports = merge(common, {
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new UglifyJSPlugin(),
    compression
  ]
});
