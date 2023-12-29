const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Define routes
router.post('/', questionController.createQuestion);
router.get('/poll/:pollId', questionController.getQuestionsByPoll);

module.exports = router;
