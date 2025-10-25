import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.ts";
//Hash password
export const hashPassword = (password: string) => {
	return bcrypt.hash(password, 5);
};
//Compare password
export const comparePassword = (password: string, hash: string) => {
	return bcrypt.compare(password, hash);
};
//Create jwt
export const createJWT = (user: { id: number; username: string }) => {
	const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
	return token;
};
