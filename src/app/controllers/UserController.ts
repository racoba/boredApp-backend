import { Request, Response, Router } from "express";

import UserRepository from "../repositories/UserRepository";

const userRouter = Router();

userRouter.get("/get-all-users", async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getAllUsers();
    return res.status(200).json(users);
});

userRouter.get("/get-all-users", async (_req: Request, res: Response): Promise<Response> => {
    const { userId } = _req.body;
    const user = await UserRepository.getUserById(userId);
    return res.status(200).json(user);
});

export default userRouter;