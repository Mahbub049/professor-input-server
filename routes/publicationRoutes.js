const express = require('express');
const router = express.Router();
const Publication = require('../models/Publication');
const verifyJWT = require('../middleware/authMiddleware');

// POST: Add publication
router.post('/', verifyJWT, async (req, res) => {
  try {
    const pub = new Publication(req.body);
    await pub.save();
    res.status(201).json(pub);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add publication', details: err.message });
  }
});

// GET: All publications
router.get('/', async (req, res) => {
  try {
    const data = await Publication.find().sort({ year: -1 });
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// DELETE
router.delete('/:id', verifyJWT, async (req, res) => {
  await Publication.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
