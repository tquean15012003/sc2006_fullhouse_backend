const express = require('express');
const { signUp, verifyUser, signIn, sendResetCode, resetPassword, changePassword} = require('../controllers/UserController/user.controller.js');
const { authenticate } = require('../middlewares/authenticate.js')

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/verify', verifyUser);
userRouter.post('/signin', signIn);
userRouter.post('/sendresetcode', sendResetCode);
userRouter.post('/resetpassword', resetPassword);
userRouter.put('/changepassword', authenticate, changePassword);

module.exports = {
    userRouter
}