import { Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm"
import { Order } from "./Order"
import { Product } from "./Product"

@Entity({ name: "orders_has_products" })
export class OrderHasProduct extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Order, order => order.orderHasProduct)
    order: Order

    @ManyToOne(() => Product, product => product.orderHasProduct)
    product: Product

}
