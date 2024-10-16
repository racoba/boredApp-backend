import { Router } from "express";
import { authRouter, userRouter, taskRouter } from "../controllers/index";

const routers = Router();

routers.use("/users", userRouter);
routers.use("/tasks", taskRouter);
routers.use("/auth", authRouter);

export default routers;