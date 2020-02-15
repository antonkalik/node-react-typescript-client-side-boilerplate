const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/server/index.ts'],
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle_server.js',
  },
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [webpackNodeExternals()],
};
