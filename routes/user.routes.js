const { Router } = require("express");
const User = require("../models/User");
const router = Router();

router.post("/guest", async (req, res) => {
  try {
    const { name, text, date } = req.body;
    const guest = new User({
      name,
      text,
      date,
    });

    await guest.save();
    res.status(201).json({ message: "guest save on db" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
