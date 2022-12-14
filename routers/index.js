const express = require('express');
const { userRouter } = require('./user.router.js');
const { feedBackRouter } = require('./feedback.router.js')
const { retirementInfoRouter } = require('./retirementInfo.router.js');
const { googleRouter } = require('./google.router.js');

const rootRouter = express.Router();

rootRouter.use('/users', userRouter)
rootRouter.use('/feedbacks', feedBackRouter)
rootRouter.use('/retirementinfos', retirementInfoRouter)
rootRouter.use('/google', googleRouter)
module.exports = {
    rootRouter
}