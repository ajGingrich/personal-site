const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // eslint-disable-line
const config = require('./webpack.config');

config.mode = 'development';

// add hot loading
config.module.rules[0].use[0].options.plugins.unshift('react-refresh/babel');
// add style loader
config.module.rules[1].use.unshift('style-loader');

config.plugins.unshift(new ReactRefreshWebpackPlugin());

module.exports = config;
