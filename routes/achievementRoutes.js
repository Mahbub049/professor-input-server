const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// GET all
router.get('/', async (req, res) => {
  const data = await Achievement.find().sort({ createdAt: -1 });
  res.json(data);
});

// POST new
router.post('/', async (req, res) => {
  const newAchievement = new Achievement(req.body);
  await newAchievement.save();
  res.json(newAchievement);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Achievement.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
