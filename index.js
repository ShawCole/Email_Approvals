require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const campaignRoutes = require('./routes/campaigns');
const emailRoutes = require('./routes/emails');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/emails', emailRoutes);

// Default Route
app.get('/', (req, res) => res.send('Backend is running!'));

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
