// /routes/campaigns.js
const express = require('express');
const Campaign = require('../models/campaign');
const router = express.Router();

// POST route to create a new campaign
router.post('/api/campaign', async (req, res) => {
  const { userId, campaignName, startDate, endDate, status, budget } = req.body;
  
  try {
    const newCampaign = new Campaign({
      userId,
      campaignName,
      startDate,
      endDate,
      status,
      budget,
    });

    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    res.status(500).json({ message: 'Error saving campaign', error });
  }
});

// GET route to fetch campaigns for a specific user
router.get('/api/campaigns/:userId', async (req, res) => {
  const { userId } = req.params;
  
  try {
    const campaigns = await Campaign.find({ userId });
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
});

module.exports = router;
