import { Request, Response } from "express"
import User from "../../models/user/User"

const getAll = async (req: Request, res: Response) => {
  //Check if there is a query being passed
  const query = req.query.new

  try {
    //Show 5 users added recently, sorted by time
    const users = query
      ? await User.find().limit(5).sort({ _id: -1 })
      : await User.find()
    const updatedUsers: object[] = []

    //Removing passwords from output JSON
    users.map((user) => {
      const { password, ...safeFormat } = user._doc
      updatedUsers.push(safeFormat)
    })
    res.status(200).json(updatedUsers)
  } catch (err) {
    res.status(500).json(err)
  }
}

export default getAll
