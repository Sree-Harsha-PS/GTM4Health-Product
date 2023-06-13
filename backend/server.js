// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// Set up Express.js server
const app = express();
const port = 5000; // Replace with your desired port number

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(process.env.MONGODB_URI);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const signupRouter = require('./routes/signup');

// Use routes
app.use('/api/signup', signupRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log('MONGODB_URI:', process.env.MONGODB_URI);
