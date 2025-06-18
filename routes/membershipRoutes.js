const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');
const verifyJWT = require('../middleware/authMiddleware');

// Add membership
router.post('/', verifyJWT, async (req, res) => {
  try {
    const entry = new Membership(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Add failed' });
  }
});

// Get all memberships
router.get('/', async (req, res) => {
  try {
    const data = await Membership.find();
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// Delete membership
router.delete('/:id', verifyJWT, async (req, res) => {
  try {
    await Membership.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
