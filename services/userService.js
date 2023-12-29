const User = require('../model/User');

// Service functions
exports.createUser = async (userData) => {
  const createdUser = await User.create(userData);
  return createdUser;
};

exports.getUserVotingHistory = async (userId) => {
  const user = await User.findOne({ userId }).populate('votingHistory.pollId votingHistory.questionId');
  return user ? user.votingHistory : null;
};
