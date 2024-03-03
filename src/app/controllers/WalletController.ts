import { Request, Response, Router } from "express";

import { WalletRepository, UserRepository } from "../repositories";

const walletRouter = Router();

walletRouter.post("/create-wallet", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId } = req.body;

        const user = await UserRepository.getUserById(userId);
        if (!user) {
            return res.sendStatus(409)
        }

        const wallet = WalletRepository.repository.create({
            ...req.body,
            user: user
        });
        const { id, ...updatableUser } = user;
        await UserRepository.repository.update(userId, { ...updatableUser , wallet: wallet[0] })

        await UserRepository.repository.save(user);
        await WalletRepository.repository.save(wallet);

        return res.status(200).json({ message: "Wallet has been created" });
    } catch (e) {
        console.error(e);
        return res.status(400);
    }
});

export default walletRouter;