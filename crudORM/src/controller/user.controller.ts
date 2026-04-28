import type { Request, Response } from "express";
import { UserService } from "../service/user.service.js";
import { validateDto } from "../utils/validate.js";
import { createUserDto } from "../dto/create-user.dto.js";
import { UpdateUserDto } from "../dto/update-user.dto.js";

const service = new UserService();

export const createUser = async (req: Request, res: Response) => {
	try {
		const dto = await validateDto(createUserDto, req.body);
		const user = await service.create(dto);
		res.status(201).json(user);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		}
	}
};

export const updateUser = async (req: Request<{ id: string }, {}, UpdateUserDto>, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const dto = await validateDto(UpdateUserDto, req.body);
		const user = await service.update(id, dto);
		res.status(200).json(user);
	} catch (error: unknown) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		}
	}
};

export const getUsers = async (_req: Request, res: Response) => {
	try {
		const users = await service.find();
		res.status(201).json(users);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		}
	}
};

export const getUser = async (req: Request<{ id: string }>, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const user = await service.findOne(id);
		res.status(201).json(user);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		}
	}
};

export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const deletedUser = await service.delete(id);
		res.status(200).json({ message: deletedUser.message });
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		}
	}
};
