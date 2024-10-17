import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { UserTask } from "./UserTask";

@Entity("Tasks")
class Task {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 20, nullable: false })
    name: string;

    @Column("varchar", { length: 200, nullable: false })
    description: string;

    @Column("varchar", { length: 50, nullable: true })
    value: number;

    @OneToMany(() => UserTask, (userTask) => userTask.task)
    userTasks: UserTask[];
}

export default Task;