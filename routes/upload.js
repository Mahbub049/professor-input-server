const express = require('express');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });

const router = express.Router();

router.post('/image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // 👇 Add this log one more time to be sure
  console.log("✅ File from Cloudinary:", req.file);

  // ✅ RETURN THE ACTUAL CLOUDINARY URL
  res.json({ imageUrl: req.file.path }); // this IS the Cloudinary URL
});

module.exports = router;
