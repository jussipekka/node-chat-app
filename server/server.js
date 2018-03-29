const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    
  });

  socket.emit('newMessage', {
    from: 'Maisa',
    text: 'halojata halloo',
    createdAt: 234
  })

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'Hey, what is going on?',
  //   createAt: 123
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
    
  // });

  // socket.on('disconnect', () => {
  //   console.log('User disconnected');
  // });
});

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});