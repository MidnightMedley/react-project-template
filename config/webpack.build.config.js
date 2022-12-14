const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: `${process.cwd()}/dist/`,
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { modules: false }
              ],
              '@babel/preset-react',
            ],
            plugins: [
              [
              'babel-plugin-react-scoped-css',
              { "include": ".local.(sa|sc|c)ss$" }
              ]
            ]
          }
        }
      },
      {
        test: /\.(sc|c|sa)ss$/i,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'scoped-css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new WebpackBundleAnalyzer(),
    new HtmlWebpackPlugin({
      template: './template/template.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
