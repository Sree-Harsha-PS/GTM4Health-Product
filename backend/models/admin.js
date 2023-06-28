const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
  adminEmail: {
    type: String,
    required: true,
    unique: false,
  },
  loginDate: {
    type: Date,
    default: Date.now,
    unique: true,
  },
});

const Admin = mongoose.model('Admin', adminLoginSchema);

module.exports = Admin;
