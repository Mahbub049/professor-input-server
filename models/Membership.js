const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  memberId: { type: String, required: true },
  type: {
    type: String,
    enum: ['Lifetime', 'Yearly', 'Honorary'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema, 'cv_membership');
