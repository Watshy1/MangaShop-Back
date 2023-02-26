import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { OrderHasProduct } from "./OrderHasProduct"
import { User } from "./User"

@Entity({ name: "orders" })
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2
    })
    total_price: number

    @ManyToOne(() => User, user => user.order)
    @JoinColumn({ name: "user_id" })
    user_id: number

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @OneToMany(() => OrderHasProduct, orderHasProduct => orderHasProduct.order)
    orderHasProduct: OrderHasProduct[]

}
