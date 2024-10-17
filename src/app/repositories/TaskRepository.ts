import ITask from "../interfaces/ITask";
import Task from "../entities/Task";
import { AppDataSource } from "../../database/data-source";



const repository = AppDataSource.getRepository(Task);

const getAllTasks = async (): Promise<ITask[]> => {
    return repository.find();
}

const getTaskById = async (id: number): Promise<Task | null> => {
    return repository.findOneBy({ id });
}

export default {
    repository,
    getAllTasks,
    getTaskById,
}