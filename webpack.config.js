require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'main.we?entry=true'),
    mainindex: path.join(__dirname, 'src', 'mainindex.we?entry=true'),
    updatetest: path.join(__dirname, 'src', 'updatetest.we?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].lib'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel']
      }
    ]
  }
}