const express = require("express");
const Shift = require("../models/Shift");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shifts = await Shift.find().sort({ date: -1 });
    res.json(shifts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch shifts" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newShift = new Shift(req.body);
    await newShift.save();
    res.status(201).json({ message: "Shift saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save shift" });
  }
});
module.exports = router;
