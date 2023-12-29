const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

// Define routes
router.post('/', pollController.createPoll);
router.get('/', pollController.getAllPolls);

module.exports = router;
