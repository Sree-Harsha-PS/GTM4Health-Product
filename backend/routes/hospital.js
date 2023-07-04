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

// DELETE a hospital by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedHospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!deletedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    return res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
