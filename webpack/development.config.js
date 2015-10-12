var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DefaultConfig = require('./default.config.js');

module.exports = {
  devtool: 'source-map',
  entry: ['webpack-hot-middleware/client?reload=true'].
    concat(DefaultConfig.Entries),
  output: {
    path: DefaultConfig.Dist,
    publicPath: '/',
    filename: DefaultConfig.BundleName + '.js'
  },
  module: {
    loaders: DefaultConfig.Loaders
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(DefaultConfig.BundleName + '.css')
  ]
};

