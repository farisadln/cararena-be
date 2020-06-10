const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel")(sequelize, Sequelize);
db.role = require("../models/roleModel")(sequelize, Sequelize);
db.specification = require('./cars/specificationModel')(sequelize, Sequelize);
db.brand = require('./cars/brandModel')(sequelize, Sequelize);
db.imgCar = require('./cars/imgCarModel')(sequelize, Sequelize);
db.general = require('./cars/generalModel')(sequelize, Sequelize);
db.background = require('./cars/backgroundModel')(sequelize, Sequelize);
db.review = require('./cars/reviewCarModel')(sequelize, Sequelize);

// user relation
db.role.belongsToMany(db.user, {
    through: "userRole",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "userRole",
    foreignKey: "userId",
    otherKey: "roleId",
    as: "role"
});

// cars relation
db.brand.hasOne(db.general);
db.general.belongsTo(db.brand);


db.general.hasOne(db.specification);
db.specification.belongsTo(db.general);

db.general.hasOne(db.review);
db.review.belongsTo(db.general);

db.specification.hasOne(db.imgCar);

db.ROLE = ["user", "admin"];

module.exports = db;

