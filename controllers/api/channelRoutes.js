const router = require("express").Router();
const { Channel } = require("../../models");

//create new channel
router.post('/', async (req, res) => {
    console.log(req.body, "request");
    try {
        const newChannel = await Channel.create(req.body);
        res.status(200).json(newChannel);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

//navigate to specific channel
router.delete("/:id", async (req, res) => {
    try {
        const channelData = await Channel.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!channelData) {
            res.status(400).json({ message: 'NO channel found with this id!'});
            return;
        }
        res.status(200).json(channelData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// module.exports = router;