import { Router } from "express";
import userRouter from "../controllers/UserController"
import authRouter from "../controllers/AuthController";

const routers = Router();

routers.use("/users", userRouter);
routers.use("/auth", authRouter);
// routers.use("/wallets", walletsRouter);
// routers.use("/assets", assetsRouter);

export default routers;