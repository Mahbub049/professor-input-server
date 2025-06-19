const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  image: String,
  designation: String,
  organization: String,
  department: String,         // ✅ New field
  overview: String,           // ✅ New field
  phones: [String],
  emails: [String],
  googleScholar: String,
  researchGate: String,
  interests: [String]
}, { timestamps: true });


module.exports = mongoose.model('Profile', profileSchema);
