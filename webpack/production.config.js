var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DefaultConfig = require('./default.config.js');

module.exports = {
  devtool: 'source-map',
  entry: DefaultConfig.Entries,
  output: {
    path: DefaultConfig.Dist,
    publicPath: '/',
    filename: DefaultConfig.BundleName + '-[hash].min.js'
  },
  module: {
    loaders: DefaultConfig.Loaders
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin(DefaultConfig.BundleName + '-[hash].min.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'views', 'index.ejs'),
      inject: 'body',
      filename: 'index.ejs'
    })
  ]
};
