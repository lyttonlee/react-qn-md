const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
  // entry: './src/main.js',
  entry: './src/App.js',
  mode: 'development',
  output: {
    filename: 'react-qn-md.js',
    path: path.join(__dirname, './lib')
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
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    port: 9005,
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8901' // 按实际的服务端地址修改
      }
    }
  }
}

module.exports = config
