import { Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm"
import { Category } from "./Category"
import { Product } from "./Product"

@Entity({ name: "products_has_categories" })
export class ProductHasCategorie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, product => product.productHasCategorie)
    product: Product

    @ManyToOne(() => Category, category => category.productHasCategorie)
    category: Category

}
