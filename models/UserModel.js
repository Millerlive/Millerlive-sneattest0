const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatarURL: String,
  role: String,
  plan: String,
  status: String,
  billing: String,
});
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
