import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import User from "./User";

@Entity("Groups")
export class Group {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 100, nullable: false })
    name: string;

    @Column("datetime", { nullable: false })
    createdAt: Date;

    @Column("datetime", { nullable: true })
    completedAt: Date;

    @ManyToMany(() => User, (user) => user.groups)
    users: User[];
}

export default Group;
