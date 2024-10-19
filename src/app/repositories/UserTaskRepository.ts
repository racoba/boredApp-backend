import IUserTask from "../interfaces/IUserTask";
import UserTask from "../entities/UserTask";
import { AppDataSource } from "../../database/data-source";
import { Like } from "typeorm";

const repository = AppDataSource.getRepository(UserTask);

const getAllUserTasks = async (): Promise<IUserTask[]> => {
    return repository.find();
}

const getUserTaskById = async (id: number): Promise<UserTask | null> => {
    return repository.findOneBy({ id });
}

const getUserTasks = async (userId: number): Promise<UserTask[] | null> => {
        const userTasks = await repository.find({
            where: { user: { id: userId } },
            relations: ["task"]
        });

        return userTasks;
};

const getUserInProgressTasks = async (userId: number): Promise<UserTask[] | null> => {
        const userTasks = await repository.find({
            where: { user: { id: userId }, status: "In Progress" },
            relations: ["task"]
        });

        return userTasks;
};

const getUserAbandonedTasks = async (userId: number): Promise<UserTask[] | null> => {
        const userTasks = await repository.find({
            where: { user: { id: userId }, status: "Abandoned" },
            relations: ["task"]
        });

        return userTasks;
};

const getUserCompletedTasks = async (userId: number): Promise<UserTask[] | null> => {
        const userTasks = await repository.find({
            where: { user: { id: userId }, status: "Completed" },
            relations: ["task"]
        });

        return userTasks;
};


const getUserTaskByName = async (name: string, userId: number): Promise<UserTask[] | null> => {
        const userTasks = await repository.find({
            where: {
                user: { id: userId },
                task: { name: Like(`%${name}%`) } 
            },
            relations: ["task"],  
        });
        return userTasks;  
};



export default {
    repository,
    getUserTaskByName,
    getAllUserTasks,
    getUserTaskById,
    getUserTasks,
    getUserCompletedTasks,
    getUserAbandonedTasks,
    getUserInProgressTasks
}