const express = require('express');
const router = express.Router();
const AdminRole = require('../models/AdminRole');
const verifyJWT = require('../middleware/authMiddleware');

// Add new admin role
router.post('/', verifyJWT, async (req, res) => {
  try {
    const role = new AdminRole(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add role' });
  }
});

// Get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await AdminRole.find().sort({ date: -1 });
    res.json(roles);
  } catch {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
});

// Delete a role
router.delete('/:id', verifyJWT, async (req, res) => {
  try {
    await AdminRole.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
