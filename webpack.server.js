const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/server/index.ts'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle_server.js',
  },
  watch: true,
  target: 'node',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [webpackNodeExternals()],
};
