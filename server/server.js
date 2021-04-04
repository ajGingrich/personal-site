import http from 'http';
import app from './app';

const server = http.createServer(app);
const port = 4040;

server.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`); // eslint-disable-line no-console
});

export default server;
