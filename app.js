const http = require('http'); // eslint-disable-line
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const proxy = require('express-http-proxy');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'letterA.png')));

// TODO: read this proxy from a config
// const PROXY_ADDRESS = 'http://localhost:4041';
const PROXY_ADDRESS = 'http://backend:4041';

app.use('/api', proxy(PROXY_ADDRESS));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = http.createServer(app);
const port = 4040;

server.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`); // eslint-disable-line no-console
});
