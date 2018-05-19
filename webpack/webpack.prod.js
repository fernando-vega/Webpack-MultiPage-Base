const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const ExtactTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtactTextPlugin({
  filename: 'dist/css/[name].css'
});

module.exports = merge(common, {
  output: {
    publicPath: '.'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: 'css-loader',
              options: {
                minimize: false
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
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