const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
  adminEmail: {
    type: String,
    required: true,
    unique: true,
  },
  loginDate: {
    type: Date,
    default: Date.now,
  },
});

const Admin = mongoose.model('Admin', adminLoginSchema);

module.exports = Admin;
