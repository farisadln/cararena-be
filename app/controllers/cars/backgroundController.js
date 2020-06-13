const db = require("../../models");
const Background = db.background;
const Op = db.sequelize.Op;

exports.create = async (req,res)=>{

    const background = new Background ({
        url_img1: req.body.url_img1,
        url_img2: req.body.url_img2,
        url_img3: req.body.url_img3
    });
    try {
        const saveBackground = await background.save();
        res.send(saveBackground);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};

exports.findAll = (req,res)=>{
    const url_img1 = req.query.url_img1;
    let condition = url_img1 ? { url_img1: { [Op.like]: `%${url_img1}%` } } : null;


    Background.findAll({ where: condition  })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Backgrounds."
            });
        });

};



exports.update = async (req, res) =>{

    const id = req.params.id;

    Background.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "Background was updated"
                });
            } else {
                res.send({
                    message : `Cannot update Background with id=${id}. Background was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;


};


exports.delete = (req, res) => {
    const id = req.params.id;

    Background.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Background was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete Background with id=${id}. Background was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};