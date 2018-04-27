const webpack = require('webpack');

module.exports = {
  entry: './src/jsx/main.js',
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
      }]
  },
  output: {
    library: 'metal',
    libraryTarget: 'this',
    filename: './timeline.js'
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ]
};
