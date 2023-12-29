const Question = require('../model/Question');
const questionService = require('../services/questionService');

// Controller functions
exports.createQuestion = async (req, res) => {
  try {
    const questionData = req.body;
    const createdQuestion = await questionService.createQuestion(questionData);
    res.status(201).json(createdQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getQuestionsByPoll = async (req, res) => {
  try {
    const pollId = req.params.pollId;
    const questions = await questionService.getQuestionsByPoll(pollId);
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
