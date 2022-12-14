const { RetirementInfo, User } = require('../../models/index.js');
const jwt = require('jsonwebtoken');
const { getRetirementAgeHelper } = require('../../helpers/retirementInfoHelper')

const getRetirementAge = async (req, res) => {
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
            const { age, salary, carCat, housePrice, investments, currentSaving, noChild, ageOfGrad } = retirementInfo
            retirementAge = getRetirementAgeHelper(parseInt(salary), carCat, parseInt(housePrice), parseInt(currentSaving), parseInt(investments), parseInt(noChild), parseInt(ageOfGrad))
            res.status(200).send({
                message: "Get retirement age successfully!",
                retirementAge
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

const getGuestRetirementAge = async (req, res) => {
    try {
        const { age, salary, carCat, housePrice, investments, currentSaving, noChild, ageOfGrad } = req.body
        retirementAge = getRetirementAgeHelper(parseInt(salary), carCat, parseInt(housePrice), parseInt(currentSaving), parseInt(investments), parseInt(noChild), parseInt(ageOfGrad))
        res.status(200).send({
            message: "Get retirement age successfully!",
            retirementAge
        });
    } catch (error) {
        res.status(404).send({
            message: "Cannot get your retirement age!"
        });
    }


}

module.exports = {
    getRetirementAge,
    getGuestRetirementAge
}