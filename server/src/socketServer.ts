import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import type { Room, SocketId } from 'socket.io-adapter';
export const socketServer = createServer();
const io = new Server(socketServer, {
  cors: {
    origin: '*',
    // method: ["GET", "POST"],
  },
});

// const users = {};

let socketIds: SocketId[] = [];

io.on('connection', (socket: Socket) => {
  console.log('.........socket connected.......🙌');

  socket.on('movementMessage', (arg) => {
    console.log('event :>> ', arg);
    socket.broadcast.emit('movementMessage', arg);
  });

  socket.on('joinVideo', () => {
    if (socketIds.length === 10) {
      socket.emit('capacity reached!');
      return;
    }
    socketIds.push(socket.id);
    const allOtherUsers = socketIds.filter((id) => id !== socket.id);
    socket.emit('userList', allOtherUsers);
  });

  socket.on('sendingSignal', (payload) => {
    io.to(payload.userToSignal).emit('userJoined', {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  socket.on('returningSignal', (payload) => {
    io.to(payload.callerID).emit('receivingReturnedSignal', {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on('disconnect', () => {
    const allOtherUsers = socketIds.filter((id) => id !== socket.id);
    socketIds = [...allOtherUsers];
    io.emit('userDisconnect');
  });

  //-----------------------p2p code below
  // socket.on("callUser", (data) => {
  //   console.log("call user data :>> ", data);
  //   socket.broadcast.emit("callUser", {
  //     signal: data.signalData,
  //     from: data.from,
  //     name: data.name,
  //   });
  // });

  // socket.on("answerCall", (data) => {
  //   console.log("answer call data :>> ", data);
  //   socket.broadcast.emit("callAccepted", data.signal);
  // });
});
