const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
const path = require('path')
module.exports = merge(base, {
  entry: {
    server: path.resolve(__dirname, '../src/client-server.js'),
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      filename: 'index.ssr.html',
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      excludeChunks: ['server'],
    }),
  ],
})
