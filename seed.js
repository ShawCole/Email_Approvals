require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcryptjs');

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    return User.insertMany([
      {
        username: 'BizyPro',
        password: bcrypt.hashSync('BizyPro1$!', 10),
        role: 'agency',
      },
      {
        username: 'billing@bayshoreplumbers.com',
        password: bcrypt.hashSync('Bayshore1$!', 10),
        role: 'client',
      },
      {
        username: 'Kai@habitualherbs.com',
        password: bcrypt.hashSync('Herbs1$!', 10),
        role: 'client',
      },
    ]);
  })
  .then(() => {
    console.log('Seed data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
