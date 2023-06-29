const router = require("express").Router();
const { Message } = require("../../models");

//create new message
router.post('/', async (req, res) => {
    console.log(req.body, "request");
    try {
        const newMessage = await Message.create(req.body);
        res.status(200).json(newMessage);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

//