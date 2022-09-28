const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header("token")
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        if (decode) {
            req.user = decode;
            next();
        } else {
            res.status(401).send("Haven't signed in yet!!")
        }
    } catch (error) {
        res.status(401).send("Haven't signed in yet!!")
    }
}

module.exports = {
    authenticate
}