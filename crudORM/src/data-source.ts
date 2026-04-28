import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "password",
	database: "crudorm",
	synchronize: true,
	entities: [User],
});
