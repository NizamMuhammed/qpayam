import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import userRouter from "./routes/users/user"

const app = express() //Express App
dotenv.config() //Using dotenv library
const port = process.env.PORT || 8000
const url = process.env.MONGO_URL || ""

//Running the app
app.listen(port, () => {
  console.log(`Server is running. Listening at port ${port}`)
})

//Connecting to DB using mongoose promise
mongoose
  .connect(url)
  .then(() => console.log("Connected to Qpayam DB!"))
  .catch((err) => {
    console.log("Error: " + err)
  })

//Middlewares
app.use(morgan("dev")) //Used to Log HTTP Requests
app.use(express.json()) //Converting to JSON Format

//Use routes
app.use("/api/users", userRouter)
