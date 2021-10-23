import { createServer } from "http";
import { Server, Socket } from "socket.io";

export const socketServer = createServer();
const io = new Server(socketServer, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log(".........socket connected.......🙌");
  socket.emit("getId", socket.id);

  socket.on("movementMessage", (arg) => {
    console.log("event :>> ", arg);
    socket.broadcast.emit("movementMessage", arg);
  });

  socket.on("callUser", (data) => {
    console.log("call user data :>> ", data);
    socket.broadcast.emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on("answerCall", (data) => {
    console.log("answer call data :>> ", data);
    socket.broadcast.emit("callAccepted", data.signal);
  });
});
