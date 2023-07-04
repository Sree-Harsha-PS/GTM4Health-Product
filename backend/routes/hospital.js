// Functionality to add Hospital data into the Mongodb database.
// We are posting a request with Hospital details.
// react data of Hospital info is getting into body collection. [router]

const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital'); // Import the Hospital model

// Create a new hospital
router.post('/', async (req, res) => {
  try {
    console.log('Hospital creation request received'); 
    const { name, city, docName, docSpez, mail, phone } = req.body;
    const hospital = new Hospital({ name, city, docName, docSpez, mail, phone });
    const savedHospital = await hospital.save();
    res.status(201).json({ message: 'Hospital created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
