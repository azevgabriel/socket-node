import "reflect-metadata";
import "../typeorm";
import "../../container";

import express from "express";
import { Server } from "socket.io";
import http from "http";

import { ListAllNotesController } from "../../../modules/notes/useCases/listAllNotes/ListAllNotesController";
import { router } from "./routes";

const app = express();

const listAllNotesController = new ListAllNotesController();
let interval: any;

app.use(express.json());
app.use(router);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET"],
    credentials:true
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 5000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = listAllNotesController.handle();
  socket.emit("FromAPI", response);
};

export { server };
