import express from "express";
import router from "./route.js";
import db from "./db.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

db();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", credentials: true }

});



server.listen(8000, () => console.log("server started"));
