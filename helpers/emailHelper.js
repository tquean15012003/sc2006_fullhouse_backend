var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tquean15012003@gmail.com',
      pass: 'uplrktnqoanczpuj'
    }
});

const adminEmail = "tquean15012003@gmail.com"


const sendVerificationCode = async (email, verificationCode) => {
    const mailOptions = {
        from: adminEmail,
        to: email,
        subject: "Verification code",
        text: "Verification Code: " + verificationCode
    }

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.log(error);
            return false
        } else {
            console.log('Email sent: ' + info.response);
            return true
        }
    })
}

module.exports = {
    sendVerificationCode
}