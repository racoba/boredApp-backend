import IUserTask from "./IUserTask";

interface ITask{
    id?: number;
    name: string;
    description: string;
    value: number;
    userTasks?: IUserTask[];
}

export default ITask;