const express = require('express');
const router = express.Router();
const HospitalModel = require('../models/hospital'); // Create the HospitalModel schema

// Create a new hospital
router.post('/', async (req, res) => {
  try {
    const { name, city } = req.body;
    const hospital = new HospitalModel({ name, city });
    await hospital.save();
    res.status(201).json({ message: 'Hospital created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
