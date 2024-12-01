const express = require('express');
const router = express.Router();

// Example route to get all campaigns
router.get('/', (req, res) => {
  // TODO: Fetch campaigns from database
  res.json({ campaigns: [] });
});

// Example route to create a new campaign
router.post('/', (req, res) => {
  const { name, tags } = req.body;

  // TODO: Add logic to create a new campaign
  res.json({ message: 'Campaign created successfully', name, tags });
});

module.exports = router;
