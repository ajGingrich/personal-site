const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.js',
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      images: path.resolve(__dirname, 'public/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      selectors: path.resolve(__dirname, 'src/selectors/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && 'react-refresh/babel',
            ].filter(Boolean),
          },
        }],
      },
      {
        test: /\.css$/i,
        use: [
          isDevelopment && 'style-loader',
          !isDevelopment && MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ].filter(Boolean),
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=1000000',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    !isDevelopment && new MiniCssExtractPlugin({
      filename: 'style.bundle.css',
    }),
    new HtmlWebpackPlugin(),
  ].filter(Boolean),
};
