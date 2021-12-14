import { Request, Response } from "express"
import User from "../../models/user/User"
import bcrypt from "bcrypt"

// Register User

const registerUser = async (req: Request, res: Response) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailId: req.body.emailId,
    password: req.body.password,
  })

  //Create Hashed Password using bcrypt
  //create salt to be used for hashing
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
  // now we set user password to hashed password
  newUser.password = await bcrypt.hash(newUser.password, salt)

  try {
    const savedUser = await newUser.save()
    console.log("New user added!")
    const { password, ...safeFormat } = savedUser._doc
    res.status(201).json({
      message: "New user Added!",
      User: safeFormat,
    })
  } catch (err) {
    console.log("Error: ", err)
    res.status(500).json({
      Error: err,
    })
  }
}

export default registerUser
