const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const channelRoutes = require("./channelRoutes");
const messageRoutes = require("./messageRoutes");

router.use("/users", userRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
