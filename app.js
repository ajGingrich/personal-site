const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'letterA.png')));

const serveGzip = (contentType) => (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', contentType);

  next();
};

app.get('*.js', serveGzip('text/javascript'));
app.get('*.css', serveGzip('text/css'));
//
// // view engine setup
app.set('view engine', 'html');
app.engine('html', (p, options, callback) => {
  fs.readFile(p, 'utf-8', callback);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = http.createServer(app);
const port = 4040;

server.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`); // eslint-disable-line no-console
});
