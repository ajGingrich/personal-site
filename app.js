const http = require('http'); // eslint-disable-line
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const proxy = require('express-http-proxy');
const expressStaticGzip = require('express-static-gzip');
const config = require('./config/config.json');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/api/mailer', proxy(`http://${config.mailer.host}:${config.mailer.port}`));
app.use('/api/butter', proxy(`http://${config.butter.host}:${config.butter.port}`));

// Serve up g-zipped static files
app.use('/', expressStaticGzip(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = http.createServer(app);
const port = 4040;

server.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`); // eslint-disable-line no-console
});
