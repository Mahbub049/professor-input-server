const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: String,
  program: String,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema, 'cv_course');
