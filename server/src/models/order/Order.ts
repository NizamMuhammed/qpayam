import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema(
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
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true, versionKey: false }
)

export default mongoose.model("Order", OrderSchema)
