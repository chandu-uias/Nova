const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  eventType: { type: String, required: true },
  shootPlace: { type: String },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  contactNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
