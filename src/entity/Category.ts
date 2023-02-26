import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { ProductHasCategorie } from "./ProductHasCategorie"

@Entity({ name: "categories" })
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => ProductHasCategorie, productHasCategorie => productHasCategorie.category)
    productHasCategorie: ProductHasCategorie[]

}
