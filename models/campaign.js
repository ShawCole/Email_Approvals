// /models/campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaignName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: 'inactive' }, // e.g., 'active', 'completed', 'draft'
  budget: { type: Number, required: true },
  // Add any other relevant fields for your campaigns
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
