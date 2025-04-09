require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://nova-nine-umber.vercel.app",
    "https://nova-j9db.vercel.app" 
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


// app.use(
//     cors({
        
//         origin:"*",
//         methods: "GET,POST,PUT,DELETE",
//         credentials: true 
//     })
// );

app.use(bodyParser.json());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", bookingRoutes); // '/api/book' and '/api/booked'

// Server Start
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
