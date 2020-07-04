const db = require('../../models');

const _ = require('lodash');
const moment = require('moment');
const Sequelize = require('sequelize');


const General = db.general;
const Specification = db.specification;
const Brand = db.brand;
const ImgCar = db.imgCar;


const Ops = Sequelize.Op;
moment().format();

exports.create =  async (req, res) => {

    const brand = new Brand({
        id:req.body.id,
        carBrand: req.body.carBrand,
        logoUrl: req.body.logoUrl,

    });
    try {
        const saveBrand = await brand.save();
        res.send(saveBrand);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};

exports.findBrans = async (req,res) => {
    const carBrand = req.query.carBrand;
    let condition = carBrand ? { carBrand: { [Op.like]: `%${carBrand}%` } } : null;

    Brand.findAll({ where: condition })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving brand."
            });
        });
};

exports.findBransId = async (req,res) => {
    const id = req.params.id;
    console.log(id)
    Brand.findByPk(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving brand."
            });
        });
};

exports.findOne = (req,res) =>{
    const id = req.params.id;
    console.log(id)

    Brand.findAll({
        include:[{model:
            General ,
            where :{id}, include:
                [{model:
                    Specification,
                    include:
                        [{model:
                            ImgCar}]
                }]

        }]
    })
        .then(data => {
            let arr_response = [];
            for (i = 0; i < data.length; i++) {
                let objek_car = {};
                    objek_car["id"] = data[i].general.id,
                    objek_car["id_brand"] = data[i].id,
                    objek_car["car_brand"] = data[i].carBrand,
                    objek_car["logo_url"] = data[i].logoUrl,

                    objek_car["type"] = data[i].general.type,
                    objek_car["harga_otr"] = data[i].general.hargaOtr,
                    objek_car["createAt"] = data[i].general.createdAt,
                    objek_car["kapasistasMesin"] = data[i].general.specification.kapasistasMesin,
                    objek_car["jmlSilinder"] = data[i].general.specification.jmlSilinder,
                    objek_car["jmlKatup"] = data[i].general.specification.jmlKatup,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTenaga,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTorsi,
                    objek_car["jenisBahanBakar"] = data[i].general.specification.jenisBahanBakar,
                    objek_car["kapasitasBahanBakar"] = data[i].general.specification.kapasitasBahanBakar,
                    objek_car["suspensiDepan"] = data[i].general.specification.suspensiDepan,
                    objek_car["banAspekRasio"] = data[i].general.specification.banAspekRasio,
                    objek_car["banAspekRasio"] = data[i].general.specification.banDiameter,
                    objek_car["suspensiBelakang"] = data[i].general.specification.suspensiBelakang,
                    objek_car["tipeTransmisi"] = data[i].general.specification.tipeTransmisi,
                    objek_car["tipeGearBox"] = data[i].general.specification.tipeGearBox,
                    objek_car["dimensiPanjang"] = data[i].general.specification.dimensiPanjang,
                    objek_car["dimensiSumbuRoda"] = data[i].general.specification.dimensiSumbuRoda,
                    objek_car["dimensiGroundClearance"] = data[i].general.specification.dimensiGroundClearance,
                    objek_car["dimensiBerat"] = data[i].general.specification.dimensiBerat,
                    objek_car["dimensiKargo"] = data[i].general.specification.dimensiKargo,
                    objek_car["jmlPintu"] = data[i].general.specification.jmlPintu,
                    objek_car["jmlKuris"] = data[i].general.specification.jmlKuris,
                    objek_car["img1"] = data[i].general.specification.imgCar.img1,
                    objek_car["img2"] = data[i].general.specification.imgCar.img2,
                    objek_car["img3"] = data[i].general.specification.imgCar.img3

                arr_response.push(objek_car);


            }

            return  res.json(_.uniqWith(arr_response, _.isEqual));
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving brand with createAt = " + id
            });
        });
}

