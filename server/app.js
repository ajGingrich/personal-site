const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const config = require('../webpack.config');

const compiler = webpack(config);

const app = express();

app.use(
  middleware(compiler, {}),
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
