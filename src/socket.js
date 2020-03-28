import socket from 'socket.io';
import server from './server';

const io = socket(server);

io.sockets.on('connection', socket => {
  console.log(`new connection: ${socket.id}`);

  socket.on('mouse', data => {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  });

  socket.on('laserPen', data => {
    socket.broadcast.emit('laserPen', data);

    /**
     * To emit to every client including the one who sent the message
     * io.sockets.emit('laserPen', data);
     */
    console.log(data);
  });
});
