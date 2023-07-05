// Stores Hospital Records
// Defined the Hospital fields here.

const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,// Name is mandatory
  },
  city: {
    type: String,
    required: true,//City is mandatory
  },
  docName: {
    type: String,
  }, 
  docSpez: {
    type: String,
  },
  mail: {
    type: String,
  },
  phone: {
    type: String,
  }
});

module.exports = mongoose.model('Hospital', hospitalSchema);

