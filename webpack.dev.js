const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new HtmlWebpackPlugin({
      title: 'React App [Development]',
      template: 'src/index.html',
      env: 'development',
    }),
  ],
});
