import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Wallet from "./Wallet";

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

    @OneToOne(type => Wallet, user => User)
    @JoinColumn()
    wallet: Wallet;
}

export default User;