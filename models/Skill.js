const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String,       // e.g., Language, Computer
  skillName: String,      // e.g., English, Python
  description: String     // e.g., Fluent in writing
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema, 'cv_skills');
