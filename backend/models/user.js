const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  activationTime: {
    type: String, // Change the type to String to store formatted time
    default: () => moment().utcOffset('+05:30').format('DD-MM-YYYY, hh:mm:ss A'), // Set default value using moment.js
  },
});

// Before saving the user, hash the password if it has been modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
