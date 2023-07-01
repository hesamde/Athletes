const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/home");
});

router.get("/home", (req, res, next) => {
  res.render("home", { loggedIn: true });
});

router.get("/events", (req, res, next) => {
  res.render("events", { loggedIn: true });
});

router.get("/welcome", (req, res, next) => {
  res.render("home");
});

router.get("/search-event", (req, res, next) => {
  res.redirect("search-event");
});

module.exports = router;
