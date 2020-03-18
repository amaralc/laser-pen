import socket from 'socket.io';
import app from './app';

const server = app.listen(3333);

const io = socket(server);

io.sockets.on('connection', socket => {
  console.log(`new connection: ${socket.id}`);

  socket.on('mouse', data => {
    console.log(data);
  });

  socket.on('laserPen', data => {
    console.log(data);
  });
});
