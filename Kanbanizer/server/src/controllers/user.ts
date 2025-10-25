import { comparePassword, createJWT, hashPassword } from "../utils/auth.ts";
import prisma from "../utils/db.ts";
import type { Request, Response } from "express";
export const newUser = async (req: Request, res: Response) => {
	try {
		const { email, username, password } = req.body;

		if (!email || !username || !password) {
			return res.status(400).json({
				error: "Email, username, and password are required",
			});
		}
		const user = await prisma.user.create({
			data: {
				email: email,
				username: username,
				password: await hashPassword(password),
			},
		});
		const token = createJWT({
			id: user.id,
			username: user.username,
		});
		res.status(200).json({ token });
	} catch (error: any) {
		console.error("User creation error:", error);
		return res.status(500).json({
			error: "Failed to create user",
		});
	}
};

export const signIn = async (req: Request, res: Response) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				username: req.body.username,
			},
		});

		if (!user) {
			return res.status(401).json({
				error: "Invalid username or password",
			});
		}

		const isValid = await comparePassword(req.body.password, user.password);
		if (!isValid) {
			return res.status(401).json({
				error: "Invalid username or password",
			});
		}
		const token = createJWT({ id: user.id, username: user.username });
		res.json({ token });
	} catch (error) {}
};
