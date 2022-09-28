const express = require('express');
const { userRouter } = require('./user.router.js');

const rootRouter = express.Router();

rootRouter.use('/users', userRouter)

module.exports = {
    rootRouter
}