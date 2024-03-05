import { Request, Response, Router } from "express";

import { WalletRepository, AssetRepository } from "../repositories";

const assetRouter = Router();

assetRouter.post("/create-asset", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { walletId } = req.body;

        const wallet = await WalletRepository.getWalletById(walletId);

        if (!wallet) {
            return res.sendStatus(409)
        }

        const asset = AssetRepository.repository.create({
            ...req.body,
            wallet
        });

        await AssetRepository.repository.save(asset);

        return res.status(200).json({ message: "Asset has been created" });
    } catch (e) {
        console.error(e);
        return res.status(400);
    }
});

assetRouter.get("/get-assets-by-wallet/:walletId", async (req: Request, res: Response): Promise<Response> => {
    const { walletId } = req.params;
    try{
        const assets = await AssetRepository.getAssetsByWalletId(parseInt(walletId));
        return res.status(200).json(assets);
    } catch (e){
        return res.status(400);
    }
});

assetRouter.get("/count-wallet-assets/:walletId", async (req: Request, res: Response): Promise<Response> => {
    const { walletId } = req.params;
    try{
        const assets = await AssetRepository.countAssetsByWalletId(parseInt(walletId));
        return res.status(200).json(assets);
    } catch (e){
        return res.status(400);
    }
});

export default assetRouter;