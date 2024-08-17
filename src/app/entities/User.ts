import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

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
}

export default User;