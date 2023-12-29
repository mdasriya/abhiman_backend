const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: String,
  category: String,
  startDate: Date,
  endDate: Date,
  minReward: Number,
  maxReward: Number,
});

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;
