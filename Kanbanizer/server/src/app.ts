import express from "express";
import userRouter from "./routes/user.ts";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send(`<h1>It lives</h1>`);
});
app.use("/api/users", userRouter);

export default app;
