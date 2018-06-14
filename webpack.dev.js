const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');

// Returns available port number
function getPortNo() {
  portfinder.basePort = 8080;
  portfinder.getPort((err, port) => port);
}

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: getPortNo(),
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
