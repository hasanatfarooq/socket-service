const { setupWSConnection } = require('y-websocket/bin/utils.js');
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

const port = process.env.PORT || 1234;
server.listen(port, () => {
  console.log(`y-websocket server running on port ${port}`);
});