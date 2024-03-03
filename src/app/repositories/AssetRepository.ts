import Asset from "../entities/Asset";
import { AppDataSource } from "../../database/data-source";
import walletRepository from "./WalletRepository";

const repository = AppDataSource.getRepository(Asset);

const getAssetsByWalletId = async (walletId: number): Promise<Asset[] | null> => {
    const wallet = await walletRepository.getWalletById(walletId);
    if (!wallet) {
        return null;
    }
    return repository.findBy({ wallet });
}

const getAssetById = async (id: number): Promise<Asset | null> => {
    return repository.findOneBy({ id });
}




export default {
    repository,
    getAssetById,
    getAssetsByWalletId,
}