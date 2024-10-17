import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./User";
import Task from "./Task";

@Entity("UserTasks")
export class UserTask {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => User, (user) => user.userTasks, { onDelete: "CASCADE" })
    user: User;

    @Column("datetime", { nullable: false })
    createdAt: Date;

    @ManyToOne(() => Task, (task) => task.userTasks, { onDelete: "CASCADE" })
    task: Task;

    @Column("varchar", { length: 20, nullable: false })
    status: string;  // Ex: 'completed', 'pending', 'rejected'.
}

export default UserTask;