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

    @Column("varchar", { length: 10 })
    type: string;

    @Column("varchar", {length: 8})
    code: string;

    @ManyToOne(type => Wallet, asset => Asset, { eager: true })
    @JoinTable()
    wallet: Wallet
}

export default Asset;