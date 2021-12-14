import { Request, Response } from "express"
import User from "../../models/user/User"

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...safeFormat } = user._doc
    res.status(200).json(safeFormat)
  } catch (err) {
    res.status(500).json(err)
  }
}

export default getUser
