const express = require("express");
const router = express.Router();
const TransitionModel = require("../models/TransitionModel");
const OrderModel = require("../models/OrderModel");
const BrowserModel = require("../models/BrowserModel");

// import cors
const cors = require("cors");
router.use(cors());

router.get("/analytics/transitions", (req, res) => {
  TransitionModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/analytics/orders", (req, res) => {
  OrderModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/analytics/browsers", (req, res) => {
//   console.log("res.query", req.query);
//   BrowserModel.find()
//     .then((data) => {
//       console.log("req.query", req.query);
//       console.log("data");
//       //   console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/analytics/browsers/:type", (req, res) => {
  BrowserModel.find({ type: req.params.type })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
