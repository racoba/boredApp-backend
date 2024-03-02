import { Router } from "express";
import userRouter from "../controllers/UserController"

const routers = Router();

routers.use("/users", userRouter);
// routers.use("/wallets", walletsRouter);
// routers.use("/assets", assetsRouter);

export default routers;