const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: String,
  memberId: String
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema, 'cv_membership');
