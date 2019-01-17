const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    landing: ['@babel/polyfill', path.join(__dirname, '../apps/landing/index.tsx')],
    user: ['@babel/polyfill', path.join(__dirname, '../apps/user/index.tsx')],
    // Additional apps entry points go here
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // use the babel.config.js file
              babelrc: true,
            },
          },
          // Use awesome-typescript-loader to transpile
          // TS -> esnext code, then leverage babel to
          // do the rest.

          // This allows us to leave in the es6 module syntax,
          // which will give us treeshaking from webpack 4 out-of-the-box.
          'awesome-typescript-loader'
        ] 
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(react-router-dom)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // use the babel.config.js file
              babelrc: true,
            },
          },
        ] 
      },
    ]
  },
  optimization: {
    // lets webpack handle loading of scripts
    // this will allow us to dynamically load modules
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, '../dist'), { allowExternal: true }),
    new HtmlWebpackPlugin({
      chunks: ['landing'],
      template: path.join(__dirname, '../apps/landing/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['user'],
      template: path.join(__dirname, '../apps/user/index.html'),
      filename: 'user/index.html',
    }),
  ],
};