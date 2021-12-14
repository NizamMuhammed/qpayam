import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

//Verify if the token is valid

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token?.toString() || ""
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET || "", (err, user) => {
      if (err) res.status(403).json("Invalid Token")
      req.user = user || {}
      next()
    })
  } else {
    return res.status(401).json({
      Message: "You are not authenticated!",
    })
  }
}

export default verifyToken
