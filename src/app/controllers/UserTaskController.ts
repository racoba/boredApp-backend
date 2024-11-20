import { Request, Response, Router } from "express";

import { UserRepository, UserTaskRepository, TaskRepository } from "../repositories";

const userTaskRouter = Router();
const userTaskRepository = UserTaskRepository.repository;
const userRepository = UserRepository.repository
const taskRepository = TaskRepository

userTaskRouter.post("/create-user-task", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId, taskId } = req.body;
        const user = await UserRepository.getUserById(userId);
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

        return res.status(200).json({ message: "User Task has been created", userTask: newUserTask });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
})

userTaskRouter.get("/get-user-tasks/:id", async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id;
    const user = await UserRepository.getUserById(parseInt(userId as string));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const userTasks = await UserTaskRepository.getUserTasks(user.id);
    return res.status(200).json({ history: userTasks });
});

userTaskRouter.get("/get-user-completed-tasks/:id", async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id;

    const user = await UserRepository.getUserById(parseInt(userId as string));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const userTasks = await UserTaskRepository.getUserCompletedTasks(user.id);

    return res.status(200).json(userTasks);
});

userTaskRouter.get("/get-user-in-progress-tasks/:id", async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id;

    const user = await UserRepository.getUserById(parseInt(userId as string));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const userTasks = await UserTaskRepository.getUserInProgressTasks(user.id);

    return res.status(200).json({ task: userTasks });
});

userTaskRouter.get("/get-user-abandoned-tasks/:id", async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id;

    const user = await UserRepository.getUserById(parseInt(userId as string));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const userTasks = await UserTaskRepository.getUserAbandonedTasks(user.id);

    return res.status(200).json(userTasks);
});


userTaskRouter.post("/abandon-task", async (req: Request, res: Response): Promise<Response> => {
    const { userTaskId } = req.body;

    const userTask = await UserTaskRepository.getUserTaskById(userTaskId);
    if (!userTask) {
        return res.status(404).json({ message: "User Task not found" });
    }

    const user = await UserRepository.getUserById(userTask.user.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    userTask.status = "Abandoned";
    if (user.score - userTask.task.value > 0) {
        user.score -= 2;
    } else {
        user.score = 0;
    }
    await userTaskRepository.save(userTask);
    await userRepository.save(user);

    return res.status(200).json({ message: "User Task was abandoned" });
});

userTaskRouter.post("/complete-task", async (req: Request, res: Response): Promise<Response> => {
    const { userTaskId } = req.body;

    const userTask = await UserTaskRepository.getUserTaskById(userTaskId);

    if (!userTask) {
        return res.status(404).json({ message: "User Task not found" });
    }
    const user = await UserRepository.getUserById(userTask.user.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.score += userTask.task.value;

    userTask.status = "Completed";

    await userTaskRepository.save(userTask);
    await userRepository.save(user);

    return res.status(200).json({ message: "User Task status updated to completed" });
});

export default userTaskRouter;