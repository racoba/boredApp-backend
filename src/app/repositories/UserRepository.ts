import IUser from "../interfaces/IUser";
import User from "../entities/User";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = async (): Promise<IUser[]> => {
    return userRepository.find();
}

export default { getUsers }