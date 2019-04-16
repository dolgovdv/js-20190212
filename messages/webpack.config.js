const path = require('path')

module.exports = {
  entry: './messages.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'messages.js'
  },
  devtool: 'eval-source-map',
  module: {

    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }, {
        test: /\.pug$/,
        use: 'pug-loader'
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]

  }
};
