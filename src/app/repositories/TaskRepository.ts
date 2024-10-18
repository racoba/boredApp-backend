import ITask from "../interfaces/ITask";
import Task from "../entities/Task";
import { AppDataSource } from "../../database/data-source";



const repository = AppDataSource.getRepository(Task);

const getAllTasks = async (): Promise<Task[]> => {
    return repository.find();
}

const getTaskById = async (id: number): Promise<Task | null> => {
    return repository.findOneBy({ id });
}

const getRandomTasks = async (): Promise<Task[] | null> => {
    const tasks = await repository.find();
    
    if (tasks.length < 2) {
        return null;  
    }
    
    const shuffledTasks = tasks.sort(() => 0.5 - Math.random()); // Shuffle the tasks
    const randomTasks = shuffledTasks.slice(0, 2);

    return randomTasks;
}

export default {
    repository,
    getAllTasks,
    getTaskById,
    getRandomTasks,
}