const express = require('express');
const { userRouter } = require('./user.router.js');
const { feedBackRouter } = require('./feedback.router.js')

const rootRouter = express.Router();

rootRouter.use('/users', userRouter)
rootRouter.use('/feedbacks', feedBackRouter)

module.exports = {
    rootRouter
}