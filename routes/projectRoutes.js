const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const verifyJWT = require('../middleware/authMiddleware');

// POST: Add a new project
router.post('/', verifyJWT, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save project' });
  }
});

// GET: All projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// DELETE: Remove a project
router.delete('/:id', verifyJWT, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