exports.findAllByDate =  (req, res) => {
    const createdAt = req.params.createdAt;

    let endDate = moment().subtract(0, 'days').toDate();
    let startDate = req.params.createdAt;

    
    
    Brand.findAll({
        include:[{model:
            General ,
            where :{
                createdAt:{
                    [Ops.between]:[startDate,endDate]
                }}, include:
                [{model:
                    Specification,
                    include:
                        [{model:
                            ImgCar}]
                }]

        }]
    })
        .then(data => {
            let arr_response = [];
            for (i = 0; i < data.length; i++) {
                let objek_car = {};
                    objek_car["id"] = data[i].general.id,
                    objek_car["id_brand"] = data[i].id,
                    objek_car["car_brand"] = data[i].carBrand,
                    objek_car["logo_url"] = data[i].logoUrl,
                    objek_car["type"] = data[i].general.type,
                    objek_car["harga_otr"] = data[i].general.hargaOtr,
                    objek_car["createAt"] = data[i].general.createdAt,
                    objek_car["kapasistasMesin"] = data[i].general.specification.kapasistasMesin,
                    objek_car["jmlSilinder"] = data[i].general.specification.jmlSilinder,
                    objek_car["jmlKatup"] = data[i].general.specification.jmlKatup,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTenaga,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTorsi,
                    objek_car["jenisBahanBakar"] = data[i].general.specification.jenisBahanBakar,
                    objek_car["kapasitasBahanBakar"] = data[i].general.specification.kapasitasBahanBakar,
                    objek_car["suspensiDepan"] = data[i].general.specification.suspensiDepan,
                    objek_car["banAspekRasio"] = data[i].general.specification.banAspekRasio,
                    objek_car["banAspekRasio"] = data[i].general.specification.banDiameter,
                    objek_car["suspensiBelakang"] = data[i].general.specification.suspensiBelakang,
                    objek_car["tipeTransmisi"] = data[i].general.specification.tipeTransmisi,
                    objek_car["tipeGearBox"] = data[i].general.specification.tipeGearBox,
                    objek_car["dimensiPanjang"] = data[i].general.specification.dimensiPanjang,
                    objek_car["dimensiSumbuRoda"] = data[i].general.specification.dimensiSumbuRoda,
                    objek_car["dimensiGroundClearance"] = data[i].general.specification.dimensiGroundClearance,
                    objek_car["dimensiBerat"] = data[i].general.specification.dimensiBerat,
                    objek_car["dimensiKargo"] = data[i].general.specification.dimensiKargo,
                    objek_car["jmlPintu"] = data[i].general.specification.jmlPintu,
                    objek_car["jmlKuris"] = data[i].general.specification.jmlKuris,
                    objek_car["img1"] = data[i].general.specification.imgCar.img1,
                    objek_car["img2"] = data[i].general.specification.imgCar.img2,
                    objek_car["img3"] = data[i].general.specification.imgCar.img3

                arr_response.push(objek_car);

                console.log(arr_response)
            }

            return  res.json(_.uniqWith(arr_response, _.isEqual));
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving brand with createAt = " + createdAt
            });
        });

};


exports.findAll = async (req,res) => {
    const brand = req.query.brand;
    let condition = brand ? { brand: { [Op.like]: `%${brand}%` } } : null;

    Brand.findAll({ where:condition,
        include:[{model:
            General,
            include:
                [{model:
                    Specification,
                    include:
                        [{model:
                            ImgCar}]
                }]

        }]

    })
        .then(data => {
            let arr_response = [];
            for (i = 0; i < data.length; i++) {
                let objek_car = {};
                objek_car["id"] = data[i].general.id,
                    objek_car["id_brand"] = data[i].id,
                    objek_car["car_brand"] = data[i].carBrand,
                    objek_car["logo_url"] = data[i].logoUrl,

                    objek_car["type"] = data[i].general.type,
                    objek_car["harga_otr"] = data[i].general.hargaOtr,
                    objek_car["createAt"] = data[i].general.createdAt,
                    objek_car["kapasistasMesin"] = data[i].general.specification.kapasistasMesin,
                    objek_car["jmlSilinder"] = data[i].general.specification.jmlSilinder,
                    objek_car["jmlKatup"] = data[i].general.specification.jmlKatup,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTenaga,
                    objek_car["maxTenaga"] = data[i].general.specification.maxTorsi,
                    objek_car["jenisBahanBakar"] = data[i].general.specification.jenisBahanBakar,
                    objek_car["kapasitasBahanBakar"] = data[i].general.specification.kapasitasBahanBakar,
                    objek_car["suspensiDepan"] = data[i].general.specification.suspensiDepan,
                    objek_car["banAspekRasio"] = data[i].general.specification.banAspekRasio,
                    objek_car["banAspekRasio"] = data[i].general.specification.banDiameter,
                    objek_car["suspensiBelakang"] = data[i].general.specification.suspensiBelakang,
                    objek_car["tipeTransmisi"] = data[i].general.specification.tipeTransmisi,
                    objek_car["tipeGearBox"] = data[i].general.specification.tipeGearBox,
                    objek_car["dimensiPanjang"] = data[i].general.specification.dimensiPanjang,
                    objek_car["dimensiSumbuRoda"] = data[i].general.specification.dimensiSumbuRoda,
                    objek_car["dimensiGroundClearance"] = data[i].general.specification.dimensiGroundClearance,
                    objek_car["dimensiBerat"] = data[i].general.specification.dimensiBerat,
                    objek_car["dimensiKargo"] = data[i].general.specification.dimensiKargo,
                    objek_car["jmlPintu"] = data[i].general.specification.jmlPintu,
                    objek_car["jmlKuris"] = data[i].general.specification.jmlKuris,
                    objek_car["img1"] = data[i].general.specification.imgCar.img1,
                    objek_car["img2"] = data[i].general.specification.imgCar.img2,
                    objek_car["img3"] = data[i].general.specification.imgCar.img3

                arr_response.push(objek_car);


            }
            //         res.json(data)
            return  res.json(_.uniqWith(arr_response, _.isEqual));
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving brand with brand "
            });
        });

};



exports.update = async (req, res) =>{

    const id = req.params.id;

    Brand.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "Brand was updated"
                });
            } else {
                res.send({
                    message : `Cannot update Brand with id=${id}. Brand was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};


exports.delete = (req, res) => {
    const id = req.params.id;

    Brand.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Brand was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete Brand with id=${id}. Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};