const express = require('express');
const router = express.Router();
const pollAnalyticsController = require('../controllers/pollAnalyticsController');

// Define routes
router.post('/', pollAnalyticsController.createPollAnalytics);
router.get('/:pollId', pollAnalyticsController.getPollAnalytics);

module.exports = router;
