const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// POST: Add new skill
router.post('/', async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Fetch all skills
router.get('/', async (req, res) => {
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.json(skills);
});

// DELETE: Remove skill
router.delete('/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
