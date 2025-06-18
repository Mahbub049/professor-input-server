const mongoose = require('mongoose');

const adminRoleSchema = new mongoose.Schema({
  title: String,
  departmentOrEvent: String,
  roleType: String,
  from: String,
  to: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('AdminRole', adminRoleSchema, 'cv_admin_role');
