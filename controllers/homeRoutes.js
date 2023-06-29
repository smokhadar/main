const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("login", { formCSS: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chat", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    // Find the logged in user based on the session ID
    console.log("Logged in: ", user);
    res.render("chat", { ...user, pageTitle: "Chat", chatCSS: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    //TODO:
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/user", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  //   if (req.session.logged_in) {
  //     res.redirect("/profile");
  //     return;
  //   }

  console.log("User needs to login in");

  res.render("login");
});

module.exports = router;
