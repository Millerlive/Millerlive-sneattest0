const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  name: String,
  usage: String,
  amount: Number,
  unit: String,
  img: String,
});
const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;
