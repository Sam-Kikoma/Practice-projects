import { Router } from "express";
import { newUser, signIn } from "../controllers/user.ts";

const userRouter = Router();
//Post /api/user
userRouter.post("/signup", newUser);
userRouter.post("/login", signIn);

export default userRouter;
