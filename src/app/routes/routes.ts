import { Router } from "express";
import { authRouter, userRouter, walletRouter } from "../controllers/index";

const routers = Router();

routers.use("/users", userRouter);
routers.use("/auth", authRouter);
routers.use("/wallets", walletRouter);
// routers.use("/assets", assetsRouter);

export default routers;