const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json({ users });
    } catch (error) {
      console.error('Failed to fetch users', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
  
module.exports = router;
