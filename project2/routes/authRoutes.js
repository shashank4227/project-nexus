const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Render the index.ejs file
router.get("/", (req, res) => {
  res.render("index");
});

// Handle signup request
router.post("/signup", authController.signup);

// Handle login request
router.post("/login", authController.login);

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

module.exports = router;
