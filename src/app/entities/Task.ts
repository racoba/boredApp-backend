import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity("Tasks")
class Task {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 200, nullable: false })
    description: string;

    @Column("varchar", { length: 50, nullable: true })
    value: number;
}

export default Task;