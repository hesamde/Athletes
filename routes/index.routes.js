const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/home");
});

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.get("/events", (req, res, next) => {
  res.render("events");
});

router.get("/welcome", (req, res, next) => {
  res.redirect("welcome");
});

router.get("/search-event", (req, res, next) => {
  res.redirect("search-event");
});

module.exports = router;
