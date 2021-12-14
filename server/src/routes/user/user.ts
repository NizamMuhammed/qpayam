import express from "express"
import verifyAuth from "../../controllers/user/verifyAuth"
import updateUser from "../../controllers/user/updateUser"
import verifyToken from "../../controllers/user/verifyToken"

const router = express.Router()

//Update User credentials

router.put("/:id", verifyToken, verifyAuth, updateUser)

export default router
