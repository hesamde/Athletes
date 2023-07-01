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
      res.render("athlete-list", { list: listOfAthletes, loggedIn: true });
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
  "/athlete/create",
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
        res.redirect("/athlete-list");
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
module.exports = router;
