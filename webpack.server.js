const merge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

console.log('WEBPACK_SERVER_ENV:', process.env.NODE_ENV);

module.exports = merge(common, {
  entry: ['./src/server/index.ts'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle_server.js',
  },

  externals: [webpackNodeExternals()],
});
