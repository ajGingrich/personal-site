const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config');

config.mode = 'production';
config.module.rules[1].use.unshift(MiniCssExtractPlugin.loader);

config.plugins.unshift(new MiniCssExtractPlugin({
  filename: 'style.bundle.css',
}));

// config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
