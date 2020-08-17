// const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
  entry: './src/editor/Editor.js',
  // entry: './src/App.js',
  mode: 'production',
  output: {
    filename: 'react-qn-md.js',
    path: path.join(__dirname, './lib'),
    libraryTarget: 'umd'
  },
  // 造轮子必须这样从外部引入react react-dom 
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
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
