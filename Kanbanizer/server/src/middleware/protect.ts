import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/config.ts";
import type { Request, Response, NextFunction } from "express";

declare global {
	namespace Express {
		interface Request {
			user?: {
				id: number;
				username: string;
			};
		}
	}
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader) {
			return res.status(401).json({
				error: "Access denied. No token provided.",
			});
		}
		const token = authHeader.split(" ")[1];
		if (!token) {
			return res.status(401).json({
				error: "Access denied. Invalid token format.",
			});
		}
		const decoded = jwt.verify(token, JWT_SECRET) as {
			id: number;
			username: string;
		};
		req.user = decoded;
		next();
	} catch (error) {
		console.error("Token verification error:", error);
		return res.status(403).json({
			error: "Invalid or expired token.",
		});
	}
};
