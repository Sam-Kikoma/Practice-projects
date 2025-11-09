import express from "express";
import { createServer } from "node:http";
import * as dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import { addUser } from "./user";

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server();

app.use(cors());

io.on("connection", (socket) => {
	socket.on("login", ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });
		if (error) return callback(error);
		socket.join(user.room);
		socket.emit("notification", { user: "admin", text: `${user.name}, welcome to room ${user.room}` });
		socket.broadcast.to(user.room).emit("notification", { user: "admin", text: `${user.name} has joined!` });

		io.to(user.room).emit("users", { room: user.room, users: getUsers(user.room) });

		callback();
	});
	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });

		callback();
	});
	socket.on("disconnect", () => {
		const user = deleteUser(socket.id);
		if (user) {
			io.to(user.room).emit("notification", { user: "admin", text: `${user.name} has left.` });
			io.to(user.room).emit("users", { room: user.room, users: getUsers(user.room) });
		}
	});
});
app.get("/", (req, res) => {
	res.send("<p>It lives</p>");
});

server.listen(PORT, () => {
	console.log(`Live on port:${PORT}`);
});
