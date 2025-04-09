const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, email, password, mobile } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobile,
    });

    await newUser.save();

    res
      .status(200)
      .json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Failed to register" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Failed to login" });
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email === "Novacapture@gmail.com" && password === "Novacapture") {
    return res
      .status(200)
      .json({ message: "Admin login successful", token: "manual-admin-token" });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
};

module.exports = {
  register,
  userLogin,
  adminLogin,
};
