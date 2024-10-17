import IGroup from "./IGroup";
import IUserTask from "./IUserTask";

interface IUser{
    id?: number;
    username: string;
    email: string;
    pictureUrl?: string
    userTasks?: IUserTask[];
    groups?: IGroup[];
}

export default IUser;