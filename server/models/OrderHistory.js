const mongoose = require("mongoose");

const OrderHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const OrderHistoryModel = mongoose.model("OrderHistory", OrderHistorySchema);

module.exports = { OrderHistoryModel };
