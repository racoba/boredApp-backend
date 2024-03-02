import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import Wallet from "./Wallet";

@Entity("Users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 30, nullable: false })
    username: string;

    @Column("varchar", { length: 30, nullable: false })
    email: string;

    @OneToOne(() => Wallet, wallet => wallet.id)
    wallet: Wallet;
}

export default User;