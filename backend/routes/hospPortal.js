// Menu item of view hospital functionality here.
// This receives the post request from front end and gets the data from backend through router.

const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');

router.get('/', async (req, res) => {
    try {
      const hospitals = await Hospital.find();
      res.json({ hospitals });
    } catch (error) {
      console.error('Failed to fetch hospital data', error);
      res.status(500).json({ error: 'Failed to fetch hospital data' });
    }
  });
  
  
module.exports = router;
