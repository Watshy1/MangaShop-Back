import { AppDataSource } from "./data-source"

import AuthRouter from "./routes/auth"

import * as express from "express"
import { expressjwt as jwt } from "express-jwt"

const app = express()

AppDataSource.initialize().then(async () => {

    app.use(express.json())

    app.use(
        jwt({
            secret: process.env.JWT_SECRET,
            algorithms: ["HS256"],
        }).unless({
            path: ["/", "/auth"] // No need token for this route
        })
    );

    app.use(AuthRouter)

    app.get("/", async (req, res) => {
        res.send("Hello World")
    })

    app.listen(3000);

}).catch(error => console.log(error))
