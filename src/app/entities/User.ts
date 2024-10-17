import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import UserTask from "./UserTask";
import Group from "./Group";

@Entity("Users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 50, nullable: false })
    username: string;

    @Column("varchar", { length: 100, nullable: false })
    password: string;

    @Column("varchar", { length: 50, nullable: false })
    email: string;

    @Column("varchar", { length: 50, nullable: true })
    pictureUrl: string;

    @OneToMany(() => UserTask, (userTask) => userTask.user)
    userTasks: UserTask[];

    @ManyToMany(() => Group, (group) => group.users)
    @JoinTable()
    groups: Group[];
}

export default User;