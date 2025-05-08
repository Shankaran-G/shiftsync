const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  email: String,
  date: { type: Date, default: Date.now },
  start: String,
  end: String,
  duration: String,
  startLong: String,
  startLat: String,
  endLong: String,
  endLat: String,
});

module.exports = mongoose.model("Shift", shiftSchema);
