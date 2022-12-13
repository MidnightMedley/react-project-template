const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: `${process.cwd()}/dist/`,
    filename: 'index.[fullhash].js',
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
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/template.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
};
