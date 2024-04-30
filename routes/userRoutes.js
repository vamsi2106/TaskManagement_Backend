const express = require("express");

const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send(" routes are working!");
});

//register a user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();

    res.status(200).send({ user, message: "user created successfully" });
  } catch (error) {
    res.status(400).send({ error: err });
  }
});

//login a user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
      return res
        .status(400)
        .send({ error: "Unable to login, invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res
        .status(400)
        .send({ error: "Unable to login, invalid credentials" });
    }
    const token = jwt.sign(
      {
        _id: user._id.toString(),
      },
      process.env.JWT_SECRET_KEY
    );

    res.status(200).send({ user, token, message: "Logged in  successfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = router;
