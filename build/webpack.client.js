const base = require('./webpack.config')
const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWrbpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/client-entry.js'),
  },
  // plugins: [
  //   new HtmlWrbpackPlugin({
  //     template: path.resolve(__dirname, '../public/index.html'),
  //   }),
  // ],
})
