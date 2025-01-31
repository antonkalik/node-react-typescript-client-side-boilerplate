const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

console.log('WEBPACK_CLIENT_ENV:', process.env.NODE_ENV);

module.exports = merge(common, {
  entry: ['./src/client/index.tsx', './src/client/scss/style.scss'],
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle_client.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    stats: { colors: true },
    proxy: {
      '/api': 'http://localhost:9999',
      changeOrigin: true,
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename: './index.html',
      title: 'Node React Typescript Client Side Boilerplate',
    }),
  ],
});
