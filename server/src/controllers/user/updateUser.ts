import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../../models/user/User"

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //Create Hashed Password if User password needs to be updated
  //create salt to be used for hashing
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
  // now we set user password to hashed password
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.user?.password, salt)
  }

  try {
    //Finding using ID and Updating the User
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    const { password, ...safeFormat } = updatedUser._doc
    res.status(200).json(safeFormat)
    console.log("User details updated!")
  } catch (err) {
    res.status(500).json(err)
  }
}

export default updateUser
