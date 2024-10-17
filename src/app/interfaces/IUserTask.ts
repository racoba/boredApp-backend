import ITask from "./ITask";
import IUser from "./IUser";

interface IUserTask{
    id?: number;
    user: IUser;
    task: ITask;
    status: string;
}

export default IUserTask;