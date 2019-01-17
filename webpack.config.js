const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxWebpackPlugin = require('workbox-webpack-plugin');
const vueLoader = require('vue-loader');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
         test: /\.(png|jpg|gif)$/,
         use: [
           {
             loader: 'url-loader',
             options: {
               limit: 8192
             }
           }
         ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      meta: { viewport: 'width=device-width, initial-scale=1' },
      title: 'Genki Vocab',
    }),
    new workboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      include: [ /\.html$/, /\.js$/, /\.css$/ ]
    }),
    new vueLoader.VueLoaderPlugin(),
  ]
};
