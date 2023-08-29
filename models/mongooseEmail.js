const mongoose = require("mongoose");
// import json data
const name = require("../jsons/name.json");
const time = require("../jsons/time.json");

let emails = [];

for (let i = 0; i < 200; i++) {
  const firstNameIdx = Math.floor(Math.random() * 10);
  const lastNameIdx = Math.floor(Math.random() * 10);
  const timeIdx = Math.floor(Math.random() * 30);
  const imgIdx = Math.floor(Math.random() * 19 + 1);
  const typeIdx = Math.floor(Math.random() * 10);
  const types = [
    "inbox",
    "sent",
    "draft",
    "starred",
    "spam",
    "trash",
    "personal",
    "company",
    "importtant",
    "private",
  ];
  const obj = {
    firstName: name[firstNameIdx].firstName,
    lastName: name[lastNameIdx].lastName,
    time: time[timeIdx].time,
    avatarURL: `${imgIdx}.png`,
    type: types[typeIdx],
  };
  emails.push(obj);
}
// import Mongoose Model
const EmailModel = require("./EmailModel");
console.log(emails);

mongoose.connect("mongodb+srv://sneatone:sneatone@sneat0.kqwec5s.mongodb.net/?retryWrites=true&w=majority");
// mongoose.connect("mongodb://127.0.0.1:27017/datas");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
  EmailModel.create(emails);
});
