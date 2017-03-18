const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('./style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap'      )
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./mydir')
  },
  resolveLoader: {
    modulesDirectories: [
        '/Users/netzebandito/workspace/banana-phone/node_modules'
    ]
  },
};
