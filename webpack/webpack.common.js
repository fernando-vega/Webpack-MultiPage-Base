const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: 'index.html'
});

module.exports = {
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    htmlWebpack
  ],
  module: {
    rules: [{
        test: /\.jpg$/,
        loader: 'url-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  }
}