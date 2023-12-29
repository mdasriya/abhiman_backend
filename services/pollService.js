const Poll = require('../model/Poll');

// Service functions
exports.createPoll = async (pollData) => {
  const createdPoll = await Poll.create(pollData);
  return createdPoll;
};

exports.getAllPolls = async () => {
  const allPolls = await Poll.find();
  return allPolls;
};
