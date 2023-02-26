import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Order } from "./Order"
import { Product } from "./Product"

@Entity({ name: "orders_has_products" })
export class OrderHasProduct {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Order, order => order.orderHasProduct)
    order: Order

    @ManyToOne(() => Product, product => product.orderHasProduct)
    product: Product

}
