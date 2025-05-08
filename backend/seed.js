const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGODB_URI);

const shiftSchema = new mongoose.Schema({
  email: String,
  date: String,
  start: String,
  end: String,
  duration: String,
  startLong: String,
  startLat: String,
  endLong: String,
  endLat: String,
});

const Shift = mongoose.model("Shift", shiftSchema);

const shiftData = [
  {
    date: "07/01/2025",
    start: "08:00 AM",
    end: "04:00 PM",
    duration: "7 HOURS",
    startLong: "077123",
    startLat: "030456",
    endLong: "077789",
    endLat: "030789",
    email: "john.doe@example.com",
  },
  {
    date: "06/01/2025",
    start: "09:00 AM",
    end: "05:00 PM",
    duration: "8 HOURS",
    startLong: "078234",
    startLat: "031234",
    endLong: "078901",
    endLat: "031567",
    email: "jane.doe@example.com",
  },
  {
    date: "08/01/2025",
    start: "07:30 AM",
    end: "03:30 PM",
    duration: "8 HOURS",
    startLong: "076789",
    startLat: "029876",
    endLong: "076432",
    endLat: "029765",
    email: "alice.smith@example.com",
  },
  {
    date: "09/01/2025",
    start: "10:00 AM",
    end: "06:00 PM",
    duration: "8 HOURS",
    startLong: "077654",
    startLat: "032100",
    endLong: "077333",
    endLat: "032500",
    email: "bob.jones@example.com",
  },
  {
    date: "10/01/2025",
    start: "08:30 AM",
    end: "04:30 PM",
    duration: "8 HOURS",
    startLong: "079111",
    startLat: "030555",
    endLong: "079999",
    endLat: "030777",
    email: "carol.white@example.com",
  },
  {
    date: "11/01/2025",
    start: "08:45 AM",
    end: "04:45 PM",
    duration: "8 HOURS",
    startLong: "078123",
    startLat: "029234",
    endLong: "078876",
    endLat: "029998",
    email: "john.doe@example.com",
  },
  {
    date: "12/01/2025",
    start: "06:00 AM",
    end: "02:00 PM",
    duration: "8 HOURS",
    startLong: "075555",
    startLat: "027654",
    endLong: "075999",
    endLat: "027888",
    email: "john.doe@example.com",
  },
  {
    date: "13/01/2025",
    start: "08:15 AM",
    end: "04:15 PM",
    duration: "8 HOURS",
    startLong: "077666",
    startLat: "028999",
    endLong: "078333",
    endLat: "029444",
    email: "john.doe@example.com",
  },
];

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const userData = [
  {
    email: "john.doe@example.com",
    username: "john_doe",
    password: "password123",
  },
  {
    email: "jane.doe@example.com",
    username: "jane_doe",
    password: "password456",
  },
  {
    email: "alice.smith@example.com",
    username: "alice_smith",
    password: "password789",
  },
  {
    email: "bob.jones@example.com",
    username: "bob_jones",
    password: "password101",
  },
  {
    email: "carol.white@example.com",
    username: "carol_white",
    password: "password202",
  },
];

async function insertData() {
  try {
    const hashedUsers = await Promise.all(
      userData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await Shift.insertMany(shiftData);
    console.log("Shifts inserted!");

    await User.insertMany(hashedUsers);
    console.log("Users inserted!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Insert failed", err);
  }
}

insertData();
