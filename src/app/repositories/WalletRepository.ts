import Wallet from "../entities/Wallet";
import { AppDataSource } from "../../database/data-source";
import userRepository from "./UserRepository";

const repository = AppDataSource.getRepository(Wallet);

const getWalletByUserId = async (userId: number): Promise<Wallet | null> => {
    const user = await userRepository.getUserById(userId);
    if (!user) {
        return null;
    }
    return repository.findOneBy({ user });
}

const getWalletById = async (id: number): Promise<Wallet | null> => {
    return repository.findOneBy({ id })
}


export default {
    repository,
    getWalletByUserId,
    getWalletById,
}