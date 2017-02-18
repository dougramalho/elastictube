'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',
  entry: [
        './app/index.js'
    ],
  output: {
    path: __dirname + "/dist/",
    filename: 'bundle.js',
    publicPath: '/app/assets/'
  },
  plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json?$/,
            loader: 'json'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
};