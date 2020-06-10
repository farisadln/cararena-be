const jwt = require("jsonwebtoken");
const authConf = require("../config/authConfig");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.header["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message : "No token provided!"
        });
    }

    jwt.verify(token, authConf.secret, (err, decode) => {
        if (err) {
            return res.status(401).send({
                message : "Unauthorized!"
            });
        }
        req.userId = decode.id;
        next()
    })
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRole().then(role => {
            for (let i = 0; i < role.length; i++) {
                if (role[i].name === "admin") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
};
module.exports = authJwt;
