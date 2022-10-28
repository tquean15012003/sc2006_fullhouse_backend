const { User } = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const { generateSixDigits } = require('../../helpers/generateDigits.js')
const { sendVerificationCode } = require('../../helpers/emailHelper.js')

const retrieveUsername = async (req, res) => {
    const { username, password, newEmail } = req.body

    const user = await User.findOne({
        where: {
            username
        }
    })
    if (user) {
        if (user.isVerified === "false") {
            const userTakenEmail = await User.findOne({
                where: {
                    email: newEmail
                }
            })
            if (userTakenEmail && userTakenEmail.username !== username) {
                res.status(500).send({
                    message: "Email has been taken. Please use another email!"
                });
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hashPassword = bcrypt.hashSync(password, salt);
                user.password = hashPassword
                user.email = newEmail
                user.verificationCode = generateSixDigits()
                await user.save()
                if (sendVerificationCode(user.email, user.verificationCode)) {
                    res.status(200).send({
                        message: "Update email successfully! Please proceed to verify your email.",
                        user
                    });
                } else {
                    res.status(500).send({
                        message: "Internal error!",
                    });
                }
            }
        } else {
            res.status(500).send({
                message: "The account has been activated already. You are not allowed to perform this action!"
            });
        }
    } else {
        res.status(404).send({
            message: "Username does not exist!"
        });
    }
}

module.exports = {
    retrieveUsername
}