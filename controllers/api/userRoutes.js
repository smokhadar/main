const router = require("express").Router();
const { User } = require("../../models");

//api/users
router.post("/", async (req, res) => {
  console.log(req.body, "request");
  try {
    const userData = await User.create(req.body);
    console.log("test inside new user", { userData });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

   res.render('profile', {
    ...userData,
   })

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//update user profile
router.put('/:id', async(req, res) => {
  console.log(req.body);
    User.update(
      {
        email: req.body.email,
        profile_pic_path: req.body.profile_pic_path,
      },
      {
        where: {
          id: req.params.id,
        }
      }
     )
      .then((updatedUser) => {
        res.render('profile', );
      }) 
     .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});


//api/users/login
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    userData.onlineStatus = true;

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  // change users online status to false?
  } else {
    res.status(404).end();
  }
});

// create route to show online users
router.get('/online', async (req, res) => {
  try {
    const onlineUsers = await User.findAll( {
      where: { onlineStatus: true }
    });

    if (!onlineUsers) {
      console.log("No users are currently online.");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
