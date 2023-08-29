const mongoose = require("mongoose");
const TransitionSchema = new mongoose.Schema({
  name: String,
  usage: String,
  amount: Number,
  unit: String,
  img: String,
});
const TransitionModel = mongoose.model("transitions", TransitionSchema);
module.exports = TransitionModel;
