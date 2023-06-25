const router = require("express").Router();
const userRoutes = require("./userRoutes");
const signupRoutes = require("./sigupRoutes");

router.use("/users", userRoutes);
router.use("/users", userRoutes);

module.exports = router;
