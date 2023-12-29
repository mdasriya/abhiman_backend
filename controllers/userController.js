const User = require('../model/User');
const userService = require('../services/userService');

// Controller functions
exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getUserVotingHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const votingHistory = await userService.getUserVotingHistory(userId);
    res.status(200).json(votingHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
