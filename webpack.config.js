var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass!' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
};
