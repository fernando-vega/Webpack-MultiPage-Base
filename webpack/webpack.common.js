const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js',
  },
  /* plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery'
    })
  ], */
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.template.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({ // Also generate a home.html
      template: './assets/home.template.html',
      filename: 'home.html'
    })
  ]
}