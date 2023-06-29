const router = require("express").Router();
const userRoutes = require("./userRoutes");
const channelRoutes = require('./channelRoutes');

router.use("/users", userRoutes);
router.use("/channels", channelRoutes);

module.exports = router;
