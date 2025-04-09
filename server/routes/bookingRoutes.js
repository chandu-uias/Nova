const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const {
  registerBooking,
  getUserBookings,
  getAllBookings,
} = require("../controllers/bookingController");

// Allow authenticated users to register bookings
router.post("/register-booking",registerBooking);

// Get logged-in user's bookings
router.get("/my-bookings",getUserBookings);

// Admin route to get all bookings
router.get("/booked",getAllBookings);

// router.get("/booked",(req, res, next) => {
//   if (req.user.email !== "Novacapture@gmail.com") {
//     return res.status(403).json({ message: "Forbidden: Admin access only" });
//   }
//   next();
// }, getAllBookings);

module.exports = router;
