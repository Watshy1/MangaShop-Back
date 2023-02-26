import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Order } from "./Order"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    birthDate: Date

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    photo: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @OneToMany(() => Order, order => order.user_id)
    order: Order[]

}
