const webpack = require('webpack');

module.exports = {
  entry: './src/jsx/timeline.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            presets: ['babel-preset-metal-jsx']
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
      }]
  },
  watch: true,
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './timeline.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
};
