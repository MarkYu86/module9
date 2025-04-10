const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user joined the chat');

  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', 'User: ' + msg);
    socket.emit('chat message', 'Me: ' + msg); // send only to sender
});

  socket.on('disconnect', () => {
    console.log('user left the chat');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});