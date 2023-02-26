import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { OrderHasProduct } from "./OrderHasProduct"
import { ProductHasCategorie } from "./ProductHasCategorie"

@Entity({ name: "products" })
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    photo: string

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2
    })
    price: number

    @Column()
    quantity: number

    @OneToMany(() => ProductHasCategorie, productHasCategorie => productHasCategorie.product)
    productHasCategorie: ProductHasCategorie[]

    @OneToMany(() => OrderHasProduct, orderHasProduct => orderHasProduct.product)
    orderHasProduct: OrderHasProduct[]

}
