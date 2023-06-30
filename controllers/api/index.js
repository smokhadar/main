const router = require("express").Router();
const userRoutes = require("./userRoutes");
const channelRoutes = require("./channelRoutes");
const messageRotue = require("./messageRoutes");

router.use("/users", userRoutes);
router.use("/channels", channelRoutes);
router.use("/messages", messageRotue);

module.exports = router;
