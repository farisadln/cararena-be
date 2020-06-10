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
            type: Sequelize.STRING
        },
        logoUrl: {
            allowNull: false,
            type: Sequelize.STRING
        },
        createdAt : {
            type: Sequelize.DATEONLY,
        }

    },{updatedAt: false,
        timestamps: true, tableName:"brand"});

    return Brand;
};