let Sequelize = require('sequelize')
let sequelize = new Sequelize('booking_app', 'root', 'password', {
    dialect: "mysql",
    host: "localhost",
})
module.exports = sequelize