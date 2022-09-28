const { User } = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const { generateSixDigits } = require('../../helpers/generateDigits.js')
const { sendVerificationCode } = require('../../helpers/emailHelper.js')

// sign up
const signUp = async (req, res) => {
    const { username, password, email, phoneNumber } = req.body
    try {
        // generate a string randomly
        const salt = bcrypt.genSaltSync(10);
        // encrypt random string + password
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            username,
            password: hashPassword,
            email,
            phoneNumber,
            verificationCode: generateSixDigits()
        });

        if (sendVerificationCode(email, newUser.verificationCode)) {
            res.status(200).send({
                message: "Verification code sent!",
                user: newUser
            });
        } else {
            res.status(500).send({
                message: "Internal error!",
            });
        }

        
    } catch (error) {
        res.status(500).send(error);
    }
}

// verify after register
const verifyUser = async (req, res) => {
    const { email, verificationCode } = req.body

    const user = await User.findOne({
        where: {
            email
        }
    })

    if (user) {
        flag = user.verificationCode === verificationCode ? true : false
        if (flag) {
            user.isVerified = "true";
            await user.save();
            res.status(201).send({
                message: "Sign up successfully!"
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
    signUp,
    verifyUser
}