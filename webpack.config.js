const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './_site'),
    publicPath: process.env.BASE_URL,
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'vue-style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'less-loader', options: { sourceMap: true, javascriptEnabled: true } },
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  performance: {
    hints: false,
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: '"/"',
      }
    }),
    new HtmlWebpackPlugin({
      template: 'site/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
});
