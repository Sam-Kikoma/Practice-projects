import express from "express";
import userRoutes from "./routes/user.routes.js";
import { AppDataSource } from "./data-source.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

AppDataSource.initialize().then(() => {
	app.listen(3000, () => console.log("Server is live on port 3000"));
});
