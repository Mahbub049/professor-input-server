const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ['Academic', 'Professional', 'Research', 'Other'], // you can adjust
    required: true
  },
  remarks: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema, 'cv_achievement');
