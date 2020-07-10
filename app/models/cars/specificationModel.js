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
            type: Sequelize.STRING(100)
        },
        jmlSilinder : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        jmlKatup : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        drivetrain : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        maxTenaga : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        maxTorsi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        jenisBahanBakar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        kapasitasBahanBakar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        banLebar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        banAspekRasio : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        banDiameter : {
            defaultValue:"-",
            allowNull : true,
            type : Sequelize.STRING(100)
        },
        suspensiDepan : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        suspensiBelakang : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        tipeTransmisi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        tipeGearBox : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiPanjang : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimanesiLebar : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiTinggi : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiSumbuRoda : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiGroundClearance : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiBerat : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        dimensiKargo : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING
        },
        jmlPintu : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        jmlKuris : {
            defaultValue:"-",
            allowNull : true,
            type: Sequelize.STRING(100)
        },
        logActivity: {
            defaultValue:"-",
            allowNull: true,
            type: Sequelize.STRING(64)
        },
        createdAt : {

            type: Sequelize.DATEONLY
        }

    },{updatedAt: false,
        timestamps: true, tableName:"specification"});

    return Specification;
};