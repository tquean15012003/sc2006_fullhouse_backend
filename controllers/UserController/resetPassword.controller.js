const { User } = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const { sendVerificationCode } = require('../../helpers/emailHelper.js')
const { generateSixDigits } = require('../../helpers/generateDigits.js')

// send verification code for resetting password
const sendResetCode = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({
        where: {
            email
        }
    })

    if (user) {
        user.isVerified = "false"
        user.verificationCode = generateSixDigits()
        await user.save();
        
        if (sendVerificationCode(email, user.verificationCode)) {
            res.status(200).send({
                message: "Verification code sent!",
            });
        } else {
            res.status(500).send({
                message: "Internal error!",
            });
        }

    } else {
        res.status(500).send({
            message: "Email does not exist!"
        });
    }
}

// reset password
const resetPassword = async (req, res) => {
    const { email, verificationCode, password } = req.body

    const user = await User.findOne({
        where: {
            email
        }
    })

    if (user) {
        flag = user.verificationCode === verificationCode ? true : false
        if (flag) {
            // generate a salt
            const salt = bcrypt.genSaltSync(10);
            // encrypt random string + password
            const hashPassword = bcrypt.hashSync(password, salt);

            user.isVerified = "true"
            user.password = hashPassword
            await user.save();
            res.status(200).send({
                message: "Reset password successfully!"
            });
        } else {
            res.status(500).send({
                message: "Incorrect verification code!"
            });
        }
    } else {
        res.status(500).send({
            message: "User does not exist!"
        });
    }
}

module.exports = {
    sendResetCode,
    resetPassword
}