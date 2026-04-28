import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export const validateDto = async <T>(dtoClass: new () => T, body: unknown): Promise<T> => {
	const dto = plainToInstance(dtoClass, body);
	const errors = await validate(dto as object);

	if (errors.length > 0) {
		throw new Error(errors.map((e) => Object.values(e.constraints || {})).join(", "));
	}

	return dto;
};
