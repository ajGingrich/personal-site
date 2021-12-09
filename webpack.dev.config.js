const path = require('path');

const config = require('./webpack.config');
const serviceConfig = require('./config/config.json');

config.mode = 'development';

// dev server
config.devServer = {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  historyApiFallback: true,
  port: 3000,
  hot: true,
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

// add style loader
config.module.rules[1].use.unshift('style-loader');

module.exports = config;
