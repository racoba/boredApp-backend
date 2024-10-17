import IUser from "./IUser";

interface IGroup{
    id?: number;
    name: string;
    createdAt: Date;
    completedAt: Date;
    users?: IUser[];
}

export default IGroup;