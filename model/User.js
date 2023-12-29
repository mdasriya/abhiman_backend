const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: String,
  votingHistory: [{
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
    pollId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Poll',
    },
  }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
