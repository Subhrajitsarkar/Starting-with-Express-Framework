let Sequelize = require('sequelize')
let sequelize = require('../utils/database')

let User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    phonenumber: {
        type: Sequelize.STRING,
        unique: true,
    }
})
module.exports = User