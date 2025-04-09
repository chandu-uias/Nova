const fs = require('fs');
const path = require('path');
const cloudinary = require('./cloudinaryConfig');

function uploadFolderImages(folderPath, cloudinaryFolder = 'mini') {
  const items = fs.readdirSync(folderPath);

  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    let stats;

    try {
      stats = fs.statSync(itemPath);
    } catch (err) {
      console.error(`⚠️ Skipping unreadable file: ${itemPath} —`, err.message);
      return;
    }

    if (stats.isDirectory()) {
      const subFolderName = path.relative(folderPath, itemPath).replace(/\\/g, '/');
      uploadFolderImages(itemPath, `${cloudinaryFolder}/${subFolderName}`);
    } else if (stats.isFile()) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
      if (!allowedExtensions.includes(path.extname(item).toLowerCase())) return;

      cloudinary.uploader.upload(itemPath, { folder: cloudinaryFolder })
        .then(result => {
          console.log(`✅ Uploaded: ${itemPath} → ${result.secure_url}`);
        })
        .catch(err => {
          console.error(`❌ Error uploading ${itemPath}:`, err.message);
        });
    }
  });
}

// 🔔 Don't forget to CALL the function!
const baseDir = path.join(__dirname, '../../public/mini');
uploadFolderImages(baseDir);
