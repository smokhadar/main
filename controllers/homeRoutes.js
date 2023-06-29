const router = require("express").Router();
const { User, Channel } = require("../models");
const withAuth = require("../utils/auth");

// show all channels
router.get("/", async (req, res) => {
  try {
    console.log("Hello welcome to Home Route");
    const channelData = await Channel.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    // Serialize data so the template can read it
    const channels = channelData.map((channel) => channel.get({ plain: true }));
    // Pass serialized data and session flag into template
    // what handlebars to render for all channels? homepage?
    // res.render("allChannels");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// show channel by ID
router.get("/channel/:id", async (req, res) => {
  try {
    const channelData = await Channel.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const channel = channelData.get({ plain: true});

    res.render('channel', {
      ...channel,
      // 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//show user profile
router.get("/user/:id", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//show user message history
router.get("/user/messages/:id", async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

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
