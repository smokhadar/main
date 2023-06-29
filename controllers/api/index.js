const router = require("express").Router();
const userRoutes = require("./userRoutes");
const channelRoutes = require('./channelRoutes');
const chatRoutes = require("./chatRoutes");

router.use("/users", userRoutes);
router.use("/channels", channelRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
