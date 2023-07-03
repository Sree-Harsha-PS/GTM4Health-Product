const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
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

