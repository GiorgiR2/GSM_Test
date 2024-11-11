// const net = require("net");
const express = require("express");
const home = require("./routes/home");

const dotenv = require("dotenv");

require("./config/db");

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(home);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));

// const server = net.createServer((socket) => {
//   console.log("Client connected");

//   // Event triggered for any incoming data
//   socket.on("data", (data) => {
//     // Convert the buffer to a string
//     const message = data.toString();
//     console.log("Raw message received:", message);

//     // try {
//     //   // Attempt to parse the message as JSON
//     //   const jsonData = JSON.parse(message);
//     //   console.log("Received JSON data:", jsonData);

//     //   // Send an acknowledgment back to the client
//     //   socket.write("JSON data received");
//     // } catch (error) {
//     //   // If the data isn't valid JSON, catch the error
//     //   console.error("Invalid JSON received:", message);
//     //   socket.write("Error: Invalid JSON");
//     // }
//   });

//   // Event for client disconnect
//   socket.on("end", () => {
//     console.log("Client disconnected");
//   });

//   // Handle errors
//   socket.on("error", (err) => {
//     console.error("Socket error:", err.message);
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
