const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); // добавили плагин
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
// указали путь к файлу, в квадратных скобках куда вставлять сгенерированный хеш
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    },
    {
      test: /\.(png|jpg|gif|ico|svg|)$/,
      use: [
          'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения?name=../images/[name].[ext]
          {
              loader: 'image-webpack-loader',
              options: {
                  esModule: false
              }
          },
      ]
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    loader: 'file-loader?name=./vendor/[name].[ext]'

}
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/saved.html',
      filename: 'saved.html',
    }),
    new WebpackMd5Hash(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
  ]
};