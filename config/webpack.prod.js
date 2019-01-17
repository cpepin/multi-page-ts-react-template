const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    // Bases part of hash on directory structure.
    // This will allow us to long-term cache vendor
    // chunks.
    new webpack.HashedModuleIdsPlugin(),
  ],
});
