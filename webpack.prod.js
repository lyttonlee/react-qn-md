// const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
  entry: './src/editor/Editor.js',
  // entry: './src/App.js',
  mode: 'production',
  output: {
    filename: 'react-qn-md.js',
    path: path.join(__dirname, './lib'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.less)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}

module.exports = config
