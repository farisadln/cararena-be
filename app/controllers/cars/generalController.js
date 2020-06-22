const db = require('../../models');
const _ = require('lodash');

const Op = db.sequelize.Op;

const Review = db.review;
const General = db.general;
const Specification = db.specification;
const Brand = db.brand;
const ImgCar = db.imgCar;
exports.create =  async (req, res) => {

    const generalSpecs = new General({
        type:req.body.type,
        hargaOtr: req.body.hargaOtr,
        brandId : req.body.brandId


    });
    try {
        const saveGeneralSpecs = await generalSpecs.save();
        res.send(saveGeneralSpecs);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};


exports.findGeneral =  (req,res) => {
    const type = req.query.type;
    let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

    General.findAll({ where: condition })
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

exports.findCarReview =  (req, res) => {

    General.findAll({
            include : [{model: Review

            }]

        })
        .then(data => {

            let arr_response = [];
            for (i = 0; i < data.length; i++) {
                let objek_car = {};
                    objek_car["idMobil"] = data[i].id,
                    objek_car["type"] = data[i].type,
                    objek_car["name"] = data[i].review.name,
                    objek_car["review"] = data[i].review.review,
                    objek_car["createAt"] = data[i].review.createdAt

                arr_response.push(objek_car);

            }
            return  res.json(_.uniqWith(arr_response, _.isEqual));
            // res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving review."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    console.log(id)
    General.findOne({ where:{id}})
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


exports.findById =  (req, res) => {
    let id = req.params.id;
    console.log(id);
    General.findAll({where: {id},
                                include:[{model: Review}]
    })
        .then(data => {

            let arr_response = [];
            for (i = 0; i < data.length; i++) {
                let objek_car = {};

                    objek_car["id"] = data[i].id,
                        objek_car["type"] = data[i].type,
                    objek_car["name"] = data[i].review.name,
                    objek_car["review"] = data[i].review.review,
                    objek_car["createAt"] = data[i].review.createdAt

                arr_response.push(objek_car);

            }
            return  res.json(_.uniqWith(arr_response, _.isEqual));
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
    });
};


exports.update = async (req, res) =>{

    const id = req.params.id;

    General.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "General was updated"
                });
            } else {
                res.send({
                    message : `Cannot update General with id=${id}. General was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};

exports.delete = (req, res) => {
    const id = req.params.id;

    General.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "General was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete General with id=${id}. General was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};