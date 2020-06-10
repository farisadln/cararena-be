module.exports = (sequelize, Sequelize) =>{
    const CarImg = sequelize.define("imgCar",{
        id : {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        img1 : {
            defaultValue:"-",
            type: Sequelize.STRING
        },
        img2 : {
            defaultValue:"-",
            type: Sequelize.STRING
        },
        img3 : {
            defaultValue:"-",
            type: Sequelize.STRING
        },
        createdAt : {
            type: Sequelize.DATEONLY
        }

    },{updatedAt: false,
        timestamps: true, tableName:"imgCar"});

    return CarImg;
};