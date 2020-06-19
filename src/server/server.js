import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);

    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
});

console.log('Web Socket Server running');
