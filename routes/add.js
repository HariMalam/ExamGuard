const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("add");
});
router.post("/", async (req, res) => {
  const { email, name, phone, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    name: name,
    email,
    phone,
    password: hashpassword,
    role : "Administrator",
  });
  await newUser.save();
  req.session.success = true;
  res.json({ success: true, redirectUrl: "/auth/login" });
});

module.exports = router;
