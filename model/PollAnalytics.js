const mongoose = require('mongoose');

const pollAnalyticsSchema = new mongoose.Schema({
  pollId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
  },
  totalVotes: Number,
  optionCounts: {
    type: Map,
    of: Number,
  },
});

const PollAnalytics = mongoose.model('PollAnalytics', pollAnalyticsSchema);
module.exports = PollAnalytics;
