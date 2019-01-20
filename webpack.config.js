const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxWebpackPlugin = require('workbox-webpack-plugin');
const vueLoader = require('vue-loader');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
      favicon: 'src/assets/favicon.ico',
    }),
    new workboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      include: [ /\.html$/, /\.js$/, /\.css$/, /favicon.ico$/ ]
    }),
    new WebpackPwaManifest({
      name: 'Genki DB',
      short_name: 'GenkiDB',
      description: 'Browse all vocab and kanji covered in Genki I and II',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/assets/mary-icon.png'),
          sizes: [ 196 ],
        },
      ],
    }),
    new vueLoader.VueLoaderPlugin(),
    // new BundleAnalyzerPlugin(),
  ]
};
