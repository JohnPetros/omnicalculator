const path = require("path")

const { merge } = require("webpack-merge")
const webpackCommonConfig = require("./webpack.config")
const HtmlWebapackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[contenthash][ext][query]',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new HtmlWebapackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebapackPlugin({
      filename: '404.html',
      template: './src/404.html'
    }),
  ]
})