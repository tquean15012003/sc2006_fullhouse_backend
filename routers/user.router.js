const express = require('express');
const { signUp, verifyUser, signIn, sendResetCode, resetPassword, changePassword, changeEmail} = require('../controllers/UserController/user.controller.js');
const { authenticate } = require('../middlewares/authenticate.js')

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/verify', verifyUser);
userRouter.post('/signin', signIn);
userRouter.post('/sendresetcode', sendResetCode);
userRouter.post('/resetpassword', resetPassword);
userRouter.put('/changepassword', authenticate, changePassword);
userRouter.put('/changeemail', authenticate, changeEmail)
module.exports = {
    userRouter
}