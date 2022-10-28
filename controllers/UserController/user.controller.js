const { signUp, verifyUser } = require('./signUp.controller.js')
const { signIn } = require('./signIn.controller.js')
const { sendResetCode, resetPassword } = require('./resetPassword.controller.js')
const { changePassword, changeEmail } = require('./changePassword.controller.js')
const { retrieveUsername } = require('./retrieveUsername.controller.js')

module.exports = {
    signUp,
    verifyUser,
    signIn,
    sendResetCode,
    resetPassword,
    changePassword,
    changeEmail,
    retrieveUsername
}