const mongoose = require("mongoose");
const BrowserSchema = new mongoose.Schema({
  name: String,
  type: String,
  visits: String,
  percent: Number,
  img: String,
});
const BrowserModel = mongoose.model("browsers", BrowserSchema);
module.exports = BrowserModel;
