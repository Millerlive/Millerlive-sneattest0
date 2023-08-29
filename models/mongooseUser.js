const mongoose = require("mongoose");
// import json data
const name = require("../jsons/name.json");

let users = [];
const roles = ["Admin", "Author", "Editor", "Maintainer", "Subscriber"];
const plans = ["Basic", "Company", "Enterprise", "Team"];
const statuses = ["Pending", "Active", "Inactive"];
const billings = [
  "Auto Debit",
  "Manual - Paypal",
  "Manual - Cash",
  "Manual - Credit",
];

for (let i = 0; i < 100; i++) {
  const firstNameIdx = Math.floor(Math.random() * 10);
  const lastNameIdx = Math.floor(Math.random() * 10);
  const imgIdx = Math.floor(Math.random() * 19 + 1);
  const roleIdx = Math.floor(Math.random() * 5);
  const planIdx = Math.floor(Math.random() * 4);
  const statusIdx = Math.floor(Math.random() * 3);
  const billingIdx = Math.floor(Math.random() * 4);

  const obj = {
    firstName: name[firstNameIdx].firstName,
    lastName: name[lastNameIdx].lastName,
    avatarURL: `${imgIdx}.png`,
    role: roles[roleIdx],
    plan: plans[planIdx],
    status: statuses[statusIdx],
    billing: billings[billingIdx],
  };
  users.push(obj);
}
// import Mongoose Model
const UserModel = require("./UserModel");
console.log(users);

// mongoose.connect("mongodb://127.0.0.1:27017/datas");
mongoose.connect("mongodb+srv://sneatone:sneatone@sneat0.kqwec5s.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
  UserModel.create(users);
});
