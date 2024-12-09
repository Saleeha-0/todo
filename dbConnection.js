require("dotenv").config();

const { Sequelize } = require("sequelize");

const connection = new Sequelize({

    host: process.env.DBHOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    dialect: process.env.DBDIALECT,
    port: process.env.DBPORT,

});

connection.authenticate().then(() => {
    console.log("connected to database");
}).catch((error) => {
    console.log("unabale to connect to server");
})

module.exports = connection;