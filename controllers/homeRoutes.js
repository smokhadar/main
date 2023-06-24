const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//   try {
//     console.log("Hello welcome to Home Route");
//     // Get all projects and JOIN with user data
//     // const projectData = await Project.findAll({
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes: ["name"],
//     //     },
//     //   ],
//     // });
//     // Serialize data so the template can read it
//     // const projects = projectData.map((project) => project.get({ plain: true }));
//     // Pass serialized data and session flag into template
//     res.render("login");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/user/:id", async (req, res) => {
  try {
    //TODO:
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/user", withAuth, async (req, res) => {
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
