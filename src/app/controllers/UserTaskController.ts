import { Request, Response, Router } from "express";

import { UserRepository, UserTaskRepository, TaskRepository } from "../repositories";

const userTaskRouter = Router();
const userTaskRepository = UserTaskRepository.repository;
const userRepository = UserRepository
const taskRepository = TaskRepository

userTaskRouter.post("/create-user-task", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId, taskId } = req.body;

        const user = await userRepository.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const task = await taskRepository.getTaskById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        const newUserTask = userTaskRepository.create({
            user,
            task,
            status: "In Progress",
            createdAt: new Date(),
        });

        await userTaskRepository.save(newUserTask);

        return res.status(200).json({ message: "User Task has been created" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
})

userTaskRouter.get("/get-user-tasks", async (req: Request, res: Response): Promise<Response> => {
    const { userId, taskId } = req.body;

        const user = await UserRepository.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    const userTasks = await UserTaskRepository.getUserTasks(user.id);

    return res.status(200).json(userTasks);
});

userTaskRouter.get("/get-user-completed-tasks", async (req: Request, res: Response): Promise<Response> => {
    const { userId, taskId } = req.body;

        const user = await UserRepository.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    const userTasks = await UserTaskRepository.getUserCompletedTasks(user.id);

    return res.status(200).json(userTasks);
});

userTaskRouter.get("/get-user-in-progress-tasks", async (req: Request, res: Response): Promise<Response> => {
    const { userId, taskId } = req.body;

        const user = await UserRepository.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    const userTasks = await UserTaskRepository.getUserInProgressTasks(user.id);

    return res.status(200).json(userTasks);
});

userTaskRouter.get("/get-user-abandoned-tasks", async (req: Request, res: Response): Promise<Response> => {
    const { userId, taskId } = req.body;

        const user = await UserRepository.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    const userTasks = await UserTaskRepository.getUserAbandonedTasks(user.id);

    return res.status(200).json(userTasks);
});

export default userTaskRouter;