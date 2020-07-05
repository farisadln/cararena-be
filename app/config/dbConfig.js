module.exports = {
    HOST: "localhost",
    USER: "rose",
    PASSWORD: "",
    DB: "cararena_be",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};