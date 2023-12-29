const PollAnalytics = require('../model/PollAnalytics');
const pollAnalyticsService = require('../services/pollAnalyticsService');

// Controller functions
exports.createPollAnalytics = async (req, res) => {
  try {
    const pollAnalyticsData = req.body;
    const createdPollAnalytics = await pollAnalyticsService.createPollAnalytics(pollAnalyticsData);
    res.status(201).json(createdPollAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getPollAnalytics = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const pollAnalytics = await pollAnalyticsService.getPollAnalytics(pollId);
    res.status(200).json(pollAnalytics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
