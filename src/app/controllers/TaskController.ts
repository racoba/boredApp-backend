import { Request, Response, Router } from "express";

import TaskRepository from "../repositories/TaskRepository";

const taskRouter = Router();

taskRouter.get("/get-all-tasks", async (_req: Request, res: Response): Promise<Response> => {
    const tasks = await TaskRepository.getAllTasks();
    return res.status(200).json(tasks);
});

export default taskRouter;