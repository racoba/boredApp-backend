import { IUser } from "../interfaces/IUser";
import User from "../entities/User";
import { AppDataSource } from "../../database/data-source";

const repository = AppDataSource.getRepository(User);

const getAllUsers = async (): Promise<IUser[]> => {
    return repository.find();
}

const getUserByEmail = async (email: string): Promise<User | null> => {
    return repository.findOneBy({ email });
}

const getUserById = async (id: number): Promise<User | null> => {
    return repository.findOneBy({ id });
}


export default {
    repository,
    getUserById,
    getAllUsers,
    getUserByEmail,
}