import { AppDataSource } from "../data-source.js";
import type { createUserDto } from "../dto/create-user.dto.js";
import type { UpdateUserDto } from "../dto/update-user.dto.js";
import { User } from "../entity/User.js";

export class UserService {
	private repo = AppDataSource.getRepository(User);

	async create(data: createUserDto) {
		const user = this.repo.create(data);
		return this.repo.save(user);
	}

	async find() {
		return this.repo.find();
	}

	async findOne(id: number) {
		const user = await this.repo.findOneBy({ id });
		if (!user) throw new Error("User not found");
		return user;
	}

	async update(id: number, data: UpdateUserDto) {
		const user = await this.findOne(id);
		this.repo.merge(user, data);
		return this.repo.save(user);
	}

	async delete(id: number) {
		const result = await this.repo.delete(id);
		if (!result.affected) throw new Error("User not found");
		return { message: "Deleted" };
	}
}
