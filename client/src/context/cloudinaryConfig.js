const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET,
});

module.exports = cloudinary;
