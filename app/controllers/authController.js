const db = require("../models");
const authConf = require("../config/authConfig");
const _ = require("lodash")
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


exports.findUser =  (req,res) => {
    const username = req.params.username;
    console.log(username)
    User.findOne({ where:{username}})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving general."
            });
        });
};

exports.changePassword = async (req, res) =>{

    const username = req.params.username;
    console.log(username)
    User.update({ password: bcrypt.hashSync(req.body.password, 8)}, {
        where : {username:username}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "password was updated"
                });
            } else {
                res.send({
                    message : `Cannot update password with username=${username}. username was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};
exports.signin = (req, res) =>{
  User.findOne({
      where: {
          username : req.body.username
      }
  })
      .then(user => {
          if (!user) {
              return res.status(203).send({ message: "User Not found." });
          }
          let passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
          );

          if (!passwordIsValid) {
              return res.status(203).send({
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

              let data = authorities[0]
              // console.log(data)

              res.status(200).send({
                  id: user.id,
                  username: user.username,
                  email: user.email,
                  roles: data,
                  accessToken: token
              });
          });

      })
      .catch(err => {
          res.status(500).send({ message: err.message });
      });

};