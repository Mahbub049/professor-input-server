const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
const verifyJWT = require('../middleware/authMiddleware');

// POST: Add a new education entry
router.post('/', verifyJWT, async (req, res) => {
  try {
    const entry = new Education(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add education', details: err.message });
  }
});

// GET: All education entries
router.get('/', async (req, res) => {
  try {
    const data = await Education.find().sort({ from: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch education' });
  }
});

// DELETE: Remove an entry
router.delete('/:id', verifyJWT, async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
