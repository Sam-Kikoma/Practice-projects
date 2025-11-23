import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001");
export const App = () => {
	const sendMessage = () => {
		socket.emit("send_message", {
			message: "Hello",
		});
	};
	useEffect(() => {
		socket.on("receive_message", (data) => {
			alert(data.message);
		});
	}, [socket]);
	return (
		<>
			<input placeholder="message" type="text" />
			<button onClick={sendMessage}>Send Message</button>
		</>
	);
};
