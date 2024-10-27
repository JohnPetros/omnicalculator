const path = require("path")

const { merge } = require("webpack-merge")
const webpackCommonConfig = require("./webpack.config")

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebapackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
})