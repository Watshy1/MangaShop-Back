import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import { User } from '../entity/User';

import { sha512 } from 'js-sha512';

require("dotenv").config()

const router = express.Router();

router.post("/auth", async (req, res) => {

    let user = await User.findOneBy({
        email: req.body.email,
        password: sha512(req.body.password)
    })

    if (user) {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET)
        res.json({ status: 200, data: token })
    } else {
        res.json({ status: 404, data: "User not found" })
    }

    router.get("/users/me", async (req, res) => {
        res.json({ status: 200, data: user })
    })

})

export default router;