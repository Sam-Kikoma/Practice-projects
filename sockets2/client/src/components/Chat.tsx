// src/components/Chat.jsx
import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Chat({ user }) {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		socket.on("message", (data) => {
			setMessages((prev) => [...prev, data]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});

		return () => {
			socket.off("message");
			socket.off("roomData");
		};
	}, []);

	const sendMessage = () => {
		if (!message) return;

		socket.emit("sendMessage", message, () => setMessage(""));
	};

	return (
		<div style={styles.wrapper}>
			<aside style={styles.sidebar}>
				<h2>Room: {user.room}</h2>
				<h3>Users</h3>

				<ul>
					{users.map((u) => (
						<li key={u.id}>{u.name}</li>
					))}
				</ul>
			</aside>

			<main style={styles.chat}>
				<div style={styles.messages}>
					{messages.map((m, i) => (
						<p key={i}>
							<strong>{m.user}:</strong> {m.text}
						</p>
					))}
				</div>

				<div style={styles.inputRow}>
					<input
						style={styles.input}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && sendMessage()}
						placeholder="Type a message..."
					/>
					<button onClick={sendMessage} style={styles.button}>
						Send
					</button>
				</div>
			</main>
		</div>
	);
}

const styles = {
	wrapper: {
		display: "flex",
		height: "100vh",
	},
	sidebar: {
		width: "250px",
		padding: "20px",
		background: "#f0f0f0",
		borderRight: "1px solid #ccc",
	},
	chat: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
	},
	messages: {
		flex: 1,
		padding: "20px",
		overflowY: "auto",
	},
	inputRow: {
		display: "flex",
		borderTop: "1px solid #ccc",
	},
	input: {
		flex: 1,
		padding: "15px",
		fontSize: "18px",
	},
	button: {
		padding: "15px 20px",
		fontSize: "18px",
		cursor: "pointer",
	},
};
