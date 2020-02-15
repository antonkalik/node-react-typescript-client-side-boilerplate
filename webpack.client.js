const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx', './src/scss/style.scss'],
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle_client.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'eval-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
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
      '/api/**': {
        target: process.env.API_URL,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    }),
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename: './index.html',
      title: 'Node React Typescript Client Side Boilerplate',
    }),
  ],
};
