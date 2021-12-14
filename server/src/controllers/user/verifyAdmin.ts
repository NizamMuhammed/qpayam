import { NextFunction, Request, Response } from "express"

//Verify if the user is Admin

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req?.user?.isAdmin) {
    next()
  } else {
    res.status(403).json("Access Restricted!!! Need Admin Privilege")
  }
}

export default verifyAdmin
