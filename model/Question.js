const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: String, // 'single' or 'multiple'
  text: String,
  options: [String],
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
