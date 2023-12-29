const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/', userController.createUser);
router.get('/:userId/voting-history', userController.getUserVotingHistory);

module.exports = router;
