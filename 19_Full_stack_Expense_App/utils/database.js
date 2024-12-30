let Sequelize = require('sequelize');
let sequelize = new Sequelize('order', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;