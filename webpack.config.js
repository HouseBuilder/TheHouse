const path = require('path')
module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.join(`${__dirname}/dist`),
    filename: 'bundle.js'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components|dist)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
