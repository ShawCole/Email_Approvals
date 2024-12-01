// /index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const campaignRoutes = require('./routes/campaigns');  // Add this line to import campaign routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse incoming JSON requests

// Use campaign routes
app.use(campaignRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
