import express, { Request, Response } from "express"
import registerUser from "../../controllers/auth/register"
import loginUser from "../../controllers/auth/login"

const router = express.Router()

//REGISTER

router.post("/register", registerUser)

//LOGIN

router.post("/login", loginUser)

export default router
