const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospital');

// Fetch hospitals with pagination
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const totalRows = await Hospital.countDocuments();
    const totalPages = Math.ceil(totalRows / limit); // Calculate total pages

    const hospitals = await Hospital.find().skip(skip).limit(Number(limit));

    res.json({ hospitals, totalRows, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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

module.exports = router;
