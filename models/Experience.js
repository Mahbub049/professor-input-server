const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  designation: String,
  department: String,
  institution: String,
  address: String,
  from: String,
  to: String,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema, 'cv_experience');
