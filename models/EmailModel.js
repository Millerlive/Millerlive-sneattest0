const mongoose = require("mongoose");
const EmailSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatarURL: String,
  time: String,
  type: String,
});
const EmailModel = mongoose.model("emails", EmailSchema);
module.exports = EmailModel;
