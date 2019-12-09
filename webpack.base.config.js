const path = require('path')
const WebpackBar = require('webpackbar')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getBabelCommonConfig = require('./tools/getBabelCommonConfig');
const babelConfig = getBabelCommonConfig(false);

// babelConfig.plugins.push(require.resolve('@babel/plugin-syntax-dynamic-import'));

const vueLoaderOptions = {
  loaders: {
    js: [
      {
        loader: 'babel-loader',
        options: {
          presets: ["@vue/babel-preset-jsx"],
          plugins: ['transform-vue-jsx', '@babel/plugin-proposal-object-rest-spread'],
        },
      },
    ],
  },
};

module.exports = {
  entry: './site/main.js',
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: 'chunk.[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderOptions,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.md'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      // antd: path.join(__dirname, 'components'),
      // 'ant-design-vue': path.join(__dirname, 'components'),
      '@': path.join(__dirname, './site'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackBar(),
  ]
}