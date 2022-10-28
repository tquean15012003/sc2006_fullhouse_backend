const express = require('express');
const { googleSignIn, signUp, verifyUser, signIn, sendResetCode, resetPassword, changePassword, changeEmail, retrieveUsername } = require('../controllers/UserController/user.controller.js');
const { isUserAuthenticated } = require('../middlewares/auth.js');
const { authenticate } = require('../middlewares/authenticate.js')

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/verify', verifyUser);
userRouter.post('/signin', signIn);
userRouter.post('/sendresetcode', sendResetCode);
userRouter.post('/resetpassword', resetPassword);
userRouter.put('/changepassword', authenticate, changePassword);
userRouter.put('/changeemail', authenticate, changeEmail)
userRouter.put('/retrieveusername', retrieveUsername)
userRouter.get('/googlesignin', isUserAuthenticated, googleSignIn)

module.exports = {
    userRouter
}