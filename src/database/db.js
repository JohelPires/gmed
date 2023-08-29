const Sequelize = require('sequelize')

const sequelize = new Sequelize('gmed', 'postgres', '123', {
    dialect: 'postgres',
    host: 'localhost',
})

module.exports = sequelize
