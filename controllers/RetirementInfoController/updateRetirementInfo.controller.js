const { RetirementInfo, User } = require('../../models/index.js');
const jwt = require('jsonwebtoken');

const updateRetirementInfo = async (req, res) => {
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
            const { name, age, degree, salary, carCat, housePrice, investments,currentSaving, noChild, ageOfGrad} = req.body

            retirementInfo.name = name
            retirementInfo.age = age
            retirementInfo.degree = degree
            retirementInfo.salary = salary
            retirementInfo.carCat = carCat
            retirementInfo.housePrice = housePrice
            retirementInfo.investments = investments
            retirementInfo.currentSaving = currentSaving
            retirementInfo.noChild = noChild
            retirementInfo.ageOfGrad = ageOfGrad

            await retirementInfo.save();
            res.status(200).send({
                message: "Update successfully!",
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

const updateInvestment = async (req, res) => {
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
            const { investments } = req.body

            console.log(investments)

            retirementInfo.investments = investments

            await retirementInfo.save();
            res.status(200).send({
                message: "Update successfully!",
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

const updateSalary = async (req, res) => {
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
            const { salary } = req.body

            retirementInfo.salary = salary

            await retirementInfo.save();
            res.status(200).send({
                message: "Update successfully!",
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

const updateHousePrice = async (req, res) => {
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
            const { housePrice } = req.body

            retirementInfo.housePrice = housePrice

            await retirementInfo.save();
            res.status(200).send({
                message: "Update successfully!",
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
    updateRetirementInfo,
    updateInvestment,
    updateSalary,
    updateHousePrice
}