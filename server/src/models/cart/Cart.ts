import mongoose from "mongoose"

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model("Cart", CartSchema)
