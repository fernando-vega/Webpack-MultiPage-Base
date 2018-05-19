const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: 'dist/css/[name].css'
})

module.exports = merge(common, {
  output: {
    publicPath: '.'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false
          }
        }]
      }
    ]
  },
  plugins: [extractSass]
});