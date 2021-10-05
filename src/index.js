const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

let count = 0;

io.on("connection", (socket) => {
  console.log("New websocket connected!");
  socket.emit("countUpdated", count);
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
