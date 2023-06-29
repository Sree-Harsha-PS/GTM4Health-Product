// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // 
require('dotenv').config();

// Set up Express.js server
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false })); // Add this line

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const hospitalRouter = require('./routes/hospital'); 
const adminLoginRouter = require('./routes/adminlogin');
const userRouter = require('./routes/users');
const hospitalPortalRouter = require('./routes/hospPortal');

// Use routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/admin', adminLoginRouter);
app.use('/api/admin/dashboard/Add-Hospital', hospitalRouter); 
app.use('/api/users',userRouter)
app.use('/api/hospital-portal',hospitalPortalRouter);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
