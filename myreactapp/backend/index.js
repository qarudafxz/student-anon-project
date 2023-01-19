import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        // '*' is a wildcard port to access all possible ports
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

app.use(cors());

io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) 
        return next(new Error("invalid username"));

    socket.username = username;
    socket.userId = uuidv4();
    next();
});

io.on("connection", async (socket) => {
    const users = [];

    for(let [Id, socket] of io.of("/").sockets) {
        users.push({
            userId: socket.userId,
            username: socket.username
        })
    }

    //all users event
    socket.emit("users", users);

    //connected user details event
    socket.emit("session", { userId: socket.id, username: socket.username });

    //new user event
    socket.broadcast.emit("user connected", { 
        userId: socket.id, 
        username: socket.username
    });

    //new message event
    socket.on("new message",(message) => {
        socket.broadcast.emit("new message", {
            userId: socket.userId,
            username: socket.username,
            message
        })
    })
});

httpServer.listen(process.env.PORT || 4000);
