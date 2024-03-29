import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";
import getAllRoute from "./routes/getAllRoute.js";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  path: "/chat/",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/get", getAllRoute);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection success");
  } catch (error) {
    console.error(error);
  }
};

server.listen(3001, () => connection());
