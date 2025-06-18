const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const verifyJWT = require('../middleware/authMiddleware');

// POST: Add experience
router.post('/', verifyJWT, async (req, res) => {
  try {
    const entry = new Experience(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add experience' });
  }
});

// GET: All experiences
router.get('/', async (req, res) => {
  try {
    const data = await Experience.find().sort({ from: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

// DELETE: Delete experience
router.delete('/:id', verifyJWT, async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});

module.exports = router;
