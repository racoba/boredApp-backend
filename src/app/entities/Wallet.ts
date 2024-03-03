import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Asset from "./Asset";

@Entity("Wallets")

class Wallet {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @OneToOne(type => User, wallet => Wallet, { eager: true, nullable: true})
    @JoinColumn()
    user: User;

    @ManyToMany(type => Asset, wallet => Wallet)
    @JoinTable()
    asset: Asset[]
}

export default Wallet;