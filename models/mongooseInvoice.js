const mongoose = require("mongoose");
// import json data
const name = require("../jsons/name.json");

let invoices = [];
const statuses = ["Sent", "Paid", "Draft", "Downloaded"];

function randomDate() {
  const start = new Date("2023-01-01");
  const end = new Date("2023-12-31");
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Function to format the date to "Feb 23 2023" style
function formatDate(date) {
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthAbbreviations[date.getMonth()]; // Get the month abbreviation
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day} ${year}`;
}

for (let i = 0; i < 100; i++) {
  const id = 5000 + i;
  const firstNameIdx = Math.floor(Math.random() * 10);
  const lastNameIdx = Math.floor(Math.random() * 10);
  const imgIdx = Math.floor(Math.random() * 19 + 1);
  const total = Math.floor(Math.random() * 5000 + 1);
  const date = formatDate(randomDate());
  const balance = Math.floor(Math.random() * 2000 + 1);
  const statusIdx = Math.floor(Math.random() * 4);

  const obj = {
    id: id,
    firstName: name[firstNameIdx].firstName,
    lastName: name[lastNameIdx].lastName,
    avatarURL: `${imgIdx}.png`,
    total: total,
    date: date,
    balance: balance,
    status: statuses[statusIdx],
  };
  invoices.push(obj);
}
// import Mongoose Model
const InvoiceModel = require("./InvoiceModel");
console.log(invoices);

// mongoose.connect("mongodb://127.0.0.1:27017/datas");
mongoose.connect("mongodb+srv://sneatone:sneatone@sneat0.kqwec5s.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
  InvoiceModel.create(invoices);
});
