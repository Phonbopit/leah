'use strict';

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 5555
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
}
