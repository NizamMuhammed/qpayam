import { NextFunction, Request, Response } from "express"

//Verify if the user is authorised

const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req?.user?.id === req.params.id || req?.user?.isAdmin) {
    next()
  } else {
    res.status(403).json("Unauthorized!!!")
  }
}

export default verifyAuth
