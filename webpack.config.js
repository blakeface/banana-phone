const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: (process.env.ENVIRONMENT == 'DEV') ? 'eval' : 'cheap-module-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap'
      )
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextPlugin('./style.css')
  ],
};
