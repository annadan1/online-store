const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  output: {
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    open: true,
    port: 5000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: true,
                localIdentName: '[name]_[local]__[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
