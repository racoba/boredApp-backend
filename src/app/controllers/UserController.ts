import { Request, Response, Router } from "express";

import UserRepository from "../repositories/UserRepository";

const userRouter = Router();

userRouter.get("/get-all-users", async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getAllUsers();
    return res.status(200).json(users);
});

export default userRouter;