const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config');

config.mode = 'production';
config.module.rules[1].use.unshift(MiniCssExtractPlugin.loader);

// TODO: remove bootstrap from bundle? insert: '#some-element',
config.plugins.unshift(new MiniCssExtractPlugin());

config.plugins.push(new CompressionPlugin({
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
  minRatio: 1,
  threshold: 0,
  deleteOriginalAssets: true,
}));

// config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
