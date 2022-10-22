const express = require('express');
const { sendFeedback } = require('../controllers/FeedbackController/feedback.controller.js');

const feedBackRouter = express.Router();

feedBackRouter.post('/sendfeedback', sendFeedback);

module.exports = {
    feedBackRouter
}