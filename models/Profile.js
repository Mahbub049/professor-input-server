const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  image: String, // Store image URL or base64 (or use GridFS)
  designation: String,
  organization: String,
  phones: [String],
  emails: [String],
  googleScholar: String,
  researchGate: String,
  interests: [String]
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
