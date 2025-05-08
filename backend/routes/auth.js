const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "The-secret-key";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password === password) {
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
