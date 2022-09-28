const { User } = require('../../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// sign in
const signIn = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({
        where: {
            username
        }
    })

    if (user) {
        if (user.isVerified === "true") {
            const isAuth = bcrypt.compareSync(password, user.password);
            if (isAuth) {
                const token = jwt.sign({
                    username: user.username,
                    email: user.email
                }, process.env.SECRET_KEY, { expiresIn: 60 * 1000 })
                res.status(200).send({
                    message: "Sign in successfully!",
                    token
                    });
            } else {
                res.status(500).send({
                    message: "Username or password is not valid!"
                });
            }
        } else {
            res.status(500).send({
                message: "Your account has not been verified yet!"
            });
        }
    } else {
        res.status(404).send({
            message: "Username or password is not valid!"
        });
    }
}

module.exports = {
    signIn
}