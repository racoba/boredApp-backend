import IUserTask from "../interfaces/IUserTask";
import UserTask from "../entities/UserTask";
import { AppDataSource } from "../../database/data-source";

const repository = AppDataSource.getRepository(UserTask);

const getAllUserTasks = async (): Promise<IUserTask[]> => {
    return repository.find();
}

const getUserTaskById = async (id: number): Promise<UserTask | null> => {
    return repository.findOneBy({ id });
}

export default {
    repository,
    getAllUserTasks,
    getUserTaskById,
}