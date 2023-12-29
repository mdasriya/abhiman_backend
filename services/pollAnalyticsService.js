const PollAnalytics = require('../model/PollAnalytics');

// Service functions
exports.createPollAnalytics = async (pollAnalyticsData) => {
  const createdPollAnalytics = await PollAnalytics.create(pollAnalyticsData);
  return createdPollAnalytics;
};

exports.getPollAnalytics = async (pollId) => {
  const pollAnalytics = await PollAnalytics.findOne({ pollId });
  return pollAnalytics ? pollAnalytics : null;
};
