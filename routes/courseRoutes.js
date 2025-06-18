const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const verifyJWT = require('../middleware/authMiddleware');

router.post('/', verifyJWT, async (req, res) => {
  try {
    const entry = new Course(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Add failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const entries = await Course.find();
    res.json(entries);
  } catch {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

router.delete('/:id', verifyJWT, async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
