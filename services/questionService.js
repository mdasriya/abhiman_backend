const Question = require('../model/Question');

// Service functions
exports.createQuestion = async (questionData) => {
  const createdQuestion = await Question.create(questionData);
  return createdQuestion;
};

exports.getQuestionsByPoll = async (pollId) => {
  const questions = await Question.find({ pollId });
  return questions;
};
