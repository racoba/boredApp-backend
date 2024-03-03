import { Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Asset from "./Asset";

@Entity("Wallets")

class Wallet {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @OneToOne(type => User, wallet => Wallet, { nullable: true })
    @JoinColumn()
    user: User;

    @OneToMany(type => Asset, wallet => Wallet)
    @JoinTable()
    asset: Asset[]
}

export default Wallet;