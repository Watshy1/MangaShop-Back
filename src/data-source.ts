import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Order } from "./entity/Order"
import { Product } from "./entity/Product"
import { Category } from "./entity/Category"
import { OrderHasProduct } from "./entity/OrderHasProduct"
import { ProductHasCategorie } from "./entity/ProductHasCategorie"

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        User, Order, Product, Category,
        OrderHasProduct, ProductHasCategorie
    ],
})
