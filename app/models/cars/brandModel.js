module.exports = (sequelize, Sequelize) =>{
    const Brand = sequelize.define("brand",{
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type: Sequelize.INTEGER
        },
        carBrand:{
            allowNull:false,
            type: Sequelize.STRING(100)
        },
        logoUrl: {
            allowNull: false,
            type: Sequelize.STRING
        },
        logActivity: {
            defaultValue:"-",
            allowNull: true,
            type: Sequelize.STRING(64)
        },
        createdAt : {
            type: Sequelize.DATEONLY,
        }

    },{updatedAt: false,
        timestamps: true, tableName:"brand"});

    return Brand;
};