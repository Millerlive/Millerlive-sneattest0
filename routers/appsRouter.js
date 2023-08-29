const express = require("express");
const router = express.Router();
const EmailModel = require("../models/EmailModel");
const UserModel = require("../models/UserModel");
const InvoiceModel = require("../models/InvoiceModel");

// import cors
const cors = require("cors");
router.use(cors());

router.get("/apps/emails", (req, res) => {
  EmailModel.find()
    .then((data) => {
      //   console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/apps/emails/:type", (req, res) => {
  EmailModel.find({ type: req.params.type })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/apps/emails/:type/:name", (req, res) => {
  const name = req.params.name;
  const regex = new RegExp(name, "i");
  EmailModel.find({ type: req.params.type, firstName: regex })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/apps/users", (req, res) => {
//   UserModel.find()
//     .then((data) => {
//       //   console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/apps/users", (req, res) => {
  const { role, plan, status } = req.query;
  UserModel.find()
    .then((data) => {
      var filteredData = data;

      filteredData = data.filter(
        (data) =>
          (!role || data.role === role) &&
          (!plan || data.plan === plan) &&
          (!status || data.status === status)
      );

      res.json(filteredData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/apps/invoices", (req, res) => {
  const { status } = req.query;
  InvoiceModel.find()
    .then((data) => {
      var filteredData = data.filter(
        (data) => !status || data.status === status
      );
      res.json(filteredData);
      // res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
