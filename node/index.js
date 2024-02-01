const express = require("express");
const axios = require("axios");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

const app = express();


// https://tracnghiem.vuotlen.com/
app.use(
  cors({
    origin: "*"
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // origin: "http://localhost:8000",
    // methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true,
    origin: true,
    credentials: true
  },
  maxHttpBufferSize: 1e8
});



// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "https://example.com",
//     methods: ["GET", "POST"]
//   }
// });

// new
app.set('socketIo', io);

app.get("/", (req, res) => {
  res.send("Hello from Codedamn");
});

// Socket.IO connection event
io.on("connection", (socket) => {
  console.log("A user connected");

  // Example: Sending a message to the client on connection
  socket.emit("server-message", "Hello from the server!");
  // socket.emit('test-data', data);

  socket.emit("test-data", (data) => {
    console.log("test-data:", data);
  });

  // Example: Handling a message from the client
  socket.on("client-message", (data) => {
    console.log("Received message from client:", data);
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/test", (req, res) => {
  const apiUrl = "http://127.0.0.1:8000/api/broadcast";

  axios
    .get(apiUrl)
    .then((response) => {
      // Log the response data to the console
      console.log(response.data);

      // Emit data to all connected clients
      io.emit('test-data', response.data);

      // Send the response data back to the client
      res.send('API data emitted to clients');
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      res.status(500).send("Internal Server Error");
    });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
