const Booking = require("../models/Booking");

const registerBooking = async (req, res) => {
  // console.log("Booking request received:", req.body);
  
  try {
    const {
      fullName,
      email,
      eventType,
      shootPlace,
      fromDate,
      toDate,
      contactNumber
    } = req.body;

    // Basic validation
    if (!fullName || !email || !eventType || !fromDate || !toDate || !contactNumber) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    // For specific event types, shootPlace is mandatory
    const requiresShootPlace = ['birthday', 'pre-wedding', 'others'].includes(eventType);
    if (requiresShootPlace && !shootPlace) {
      return res.status(400).json({ message: "Shoot place is required for this event type." });
    }

    const bookingData = {
      fullName,
      email,
      eventType,
      fromDate,
      toDate,
      contactNumber,
    };

    // Only include shootPlace if applicable
    if (requiresShootPlace) {
      bookingData.shootPlace = shootPlace;
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

    res.status(200).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Booking failed:", error);
    res.status(500).json({ message: "Failed to book" });
  }
};


const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const bookings = await Booking.find({ email: userEmail });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Failed to fetch user bookings:", error);
    res.status(500).json({ message: "Failed to fetch user bookings" });
  }
};

module.exports = {
  registerBooking,
  getAllBookings,
  getUserBookings
};
