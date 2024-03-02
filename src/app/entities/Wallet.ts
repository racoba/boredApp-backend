import { Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Asset from "./Asset";

@Entity("Wallets")

class Wallet {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @OneToOne(() => User, user => user.id)
    user: User;

    @OneToMany(() => Asset, asset => asset.id)
    asset: Asset[]
}

export default Wallet;