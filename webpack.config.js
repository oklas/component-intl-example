var path = require('path');
var webpack = require('webpack');
var IntlPlugin = require("intl-webpack-plugin");

module.exports = {
  entry: "./src/index",
  target: "web",
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "assets/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'stage-0' ]
        }
      },
      { test: /\.(intl|i18n)$/i,
        use: [
          IntlPlugin.loader(),
          'yaml-loader'
        ]
      },
      { test: /\.css$/, use: "css" },
      { test: /\.(eot|gif|jpg|png|svg|ttf|woff)$/, use: "url-loader?limit=100000" }
    ]
  },
  plugins: [
    new IntlPlugin({
      search: [ './src/**/*.intl', './src/**/*.i18n' ]
    })
  ]
};
