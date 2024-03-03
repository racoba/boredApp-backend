import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Wallet from "./Wallet";

@Entity("Assets")

class Asset {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("int")
    quantity: number;

    @Column("float")
    averagePrice: number;

    @ManyToOne(type => Wallet, asset => Asset, { eager: true })
    @JoinTable()
    wallet: Wallet
}

export default Asset;