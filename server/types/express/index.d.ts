//To expand the type properties of specific items
//Add extra propertirs to default, eg. Express.Request have user property added

import express from "express"

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>
    }
  }
}
