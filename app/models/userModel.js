module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id : {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: Sequelize.INTEGER(6)
  },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING(64)
    },
    password: {
      type: Sequelize.STRING
    }
  },
      {tableName:"user"}
      );

  return User;
};
