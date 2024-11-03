const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Expense = sequelize.define("expenses", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    category: Sequelize.STRING,
    description: Sequelize.STRING,
    amount: Sequelize.INTEGER,
});

module.exports = Expense;