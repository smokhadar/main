const router = require("express").Router();
const { User, Channel, Message } = require("../models");
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
    res.render("chat", {
       ...user, 
       pageTitle: "Chat", 
       chatCSS: true,
       logged_in: req.session.logged_in
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
    });

    const user = userData.get({ plain: true });
    
    res.render('profile', {
      ...user,
      logged_in: true
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
router.get("/user", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
  try {  
    res.render("login"); 
  } catch (err) {
    console.log(err);
    console.log("User needs to login in");
  }
});

module.exports = router;

// show all channels
// router.get("/", async (req, res) => {
//   try {
//     console.log("Hello welcome to Home Route");
//     const channelData = await Channel.findAll({
//       include: [
//         {
//           model: Message,
//           attributes: ["body"],
//         },
//       ],
//     });
//     // Serialize data so the template can read it
//     const channels = channelData.map((channel) => channel.get({ plain: true }));
//     res.json(channels);

//     // what handlebars to render?
//   //   res.render("chat", {
//   //   channels,
//   //   logged_in: req.session.logged_in,
//   //  })
//   } catch (err) {
//     console.log(err);
//   }
// });

// show channel by ID
// router.get("/channel/:id", async (req, res) => {
//   try {
//     const channelData = await Channel.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const channel = channelData.get({ plain: true});

//     res.render('channel', {
//       ...channel,
//       // 
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// })
