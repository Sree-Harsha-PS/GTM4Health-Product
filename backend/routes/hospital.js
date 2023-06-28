const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital'); // Import the Hospital model

// Create a new hospital
router.post('/', async (req, res) => {
  try {
    const { name, city } = req.body;
    const hospital = new Hospital({ name, city });
    await hospital.save();
    res.status(201).json({ message: 'Hospital created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
