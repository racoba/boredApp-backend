import IGroup from "./IGroup";
import IUserTask from "./IUserTask";

export interface IUser{
    id?: number;
    username: string;
    email: string;
    pictureUrl?: string
    userTasks?: IUserTask[];
    groups?: IGroup[];
}

export interface ICreateUser{
    username: string;
    email: string;
    pictureUrl?: string
    userTasks?: IUserTask[];
    groups?: IGroup[];
}
