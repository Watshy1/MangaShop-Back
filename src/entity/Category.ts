import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ProductHasCategorie } from "./ProductHasCategorie"

@Entity({ name: "categories" })
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => ProductHasCategorie, productHasCategorie => productHasCategorie.category)
    productHasCategorie: ProductHasCategorie[]

}
