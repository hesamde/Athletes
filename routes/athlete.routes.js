// routes/athletes.routes.js

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const md5 = require("../utils/md5");

const Athlete = require("../models/Athletes.model");
// let multer = require("multer");
const fileUploader = require("../config/cloudinary.config");

router.get("/athlete-list", (req, res) => {
  const unique = `${(
    Math.ceil(Math.random() * 10000) + 1
  ).toString()}${new Date().toDateString()}`;

  Athlete.find()
    .then((listOfAthletes) => {
      res.render("athlete-list", {
        list: listOfAthletes,
        currentUser: req.session.currentUser,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/athlete-create", (req, res) => {
  res.render("athlete-create");
});

// GET route to display the form to create a new athletes
router.post(
  "/create",
  fileUploader.single("athlete-cover-image"),
  (req, res) => {
    const unique = `${(
      Math.ceil(Math.random() * 10000) + 1
    ).toString()}${new Date().toDateString()}`;
    Athlete.create({
      id: md5(unique),
      createdAt: new Date(),
      name: req.body.name,
      nationality: req.body.nationality,
      achievement: req.body.achievement,
      gender: req.body.gender,
      dateofbirth: req.body.dateofbirth,
      userId: new mongoose.Types.ObjectId("6496fc6e686e2d6d19bc879e"),
      imageUrl: req.file.path ?? "",
    })
      .then((data) => {
        console.log("Athelete has been added!");
        console.log(data);

        res.redirect("/athlete/athlete-list");
      })
      .then((err) => {
        console.log(err);
      });
  }
);

router.get("/search-athletes", (req, res) => {
  res.redirect("search-athletes");
});

router.get("/athlete-info", (req, res) => {
  Athlete.findOne({ id: req.query.id })
    .then((data) => {
      console.log(data);
      res.render("athlete-info", { data });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/delete/:id", async function (req, res, next) {
  console.log(req.params.id);
  try {
    const deletedUser = await Athlete.findByIdAndDelete(req.params.id);
    res.redirect("/athlete/athlete-list");
  } catch (error) {
    console.log(error);
  }
});
// --------------------------------------------

router.get("/athlete-edit/:id ", async function (req, res, next) {
  console.log(req.params.id);
  try {
    const editUser = await Athlete.findById(req.params.id);
    res.render("athlete-edit", editUser);
  } catch (error) {
    console.log(error);
  }
});
// -----------------------------------
// router.post("/edit/:id", async function (req, res, next) {
//   console.log(req.params.id);
//   try {
//     const deletedUser = await Athlete.findByIdAndDelete(req.params.id);
//     res.redirect("/athlete/athlete-list");
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
