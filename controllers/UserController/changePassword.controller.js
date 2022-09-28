const { User } = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// change password
const changePassword = async (req, res) => {
    const token = req.header("token")
    const { oldPassword, newPassword } = req.body
    const decode = jwt.verify(token, "full-house")
    email = decode.email;

    const user = await User.findOne({
        where: {
            email
        }
    });

    if (user) {
        const isAuth = bcrypt.compareSync(oldPassword, user.password);
        if (isAuth) {
            // generate a salt
            const salt = bcrypt.genSaltSync(10);
            // encrypt random string + password
            const hashPassword = bcrypt.hashSync(newPassword, salt);

            user.password = hashPassword
            await user.save();
            res.status(200).send({
                message: "Change password successfully!"
            });
        } else {
            res.status(500).send({
                message: "Incorrect password!"
            });
        }
    } else {
        res.status(500).send({
            message: "User does not exist!"
        });
    }
}

module.exports = {
    changePassword
}