import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Wallet from "./Wallet";

@Entity("Assets")

class Asset{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("int")
    quantity: number;
    
    @Column("float")
    averagePrice: number;

    @ManyToOne(() => Wallet, wallet => wallet.id)
    wallet: Wallet[]
}

export default Asset;