require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://project07tribe:passwordtribe665544@cluster-tribe.ma5v5.mongodb.net/'; // Fetch the connection string from .env

// Function to connect to MongoDB using Mongoose
const connectToMongo = () => {
  mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    // Optionally retry after a delay
    setTimeout(connectToMongo, 5000); // Retry connection after 5 seconds
  });
};

// Export the connection function
module.exports = connectToMongo;
