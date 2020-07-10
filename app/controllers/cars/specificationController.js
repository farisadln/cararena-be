const db = require('../../models');


const Op = db.sequelize.Op;
const Specification = db.specification;




exports.create = async (req, res) => {

    const specification = new Specification ({
        kapasistasMesin: req.body.kapasistasMesin,
        jmlSilinder: req.body.jmlSilinder,
        jmlKatup: req.body.jmlKatup,
        drivetrain: req.body.drivetrain,
        maxTenaga: req.body.maxTenaga,
        jenisBahanBakar: req.body.jenisBahanBakar,
        kapasitasBahanBakar: req.body.kapasitasBahanBakar,
        banLebar: req.body.banLebar,
        banAspekRasio: req.body.banAspekRasio,
        suspensiDepan: req.body.suspensiDepan,
        suspensiBelakang: req.body.suspensiBelakang,
        tipeTransmisi: req.body.tipeTransmisi,
        tipeGearBox: req.body.tipeGearBox,
        dimensiPanjang: req.body.dimensiPanjang,
        dimanesiLebar: req.body.dimanesiLebar,
        dimensiTinggi: req.body.dimensiTinggi,
        dimensiSumbuRoda: req.body.dimensiSumbuRoda,
        dimensiGroundClearance: req.body.dimensiGroundClearance,
        dimensiBerat: req.body.dimensiBerat,
        dimensiKargo: req.body.dimensiKargo,
        jmlPintu: req.body.jmlPintu,
        jmlKuris: req.body.jmlKuris,
        logActivity : "fall",
        generalId : req.body.generalId

    });
    try {
        const saveSpecification = await specification.save();
        res.send(saveSpecification);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    console.log(id)
    Specification.findOne({ where:{id}})
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

exports.findAll = (req, res) => {

    Specification.findAll({

    })
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving specification"
            });
        });

};


exports.update = async (req, res) =>{

    const id = req.params.id;

    Specification.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "Specification was updated"
                });
            } else {
                res.send({
                    message : `Cannot update Specification with id=${id}. Specification was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Specification.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Specification was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete Specification with id=${id}. Specification was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};