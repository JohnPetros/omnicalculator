const path = require("path")
const HtmlWebapackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/'
  },
  mode: 'production',
  devServer: {
    historyApiFallback: true
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new HtmlWebapackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebapackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
}