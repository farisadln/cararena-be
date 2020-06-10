module.exports = (sequelize, Sequelize) =>{
    const Specification = sequelize.define("specification",{
        id : {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        kapasistasMesin : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jmlSilinder : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jmlKatup : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        drivetrain : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        maxTenaga : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        maxTorsi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jenisBahanBakar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        kapasitasBahanBakar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        banLebar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        banAspekRasio : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        banDiameter : {
            defaultValue:"-",
            allowNull : true,
            type : Sequelize.STRING
        },
        suspensiDepan : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        suspensiBelakang : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        tipeTransmisi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        tipeGearBox : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiPanjang : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimanesiLebar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiTinggi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiSumbuRoda : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiGroundClearance : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiBerat : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        dimensiKargo : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jmlPintu : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jmlKuris : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        createdAt : {

            type: Sequelize.DATEONLY
        }

    },{updatedAt: false,
        timestamps: true, tableName:"specification"});

    return Specification;
};