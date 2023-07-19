const mongoose = require('mongoose');
// Cascade Menubar & Add Products v1.2.14

const productSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true, // Company Name is mandatory
  },
  website: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
    required: true, // City is mandatory
  },
  state: {
    type: String,
    required: true, // State is mandatory
  },
  productName: {
    type: String,
  },
  productCode: {
    type: String,
  },
  description: {
    type: String,
  },
  hsnCode: {
    type: String,
  },
  qtySets: {
    type: String,
  },
  unitPrice: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  GST: {
    type: String,
  },
});

module.exports = mongoose.model('Product', productSchema);
