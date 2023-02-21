const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: '/src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'donghaoutils.js',
    library: 'donghaoutils',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@': './src',
    },
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      scriptLoading: 'blocking',
    }),
  ],
  mode: 'production',
}

module.exports = config
