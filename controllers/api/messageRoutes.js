const router = require("express").Router();
const { Message } = require("../../models");

router.get("/", async (req, res) => {
    try {
    //   console.log("");
      const messageData = await Message.findAll({
        // include: [
        //   {
        //     model: Message,
        //     attributes: ["body"],
        //   },
        // ],
      });
      // Serialize data so the template can read it
      const message = messageData.map((message) => message.get({ plain: true }));
  
      res.render("chat", {
      message,
      logged_in: req.session.logged_in,
      
     })
    } catch (err) {
      console.log(err);
    }
  });

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

module.exports = router;
// "body", { body: req.params.body }
