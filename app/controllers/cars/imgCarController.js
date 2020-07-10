const db = require('../../models');

const ImgCar = db.imgCar;
const Op = db.sequelize.Op;

exports.create =  async (req, res) => {

    const imgCar = new ImgCar({
        img1:req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        logActivity : req.body.logActivity,
        specificationId : req.body.specificationId

    });
    try {
        const saveImgCar = await imgCar.save();
        res.send(saveImgCar);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};


exports.findImg =  (req,res) => {
    const type = req.query.type;
    let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

    ImgCar.findAll({ where: condition })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving img."
            });
        });
};


exports.update = async (req, res) =>{

    const id = req.params.id;

    ImgCar.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "ImgCar was updated"
                });
            } else {
                res.send({
                    message : `Cannot update ImgCar with id=${id}. ImgCar was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    console.log(id)
    ImgCar.findOne({ where:{id}})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ImgCar."
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    ImgCar.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ImgCar was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete ImgCar with id=${id}. ImgCar was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};