const Poll = require('../model/Poll');
const pollService = require('../services/pollService');

// Controller functions
exports.createPoll = async (req, res) => {
  try {
    const pollData = req.body;
    const createdPoll = await pollService.createPoll(pollData);
    res.status(201).json(createdPoll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllPolls = async (req, res) => {
  try {
    const allPolls = await pollService.getAllPolls();
    res.status(200).json(allPolls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
