import express from "express";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const db = await open({
	filename: "chat.db",
	driver: sqlite3.Database,
});

await db.exec(
	`CREATE TABLE IF NOT EXISTS messages(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	client_offset TEXT UNIQUE,
	content TEXT
	)`
);

const app = express();
const server = createServer(app);
const io = new Server(server, {
	connectionStateRecovery: {},
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", async (socket) => {
	console.log("A user is connected");
	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
	socket.on("chat message", async (msg) => {
		let result;
		try {
			result = await db.run(`INSERT INTO messages (content) VALUES (?)`, msg);
		} catch (e) {
			return;
		}
		io.emit("chat message", msg, result.lastID);
	});
	if (!socket.recovered) {
		try {
			await db.each(
				`SELECT id, content FROM MESSAGES WHERE id > ?`,
				[socket.handshake.auth.serverOffset || 0],
				(_err, row) => {
					socket.emit("chat message", row.content, row.id);
				}
			);
		} catch (error) {}
	}
});

server.listen(3000, () => {
	console.log("Server is live on http://localhost:3000");
});
