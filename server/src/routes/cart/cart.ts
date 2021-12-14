import express, { Request, Response } from "express"

const router = express.Router()

router.get("/getUser", (req: Request, res: Response) => {
  res.send("Working")
})

export default router
