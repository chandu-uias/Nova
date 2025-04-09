const express = require("express");
const router = express.Router();
const { register, userLogin, adminLogin } = require("../controllers/authController");

// Register
router.post("/register", register);

// User Login
router.post("/login", userLogin);

// Admin Login
router.post("/admin-login", adminLogin);

module.exports = router;
