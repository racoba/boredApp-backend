import { Router } from "express";
import { authRouter, userRouter } from "../controllers/index";

const routers = Router();

routers.use("/users", userRouter);
routers.use("/auth", authRouter);

export default routers;