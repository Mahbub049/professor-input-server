const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const verifyJWT = require('../middleware/authMiddleware');

// POST: Create or Update Profile
router.post('/', verifyJWT, async (req, res) => {
  try {
    const data = req.body;

    // Check if profile already exists
    const existing = await Profile.findOne();
    if (existing) {
      const updated = await Profile.findByIdAndUpdate(existing._id, data, { new: true });
      return res.json(updated);
    }

    const profile = new Profile(data);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save profile', details: err.message });
  }
});

// GET: Fetch Profile
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

module.exports = router;
