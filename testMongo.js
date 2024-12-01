require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MONGO_URI is not defined in the .env file');
  process.exit(1); // Exit the process if no URI is defined
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    mongoose.connection.close(); // Close the connection after the test
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
