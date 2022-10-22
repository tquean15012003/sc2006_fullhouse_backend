const { sendFeedbackHelper } = require("../../helpers/emailHelper");

const sendFeedback = async (req, res) => {

    const { email, feedback } = req.body

    if (sendFeedbackHelper(email, feedback)) {
        res.status(200).send({
            message: "Email was sent successfuly!",
        });
    } else {
        res.status(500).send({
            message: "Internal error!",
        });
    }
    
}

module.exports = {
    sendFeedback
}