const { RetirementInfo, User } = require('../../models/index.js');
const jwt = require('jsonwebtoken');

const getRetirementInfoByUserID = async (req, res) => {
    const token = req.header("token")
    const decode = jwt.verify(token, "quean001")
    email = decode.email;   

    const user = await User.findOne({
        where: {
            email
        }
    });
    if (user) {
        userID = user.id
        const retirementInfo = await RetirementInfo.findOne({
            where: {
                userID
            }
        });
        if (retirementInfo) {
            res.status(200).send({
                message: "Retrieve successfully!",
                retirementInfo
            });
        } else {
            res.status(404).send({
                message: "User does not exist!"
            });
        }
    } else {
        res.status(404).send({
            message: "User does not exist!"
        });
    }
}

module.exports = {
    getRetirementInfoByUserID
}