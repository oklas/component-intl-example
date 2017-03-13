var MergePlugin = require("merge-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  entry: "./src/index",
  target: "web",
  output: {
    path: "./assets",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets:[ 'es2015', 'stage-0' ]
        }
      },
      { test: /\.(intl|i18n)$/i,
        loaders: [
          MergePlugin.loader({group: "[name]"}),
          'yaml-loader'
        ]
      },
      { test: /\.css$/, loader: "css" },
      { test: /\.(eot|gif|jpg|png|svg|ttf|woff)$/, loader: "url-loader?limit=100000" }
    ]
  },
  plugins: [
    new MergePlugin({
      search: [ './src/**/*.intl', './src/**/*.i18n' ]
    })
  ]
};
