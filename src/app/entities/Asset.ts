import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Wallet from "./Wallet";

@Entity("Assets")

class Asset {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("int")
    quantity: number;

    @Column("float")
    averagePrice: number;

    @ManyToMany(type => Wallet, asset => Asset, { eager: true })
    @JoinColumn()
    wallet: Wallet[]
}

export default Asset;