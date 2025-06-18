const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degreeType: String,
  subject: String,
  university: String,
  passingYear: String,
  result: String
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema, 'cv_education');
