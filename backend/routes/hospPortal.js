// backend/rt/hospview.js

const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');
const { query, validationResult } = require('express-validator');

// Routes
router.get(
  '/',
  [
    query('page').optional().isInt({ min: 1 }).toInt(),
    query('limit').optional().isInt({ min: 1 }).toInt(),
    query('state').optional().trim(),
    query('city').optional().trim(),
  ],
  async (req, res) => {
    // Validate request query parameters
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { page = 1, limit = 10, state, city } = req.query;

      // Build query conditions
      const conditions = {};
      if (state) {
        conditions.state = state;
      }
      if (city) {
        conditions.city = city;
      }

      // Calculate skip value for pagination
      const skip = (parseInt(page) - 1) * parseInt(limit);

      // Execute the query with pagination
      const hospitals = await Hospital.find(conditions)
        .skip(skip)
        .limit(parseInt(limit));

      // Count total documents for pagination
      const totalHospitals = await Hospital.countDocuments(conditions);

      res.json({
        hospitals,
        totalRows: totalHospitals,
        totalPages: Math.ceil(totalHospitals / parseInt(limit)),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;



// Fetch all hospitals
// router.get("/", async (req, res) => {
//   try {
//     const hospitals = await Hospital.find();
//     res.json({ hospitals });
//   } catch (error) {
//     console.error('Failed to fetch hospital data', error);
//     res.status(500).json({ error: 'Failed to fetch hospital data' });
//   }
// });


