import IGroup from "../interfaces/IGroup";
import Group from "../entities/Group";
import { AppDataSource } from "../../database/data-source";

//TODO:
// GetAllUserGroups
// CreateGroup
// AddGroupUser

const repository = AppDataSource.getRepository(Group);

const getAllGroups = async (): Promise<IGroup[]> => {
    return repository.find();
}

const getGroupById = async (id: number): Promise<Group | null> => {
    return repository.findOneBy({ id });
}

export default {
    repository,
    getAllGroups,
    getGroupById,
}