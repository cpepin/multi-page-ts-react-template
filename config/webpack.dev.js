const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    open: true,
    inline: true,
    historyApiFallback: {
      rewrites: [
        // redirects all request to 'user' app to index.html, so the
        // client router can handle requests
        { from: /\/user/, to: '/user/index.html' },
        // Add any apps that need a router here
      ],
    },
  },
});