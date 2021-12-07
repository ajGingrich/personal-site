const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // eslint-disable-line
const path = require('path');

const config = require('./webpack.config');
const serviceConfig = require('./config/config.json');

config.mode = 'development';

// dev server
config.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  historyApiFallback: true,
  port: 3000,
  proxy: {
    '/api/butter': {
      target: `http://${serviceConfig.butter.host}:${serviceConfig.butter.port}`,
      pathRewrite: { '^/api/butter': '' },
    },
    '/api/mailer': {
      target: `http://${serviceConfig.mailer.host}:${serviceConfig.mailer.port}`,
      pathRewrite: { '^/api/mailer': '' },
    },
  },
};

// add hot loading
config.module.rules[0].use[0].options.plugins.unshift('react-refresh/babel');
// add style loader
config.module.rules[1].use.unshift('style-loader');

config.plugins.unshift(new ReactRefreshWebpackPlugin());

module.exports = config;
