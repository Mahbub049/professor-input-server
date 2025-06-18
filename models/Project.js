const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], required: true },
  fundingSource: { type: String, required: true },
  grantingBody: { type: String, default: null },
  notes: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema, 'cv_project');
