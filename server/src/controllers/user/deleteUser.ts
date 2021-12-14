import { Request, Response } from "express"
import User from "../../models/user/User"

const deleteUser = async (req: Request, res: Response) => {
  try {
    const removedUser = await User.findByIdAndDelete(req.params.id)
    const { password, ...safeFormat } = removedUser._doc
    res.status(200).json({ Message: "User deleted", User: safeFormat })
  } catch (err) {
    res.status(500).json(err)
  }
}

export default deleteUser
