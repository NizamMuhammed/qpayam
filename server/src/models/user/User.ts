import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    emailId: {
      required: true,
      unique: true,
      type: String,
      trim: true,
    },
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model("User", UserSchema)
