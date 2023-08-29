// import json data
// const transitions = require("./jsons/transitions.json");

// import mongoose
const mongoose = require("mongoose");
const express = require("express");

// import router
const analyticsRouter = require(__dirname + "/routers/analyticsRouter.js");
const appsRouter = require(__dirname + "/routers/appsRouter.js");

// import cors
const cors = require("cors");

// create app
const app = express();
app.use("/api", analyticsRouter);
app.use("/api", appsRouter);
app.use(cors());
// 使用json,urlencoded中间件接收传输的json表单数据，放到req.body上
app.use(express.json());
app.use(express.urlencoded());

// mongoose.connect("mongodb://127.0.0.1:27017/datas");
mongoose.connect("mongodb+srv://sneatone:sneatone@sneat0.kqwec5s.mongodb.net/?retryWrites=true&w=majority");

// import Mongoose Model
// const TransitionModel = require("./models/TransitionModel");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
      
  //   TransitionModel.create(transitions);
});

app.listen(8080, () => {
  console.log("服务启动时调用");
});
