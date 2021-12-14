import express from "express"
import verifyAuth from "../../controllers/user/verifyAuth"
import updateUser from "../../controllers/user/updateUser"
import verifyToken from "../../controllers/user/verifyToken"
import verifyAdmin from "../../controllers/user/verifyAdmin"
import deleteUser from "../../controllers/user/deleteUser"
import getUser from "../../controllers/user/getUser"
import getAll from "../../controllers/user/getAll"

const router = express.Router()

//Update User credentials

router.put("/:id", verifyToken, verifyAuth, updateUser)

//Delete user

router.delete("/:id", verifyToken, verifyAdmin, deleteUser)

//Get a User

router.get("/:id", verifyToken, verifyAdmin, getUser)

//Get all Users

router.get("/", verifyToken, verifyAdmin, getAll)

export default router
