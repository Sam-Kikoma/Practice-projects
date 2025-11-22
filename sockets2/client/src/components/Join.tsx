import { useState } from "react";
import type { CSSProperties } from "react";
import { socket } from "../Socket";

const Join = ({ onjoin }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [error, setError] = useState("");

	const handleJoin = () => {
		if (!name || !room) {
			setError("Both fields are required");
			return;
		}
	};
	socket.connect();
	socket.emit("join", { name, room }, (err) => {
		if (err) {
			setError(err);
			return;
		}
		onjoin({ name, room });
	});

	return (
		<div style={styles.container}>
			<h1>Join Chat Room</h1>

			<input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />

			<input placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} style={styles.input} />

			<button onClick={handleJoin} style={styles.button}>
				Join
			</button>

			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};
const styles: { container: CSSProperties; input: CSSProperties; button: CSSProperties } = {
	container: {
		maxWidth: 400,
		margin: "80px auto",
		display: "flex",
		flexDirection: "column",
		gap: "15px",
		textAlign: "center",
	},
	input: {
		padding: "10px",
		fontSize: "18px",
	},
	button: {
		padding: "10px",
		fontSize: "18px",
		cursor: "pointer",
	},
};
export default Join;
