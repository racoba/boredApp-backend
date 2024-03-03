import { Router } from "express";
import { authRouter, userRouter, walletRouter, assetRouter } from "../controllers/index";

const routers = Router();

routers.use("/users", userRouter);
routers.use("/auth", authRouter);
routers.use("/wallets", walletRouter);
routers.use("/assets", assetRouter);

export default routers;