const db = require("../models");
const authConf = require("../config/authConfig");
const Sequelize = require('sequelize');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
  })
      .then(user => {
          if (req.body.role) {
              Role.findAll({
                  where: {
                      name: {
                          [Op.or]: req.body.role
                      }
                  }
              }).then(role => {
                  user.setRole(role).then(() => {
                      res.send({ message : "User was registered successfully!"})
                  });
              });
          } else {
              user.setRole([1]).then(() => {
                  res.send({ message: "User was registered successfully!" });
              });
          }
      }).catch(err => {
            res.status(500).send({ message: err.message });
  });
};

exports.signin = (req, res) =>{
  User.findOne({
      where: {
          username : req.body.username
      }
  })
      .then(user => {
          if (!user) {
              return res.status(404).send({ message: "User Not found." });
          }
          let passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
          );

          if (!passwordIsValid) {
              return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password!"
              });
          }

          let token = jwt.sign({ id: user.id}, authConf.secret, {
              expiresIn : 3600 // 1 jam
          });


          let authorities = [];
          user.getRole().then(role => {
              for (let i = 0; i < role.length; i ++) {
                  authorities.push("ROLE_" + role[i].name.toUpperCase());
              }
              res.status(200).send({
                  id: user.id,
                  username: user.username,
                  email: user.email,
                  accessToken: token
              });
          });
      })
      .catch(err => {
          res.status(500).send({ message: err.message });
      });
};