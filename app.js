const http = require('http'); // eslint-disable-line
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const proxy = require('express-http-proxy');
const expressStaticGzip = require('express-static-gzip');
const config = require('./config');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'letterA.png')));

app.use('/api', proxy(`http://${config.mailer.host}:${config.mailer.port}`));

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
