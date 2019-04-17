module.exports = {
  entry: './settings/blocks/index.js',
  output: {
    filename: 'toolkit_settings.js'
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
