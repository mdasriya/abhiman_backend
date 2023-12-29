// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(express.json());
app.use(cors())
// Routes
const pollRoutes = require('./routes/pollRoutes');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');
const pollAnalyticsRoutes = require('./routes/pollAnalyticsRoutes');
const { connection } = require('./config');

app.use('/api/polls', pollRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/poll-analytics', pollAnalyticsRoutes);

// Start the server
app.listen(PORT, async() => {

  try {
    await connection
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    
  }
 
});
