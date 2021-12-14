import { Request, Response } from "express"
import User from "../../models/user/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Login User

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ emailId: req.body.emailId })
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (validPassword) {
        const { password, ...safeFormat } = user._doc
        //Creating JWT with required fields
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SERET || "",
          { expiresIn: "3d" }
        )
        res.status(200).json({
          message: "Valid password",
          User: safeFormat,
          Token: accessToken,
        })
      } else {
        res.status(400).json({ error: "Invalid Password" })
        console.log("Error: Invalid Password")
      }
    } else {
      res.status(401).json({ error: "User does not exist" })
      console.log("Error: User does not exist")
    }
  } catch (err) {
    res.status(500).json({
      Error: err,
    })
  }
}

export default loginUser
